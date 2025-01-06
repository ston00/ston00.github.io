async function dogImage() {
    var dogCarousel = document.getElementById('dogCarousel');
    fetch('https://dog.ceo/api/breeds/image/random/10')
        .then((res) => res.json())
        .then((res) => {
        for(let x = 0; x < 10; x++) {
            var imgSrc = res.message[x];
            var dogPic = document.createElement('img');    
            dogPic.setAttribute('src', imgSrc);
            dogCarousel.appendChild(dogPic);
        }
        simpleslider.getSlider();
        });
}
window.onload = dogImage; 

async function dogbuttons() {

    dogbreeds = fetch('https://dogapi.dog/api/v2/breeds')
        .then((res) => res.json())
        .then((res) => {
            var datalength = res.data;
            for(let x = 0; x < datalength.length; x++) {
            
            var breedName = datalength[x].attributes.name;
            //Button
            var diov = document.getElementById('dog-button');
            var button = document.createElement('button');
            diov.appendChild(button);
            button.setAttribute('class', 'dog-button');
            button.setAttribute('id', 'dog-button');
            var breedId = datalength[x].id;
            button.innerHTML = breedName;
            //button.getElementById('dog-button');
            // button.setAttribute('class', 'dog-button');
            // button.setAttribute('id', 'dog-button');
            button.setAttribute('onclick', `dogDescription('${breedId}')`);
            document.getElementById('dog-button').appendChild(button);

            }
        });
        await dogbreeds;
}

window.onload = dogbuttons;

function dogDescription(breedId) {
    fetch(`https://dogapi.dog/api/v2/breeds/${breedId}`)
        .then((res) => res.json())
        .then((res) => {
        
        //Description 
        var description = res.data.attributes.description;
        var name = res.data.attributes.name;
        var maxLife = res.data.attributes.life.max;
        var minLife = res.data.attributes.life.min;
        //Dog Info Box
        var dogBox = document.createElement("div");
        dogBox.setAttribute('class','description-box');
        dogBox.setAttribute('id', 'description-box');
        //Dog Info
        var dogName = document.createElement('h2');
        dogName.innerHTML = `Name: ` + name;
        var dogDescription = document.createElement('h3');
        dogDescription.innerHTML = `Desciption: ` + description;
        var dogMax = document.createElement('h3');
        dogMax.innerHTML = `Max: ` + maxLife;
        var dogMin = document.createElement('h3');
        dogMin.innerHTML = `Min: ` + minLife;
        document.getElementById('description-box').replaceWith(dogBox);
        //Appending header
        dogBox.appendChild(dogName);
        dogBox.appendChild(dogDescription);
        dogBox.appendChild(dogMax);
        dogBox.appendChild(dogMin);
    
    });
}

/*

Gas Price 
var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.collectapi.com/gasPrice/stateUsaPrice?state=WA");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("authorization", "2ViGtUYl0P5za7q3eEha9r:0303690PkPWN8nNsYyL1GG");

xhr.send(data);

*/

/*
var http = require("https");

var options = {
  "method": "GET",
  "hostname": "api.collectapi.com",
  "port": null,
  "path": "/gasPrice/stateUsaPrice?state=WA",
  "headers": {
    "content-type": "application/json",
    "authorization": "apikey your_token"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
*/