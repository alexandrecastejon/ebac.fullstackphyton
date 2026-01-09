import requests
import time
import csv
import random
import concurrent.futures
from bs4 import BeautifulSoup
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36",
    "Accept-Language": "en-US,en;q=0.9,pt-BR;q=0.8,pt;q=0.7",
}

MAX_THREADS = 6  # diminui para reduzir chance de bloqueio
REQUEST_TIMEOUT = 25

# Session com retry
session = requests.Session()
retry = Retry(
    total=5,
    backoff_factor=0.6,
    status_forcelist=[429, 500, 502, 503, 504],
    allowed_methods=["GET"],
)
adapter = HTTPAdapter(max_retries=retry)
session.mount("https://", adapter)
session.mount("http://", adapter)


def extract_movie_details(movie_link):
    time.sleep(random.uniform(0.2, 0.8))  # espaça mais as requisições

    try:
        r = session.get(movie_link, headers=headers, timeout=REQUEST_TIMEOUT)
        soup = BeautifulSoup(r.text, "html.parser")

        title = None
        date = None
        rating = None
        plot_text = None

        # título
        h1 = soup.find("h1")
        if h1:
            title = h1.get_text(strip=True)

        # data
        date_tag = soup.find("a", href=lambda href: href and "releaseinfo" in href)
        if date_tag:
            date = date_tag.get_text(strip=True)

        # nota (varia bastante no IMDB; tentamos algumas opções)
        rating_tag = soup.find("div", attrs={"data-testid": "hero-rating-bar__aggregate-rating__score"})
        if rating_tag:
            rating = rating_tag.get_text(strip=True)
        else:
            alt = soup.find("span", attrs={"data-testid": "hero-rating-bar__aggregate-rating__score"})
            if alt:
                rating = alt.get_text(strip=True)

        # sinopse
        plot_tag = soup.find("span", attrs={"data-testid": "plot-xs_to_m"}) or soup.find("span", attrs={"data-testid": "plot-l"})
        if plot_tag:
            plot_text = plot_tag.get_text(strip=True)

        if title and date and rating and plot_text:
            print(f"OK: {title} | {date} | {rating}")
            with open("movies.csv", "a", newline="", encoding="utf-8") as f:
                csv.writer(f).writerow([title, date, rating, plot_text])
        else:
            print(f"PARCIAL: {movie_link} (faltou algum campo)")

    except Exception as e:
        print(f"Erro ao processar {movie_link}: {e}")


def extract_movies(soup):
    # pega links de títulos dentro da página do chart
    links = soup.select('a[href^="/title/"]')
    movie_links = []
    for a in links:
        href = a.get("href", "")
        if "/title/" in href:
            base = "https://www.imdb.com" + href.split("?")[0]
            movie_links.append(base)

    # remove duplicados e limita
    movie_links = list(dict.fromkeys(movie_links))[:100]
    print("Total de links:", len(movie_links))

    threads = min(MAX_THREADS, len(movie_links))
    with concurrent.futures.ThreadPoolExecutor(max_workers=threads) as executor:
        executor.map(extract_movie_details, movie_links)


def main():
    start = time.time()

    # cria CSV do zero
    with open("movies.csv", "w", newline="", encoding="utf-8") as f:
        csv.writer(f).writerow(["title", "release_date", "rating", "plot"])

    url = "https://www.imdb.com/chart/moviemeter/"
    r = session.get(url, headers=headers, timeout=REQUEST_TIMEOUT)
    soup = BeautifulSoup(r.text, "html.parser")

    extract_movies(soup)

    print("Tempo total:", time.time() - start)


if __name__ == "__main__":
    main()