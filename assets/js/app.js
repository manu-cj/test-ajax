const requestURL = "https://run.mocky.io/v3/c735a13f-b121-42c9-ae43-b4f7989b6b2b";

let xhr = new XMLHttpRequest();

xhr.open("GET", requestURL);


xhr.responseType = "json";

xhr.onload = function() {
    if (xhr.status !== 200) {
        console.log('erreur');
    }
}

let response = xhr.response;
console.log(response);

xhr.send();