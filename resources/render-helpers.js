function displayAnimalGallery(animals) {
    var container = document.querySelector('.animal-gallery--animals');

    animals.map(animalDetails).forEach(function(element) {
        container.appendChild(element);
    }, container);
}

function displayFeaturedAnimal(animal) {
    var container = document.querySelector('.featured-animal--info');

    var name = container.querySelector('.featured-animal--name');
    name.appendChild(document.createTextNode(animal.name));

    var location = container.querySelector('.featured-animal--location');
    location.appendChild(document.createTextNode(animal.location));

    var age = container.querySelector('.featured-animal--age');
    age.appendChild(document.createTextNode(animal.age));

    var commonName = container.querySelector('.featured-animal--common-name');
    commonName.appendChild(document.createTextNode(animal.commonName));

    var imageContainer = container.querySelector('.featured-animal--image-container');

    var image = document.createElement('img');
    image.className = 'featured-animal--image';
    image.src = 'images/' + animal.image;

    imageContainer.appendChild(image);
}

function displayAnimalAges(ages) {
    var container = document.querySelector('.animal-ages');
    var table = document.createElement('table');
    var headingRow = document.createElement('tr');

    var nameHeading = document.createElement('th');
    nameHeading.appendChild(document.createTextNode('Name'));
    headingRow.appendChild(nameHeading);
    
    var speciesHeading = document.createElement('th');
    speciesHeading.appendChild(document.createTextNode('Species'));
    headingRow.appendChild(speciesHeading);
    
    var ageHeading = document.createElement('th');
    ageHeading.appendChild(document.createTextNode('Age'));
    headingRow.appendChild(ageHeading);
    table.appendChild(headingRow);

    ages.map(ageDetails).forEach(function(details) {
        table.appendChild(details);
    });
    container.appendChild(table);

}

function animalDetails(animal) {
    var element = document.createElement('article');
    element.className = 'animal';
    element.appendChild(createElement('h3', 'animal--name', animal.name));

    var image = document.createElement('img');
    image.className = 'animal--image';
    image.src = 'images/' + animal.image;
    element.appendChild(image);

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
    row.appendChild(createElement('td', 'common-name', animal.commonName));
    row.appendChild(createElement('td', 'age', animal.age));

    return row;
}

function createLabelAndValue(className, label, text) {
    var element = createElement('div', className);
    element.appendChild(createLabel(label));
    element.appendChild(document.createTextNode(' '));
    element.appendChild(createElement('span', 'value', text));
    return element;
}

function createLabel(text) {
    return createElement('span', 'label', text);
}

function createElement(tagName, className, text) {
    var element = document.createElement(tagName);
    element.className = className;
    element.appendChild(document.createTextNode(text || ''));

    return element;
}
