let id = document.getElementById('id');
let advice = document.getElementById('adviceP');
let button = document.getElementById('generate-ad');

function getAPI () {
    const api = fetch('https://api.adviceslip.com/advice');

    api
        .then (response => {
            return response.json();
        })
        .then (changeAdvice);
}

function changeAdvice(response) {
    id.textContent = `advice #${response.slip.id}`;
    advice.textContent = `${response.slip.advice}`
}

button.addEventListener('click', () => {
    getAPI();
})
     