import MovieListItem from './MovieListItem';
import TitleTheater from './TitleTheater';
import CategoriesTheater from './CategoriesTheater';

const MovieList = () => {
  return (
    <>
    {/* list movie */}
    <section className="py-16">
      <div className="container mx-auto">

      <TitleTheater/>
      <CategoriesTheater/>
         {/*  list ITEM movie */}
        <div className="grid gap-6 place-items-center lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 ">
        <MovieListItem/>
        </div>
      </div>
    </section>
    {/* end list movie */}
  </>
  
  )
}

export default MovieList
