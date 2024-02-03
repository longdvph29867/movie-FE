import ListBlogItem from './ListBlogItem';

const ListBlog = () => {
  return (
    <div className="grid gap-5 mt-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-items-center">
     <ListBlogItem/>
     </div>
  )
}

export default ListBlog
