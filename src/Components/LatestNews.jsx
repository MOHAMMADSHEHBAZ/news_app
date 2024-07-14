import React from 'react'
import '../App.css'
const LatestNews = (props) => {
  return (
    <>
    <div className='flex align-center justify-center py-20'>
      <h1 className='text-gray-600 text-2xl font-bold'>{props.name}</h1>
    </div>
    </>
  )
}

export default LatestNews
