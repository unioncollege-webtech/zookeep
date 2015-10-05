Zookeep
=======

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/unioncollege-webtech/zookeep?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

Create a list of zoo animals using Objects and Arrays, and create a web page to
display their information.


Description
-----------

> _Please note: you will be doing your work on the `gh-pages` branch (see
instructions [below](#completing-and-submitting-the-assignment)).
If you clone the repository and have no files, remember to run `git checkout gh-pages`._

In this assignment, we’ll be building a homepage for a zoo. The homepage will
have several features, including a gallery of zoo animals, a “featured animal of
the week”, and a list of the animals sorted by their ages.

An “[index.html](./index.html)” file with basic styling has already been created
for you, as well as a file called “render-helpers.js” containing several 
predefined functions for displaying the information on the page.

You will create a new file with an array containing the animals’ information, 
and use various [array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods_2)
to sort, filter, and organize lists of animals, and display their information by 
calling the predefined functions.

### Create zoo.js with the `animals` array

Begin by creating a file called “zoo.js”. Inside “zoo.js”, declare a variable
called `animals`, which is an [Array] containing an [Object] for each of the 
[Animals](#animals) in the table below.

Each animal should be an Object that contains the following properties:

- `name`: a String with the animal’s name from the table below
- `commonName`: a String with the common name for the animal’s species
- `species`: a String with the animal’s official species name
- `location`: a String containing the area in the zoo where the animal resides
- `age`: a Number representing the animal’s age in years
- `image`: a String containing the file name for the animal’s image

For instance, the object for “Pip” the red river hog would be:
  
```javascript
{
  name: "Pip",
  commonName: "Red river hog",
  species: "Potamochoerus porcus",
  location: "Fagan Valley",
  age: 4,
  image: "Red_river_hog.jpg"
}
```

### Sort and display the animal gallery

Use [sort()][array.sort] to sort the `animals` array based on their `name`.

After the `animals` array is sorted, call the `displayAnimalGallery()` function,
passing in the (sorted) `animals` array. For example:

```javascript
displayAnimalGallery(animals);
```

Run `node test` to see if everything is working correctly so far, and also take
a look at “index.html” in a browser. If everything works correctly, you should
see a gallery of the zoo animals. Woot!

### Display the featured animal

The featured animal of the week is Taylor, the Swift fox. Use
[filter()][array.filter] to create a new array containing *only* Taylor, and 
store this array in a variable called `featured`. Use 
[bracket notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors#Bracket_notation)
(`featured[index]`) to retrieve the first (and only) array element, and pass it
to the `displayFeaturedAnimal()` function.

### Map, sort, and display animal ages

Use [map()][array.map] to create a new array containing **only** the animals’ 
`name`, `commonName` and `age`, and store the new array in a variable called
`ages`. Use [sort()][array.sort] to sort `ages` based on the animals’ age in 
ascending order (smallest to largest) . Call the
`displayAnimalAges()` function, passing in the `ages` array.


Animals
-------

| Name | Common Name | Species | Location | Age | Image |
|------|-------------|---------|----------|-----|-------|
| Mooney | Blue monkey | Cercopithecus mitis | Smith Jungle | 2 | Blue_monkey.jpg |
| Sami | Common squirrel monkey | Saimiri sciureus | Smith Jungle | 2 | Common_squirrel_monkey.jpg |
| Chester | Black howler monkey | Alouatta caraya | Smith Jungle | 5 | Black_howler_monkey.jpg |
| Scarborough | Scarlet macaw | Ara macao | Smith Jungle | 3 | Scarlet_macaw.jpg |
| Maverick | Tufted puffin | Fratercula cirrhata | Birai Aquarium | 2 | Tufted_puffin.jpg |
| Puck | Little penguin | Eudyptula minor | Birai Aquarium | 4 | Little_penguin.jpg |
| Tweed | Leafy sea dragon | Phycodurus eques | Birai Aquarium | 1| Leafy_seadragon.jpg |
| Taylor | Swift fox | Vulpes velox | Rodeheaver Desert | 9 | Swift_fox.jpg |
| Trip | Cape thick-knee | Burhinus capensus | Rodeheaver Desert | 5| Cape_thick-knee.jpg |
| Helios | Mantled guereza | Colobus guereza | Fagan Valley | 11 | Mantled_guereza.jpg |
| Asteria | Western lowland gorilla | Gorilla gorilla gorilla | Fagan Valley | 5 | Western_lowland_gorilla.jpg |
| Perses | Wolf's mona monkey | Cercopithecus wolfi | Fagan Valley | 10 | Wolfs_mona_monkey.jpg |
| Pip | Red river hog | Potamochoerus porcus | Fagan Valley | 4 | Red_river_hog.jpg |
| Skrytnaya | Amur leopard | Panthera pardus orientalis | Kond Cat Complex | 8 | Amur_leopard.jpg |
| Matadi | African lion | Panthera leo | Kond Cat Complex | 6 | African_lion.jpg |
| Kimani | Siberian tiger | Panthera tigris altaica | Kond Cat Complex | 9 | Siberian_tiger.jpg |
| Antipode | Polar bear | Ursus maritimus | Moser Canyon | 11 | Polar_bear.jpg |


Extra Credit Options
--------------------

1. There are 6 different exhibits at the zoo: Moser Canyon, Fagan Valley, Smith
Jungle, Kond Cat Complex, Birai Aquarium, and Rodeheaver Desert. Create a new
page, “exhibits.html”, that lists or displays a gallery containing the animals
for each exhibit.

2. Instead of using “resources/render-helpers.js” and “resources/style.css”,
write your own HTML, CSS and JavaScript to render the featured animal,
gallery, and animal ages listing. Be creative and be awesome.


Completing and submitting the assignment
----------------------------------------

- To begin, [**fork** this repository](https://guides.github.com/activities/forking/).
- [Create a new Cloud9 workspace](https://docs.c9.io/docs/setting-up-github-workspace) from your new repository.
  - Alternatively, you may [**clone**](http://gitref.org/creating/#clone) your new repository to your computer by
    running:

        git clone https://github.com/YOUR_GITHUB_USERNAME/zookeep

- After cloning (in Cloud9 or on your computer), check out the “**gh-pages**” branch by running:

        git checkout gh-pages

- Modify the files and [**commit**](http://gitref.org/basic/#commit) changes to complete your solution.
- Run `node test` to verify that all tests pass.
- [Push](http://gitref.org/remotes/#push)/sync the changes up to GitHub. Your assignment will now be visible at [http://YOUR_GITHUB_USERNAME.github.io/zookeep/](http://unioncollege-webtech.github.io/zookeep/).
- [Create a pull request](https://help.github.com/articles/creating-a-pull-request) on the original repository to turn in the assignment.
- [Create a separate branch](http://gitref.org/branching/#branch) for the extra credit options.

You are also welcome commit, push, and create a pull request **before** you’ve 
completed your solution. You can ask questions or request feedback there in your
pull request. Just mention `@barberboy` in your comments to get my attention.


References
----------

- [Array]
- [Object]
- [array.sort(compareFn)][array.sort] - sort the elements of an array based on 
  the provided comparison function
- [array.filter(testFn)][array.filter] - create a new array containing only the
  elements for which the test function returns `true`
- [array.map(mappingFn)][array.map] - create a new array containing the elements
  returned from the mapping function

[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
[array.filter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
[array.sort]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
[array.map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map


License
-------

[ISC](./LICENSE)
