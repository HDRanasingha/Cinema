import { searchMovies } from "@actions/movieData"
import { Movie } from "@lib/types"
import MovieCard from "./MovieCard";


const SearchResults = async({query}:{query:string}) => {
    let searchedMovies: Movie[] = [];

    searchedMovies = await searchMovies(query);
  
    return searchMovies.length === 0 ? (
    <div className="search-page">
        <h1 className="text-heading2-bold text-white">No results found</h1>
     
    </div>
  ) : (
    <div className="list">
        {searchedMovies.map((movie) =>(
            <MovieCard key={movie.id} movie={movie}/>

        ))}

    </div>



  )
}

export default SearchResults
