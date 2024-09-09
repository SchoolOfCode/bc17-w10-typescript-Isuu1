const container: HTMLElement | null =
  document.getElementById("quote-container");
const button: HTMLElement | null =
  document.getElementById("fetch-button");

interface JokeResponse {
  id: string;
  joke: string;
  status: number;
}

async function getQuote(): Promise<JokeResponse> {
  const res = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const data: JokeResponse = await res.json(); // Ensure the response is typed correctly
  return data;
}
if (button) {
  button.addEventListener("click", async function () {
    const jokeData = await getQuote();
    console.log(jokeData);
    if (container) {
      container.innerText = jokeData.joke; // Set the joke text
    }
  });
}
