function displayAnimalGallery(animals) {
    var container = document.querySelector('.animal-gallery--animals');
    animals.map(animalDetails).forEach(container.appendChild, container);
}

function displayFeaturedAnimal(animal) {
    var container = document.querySelector('.featured-animal--info');

    container.querySelector('.featured-animal--name').appendChild(createTextNode(animal.name));
    container.querySelector('.featured-animal--location').appendChild(createTextNode(animal.location));
    container.querySelector('.featured-animal--age').appendChild(createTextNode(animal.age));
    container.querySelector('.featured-animal--common-name').appendChild(createTextNode(animal.commonName));

    var imageLink = createElement('a', 'featured-animal--link');
    imageLink.href = 'images/' + animal.image;

    var image = createElement('img', 'featured-animal--image');
    image.src = 'images/' + animal.image;
    imageLink.appendChild(image);

    container.querySelector('.featured-animal--image-container').appendChild(imageLink);
}

function displayAnimalAges(ages) {
    var container = document.querySelector('.animal-ages');
    var table = createElement('table', 'animal-ages--table');

    var thead = createElement('thead');
    table.appendChild(thead);

    var headingRow = createElement('tr');
    headingRow.appendChild(createElement('th', 'name', 'Name'));
    headingRow.appendChild(createElement('th', 'species', 'Species'));
    headingRow.appendChild(createElement('th', 'age', 'Age'));
    thead.appendChild(headingRow);

    var tbody = createElement('tbody');
    ages.map(ageDetails).forEach(tbody.appendChild, tbody);
    table.appendChild(tbody);

    container.appendChild(table);
}

function animalDetails(animal) {
    var element = createElement('article', 'animal');

    element.appendChild(createElement('h3', 'animal--name', animal.name));

    var imageLink = createElement('a', 'featured-animal--link');
    imageLink.href = 'images/' + animal.image;
    element.appendChild(imageLink);

    var image = createElement('img', 'animal--image');
    image.src = 'images/' + animal.image;
    imageLink.appendChild(image);

    var details = createElement('div', 'animal--details');
    details.appendChild(createLabelAndValue('animal--common-name', 'Common name', animal.commonName));
    details.appendChild(createLabelAndValue('animal--species', 'Species', animal.species));
    details.appendChild(createLabelAndValue('animal--location', 'Location', animal.location));
    details.appendChild(createLabelAndValue('animal--age', 'Age', animal.age));
    element.appendChild(details);

    return element;
}

function ageDetails(animal) {
    var row = document.createElement('tr');

    row.appendChild(createElement('td', 'name', animal.name));
    row.appendChild(createElement('td', 'species', animal.commonName));
    row.appendChild(createElement('td', 'age', animal.age));

    return row;
}


//
// Utilities
// 

function createElement(tagName, className, text) {
    var element = document.createElement(tagName);
    if (className) element.className = className;
    if (text) element.appendChild(createTextNode(text));
    return element;
}

function createTextNode(text) {
    return document.createTextNode(text);
}

function createLabelAndValue(className, label, text) {
    var element = createElement('div', className);

    element.appendChild(createElement('span', 'label', label));
    element.appendChild(createTextNode(' ')); // add some whitespace
    element.appendChild(createElement('span', 'value', text));

    return element;
}