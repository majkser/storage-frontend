"use client";

import { useState, useEffect } from "react";
import { getUser, User } from "@/getUser";
import Image from "next/image";
import { FaUserSecret } from "react-icons/fa";

export default function UserData() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getUser().then((user) => setUser(user));
  }, []);

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
