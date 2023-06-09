factEl = document.getElementById("fact")
sourceEl = document.getElementById("source")

fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en')
    .then(response => response.json())
    .then(data => {
        factEl.innerText = data.text
        sourceEl.innerText = "Source: " + data.source_url
    })
    .catch(error => console.error(error));