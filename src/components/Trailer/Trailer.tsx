import TitleTheater from '../MovieList/TitleTheater';
import TrailerVideo from './TrailerVideo';
import ListBlog from './ListBlog';
import ActorList from './ActorList';
import TagList from './TagList';

const Trailer = () => {
  return (
    <>
    {/* 123 */}
    {/* trailer */}
    <section className="py-16 bg-[#06121e]">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10 xl:gap-16 lg:gap-12 lg:flex-row">
          <div className="lg:w-3/4">
            {/* trailer 123 */}
            <TitleTheater/>
            <TrailerVideo/>

            {/* new */}
            <div className="pt-16">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">LATEST NEWS</h3>
                <div className="text-sm text-[#abb7c4]">
                  VIEW ALL <i className="fa-solid fa-chevron-right" />
                </div>
              </div>
              {/* list blog */}
            
            <ListBlog/>
             
            </div>
            {/* new end */}

          </div>

          <div className="text-white lg:w-1/4">
            {/* list actor */}
          <ActorList/>
            {/* list actor end */}
            {/* list tag */}
           <TagList/>
            {/* list tag end */}
          </div>
        </div>
      </div>
    </section>
    {/* end trailer */}
  </>
  
  )
}

export default Trailer
