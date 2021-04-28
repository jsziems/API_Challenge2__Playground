const url = "https://api.nasa.gov/planetary/apod?api_key=";
//const api_key = config.NASA_API_KEY;
const api_key = "U5YCwar82d9GKNPxCGPTYasZE30KkEyD2glgTP35"

const fetchNASAData = async () => {
  try {
      console.log(`url is ${url}${api_key}`)
    const response = await fetch(`${url}${api_key}`);
    const data = await response.json();
    console.log("NASA APOD data", data);
    displayData(data);
  } catch (error) {
    console.log(error);
  }
};

const displayData = (data) => {
  document.getElementById("title").textContent = data.title;
  document.getElementById("date").textContent = data.date;
  document.getElementById("picture").src = data.hdurl;
  document.getElementById("explanation").textContent = data.explanation;
};

fetchNASAData();