import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import AdminLayout from "./Layout/AdminLayout";
import DetailBlog from "./pages/DetailBlog";
import GenreList from "./pages/Admin/Genre/GenreList";
import CreateGenre from "./pages/Admin/Genre/CreateGenre";
import DetailPage from "./pages/DetailPage/DetailPage";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import WebsiteLayout from "./Layout/WebsiteLayout";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ListPage from "./pages/ListPage/ListPage";
import PageBlog from "./pages/BlogPage/BlogPage";
import DashBoard from "./pages/Admin/DashBoard/DashBoard";
import UpdateGenre from "./pages/Admin/Genre/UpdateGenre";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/detail" element={<DetailPage />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/blog" element={<PageBlog />} />
            <Route path="/blog-detail" element={<DetailBlog />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/admin"
            element={<AdminLayout Component={DashBoard} />}
          />
          <Route
            path="/admin/genres"
            element={<AdminLayout Component={GenreList} />}
          />
          <Route
            path="/admin/genres/add"
            element={<AdminLayout Component={CreateGenre} />}
          />
          <Route
            path="/admin/genre/:genreSlug"
            element={<AdminLayout Component={UpdateGenre} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
