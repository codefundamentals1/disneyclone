import React, { useEffect, useReducer, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import GlobalApi from "../Services/GlobalApi";
const ImgBaseUrl = 'https://image.tmdb.org/t/p/original';
const screenwidth = window.innerWidth;
const Slider = () => {
    const [moviesList , setMovieslist] = useState([]);
    const elementref = useRef();
  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((resp) => {
      // console.log("Sloder movie")
      // console.log(resp.data.results);
      setMovieslist(resp.data.results);
    });
  };

  const sliderLeft = (element)=>{
    element.scrollLeft-=screenwidth-110;

  }
  const sliderRight = (element)=>{
    element.scrollLeft+=screenwidth-110;

  }

  return (
    <>
    <div>
    <FaChevronLeft className=" hidden md:block text-white text-[30px] mx-8 mt-[150px] absolute cursor-pointer" onClick={()=>sliderLeft(elementref.current)}/>
    <FaChevronRight className=" hidden md:block text-white text-[30px] mx-8 mt-[150px] absolute cursor-pointer right-0" onClick={()=>sliderRight(elementref.current)}/>

    <div className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth" ref={elementref}>
    {moviesList.map((item)=>(
        <img src={ImgBaseUrl+item.backdrop_path} alt="" 
        className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-lg hover:border-[4px] transition-all duration-150 ease-in border-gray-300 ' />

    ))}
    </div>
    </div>
    </>
  )
};

export default Slider;
