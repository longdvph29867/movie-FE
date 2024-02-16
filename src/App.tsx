import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import WebsiteLayout from "./Layout/WebsiteLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";
import PageBlog from "./pages/PageBlog";
import DashBoard from "./pages/Admin/DashBoard";
import AdminLayout from "./Layout/AdminLayout";
import DetailBlog from "./pages/DetailBlog";

function App() {
  return (
    <>
      <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<WebsiteLayout/>}>
            <Route index element={<HomePage />} />
            <Route path="/detail" element={<DetailPage />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/blog" element={<PageBlog />} />
            <Route path="/blog-detail" element={<DetailBlog />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="admin" element={<AdminLayout/>}>
            <Route index element={<DashBoard />} />
          
          </Route>
          </Routes>
      </>
    </BrowserRouter>
    </>
  );
}

export default App;
