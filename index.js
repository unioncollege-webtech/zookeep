var animals = [{
    name: "Mooney",
    common_name: "Blue monkey",
    species: "Cercopithecus mitis",
    location: "Smith Jungle",
    age: 2,
    image: "Blue_monkey.jpg"
}, {
    name: "Sami",
    common_name: "Common squirrel monkey",
    species: "Saimiri scirureus",
    location: "Smith Jungle",
    age: 2,
    image: "Common_squirrel_monkey.jpg"
}, {
    name: "Chester",
    common_name: "Black howler monkey",
    species: "Alouatta caraya",
    location: "Smith Jungle",
    age: 5,
    image: "Black_howler_monkey.jpg"
}, {
    name: "Scarborough",
    common_name: "Scarlet macaw",
    species: "Ara macao",
    location: "Smith Jungle",
    age: 3,
    image: "Scarlet_macaw.jpg"
}, {
    name: "Maverick",
    common_name: "Tufted puffin",
    species: "Fratercula cirrhata",
    location: "Birai Aquarium",
    age: 2,
    image: "Tufted_puffin.jpg"
}, {
    name: "Puck",
    common_name: "Little penguin",
    species: "Eudyptula minor",
    location: "Birai Aquarium",
    age: 4,
    image: "Little_penguin.jpg"
}, {
    name: "Tweed",
    common_name: "Leafy sea dragon",
    species: "Phycodurus eques",
    location: "Birai Aquarium",
    age: 1,
    image: "Leafy_seadragon.jpg"
}, {
    name: "Tayler",
    common_name: "Swift fox",
    species: "Vulpes velox",
    location: "Rodeheaver Desert",
    age: 9,
    image: "Swift_fox.jpg"
}, {
    name: "Trip",
    common_name: "Cap thick-knee",
    species: "Burhinus capensus",
    location: "Rodeheaver Desert",
    age: 5,
    image: "Cape_thick-knee.jpg"
}, {
    name: "Helios",
    common_name: "Mantled guereza",
    species: "Colobus guereza",
    location: "Fagan Valley",
    age: 11,
    image: "Mantled_guereza.jpg"
}, {
    name: "Asteria",
    common_name: "Western lowland gorilla",
    species: "Gorilla gorilla gorilla",
    location: "Fagain Valley",
    age: 5,
    image: "Western_lowland_gorilla.jpg"
}, {
    name: "Perses",
    common_name: "Wolf's mona monkey",
    species: "Cercopithecus wolfi",
    location: "Fagan Valley",
    age: 10,
    image: "Wolfs_mana_monkey.jpg"
}, {
    name: "Pip",
    common_name: "Red river hog",
    species: "Potamochoerus porcus",
    location: "Fagan Valley",
    age: 4,
    image: "Red_river_hog.jpg"
}, {
    name: "Skrytnaya",
    common_name: "Amur leopard",
    species: "Panthera pardus orientalis",
    location: "Kond Cat Complex",
    age: 8,
    image: "Amur_leopard.jpg"
}, {
    name: "Matadi",
    common_name: "African lion",
    species: "Panthera leo",
    location: "Kond Cat Complex",
    age: 6,
    image: "African_lion.jpg"
}, {
    name: "Kimani",
    common_name: "Siberian tiger",
    species: "Panthera tigris altaica",
    location: "Kond Cat Complex",
    age: 2,
    image: ".jpg"
}, {
    name: "Antipode",
    common_name: "Polar bear",
    species: "Ursus maritimus",
    location: "Moser Canyon",
    age: 11,
    image: "Polar_bear.jpg"
}];


var table = document.getElementById("main");
for (var i = 0; i < animals.length; i++) {

    var row = table.insertRow(-1);
    
    var animal_name = row.insertCell(0);
    var common_name = row.insertCell(1);
    var species = row.insertCell(2);
    var loc = row.insertCell(3);
    var age = row.insertCell(4);
    var image = row.insertCell(5);

    animal_name.innerHTML = animals[i].name;
    common_name.innerHTML = animals[i].common_name;
    species.innerHTML = animals[i].species;
    loc.innerHTML = animals[i].location;
    age.innerHTML = animals[i].age;
    image.innerHTML = animals[i].image;
}

