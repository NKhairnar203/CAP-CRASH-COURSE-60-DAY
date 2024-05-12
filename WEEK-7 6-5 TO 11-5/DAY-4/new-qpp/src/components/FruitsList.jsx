import React from 'react'

const FruitsList = () => {
 
  let arr = ["apple","banana","mango"]
  return (
   <>
        <ul>
          {arr.map((ele)=>(
            <li>{ele}</li>
          ))}
        </ul>
   </>
  )
}

export default FruitsList
