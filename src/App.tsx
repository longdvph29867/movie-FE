import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import AdminLayout from "./Layout/AdminLayout";
import GenreList from "./pages/Admin/genre/GenreList";
import CreateGenre from "./pages/Admin/genre/CreateGenre";
import DetailPage from "./pages/DetailPage/DetailPage";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import WebsiteLayout from "./Layout/WebsiteLayout";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ListPage from "./pages/ListPage/ListPage";
import PageBlog from "./pages/BlogPage/BlogPage";
import DashBoard from "./pages/Admin/DashBoard/DashBoard";
import UpdateGenre from "./pages/Admin/genre/UpdateGenre";

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
