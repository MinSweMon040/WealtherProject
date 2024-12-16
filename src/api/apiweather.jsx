import axios from "axios"
export const api=axios.create({
    baseURL:"https://api.openweathermap.org/data/2.5"

})
export const api_key="6f8ca31120d4341b497ed4f919168211"
//https://api.openweathermap.org/data/2.5/weather?q=Yangon&appid=6f8ca31120d4341b497ed4f919168211
//https://api.openweathermap.org/data/2.5/weather?q=London&appid=6f8ca31120d4341b497ed4f919168211
