import os
import time
import json
from random import random
from datetime import datetime
from sys import argv

import requests
import pandas as pd
import seaborn as sns


URL = "https://api.bcb.gov.br/dados/serie/bcdata.sgs.4392/dados"
CSV_PATH = "./taxa-cdi.csv"


def obter_ultimo_cdi(url: str) -> float | None:
    """Consulta a API do BCB e retorna o último valor de CDI como float.

    Retorna None caso não consiga obter o dado.
    """
    try:
        response = requests.get(url=url, timeout=10)
        response.raise_for_status()
        dados = json.loads(response.text)
        dado = dados[-1]["valor"]
        return float(dado)
    except requests.HTTPError:
        # Mantém o comportamento sugerido no enunciado (não quebra a execução)
        print("Dado não encontrado no BCB, continuando com 'None'.")
        return None
    except Exception as exc:
        print("Erro ao consultar o BCB, parando a execução.")
        raise exc


def garantir_csv_com_header(caminho: str) -> None:
    """Cria o arquivo CSV com header se ele ainda não existir."""
    if not os.path.exists(caminho):
        with open(file=caminho, mode="w", encoding="utf8") as fp:
            fp.write("data,hora,taxa\n")


def extrair_e_salvar_amostras(cdi_base: float | None, caminho_csv: str, n: int = 10) -> None:
    """Gera n amostras (uma por segundo) e salva em taxa-cdi.csv.

    A taxa salva é: cdi_base + (random() - 0.5)
    """
    garantir_csv_com_header(caminho_csv)

    for _ in range(n):
        data_e_hora = datetime.now()
        data = datetime.strftime(data_e_hora, "%Y/%m/%d")
        hora = datetime.strftime(data_e_hora, "%H:%M:%S")

        taxa = None if cdi_base is None else (cdi_base + (random() - 0.5))

        with open(file=caminho_csv, mode="a", encoding="utf8") as fp:
            fp.write(f"{data},{hora},{taxa}\n")

        time.sleep(1)


def gerar_grafico(caminho_csv: str, nome_arquivo: str) -> None:
    """Gera um gráfico (hora x taxa) e salva como PNG."""
    df = pd.read_csv(caminho_csv)

    # Remove linhas sem taxa para evitar erro no plot
    df = df.dropna(subset=["taxa"])

    grafico = sns.lineplot(x=df["hora"], y=df["taxa"])
    _ = grafico.set_xticklabels(labels=df["hora"], rotation=90)

    grafico.get_figure().savefig(f"{nome_arquivo}.png")


def main() -> None:
    if len(argv) < 2:
        raise SystemExit("Uso: python analise.py <nome-do-grafico>")

    nome_grafico = argv[1]

    cdi_base = obter_ultimo_cdi(URL)
    extrair_e_salvar_amostras(cdi_base=cdi_base, caminho_csv=CSV_PATH, n=10)
    gerar_grafico(caminho_csv=CSV_PATH, nome_arquivo=nome_grafico)

    print("Sucesso")


if __name__ == "__main__":
    main()
