import React, { useState } from 'react'

const Filter = () => {
    const[colour , setcolour]= useState(1)

    return (
        <div>
            <section className=' my-10 py-3 w-3/6 mx-auto flex justify-around flex-col md:flex-row gap-2 '>

                <button className={` ${colour == 1 ? "bg-green-500 text-white" : ""} px-10 py-3 bordrer border rounded-full transform hover:scale-110 duration-100`} onClick={()=>setcolour(1)}>Latest</button>
                <button className={` ${colour == 2 ? "bg-green-500 text-white" : ""} px-10 py-3 bordrer border rounded-full transform hover:scale-110 duration-100` }onClick={()=> setcolour(2)}>Best Seller</button>
                <button className={` ${colour == 3 ? "bg-green-500 text-white" : ""} px-10 py-3 bordrer border rounded-full transform hover:scale-110 duration-100 `} onClick={()=> setcolour(3)}>Special</button>
            </section>

        </div>
    )
}

export default Filter