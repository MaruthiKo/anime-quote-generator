const btnElement = document.querySelector(".btn");
const quoteTextElement = document.querySelector(".quote-text");
const animeNameElement = document.querySelector(".anime-name");
const printData = function(){
    quoteTextElement.innerHTML = "";
    animeNameElement.innerHTML = "";
    fetch("https://animechan.vercel.app/api/random")
    .then(res => res.json())
    .then(data => {
        quoteTextElement.innerHTML = `${data.quote}`
        animeNameElement.innerHTML = `Anime: ${data.anime}`
    })
    .catch(err => console.log(err))
}


btnElement.addEventListener("click",printData)