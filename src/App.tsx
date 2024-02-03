import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import WebsiteLayout from "./Layout/WebsiteLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";

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
          </Route>
          <Route path="/login" element={<LoginPage />} />
         
          </Routes>
      </>
    </BrowserRouter>
    </>
  );
}

export default App;
