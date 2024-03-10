import { Button, Popconfirm, Space, Table, TableProps, message } from "antd";
import { useEffect, useState } from "react";
import { Genre } from "../../../types/genres";
import genreSevice from "../../../services/genreSevice";
import { Link } from "react-router-dom";
import { useLoading } from "../../../hooks/useSpinner";

const GenreList = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const { startSpinner, stopSpinner } = useLoading();
  useEffect(() => {
    fetchGenres();
  }, []);
  const fetchGenres = () => {
    startSpinner();
    genreSevice
      .getAllGenre()
      .then((res) => {
        stopSpinner();
        setGenres(res.data);
      })
      .catch((err) => {
        stopSpinner();
        console.error(err);
      });
  };
  const deleteGenre = async (id: string) => {
    startSpinner();
    try {
      await genreSevice.deleteGenre(id);
      stopSpinner();
      fetchGenres();
    } catch (error) {
      stopSpinner();
      message.error(error.response.data);
    }
  };

  const renderRowKey = (key: Genre) => key._id;
  const columns: TableProps<Genre>["columns"] = [
    {
      title: "Genre",
      dataIndex: "genreName",
      key: "genreName",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Quantity Movie",
      dataIndex: "quantityMovie",
      key: "quantityMovie",
      responsive: ["md"],
    },
    {
      title: "Action",
      key: "action",
      render: (recod: Genre) => (
        <Space size="middle">
          <Link to={`/admin/genres/${recod.genreSlug}`}>
            <Button className="bg-blue-600" type="primary">
              Edit
            </Button>
          </Link>
          <Popconfirm
            title="Delete genre"
            description="Are you sure you want to delete this genre?"
            onConfirm={() => deleteGenre(recod._id)}
            okType="default"
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <div className="px-4">
        <Link
          to="/admin/genres/add"
          className="inline-block text-white text-base font-semibold bg-green-500 py-2 px-2 rounded my-5"
        >
          <span>Add genre</span>
        </Link>
      </div>
      <Table
        pagination={false}
        columns={columns}
        dataSource={genres}
        rowKey={renderRowKey}
      />
    </div>
  );
};

export default GenreList;
