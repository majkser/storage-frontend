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
    <div>
      <h1 className="p text-white">{user?.email}</h1>
      <h1 className="p text-white">{user?.id}</h1>
      <h1 className="p text-white">{user?.username}</h1>
      {user?.photo ? (
        <Avatar>
          <AvatarImage src={user.photo} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      ) : (
        <FaUserSecret color="white" size={100} />
      )}
    </div>
  );
}
