import React from 'react';
import { Pagination } from 'antd';
import './../../assets/Css/customPagination.css'; // Import CSS trước JSX

const PageNavigation: React.FC = () => (
    <div className="pagination-container">
        <Pagination defaultCurrent={3}  total={220} showSizeChanger={false} />
    </div>
);

export default PageNavigation;