import React, { useState } from 'react'

const Form = ({fetchWeather}) => {
  // const indata=useRef('')
  // console.log(indata.current.value)
const [data,setdata]=useState('')

  return (
    <div className=' w-100 d-flex justify-content-center  mt-3'>
       <input type='text' value={data} onChange={(e)=>setdata(e.target.value)} className='form-control ms-5' placeholder='Enter your country.....'/>
 <input type='button' value="Search" onClick={()=>fetchWeather(data)} className='btn ms-2 me-5 bg-dark text-white '/>
 
 </div>
  )
}

export default Form