import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import AdminLayout from "./Layout/AdminLayout";
import GenreList from "./pages/Admin/Genre/GenreList";
import CreateGenre from "./pages/Admin/Genre/CreateGenre";
import DetailPage from "./pages/DetailPage/DetailPage";
import WebsiteLayout from "./Layout/WebsiteLayout";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/Login/LoginPage";
import ListPage from "./pages/ListPage/ListPage";
import PageBlog from "./pages/BlogPage/BlogPage";
import DashBoard from "./pages/Admin/DashBoard/DashBoard";
import UpdateGenre from "./pages/Admin/Genre/UpdateGenre";
import LoginLayout from "./Layout/LoginLayout";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import RegisterPage from "./pages/LoginPage/Register/RegisterPage";
import BookingPage from "./pages/BookingPage/BookingPage";
import Spinner from "./components/Spinner/Spinner";
import AdminListMovie from "./pages/Admin/Movie/AdminListMovie";
import AdminAddMovie from "./pages/Admin/Movie/AdminAddMovie";
import AdminUpdateMovie from "./pages/Admin/Movie/AdminUpdateMovie";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/movies" element={<ListPage />} />
            <Route path="/blog" element={<PageBlog />} />
            <Route path="/booking/:id" element={<BookingPage />} />
          </Route>
          <Route
            path="/login"
            element={<LoginLayout Component={LoginPage} />}
          />
          <Route
            path="/register"
            element={<LoginLayout Component={RegisterPage} />}
          />

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
          <Route
            path="/admin/movies"
            element={<AdminLayout Component={AdminListMovie} />}
          />
          <Route
            path="/admin/movies/add"
            element={<AdminLayout Component={AdminAddMovie} />}
          />
          <Route
            path="/admin/movies/update/:id"
            element={<AdminLayout Component={AdminUpdateMovie} />}
          />
        </Routes>
      </BrowserRouter>
      <Spinner />
    </>
  );
}

export default App;
