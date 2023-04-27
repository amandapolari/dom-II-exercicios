const main = document.getElementById('container');
let i = 5;

const adicionaItem = (event) => {
    const article = document.createElement('article');
    article.setAttribute('class', 'item');
    article.setAttribute('onclick', 'removeItem(event)');
    event.preventDefault();
    main.insertAdjacentElement('beforeend', article);
    article.innerHTML = i;
    i++;
};

const removeItem = (event) => {
    event.preventDefault();
    let elementoClicado = event.target;
    elementoClicado.remove();
};
