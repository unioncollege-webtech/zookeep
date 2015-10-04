function displayAnimalGallery(animals) {
    console.log(animals);

    var container = document.querySelector('.animal-gallery');

    animals.map(animalDetails).forEach(function(element) {
        container.appendChild(element);
    }, container);
}

function displayFeaturedAnimal(animal) {
    console.log(animal);
    var container = document.querySelector('.featured-animal');
    container.innerHTML += animal;
}

function displayAnimalAges(ages) {
    console.log(ages);
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

    container.appendChild(table);

    ages.map(ageDetails).forEach(function(details) {
        container.appendChild(details);
    });
}

function animalDetails(animal) {
    var element = document.createElement('article');

    var name = document.createElement('h3');
    name.className = 'name';
    name.appendChild(document.createTextNode(animal.name));
    element.appendChild(name);

    var image = document.createElement('img');
    image.className = 'image';
    image.src = 'images/' + animal.image;
    element.appendChild(image);

    var commonName = document.createElement('div');
    commonName.className = 'common-name';
    commonName.appendChild(document.createTextNode(animal.commonName));
    element.appendChild(commonName);

    var species = document.createElement('div');
    species.className = 'species';
    species.appendChild(document.createTextNode(animal.species));
    element.appendChild(species);

    var location = document.createElement('div');
    location.className = 'location';
    location.appendChild(document.createTextNode(animal.location));
    element.appendChild(location);

    var age = document.createElement('div');
    age.className = 'age';
    age.appendChild(document.createTextNode(animal.age));
    element.appendChild(age);

    return element;
}

function ageDetails(animal) {
    var row = document.createElement('tr');

    var name = document.createElement('td');
    name.className = 'name';
    name.appendChild(document.createTextNode(animal.name));
    row.appendChild(name);

    var commonName = document.createElement('td');
    commonName.className = 'common-name';
    commonName.appendChild(document.createTextNode(animal.commonName));
    row.appendChild(commonName);

    var age = document.createElement('td');
    age.className = 'age';
    age.appendChild(document.createTextNode(animal.age));
    row.appendChild(age);

    return row;
}