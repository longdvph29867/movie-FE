import { Button, Space, Table, TableProps, message } from "antd";
import { useEffect, useState } from "react";
import { Genre } from "../../../types/genres";
import genreSevice from "../../../services/genreSevice";
import { Link } from "react-router-dom";

const GenreList = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  useEffect(() => {
    genreSevice
      .getAllGenre()
      .then((res) => setGenres(res.data))
      .catch((err) => console.error(err));
  }, []);

  const deleteGenre = async (id: string) => {
    try {
      await genreSevice.deleteGenre(id);
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
          <Button
            className="bg-yellow-400 hover:bg-yellow-600/95"
            type="default"
          >
            <a href={`/admin/genre/${recod.genreSlug}`}>Edit</a>
          </Button>
          <Button onClick={() => deleteGenre(recod._id)} type="primary" danger>
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <div className="mb-10 ml-2">
        <button className="px-3 py-1 rounded-md cursor-pointer text-white font-medium bg-green-500 hover:bg-green-300">
          <Link to="/admin/genres/add">Add new genre</Link>
        </button>
      </div>
      <Table columns={columns} dataSource={genres} rowKey={renderRowKey} />
    </div>
  );
};

export default GenreList;
