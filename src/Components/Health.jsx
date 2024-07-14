import React from 'react'
import { useState,useEffect } from 'react';
import NewsBox from './NewsBox';
import MainFooter from './MainFooter';

const Health = (props) => {

  const[News,SetNews]= useState([]);

  const key = `ecfaf9eaaa8d40a5b5d769210f5ee616`;

  useEffect(()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${key}`;
    fetch(url).then(response=> response.json()).then(data=> SetNews(data.articles));
  },[])

  return (
    <>
    
    <div className='flex align-center justify-center pt-20 pb-5'>
      <h1 className='text-gray-600 text-2xl font-bold'>{props.name}</h1>
    </div>
    <div className='flex items-center justify-center'>
    <div className='grid grid-cols-1 gap-4 md:grid-cols-4'>
    {
      News.map((data,index)=>(
        <NewsBox key={index} title={data.title} description={data.description} url={data.url} img={data.urlToImage}/>
      )
    )
    }
    </div>
    </div>
    <MainFooter/>
    </>
  )
}

export default Health;
