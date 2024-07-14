import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';
import NewsBox from './NewsBox';
import MainFooter from './MainFooter';

const Home = () => {

    const[News,SetNews]= useState([]);

    const key = `d86b04d1b04241959d3122ba439f63f3`;

    useEffect(()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${key}`;
      fetch(url).then(response=> response.json()).then(data=> SetNews(data.articles));
    },[])

  return (
    <>
    <div className='flex items-center justify-center pt-24'>
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

export default Home
