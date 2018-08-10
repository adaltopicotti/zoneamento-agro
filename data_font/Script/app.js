function getCultivarData() {
    const doc = document.querySelector('[zon-result]')
    const conteudo = document.getElementById('conteudo')
    conteudo.innerHTML = 'html'

}
   
function populateSelect() {
    populateMunicipio()            
    populateCultivar()
}
     
function populateCultivar() {
    // CREATE AN XMLHttpRequest OBJECT, WITH GET METHOD.
    var xhr = new XMLHttpRequest(), 
        method = 'GET',
        overrideMimeType = 'application/json',
        url = 'cultivar.json';        // ADD THE URL OF THE FILE.

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                
            // PARSE JSON DATA.
            var cultivares = JSON.parse(xhr.responseText);

            var ele = document.getElementById('cultivar');
            for (var i = 0; i < cultivares.length; i++) {
                // BIND DATA TO <select> ELEMENT.
                ele.innerHTML = ele.innerHTML +
                    '<option value="' + cultivares[i].id + '">' + cultivares[i].cultivar + '</option>';
            }
        }
    };
    xhr.open(method, url, true);
    xhr.send();
}
function populateMunicipio() {
    // CREATE AN XMLHttpRequest OBJECT, WITH GET METHOD.
    var xhr = new XMLHttpRequest(), 
        method = 'GET',
        overrideMimeType = 'application/json',
        url = 'pr.json';        // ADD THE URL OF THE FILE.

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                
            // PARSE JSON DATA.
            var municipio = JSON.parse(xhr.responseText);

            var ele = document.getElementById('municipio');
            for (var i = 0; i < municipio.length; i++) {
                // BIND DATA TO <select> ELEMENT.
                ele.innerHTML = ele.innerHTML +
                    '<option value="' + municipio[i].value + '">' + municipio[i].municipio + '</option>';
            }
        }
    };
    xhr.open(method, url, true);
    xhr.send();
}