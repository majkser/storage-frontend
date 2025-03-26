import axios from "axios";

export interface User {
  id: string;
  username: string;
  email: string;
  photo: string;
}

export async function getUser(): Promise<User> {
  try {
    const response = await axios.get<User>(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/user`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
