import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import AdminLayout from "./Layout/AdminLayout";

import DetailPage from "./pages/DetailPage";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import WebsiteLayout from "./Layout/WebsiteLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ListPage from "./pages/ListPage";
import PageBlog from "./pages/PageBlog";
import DashBoard from "./pages/Admin/DashBoard";
import GenreList from "./pages/Admin/genre/GenreList";
import CreateGenre from "./pages/Admin/genre/CreateGenre";
import UpdateGenre from "./pages/Admin/genre/UpdateGenre";
import ProfileLayout from "./Layout/ProfileLayout";
import InfoProfilePage from "./pages/InfoProfilePage";
import ChangePassword from "./pages/ChangePassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <>
          <Routes>
            <Route path="/" element={<WebsiteLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/detail" element={<DetailPage />} />
              <Route path="/list" element={<ListPage />} />
              <Route path="/blog" element={<PageBlog />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/profile"
              element={<ProfileLayout Component={InfoProfilePage} />}
            />
            <Route
              path="/profile/change-password"
              element={<ProfileLayout Component={ChangePassword} />}
            />
            {/* admin */}
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
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
