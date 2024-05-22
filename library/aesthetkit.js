document.addEventListener('DOMContentLoaded', function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'library/json/abbreviation.json', true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            var abreviacoes = JSON.parse(xhr.responseText).abbreviation;
            aesthetkit(abreviacoes);
        } else {
            console.error('Erro ao carregar o arquivo JSON');
        }
    };
    xhr.send();
});

function aesthetkit(abv) {
    let flexElements = document.querySelectorAll(".flexc-");
    let gridElements = document.querySelectorAll(".gridc-");
    
    flexElements.forEach(elementFlex => {
        elementFlex.style.display = 'flex';
        elementFlex.style.justifyContent = 'center';
        elementFlex.style.alignItems = 'center';
    });
    gridElements.forEach(elementGrid => {
        elementGrid.style.display = 'grid';
        elementGrid.style.placeItems = 'center';
    });
    
    var elements = [];

    abv.forEach(abreviacao => {
        var elementos = document.querySelectorAll('[class*="' + abreviacao.abv + '"]');
        
        elementos.forEach(function(elemento) {
            let elementClass = elemento.classList;
            elementClass.forEach(classe => {
                if (classe.startsWith(abreviacao.abv)) {
                    let valor = classe.substring(abreviacao.abv.length).split('|').join(' ');
                    elemento.style[abreviacao.sig] = valor;
                }
            });
            elements.push(elemento);
        });
    });

    console.log('aesthetkit applied.');
}
