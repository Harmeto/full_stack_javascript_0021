const newJokeBtn = document.getElementById("newJokeBtn");
const jokeElement = document.getElementById("joke");

newJokeBtn.addEventListener("click", () => {
  fetch("https://geek-jokes.sameerkumar.website/api?format=json")
    .then(response => response.json())
    .then(data => {
      jokeElement.innerHTML = data.joke;
    })
    .catch(e => console.log(e))
});