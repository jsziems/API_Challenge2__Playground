
const baseUrl = "https://api.nasa.gov/planetary/apod?api_key=";
const apiKey = "U5YCwar82d9GKNPxCGPTYasZE30KkEyD2glgTP35"
// const apiKey = "DEMO_KEY"
let url

// ToDo:  Should the display function be after getAndDisplayImage?  Should it be a 'const'?

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

    url = `${baseUrl}${apiKey}&date=${userDate}`
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            let photoDate = json.date
            console.log(photoDate)
            console.log(json.explanation)
            console.log(json.url)
            if (json.media_type == "image") {
                display(json.url)
            } else {
                // ToDo: Clear previous image?
                document.getElementById("message").innerHTML = 'Not a photograph';
            }
        })
    // .catch(() => { console.error("something went wrong") })

}


