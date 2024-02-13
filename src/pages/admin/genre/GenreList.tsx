import { Button, Space, Table, TableProps } from "antd";
import { useEffect, useState } from "react";
import { Genre } from "../../../types/genres";
import genreSevice from "../../../services/genreSevice";

const GenreList = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  useEffect(() => {
    genreSevice
      .getAllGenre()
      .then((res) => setGenres(res.data))
      .catch((err) => console.error(err));
  });

  const deleteGenre = (id: string) => {
    // genreSevice
    //   .deleteGenre(id)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.error(err));
    console.log(id);
  };

  const renderRowKey = (key: Genre) => key._id;
  const columns: TableProps<Genre>["columns"] = [
    {
      title: "Genre Name",
      dataIndex: "genreName",
      key: "genreName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "quantityMovie",
      dataIndex: "quantityMovie",
      key: "quantityMovie",
    },
    {
      title: "Action",
      key: "action",
      render: (recod) => (
        <Space size="middle">
          <Button
            className="bg-yellow-400 hover:bg-yellow-600/95"
            type="default"
          >
            <a href={`/genre/${recod.genreSlug}`}>Edit</a>
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
      <Table columns={columns} dataSource={genres} rowKey={renderRowKey} />
    </div>
  );
};

export default GenreList;