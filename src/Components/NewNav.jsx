import React from 'react'
import { useState,useEffect } from 'react'
import { BrowserRouter,NavLink,Routes,Route ,Link} from 'react-router-dom'
import { MobileView,BrowserView } from 'react-device-detect'
import logo1 from '../assets/logo11.ico'
import Home from './Home'
import LatestNews from './LatestNews'
import Science from './Science'
import Politics from './Politics'
import Health from './Health'
import Entertainment from './Entertainment'
import { Dropdown, DropdownItem } from "flowbite-react";
import Sports from './Sports'
import '../App.css'

const NewNav = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
    <BrowserRouter>
    <nav className="bg-gray-800 border-gray-200 dark:bg-gray-900 fixed w-screen">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={logo1} className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl text-white font-semibold whitespace-nowrap dark:text-white">DailyUpdates</span>
        </Link>
        <div className="flex md:order-2">
        <div className="relative hidden md:block">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search icon</span>
        </div>
        <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm outline-none text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search"/>
        </div>
        <MobileView>
        <div>
        <Dropdown label="&nbsp; Menu &nbsp;" dismissOnClick={false}>
        <DropdownItem>
        <NavLink to="/" className="px-3 py-2 text-sm font-medium text-gray-900 " exact="true" activeclassname="active">
        Home
        </NavLink>   
        </DropdownItem>
        <DropdownItem>
        {/* <NavLink to="/Latest-News" className="px-3 py-2 text-sm font-medium text-gray-900 " activeclassname="active">
        Latest News
        </NavLink>     */}
        </DropdownItem>
        <DropdownItem>
        <NavLink to="/Health" className=" px-3 py-2 text-sm font-medium text-gray-900 " activeclassname="active">
        Health
        </NavLink>    
        </DropdownItem>
        <DropdownItem>
        <NavLink to="/Entertainment" className="px-3 py-2 text-sm font-medium text-gray-900 " activeclassname="active">
        Entertainment
        </NavLink>    
        </DropdownItem>
        <DropdownItem>
        <NavLink to="/Science" className="px-3 py-2 text-sm font-medium text-gray-900 " activeclassname="active">
        Science
        </NavLink>    
        </DropdownItem>
        <DropdownItem>
        <NavLink to="/Business" className="px-3 py-2 text-sm font-medium text-gray-900 " activeclassname="active">
        Business
        </NavLink>    
        </DropdownItem>
        <DropdownItem>
        <NavLink to="/Sports" className="px-3 py-2 text-sm font-medium text-gray-900 " activeclassname="active">
        Sports
        </NavLink>    
        </DropdownItem>
        </Dropdown>
        </div>    
        </MobileView>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
        <div className="relative mt-3 md:hidden">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
        </div>
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <NavLink to="/" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" exact="true" activeclassname="active">
            Home
            </NavLink>
            {/* <NavLink to="/Latest-News" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" activeclassname="active">
            Latest News
            </NavLink> */}
            <NavLink to="/Health" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" activeclassname="active">
            Health
            </NavLink>
            <NavLink to="/Entertainment" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" activeclassname="active">
            Entertainment
            </NavLink>
            <NavLink to="/Science" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" activeclassname="active">
            Science
            </NavLink>
            <NavLink to="/Business" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" activeclassname="active">
            Business
            </NavLink>
            <NavLink to="/Sports" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" activeclassname="active">
            Sports
            </NavLink>
        </ul>
        </div>
        </div>
    </nav>
    <Routes>
        <Route path='/' element={<Home name="Home"/>}></Route>
        {/* <Route path='/Latest-News' element={<LatestNews name="Latest News"/>}></Route> */}
        <Route path='/Science' element={<Science name="Science News"/>}></Route>
        <Route path='/Health' element={<Health name="Health News"/>}></Route>
        <Route path='/Entertainment' element={<Entertainment name="Entertainment News"/>}></Route>
        <Route path='/Business' element={<Politics name="Business News"/>}></Route>
        <Route path='/Sports' element={<Sports name="Sports News"/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default NewNav
