import { useEffect, useState } from "react";
import userService from "../../../services/userSevice";
import { Button, Popconfirm, Space, Table, TableProps, message } from "antd";
import { Link } from "react-router-dom";
import { User } from "../../../types/users";
import { useLoading } from "../../../hooks/useSpinner";

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const { startSpinner, stopSpinner } = useLoading();
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    startSpinner();
    try {
      const response = await userService.getAllUser();
      stopSpinner();
      setUsers(response.data.results);
    } catch (error) {
      stopSpinner();
      message.error(error.response.data.message);
    }
  };

  const deleteUser = async (id: string) => {
    try {
      await userService.deleteUser(id);
      fetchUsers();
    } catch (error) {
      message.error(error.response.data.message);
    }
  };

  const renderRowKey = (key: User) => key.id;
  const columns: TableProps<User>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: string) => <p className="font-bold">{text}</p>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Action",
      key: "action",
      render: (recod: User) => (
        <Space size="middle">
          <Link to={`/admin/users/${recod.id}`}>
            <Button className="bg-blue-600" type="primary">
              Edit
            </Button>
          </Link>
          <Popconfirm
            title="Delete user"
            description="Are you sure you want to delete this user?"
            onConfirm={() => deleteUser(recod.id)}
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
    <>
      <div className="px-4">
        <Link
          to="/admin/users/add"
          className="inline-block text-white text-base font-semibold bg-green-500 py-2 px-2 rounded my-5"
        >
          <span>Add user</span>
        </Link>
      </div>
      <Table
        columns={columns}
        dataSource={users}
        pagination={false}
        rowKey={renderRowKey}
      />
    </>
  );
};

export default UserList;
