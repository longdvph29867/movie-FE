import { useEffect, useState } from 'react';
import ListBlogItem from './ListBlogItem';
import { Movie } from '../../types/movies';
import movieServices from '../../services/moviesSevices';

const ListBlog = () => {
    
  const [listBlog, setListBlog] = useState<Movie[]>([]);
  useEffect(() => {
       movieServices.getAll()
      .then(response => response.data)
      .then(data => setListBlog(data.results))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <div className="grid gap-5 mt-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-items-center">
     {listBlog.slice(0,1).map((blog, index) => (
          <ListBlogItem key={index} blog={blog} />
        ))}
      </div>
  )
}

export default ListBlog
