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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/blog" element={<PageBlog />} />
            <Route path="/blog-detail" element={<BlogDetailPage />} />
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
            path="/profile"
            element={<ProfileLayout Component={ProfileDetail} />}
          />
          <Route
            path="/profile/farovite-movie"
            element={<ProfileLayout Component={FavoritePage} />}
          />
          <Route
            path="/profile/rated-movies"
            element={<ProfileLayout Component={RatedPage} />}
          />
          <Route path="/verify-email/:token" element={<BlogPage />} />
          <Route
            path="/profile/change-password"
            element={<ProfileLayout Component={ChangePassword} />}
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
            path="/admin/genres/:genreSlug"
            element={<AdminLayout Component={UpdateGenre} />}
          />
          <Route
            path="/admin/users"
            element={<AdminLayout Component={UserList} />}
          />
          <Route
            path="/admin/users/add"
            element={<AdminLayout Component={CreateUser} />}
          />
          <Route
            path="/admin/users/:userId"
            element={<AdminLayout Component={UpdateUser} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
