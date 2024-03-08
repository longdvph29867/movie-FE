import { useEffect, useState } from "react";
import userService from "../../../services/userSevice";
import { Button, Popconfirm, Space, Table, TableProps, message } from "antd";
import { Link } from "react-router-dom";
import { User } from "../../../types/users";

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await userService.getAllUser();
      setUsers(response.data.results);
    } catch (error) {
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
          <Button className="bg-blue-600" type="primary">
            <a href={`/admin/users/${recod.id}`}>Edit</a>
          </Button>
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
    <div className="mt-20">
      <div className="mb-10 ml-2">
        <button className="px-3 py-1 rounded-md cursor-pointer text-white font-medium bg-green-600 hover:bg-green-500">
          <Link to="/admin/users/add">Add new user</Link>
        </button>
      </div>
      <Table
        columns={columns}
        dataSource={users}
        pagination={false}
        rowKey={renderRowKey}
      />
    </div>
  );
};

export default UserList;
