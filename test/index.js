/* globals animals */
var readFile = require('fs').readFile;
var assert = require('assert');

var test = require('./test');

readFile("./zoo.js", "utf-8", function(err, value) {

    test("zoo.js exists", function() {
        if (err) throw err;
    })

    test("zoo.js parses correctly", function() {
        assert(value, "zoo.js should not be empty.");

        eval(value);

        test("animals variable is defined in zoo.js", function() {
            assert(animals, "`animals` array should be defined in zoo.js");
            assert.equal(animals.length, 17, "`animals` array should contain all 17 animals.");

            var sorted = isSorted(animals, 'name')
            assert(sorted, "`animals` array should be sorted by animal name.");
        });

        test("displayAnimalGallery() is called correctly", function() {
            assert(sortedAnimals, "the function `displayAnimalGallery()` should be called");

            var sorted = isSorted(sortedAnimals, 'name')
            assert(sorted, "the animals array passed to `displayAnimalGallery()` should be sorted by name");
        });

        test("displayFeaturedAnimal() is called correctly", function() {
            assert(featuredAnimal, "the function `displayFeaturedAnimal()` should be called");

            assert.equal('Taylor', featuredAnimal.name, "the animal passed to `displayFeaturedAnimal()` should have the name 'Taylor'");
            assert.equal('Vulpes velox', featuredAnimal.species, "the animal passed to `displayFeaturedAnimal()` should be the species 'Vulpes velox'");
        });

        test("displayAnimalAges() is called correctly", function() {
            assert(sortedAges, "the function `displayAnimalAges()` should be called");

            var sorted = isSorted(sortedAges, 'age');
            assert(sorted, "the array passed to `displayAnimalAges()` should be sorted by age");

            var missingSpecies = isMissingProperty(sortedAges, 'species');
            var missingLocation = isMissingProperty(sortedAges, 'location');
            var missingImage = isMissingProperty(sortedAges, 'image');

            assert(missingSpecies, "the animals in the array passed to `displayAnimalAges()` should not have a `species` property");
            assert(missingLocation, "the animals in the array passed to `displayAnimalAges()` should not have a `location` property");
            assert(missingImage, "the animals in the array passed to `displayAnimalAges()` should not have a `image` property");
        });

    });

    test.report();

});


var sortedAnimals;

function displayAnimalGallery(animals) {
    sortedAnimals = animals;
}

var featuredAnimal;

function displayFeaturedAnimal(animal) {
    featuredAnimal = animal;
}

var sortedAges;

function displayAnimalAges(ages) {
    sortedAges = ages;
}

function isSorted(array, prop) {
    var sorted = true;
    array.reduce(function(prev, next) {
        if (prev[prop] > next[prop]) {
            sorted = false;
        }
        return next;
    });
    return sorted;
}

function isMissingProperty(array, prop) {
    var missingProp = true;
    array.forEach(function(el) {
        if (prop in el) {
            missingProp = false;
        }
    });
    return missingProp;
}