var animals = [
{
	name: "Mooney",
	commonName: "Blue monkey",
	species: "Cercopithecus mitis",
	location: "Smith Jungle",
	age: 2,
	image: "Blue_monkey.jpg"
},
{
	name: "Sami",
	commonName: "Common squirrel monkey",
	species: "Saimiri sciureus",
	location: "Smith Jungle",
	age: 2,
	image: "Common_squirrel_monkey.jpg"
},
{
	name: "Chester",
	commonName: "Black howler monkey",
	species: "Alouatta caraya",
	location: "Smith Jungle",
	age: 5,
	image: "Black_howler_monkey.jpg"
},
{
	name: "Scarborough",
	commonName: "Scarlet macaw",
	species: "Ara macao",
	location: "Smith Jungle",
	age: 3,
	image: "Scarlet_macaw.jpg"
},
{
	name: "Maverick",
	commonName: "Tufted puffin",
	species: "Fratercula cirrhata",
	location: "Birai Aquarium",
	age: 2,
	image: "Tufted_puffin.jpg"
},
{
	name: "Puck",
	commonName: "Little penguin",
	species: "Eudyptula minor",
	location: "Birai Aquarium",
	age: 4,
	image: "Little_penguin.jpg"
},
{
	name: "Tweed",
	commonName: "Leafy sea dragon",
	species: "Phycodurus eques",
	location: "Birai Aquarium",
	age: 1,
	image: "Leafy_seadragon.jpg"
},
{
	name: "Taylor",
	commonName: "Swift fox",
	species: "Vulpes velox",
	location: "Rodeheaver Desert",
	age: 9,
	image: "Swift_fox.jpg"
},
{
	name: "Trip",
	commonName: "Cape thick-knee",
	species: "Burhinus capensus",
	location: "Rodeheaver Desert",
	age: 5,
	image: "Cape_thick-knee.jpg"
},
{
	name: "Helios",
	commonName: "Mantled guereza",
	species: "Colobus guereza",
	location: "Fagan Valley",
	age: 11,
	image: "Mantled_guereza.jpg"
},
{
	name: "Asteria",
	commonName: "Western lowland gorilla",
	species: "Gorilla gorilla gorilla",
	location: "Fagan Valley",
	age: 5,
	image: "Western_lowland_gorilla.jpg"
},
{
	name: "Perses",
	commonName: "Wolf's mona monkey",
	species: "Cercopithecus wolfi",
	location: "Fagan Valley",
	age: 10,
	image: "Wolfs_mona_monkey.jpg"
},
{
	name: "Pip",
	commonName: "Red river hog",
	species: "Potamochoerus porcus",
	location: "Fagan Valley",
	age: 4,
	image: "Red_river_hog.jpg"
},
{
	name: "Skrytnaya",
	commonName: "Amur leopard",
	species: "Panthera pardus orientalis",
	location: "Kond Cat Complex",
	age: 8,
	image: "Amur_leopard.jpg"
},
{
	name: "Matadi",
	commonName: "African lion",
	species: "Panthera leo",
	location: "Kond Cat Complex",
	age: 6,
	image: "African_lion.jpg"
},
{
	name: "Kimani",
	commonName: "Siberian tiger",
	species: "Panthera tigris altaica",
	location: "Kond Cat Complex",
	age: 9,
	image: "Siberian_tiger.jpg"
},
{
	name: "Antipode",
	commonName: "Polar bear",
	species: "Ursus maritimus",
	location: "Moser Canyon",
	age: 11,
	image: "Polar_bear.jpg"
}];

function sortBy(propertyName) {
    return function(a, b) {
        if (a[propertyName] < b[propertyName]) {
            return -1;
        } else if (a[propertyName] > b[propertyName]) {
            return 1;
        } else {
            return 0;
        }
    };
}

function propertyEquals(propertyName, value) {
    return function(obj) {
        if (obj[propertyName] == value) {
            return true;
        }
        return false;
    };
}

function pick() {
    var properties = arguments;
    return function(obj) {
        var result = {};
        for (var i = 0; i < properties.length; i++) {
            result[properties[i]] = obj[properties[i]];
        }
        return result;
    };
}

// Display animal gallery (sorted by name)
animals.sort(sortBy('name'));
displayAnimalGallery(animals);


// Display featured animal
var featured = animals.filter(propertyEquals('name', 'Taylor'));
displayFeaturedAnimal(featured[0]);


// Display animal ages (sorted by age)
var ages = animals.map(pick('name', 'commonName', 'age'));
ages.sort(sortBy('age'));
displayAnimalAges(ages);