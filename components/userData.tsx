"use client";

import { FaUserSecret } from "react-icons/fa";
import { authContext } from "@/context/authContext";
import { useContext } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserData() {
  const { user, loading } = useContext(authContext);

  if (loading) {
    return <h1 className="p text-white">Loading...</h1>;
  }

  if (!user) {
    return <h1 className="p text-white">No user found</h1>;
  }

  return (
    <div className="flex items-center justify-start gap-4 p-4 bg-black overflow-hidden">
      <Avatar>
        {user?.photo ? (
          <AvatarImage src={user.photo} alt="user profile picture" />
        ) : (
          <AvatarFallback>
            <FaUserSecret color="black" size={25} />
          </AvatarFallback>
        )}
      </Avatar>
      <h1 className="p text-white">{user?.username}</h1>
    </div>
  );
}
