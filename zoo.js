/* Bash script used to turn table into javascript object declarations:
sed -i 's/| /animals[] = {\n    name: \"/' Newfile.txt
sed -i 's/ | /\",\n    commonName: \"/' Newfile.txt
sed -i 's/ | /\",\n    species: \"/' Newfile.txt
sed -i 's/ | /\",\n    location: \"/' Newfile.txt
sed -i 's/ | /\",\n    age: /' Newfile.txt
sed -i 's/ | /,\n    image: \"/' Newfile.txt
sed -i 's/ |/\",\n};/' Newfile.txt

Tweed and Trip's age field is missing a space before the |, so those must be
fixed before running the script. The indices must be input manually after
the script. */

var animals = [];

animals.push({
    name: "Mooney",
    commonName: "Blue monkey",
    species: "Cercopithecus mitis",
    location: "Smith Jungle",
    age: 2,
    image: "Blue_monkey.jpg",
});
animals.push({
    name: "Sami",
    commonName: "Common squirrel monkey",
    species: "Saimiri sciureus",
    location: "Smith Jungle",
    age: 2,
    image: "Common_squirrel_monkey.jpg",
});
animals.push({
    name: "Chester",
    commonName: "Black howler monkey",
    species: "Alouatta caraya",
    location: "Smith Jungle",
    age: 5,
    image: "Black_howler_monkey.jpg",
});
animals.push({
    name: "Scarborough",
    commonName: "Scarlet macaw",
    species: "Ara macao",
    location: "Smith Jungle",
    age: 3,
    image: "Scarlet_macaw.jpg",
});
animals.push({
    name: "Maverick",
    commonName: "Tufted puffin",
    species: "Fratercula cirrhata",
    location: "Birai Aquarium",
    age: 2,
    image: "Tufted_puffin.jpg",
});
animals.push({
    name: "Puck",
    commonName: "Little penguin",
    species: "Eudyptula minor",
    location: "Birai Aquarium",
    age: 4,
    image: "Little_penguin.jpg",
});
animals.push({
    name: "Tweed",
    commonName: "Leafy sea dragon",
    species: "Phycodurus eques",
    location: "Birai Aquarium",
    age: 1,
    image: "Leafy_seadragon.jpg",
});
animals.push({
    name: "Taylor",
    commonName: "Swift fox",
    species: "Vulpes velox",
    location: "Rodeheaver Desert",
    age: 9,
    image: "Swift_fox.jpg",
});
animals.push({
    name: "Trip",
    commonName: "Cape thick-knee",
    species: "Burhinus capensus",
    location: "Rodeheaver Desert",
    age: 5,
    image: "Cape_thick-knee.jpg",
});
animals.push({
    name: "Helios",
    commonName: "Mantled guereza",
    species: "Colobus guereza",
    location: "Fagan Valley",
    age: 11,
    image: "Mantled_guereza.jpg",
});
animals.push({
    name: "Asteria",
    commonName: "Western lowland gorilla",
    species: "Gorilla gorilla gorilla",
    location: "Fagan Valley",
    age: 5,
    image: "Western_lowland_gorilla.jpg",
});
animals.push({
    name: "Perses",
    commonName: "Wolf's mona monkey",
    species: "Cercopithecus wolfi",
    location: "Fagan Valley",
    age: 10,
    image: "Wolfs_mona_monkey.jpg",
});
animals.push({
    name: "Pip",
    commonName: "Red river hog",
    species: "Potamochoerus porcus",
    location: "Fagan Valley",
    age: 4,
    image: "Red_river_hog.jpg",
});
animals.push({
    name: "Skrytnaya",
    commonName: "Amur leopard",
    species: "Panthera pardus orientalis",
    location: "Kond Cat Complex",
    age: 8,
    image: "Amur_leopard.jpg",
});
animals.push({
    name: "Matadi",
    commonName: "African lion",
    species: "Panthera leo",
    location: "Kond Cat Complex",
    age: 6,
    image: "African_lion.jpg",
});
animals.push({
    name: "Kimani",
    commonName: "Siberian tiger",
    species: "Panthera tigris altaica",
    location: "Kond Cat Complex",
    age: 9,
    image: "Siberian_tiger.jpg",
});
animals.push({
    name: "Antipode",
    commonName: "Polar bear",
    species: "Ursus maritimus",
    location: "Moser Canyon",
    age: 11,
    image: "Polar_bear.jpg",
});

animals.sort(function(a, b) {
    return a.name.localeCompare(b.name);
});

displayAnimalGallery(animals);

var featured = animals.filter(function(a) {
    return a.name == 'Taylor';
});

displayFeaturedAnimal(featured[0]);

var age = animals.map(function(a) {
    var obj = {};
    obj.name = a.name;
    obj.commonName = a.commonName;
    obj.age = a.age;
    return obj;
});

age.sort(function(a, b) {
    return a.age - b.age;
});

displayAnimalAges(age);