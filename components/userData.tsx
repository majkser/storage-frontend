"use client";

import Image from "next/image";
import { FaUserSecret } from "react-icons/fa";
import { authContext } from "@/context/authContext";
import { useContext } from "react";

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
        <Image
          src={user.photo}
          alt="User Photo"
          width={100}
          height={100}
          unoptimized
        />
      ) : (
        <FaUserSecret color="white" size={100} />
      )}
    </div>
  );
}
