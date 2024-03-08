import { Button, Popconfirm, Space, Table, TableProps, message } from "antd";
import { useEffect, useState } from "react";
import { Genre } from "../../../types/genres";
import genreSevice from "../../../services/genreSevice";
import { Link } from "react-router-dom";

const GenreList = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  useEffect(() => {
    fetchGenres();
  }, []);
  const fetchGenres = () => {
    genreSevice
      .getAllGenre()
      .then((res) => setGenres(res.data))
      .catch((err) => console.error(err));
  };
  const deleteGenre = async (id: string) => {
    try {
      await genreSevice.deleteGenre(id);
      fetchGenres();
    } catch (error) {
      message.error(error.response.data);
    }
  };

  const renderRowKey = (key: Genre) => key._id;
  const columns: TableProps<Genre>["columns"] = [
    {
      title: "Genre Name",
      dataIndex: "genreName",
      key: "genreName",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Quantity Movie",
      dataIndex: "quantityMovie",
      key: "quantityMovie",
    },
    {
      title: "Action",
      key: "action",
      render: (recod: Genre) => (
        <Space size="middle">
          <Button className="bg-blue-600" type="primary">
            <a href={`/admin/genres/${recod.genreSlug}`}>Edit</a>
          </Button>
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
      <div className="mb-10 ml-2">
        <button className="px-3 py-1 rounded-md cursor-pointer text-white font-medium bg-green-600 hover:bg-green-500">
          <Link to="/admin/genres/add">Add new genre</Link>
        </button>
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
