const requestURL = "https://run.mocky.io/v3/c735a13f-b121-42c9-ae43-b4f7989b6b2b";
let xhr = new XMLHttpRequest();
xhr.open("GET",requestURL);
xhr.response.type = "json";

xhr.onload = function () {
    if (xhr.status === 200) {
        console.log("ok")
        let response = xhr.response;
        console.log(response);
        let utilisateur = response.theme;
        alert("Hello" + utilisateur.type + " " + utilisateur.fontSize);
    }
}

xhr.onprogress = function (event) {
    if (event.lengthComputable) {
        let charge = event.loaded;
        let total = event.total;
        console.log(charge / 1024 + "kilo octets (ko) reçus sur " + (total / 1024) + "ko");
    }
}

xhr.send();