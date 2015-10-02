function getJSON (path, callback) {
  var xhr = new XMLHttpRequest()
  xhr.open('get', path, true)
  xhr.onload = function () {
    var json = this.responseText
    var data = JSON.parse(json)
    callback(data)
  }
  xhr.send()
}
var container = document.querySelector('#content')
getJSON('data/data.json', function (response) {
  response.forEach(function (obj, idx, arr) {
    var section = document.createElement('section')
    var title = document.createElement('h2')
    var imgContainer = document.createElement('div')
    var img = document.createElement('img')
    var details = document.createElement('ul')
    var common = document.createElement('li')
    var species = document.createElement('li')
    var location = document.createElement('li')
    var age = document.createElement('li')

    title.innerHTML = obj.Name
    img.setAttribute('src', 'images/' + obj.Image)
    common.innerHTML = '<span>Common Name:</span> ' + obj['Common Name']
    species.innerHTML = '<span>Species:</span> ' + obj.Species
    location.innerHTML = '<span>Location:</span> ' + obj.Location
    age.innerHTML = '<span>Age:</span> ' + obj.Age

    details.appendChild(common)
    details.appendChild(species)
    details.appendChild(location)
    details.appendChild(age)
    imgContainer.appendChild(img)

    section.appendChild(title)
    section.appendChild(imgContainer)
    section.appendChild(details)

    container.appendChild(section)
  })
})
