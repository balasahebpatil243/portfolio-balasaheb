"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Work from "@/components/Work";
import { useEffect, useState } from "react";


export default function Home() {

const [isDarkMode, setIsDarkMode] = useState(false);

useEffect(()=>{
  if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
      setIsDarkMode(true)
  }else{
    setIsDarkMode(false)
  }
},[])

useEffect(()=>{
  if(isDarkMode){
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  }else{
    document.documentElement.classList.remove('dark');
    localStorage.theme = '';
  }
},[isDarkMode]) 

  return (
    <>
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    <Header isDarkMode={isDarkMode}/>
    <About isDarkMode={isDarkMode}/>
    <Expertise isDarkMode={isDarkMode}/>
    <Work isDarkMode={isDarkMode}/>
    <Contact isDarkMode={isDarkMode}/>
    <Footer isDarkMode={isDarkMode}/>
    </>
  );
}
