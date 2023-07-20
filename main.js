$(document).ready(function() {

    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');


        fetch(`https://api.github.com/users/danijoss`)
        .then(function(resposta){
            return resposta.json();
        })
        .then(function(json){
            nameElement.innerHTML = json.name;
            usernameElement.innerHTML = json.login;
            avatarElement.innerHTML = json.avatar_url;
            reposElement.innerHTML = json.repos_url;
            followersElement.innerHTML = json.followers;
            followingElement.innerHTML = json.following;
            linkElement.innerHTML = json.url;
        })
        
})
