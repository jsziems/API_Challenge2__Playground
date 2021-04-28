//const apiKey = "106CbbikkFWRCYKElnKQQMDFNgagC69TeLe5nAE2" // Justin's key
const apiKey = "U5YCwar82d9GKNPxCGPTYasZE30KkEyD2glgTP35"
//let metadata = `https://api.nasa.gov/EPIC/api/natural/date/2019-05-30?api_key=${apiKey}`

//let metadata = `https://api.nasa.gov/planetary/apod?${apiKey}&start_date=2017-07-08&end_date=2017-07-10`
//let metadata = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2017-07-08&end_date=2017-07-10`

let metadata


const display = (imageUrl) => {
    console.log("in display")
    console.log(imageUrl)
    let image = document.getElementById('image');

    image.src = imageUrl;
}

function getAndDisplayImage() {
    //let metadata = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=2017-07-08&end_date=2017-07-10`
    

    console.log("in getAndDisplayImage")
    //var x = document.getElementById("myDate").value;
   // document.getElementById("demo").innerHTML = x;

    //metadata = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${x}`

    //TO DO:  CHANGE TO USING USER-PROVIDED DATE FOR START AND END DATES
    // THIS endpoint works.  changing start date to 7-10-17 breaks it
    //metadata = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=2017-07-08&end_date=2017-07-10`

    let start_date="2017-07-08"
    let end_date="2017-07-11"
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









let fetchImage = (identifier) => {
    fetch(`https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/epic_1b_${identifier}.png?api_key=${apiKey}`)
        .then(res => {
            if (res.ok) {
                console.log("we got an image")
            }
            else {
                console.log("things went wrong")
            }
        })
}

