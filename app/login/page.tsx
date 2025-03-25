import LoginSidebar from "@/components/login/loginSidebar";
import Login from "@/components/login/login";
import MobileLoginSidebar from "@/components/login/mobileLoginSidebar";

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
