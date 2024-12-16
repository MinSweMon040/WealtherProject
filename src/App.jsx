import './App.css';
import Card from './components/Card';
import Form from './components/Form';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { api, api_key } from './api/apiweather';
import { useEffect, useState } from 'react';

function App() {
  const [wealdata,setwealdata]=useState({})
  const [countryname,setcountryname]=useState("Mandalay")

  const fetchWeather=async (data)=>{
    if (data !== undefined){
      setcountryname(data)

    }
    try {
      const res=await api.get(`/weather?q=${countryname}&appid=${api_key}`)
      setwealdata(res.data)
    } catch (error) {
      console.log(error);
    }
   
    
  }
  useEffect(()=>{
    fetchWeather()
  },[])
  return (
    <div className="  d-flex justify-content-center align-items-center min-vh-100 w-full">
   <div className='bg-light shadow-lg gap-4'> 
      <Form fetchWeather={fetchWeather}/>
      <Card wealdata={wealdata}/>
      </div>
    </div>
  );
}

export default App;
