const d = document,
  joke = d.getElementById("joke"),
  jokeBtn = d.getElementById("jokeBtn");

async function generateJoke() {
  const config = { headers: { Accept: "application/json" } },
    res = await fetch("https://icanhazdadjoke.com", config),
    data = await res.json();

  joke.innerHTML = data.joke;
}

jokeBtn.addEventListener("click", generateJoke);

generateJoke();
