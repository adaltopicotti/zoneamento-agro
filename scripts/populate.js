
const load = (file, callback) => {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', `../${file}`, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
        // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);  
}

function init() {
    municipio()
    cultivar()
}

 function municipio() {
    const path = 'pr.json'
    load(path, function(response) {
        // Parse JSON string into object
        this.cultivar = document.getElementById('municipio')
        this.actual_JSON = JSON.parse(response);
        actual_JSON.forEach( data => {
            cultivar.innerHTML += `<option value='${data.value}'>${data.municipio}</option>`
    });
    })
}
function cultivar() {
    const path = 'cultivar.json'
    load(path, function(response) {
        // Parse JSON string into object
        this.cultivar = document.getElementById('cultivar')
        this.actual_JSON = JSON.parse(response);
        actual_JSON.forEach( data => {
            cultivar.innerHTML += `<option value='${data.id}'>${data.cultivar}</option>`
        })
    });
}
