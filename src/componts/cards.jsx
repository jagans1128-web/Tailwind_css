import React from 'react'
import user from "../userdata/data.json"

export const Cards = () => {
  return (
    <div className='grid grid-cols-1 justify-center ml-35 w-4/6 mx-auto md:grid-cols-3 md:gap-4 md:w-5/6 md:mx-auto md:ml-50  '>{
    user.map((datas)=>(
        <div className=''>
            <img  src={datas.img} className='h-50 w-50 border  transform  hover:scale-110 duration-100 hover:cursor-pointer rounded-2xl'></img>    
        <h1 className=' md:ml-10  md:pt-5 ml-15 pt-3 '>{datas.name}</h1>
        </div>   
    ))
    }</div>
  )
}
