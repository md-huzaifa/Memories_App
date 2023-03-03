import React from "react";
import {
  Badge,
  Button,
  Card,
  Dropdown,
  Indicator,
  Navbar
} from "react-daisyui";
import { Link } from "react-router-dom";
import Avatar from "../../assets/avatar.jpg";
import Logo from "../../assets/memories.png";

const NabBar: React.FC = () => {
  type User = {
    name: string;
    img: string;
  };

  const user = null
  return (
    <div className="bg-teal-100 flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <Navbar>
        <div className="flex-1">
          <Button className="text-3xl normal-case" color="ghost">
            Memories
          </Button>
        </div>
        <div className="flex-none">
          {user ? (
            <Dropdown vertical="end">
              <Button color="ghost" className="avatar" shape="circle">
                <div className="w-10 rounded-full">
                  <img src={Avatar} />
                </div>
              </Button>
              <Dropdown.Menu className="w-52 menu-compact">
                <Dropdown.Item>{user}</Dropdown.Item>
                <Dropdown.Item>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Button color="info" variant="outline" size="sm">
              <Link
                to="/auth"
                className="text-2xl font-semibold hover:text-blue-600"
              >
                Sign in
              </Link>
            </Button>
          )}
        </div>
      </Navbar>
    </div>
  );
};

export default NabBar;
