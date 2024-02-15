import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
// import ProfileLayout from "./Layout/ProfileLayout";
import AdminLayout from "./Layout/AdminLayout";
import GenreList from "./pages/admin/genre/GenreList";
import CreateGenre from "./pages/admin/genre/CreateGenre";
import DetailPage from "./pages/detailMovie/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<DetailPage />} />
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
          element={<AdminLayout Component={GenreList} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
