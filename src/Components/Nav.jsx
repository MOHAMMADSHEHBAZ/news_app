import React from 'react'
import { BrowserRouter,NavLink,Routes,Route } from 'react-router-dom'
import { BrowserView } from 'react-device-detect'
import logo1 from '../assets/logo11.ico'
import Home from './Home'
import LatestNews from './LatestNews'
import Science from './Science'
import Politics from './Politics'
import '../App.css'
const Nav = () => {
  return (
    <>
    <BrowserRouter>
    <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
          <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        </div>
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <BrowserView>
        <div className="flex flex-shrink-0 items-center">
          <img src={logo1} className="h-10 w-10" alt="" />
        </div>
        </BrowserView>
        <div className="hidden sm:ml-6 sm:block">  
          <div className="flex space-x-4"> 
            <NavLink to="/" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" exact activeClassName="active">
            Home
            </NavLink>
            <NavLink to="Latest-News" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" activeClassName="active">
            Latest News
            </NavLink>
            <NavLink to="Health" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" activeClassName="active">
            Health
            </NavLink>
            <NavLink to="Entertainment" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" activeClassName="active">
            Entertainment
            </NavLink>
            <NavLink to="Science" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" activeClassName="active">
            Science
            </NavLink>
            <NavLink to="Politics" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" activeClassName="active">
            Politics
            </NavLink>
          </div>
        </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        
        <div className="relative ml-3">
          
        <form className="max-w-md mx-auto">   
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block outline-none w-full p-2 ps-10 text-sm text-gray-900 rounded-lg" placeholder="Search" />
        </div>
        </form>

        </div>
        </div>
        </div>
        </div>  
        <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
        <NavLink to="/" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" exact activeClassName="active">
            Home
            </NavLink>
            <NavLink to="/Latest-News" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" activeClassName="active">
            Latest News
            </NavLink>
            <NavLink to="/Health" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" activeClassName="active">
            Health
            </NavLink>
            <NavLink to="/Entertainment" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" activeClassName="active">
            Entertainment
            </NavLink>
            <NavLink to="/Science" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" activeClassName="active">
            Science
            </NavLink>
            <NavLink to="/Politics" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" activeClassName="active">
            Politics
            </NavLink>
        </div>
        </div>
    </nav>
    <Routes>
        <Route path='/' element={<Home name="Home"/>}></Route>
        <Route path='/Latest-News' element={<LatestNews name="Latest News"/>}></Route>
        <Route path='/Science' element={<Science name="Science"/>}></Route>
        <Route path='/Politics' element={<Politics name="Politics"/>}></Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default Nav
