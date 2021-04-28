const apiKey = "106CbbikkFWRCYKElnKQQMDFNgagC69TeLe5nAE2"

let resourceUrl = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=106CbbikkFWRCYKElnKQQMDFNgagC69TeLe5nAE2"


fetch(resourceUrl)
    .then(res => res.json())
    .then(json => {
        console.log(json)
        displayResults(json)
        
    })

const displayResults = (roverPhoto) => {
    console.log(roverPhoto[0].id)
}