import axios from "axios";

// https://api.themoviedb.org/3/movie/157336?api_key=dbb4033172456784aa6d956e7a843a7e&append_to_response=videos,images


const movieBaseUrl= 'https://api.themoviedb.org/3';
const api_key = "dbb4033172456784aa6d956e7a843a7e"

const getTrendingVideos = axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key);
const getMovieByGenreId = (id)=> axios.get("https://api.themoviedb.org/3/discover/movie?api_key=dbb4033172456784aa6d956e7a843a7e&with_genres=28"+id);
export default{
    
    getMovieByGenreId,
    getTrendingVideos,
    
}