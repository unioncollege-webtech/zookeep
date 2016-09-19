//Define what an Animal is
function Animal(name, commonName, species, location, age, image) {
  this.name = name;
  this.commonName = commonName;
  this.species = species;
  this.location = location;
  this.age = age;
  this.image = image;
}

//Create the animals... So many animals...
var animals = [];

animals.push( new Animal("Mooney", "Blue monkey", "Cercopithecus mitis", "Smith Jungle", 2, "Blue_monkey.jpg"),
              new Animal("Sami", "Common squirrel monkey", "Saimiri sciureus", "Smith Jungle", 2, "Common_squirrel_monkey.jpg"),
              new Animal("Chester",	"Black howler monkey",	"Alouatta caraya",	"Smith Jungle",	5,	"Black_howler_monkey.jpg"),
              new Animal("Scarborough", "Scarlet macaw", "Ara macao", "Smith Jungle", 3, "Scarlet_macaw.jpg"),
              new Animal("Maverick",	"Tufted puffin",	"Fratercula cirrhata",	"Birai Aquarium",	2,	"Tufted_puffin.jpg"),
              new Animal("Puck",	"Little penguin",	"Eudyptula minor",	"Birai Aquarium",	4,	"Little_penguin.jpg"),
              new Animal("Tweed",	"Leafy sea dragon",	"Phycodurus eques",	"Birai Aquarium",	1,	"Leafy_seadragon.jpg"),
              new Animal("Taylor",	"Swift fox",	"Vulpes velox",	"Rodeheaver Desert",	9,	"Swift_fox.jpg"),
              new Animal("Trip",	"Cape thick-knee",	"Burhinus capensus",	"Rodeheaver Desert",	5,	"Cape_thick-knee.jpg"),
              new Animal("Helios",	"Mantled guereza",	"Colobus guereza",	"Fagan Valley",	11,	"Mantled_guereza.jpg"),
              new Animal("Asteria",	"Western lowland gorilla",	"Gorilla gorilla gorilla",	"Fagan Valley",	5,	"Western_lowland_gorilla.jpg"),
              new Animal("Perses",	"Wolf's mona monkey",	"Cercopithecus wolfi",	"Fagan Valley",	10,	"Wolfs_mona_monkey.jpg"),
              new Animal("Pip",	"Red river hog",	"Potamochoerus porcus",	"Fagan Valley",	4,	"Red_river_hog.jpg"),
              new Animal("Skrytnaya",	"Amur leopard",	"Panthera pardus orientalis",	"Kond Cat Complex",	8,	"Amur_leopard.jpg"),
              new Animal("Matadi",	"African lion",	"Panthera leo",	"Kond Cat Complex",	6,	"African_lion.jpg"),
              new Animal("Kimani",	"Siberian tiger",	"Panthera tigris altaica",	"Kond Cat Complex",	9,	"Siberian_tiger.jpg"),
              new Animal("Antipode",	"Polar bear",	"Ursus maritimus",	"Moser Canyon",	11,	"Polar_bear.jpg") );
//Duplicate animals into ages
var ages = animals.slice();

//animals into featured
var featured = animals.slice();

function sortBy(whatSort) {
  return function (objA, objB) {
    if(objA[whatSort] > objB[whatSort]) return 1;
    if (objA[whatSort] < objB[whatSort]) return -1;
    return 0;
  }
}

//Sort animals by name
animals.sort(sortBy('name'));

//Sort ages by age
ages.sort(sortBy('age'));


function propertyEquals(propName, value) {
  return function (object) {
    return object[propName] == value;
  }
}



//Filter animals by name Taylor
featured = featured.filter(propertyEquals('name', 'Taylor'));

function pick() {
  var args = Array.from(arguments);
  return function (obj) {
    var returnable = {};
    for (var i = 0; i < args.length; i++) {
      returnable[args[i]] = obj[args[i]];
    }
    return returnable;
  }
}

//Map all animal names and ages to an array
ages = ages.map(pick('name', 'commonName', 'age'));

displayAnimalGallery(animals);
displayFeaturedAnimal(featured[0]);
displayAnimalAges(ages);
