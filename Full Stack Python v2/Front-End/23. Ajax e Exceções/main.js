$(document).ready(function() {
    const username = "alexandrecastejon";
    const url = `https://api.github.com/users/${username}`;

    $.ajax({
        url: url,
        method: "GET",
        success: function(data) {
            $(".profile-avatar").attr("src", data.avatar_url);
            $(".profile-name").text(data.name);
            $(".profile-username").text(`@${data.login}`);
            $(".numbers-item:nth-child(1) h4").next().text(data.public_repos);
            $(".numbers-item:nth-child(2) h4").next().text(data.followers);
            $(".numbers-item:nth-child(3) h4").next().text(data.following);
            $(".profile-link").attr("href", data.html_url);
        },
        error: function(error) {
            console.error("Erro ao carregar dados do GitHub:", error);
        }
    });
});