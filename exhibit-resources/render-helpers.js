function listAnimalsInLocation(locations) {
  container = document.querySelector('.exhibit-gallery--locations');
  locations.forEach(printLocation);
}

function printLocation(location) {
  //Create the containing article for each location
  var aLocation = createElement("article", "location");
  //attach the overall location element to the exhibit container
  element = container.appendChild(aLocation);
  //create this particular location's title
  var thisLocation = createElement('h2', 'location--name');
  //set the header name
  thisLocation.textContent = location.name;
  //attach this particular location to the exhibit container
  element.appendChild(thisLocation);
  //now go through each animal in the location
  printLocationAnimals(location.animals);
}

function printLocationAnimals(animals) {
  ///create an alexis (animal) table
  var table = createElement("table", "animal--table");
  //Make table head for animal table
  var thead = createElement("thead");
  table.appendChild(thead);
  //Define headings
  var headingRow = createElement('tr');
  headingRow.appendChild(createElement('th', 'name', 'Name'));
  headingRow.appendChild(createElement('th', 'species', 'Species'));
  headingRow.appendChild(createElement('th', 'age', 'Age'));
  headingRow.appendChild(createElement('th', 'image', 'Image'))
  //add headings to the tablehead
  thead.appendChild(headingRow);
  //create table body
  var tbody = createElement('tbody');
  //
  animals.map(animalDetails).forEach(tbody.appendChild, tbody);
  //add table body to table
  table.appendChild(tbody);
  //add table to this location article
  element.appendChild(table);
}

function animalDetails(animal) {
  var row = createElement('tr');

  row.appendChild(createElement('td', 'name', animal.name));
  row.appendChild(createElement('td', 'species', animal.commonName));
  row.appendChild(createElement('td', 'age', animal.age));
  row.appendChild(createImageElement('td', 'image', createImage(animal)));

  return row;
}

function createImageElement(tagName, className, image) {
  var element = document.createElement(tagName);
  if (className) element.className = className;
  if (image) element.appendChild(image);
  return element;
}

function createImage(animal) {
  var image = createElement('img', 'animal--image');
  image.src = 'images/' + animal.image;

  return image;
}

function createElement(tagName, className, text) {
    var element = document.createElement(tagName);
    if (className) element.className = className;
    if (text) element.appendChild(createTextNode(text));
    return element;
}

function createTextNode(text) {
    return document.createTextNode(text);
}
