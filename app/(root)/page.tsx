
import { fetchGenreMovies } from '@actions/movieData';
import CategoryList from '@Components/CategoryList';
import Hero from '@Components/Hero';
import Navbar from '@Components/Navbar';
import { Genre } from '@lib/types';



const Home =async() => {
  const genres =await fetchGenreMovies()
  const example=genres.slice(0,2)

  console.log(example)

  

  return (
    <div>
     <Navbar />
     <Hero/>
     <div className='all-movies'>
     {genres.map((genre:Genre) => (
         <CategoryList key={genre.id} title={genre.name} movies={genre.movies} />
        ))}
    </div>
    </div>
  )
}

export default Home
