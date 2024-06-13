import Navbar from '@Components/Navbar'
import SearchResults from '@Components/SearchResults'


const Searchpage = ({ params }: { params: { query: string }}) => {
    const query = params.query
  return (
    <>
     <Navbar/>
     <SearchResults query={query}/>
   </>
  )
}

export default Searchpage
