import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import AdminLayout from "./Layout/AdminLayout";

import DetailPage from "./pages/DetailPage/DetailPage";
import WebsiteLayout from "./Layout/WebsiteLayout";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/Login/LoginPage";
import ListPage from "./pages/ListPage/ListPage";
import PageBlog from "./pages/BlogPage/BlogPage";
import DashBoard from "./pages/Admin/DashBoard/DashBoard";
import LoginLayout from "./Layout/LoginLayout";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import RegisterPage from "./pages/LoginPage/Register/RegisterPage";
import BookingPage from "./pages/BookingPage/BookingPage";
import Spinner from "./components/Spinner/Spinner";
import AdminListMovie from "./pages/Admin/Movie/AdminListMovie";
import AdminAddMovie from "./pages/Admin/Movie/AdminAddMovie";
import AdminUpdateMovie from "./pages/Admin/Movie/AdminUpdateMovie";
import GenreList from "./pages/Admin/Genres/GenreList";
import CreateGenre from "./pages/Admin/Genres/CreateGenre";
import UpdateGenre from "./pages/Admin/Genres/UpdateGenre";
import ProfileLayout from "./Layout/ProfileLayout";
import ProfileDetail from "./pages/ProfilePage/ProfileDetail/ProfileDetail";
import ChangePassword from "./pages/ProfilePage/ChangePassword/ChangePassword";
import BlogPage from "./pages/BlogPage/BlogPage";
import FavoritePage from "./pages/ProfilePage/FavoritePage/FavoritePage";
import RatedPage from "./pages/ProfilePage/RatedPage/RatedPage";
import BlogDetailPage from "./pages/BlogPage/BlogDetailPage";
import UserList from "./pages/Admin/Users/UserList";
import CreateUser from "./pages/Admin/Users/CreateUser";
import UpdateUser from "./pages/Admin/Users/UpdateUser";
import PurchasedTicketsPage from "./pages/ProfilePage/PurchasedTicketsPage/PurchasedTicketsPage";
import CelebrityPage from "./pages/CelebrityPage/CelebrityPage";
import DetailCelebrityPage from "./pages/DetailCelebrityPage/DetailCelebrityPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/movies" element={<ListPage />} />
            <Route path="/blogs" element={<PageBlog />} />
            <Route path="/blog-detail" element={<BlogDetailPage />} />
            <Route path="/booking/:id" element={<BookingPage />} />
            <Route path="/celebrity" element={<CelebrityPage />} />
            <Route path="/celebrity/:id" element={<DetailCelebrityPage />} />
          </Route>
          <Route path="/" element={<LoginLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>

          <Route path="/" element={<ProfileLayout />}>
            <Route path="/profile" element={<ProfileDetail />} />
            <Route
              path="/profile/purcharsed-tickets"
              element={<PurchasedTicketsPage />}
            />
            <Route path="/profile/farovite-movie" element={<FavoritePage />} />
            <Route path="/profile/rated-movies" element={<RatedPage />} />
            <Route path="/verify-email/:token" element={<BlogPage />} />
            <Route
              path="/profile/change-password"
              element={<ChangePassword />}
            />
          </Route>
          <Route path="/" element={<AdminLayout />}>
            <Route path="/admin" element={<DashBoard />} />
            <Route path="/admin/genres" element={<GenreList />} />
            <Route path="/admin/genres/add" element={<CreateGenre />} />
            <Route path="/admin/genres/:genreSlug" element={<UpdateGenre />} />
            <Route path="/admin/movies" element={<AdminListMovie />} />
            <Route path="/admin/movies/add" element={<AdminAddMovie />} />
            <Route
              path="/admin/movies/update/:id"
              element={<AdminUpdateMovie />}
            />
            <Route path="/admin/users" element={<UserList />} />
            <Route path="/admin/users/add" element={<CreateUser />} />
            <Route path="/admin/users/:userId" element={<UpdateUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Spinner />
    </>
  );
}

export default App;
