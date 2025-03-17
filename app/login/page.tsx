import LoginSidebar from "@/components/loginSidebar";
import Login from "@/components/login";
import MobileLoginSidebar from "@/components/mobileLoginSidebar";

export default function page() {
  return (
    <div className="bg-black w-full h-screen text-white text-center sm:grid sm:grid-cols-8 overflow-hidden">
      <div className="col-span-3 hidden sm:flex items-center justify-center">
        <LoginSidebar />
      </div>
      <MobileLoginSidebar />
      <div className="col-span-5 flex items-center justify-center">
        <Login />
      </div>
    </div>
  );
}
