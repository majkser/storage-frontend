import LoginSidebar from "@/components/loginSidebar";
import Login from "@/components/login";

export default function page() {
  return (
    <div className="bg-black w-full h-screen text-white text-center grid grid-cols-2 overflow-hidden">
      <LoginSidebar />
      <Login />
    </div>
  );
}
