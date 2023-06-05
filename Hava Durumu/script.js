const url = 'https://api.openweathermap.org/data/2.5/'
const key = '98eb9746feb48221676e39a5716c05e5'


const setQuery =  (e) => {
if(e.keyCode =='13' )  // keyCode ' un 13 e eşit olması enter'a tıklanıldığında demek
getResult(searchBar.value)
}

const getResult = (cityName) => {
let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
searchBar.value = "" // burda değer girilip enterkandıktan sonra inputa girilen değeri siliyor

fetch(query)
.then(weather => {
    return weather.json()
})
.then(displayResult)
}

const displayResult = (result) => {
console.log(result)

let city = document.querySelector('.city')
city.innerText = `${result.name}, ${result.sys.country}`

let temp = document.querySelector('.temp')
temp.innerText = `${Math.round(result.main.temp)}°C `

let desc = document.querySelector('.desc')
desc.innerText = `${(result.weather[0].description)}`

let minmax = document.querySelector('.minmax')
minmax.innerText = `${Math.round(result.main.temp_min)}°c / ${Math.round(result.main.temp_max)}°c`

}

const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress', setQuery)  // bu iki kodu en üstte yazınca hata veriyor


