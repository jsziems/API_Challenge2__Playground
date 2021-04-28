const apiKey = "U5YCwar82d9GKNPxCGPTYasZE30KkEyD2glgTP35"
let metadata

const display = (imageUrl) => {
    console.log("in display")
    console.log(imageUrl)
    let image = document.getElementById('image');

    image.src = imageUrl;
}

function getAndDisplayImage() {
    console.log("in getAndDisplayImage")
    let userDate = document.getElementById("user-date").value;
    document.getElementById("display-date").innerHTML = userDate;

    //TO DO:  CHANGE TO USING USER-PROVIDED DATE FOR START AND END DATES

    // THIS endpoint works.  changing either date, using the date parameter, or
    // omitting the dates breaks it
    //metadata = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=2017-07-08&end_date=2017-07-10`

    // Also, THIS works as long as end-date is 7-10 or 7-11.  Haven't tested beyond that.
    // let start_date = "2017-07-08"
    // let end_date = "2017-07-11"
    // metadata = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${start_date}&end_date=${end_date}`

    let start_date = "2017-07-08"
    let end_date = "2017-07-11"
    metadata = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${start_date}&end_date=${end_date}`
    
    console.log(metadata)
    fetch(metadata)
        .then(res => res.json())
        .then(json => {
            let photoDate = json[2].date
            console.log(photoDate)
            console.log(json[2].explanation)
            console.log(json[2].url)

            display(json[2].url)
        })
        .catch(() => { console.error("something went wrong") })

}


