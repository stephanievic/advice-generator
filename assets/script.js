
function getAPI () {
    const api = fetch('https://api.adviceslip.com/advice');

    api
        .then (response => {
            return response.json();
        })
        .then (response => {
            console.log (response);
            changeAdvice();
        });
}
     