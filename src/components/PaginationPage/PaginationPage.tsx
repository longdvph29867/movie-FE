import { Pagination } from "antd";
import "./paginationPage.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
type Porps = {
  current: number;
  total: number;
  pageSize: number;
  theme?: string;
};
const PaginationPage = ({ current, total, pageSize, theme }: Porps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [currentPage, setCurrentPage] = useState(current);
  const onChange = (page: number) => {
    setCurrentPage(page);
    params.set("page", page.toString());
    navigate(location.pathname + "?" + params.toString());
  };
  useEffect(() => {
    setCurrentPage(current);
  }, [current]);

  return (
    <div
      className={`my-4 flex justify-center ${
        theme === "dark" ? "pagination-dark" : ""
      }`}
    >
      <Pagination
        current={currentPage}
        total={total}
        pageSize={pageSize}
        onChange={onChange}
      />
    </div>
  );
};

export default PaginationPage;
