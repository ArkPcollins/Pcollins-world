import {
    Bell,
    Search
  } from "lucide-react";
  
  import { Avatar } from "../components/Avatar";
  
  interface HeaderProps {
    userName: string;
    avatar?: string;
  }
  
  export function Header({
    userName,
    avatar
  }: HeaderProps) {
    return (
      <header
        className="
          flex
          items-center
          justify-between
          border-b
          bg-white
          px-6
          py-4
        "
      >
        <div
          className="
            flex
            items-center
            gap-2
          "
        >
          <Search size={18} />
  
          <input
            placeholder="Search..."
            className="
              border-none
              outline-none
            "
          />
        </div>
  
        <div
          className="
            flex
            items-center
            gap-4
          "
        >
          <Bell size={20} />
  
          <Avatar
            src={avatar}
            name={userName}
          />
        </div>
      </header>
    );
  }