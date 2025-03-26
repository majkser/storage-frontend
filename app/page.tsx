import DropZoneTriggerButton from "@/components/filesDropZone/dropZoneTriggerButton";
import UserData from "@/components/userData";
import { SidebarFooter } from "@/components/sidebar/sidebar-footer";

export default function Home() {
  return (
    //change h for full later
    <div className="flex align-center justify-center h-screen w-full bg-black">
      <DropZoneTriggerButton />
      <UserData />
      <SidebarFooter />
    </div>
  );
}

//TODO: implement security acess to "/" route
//TODO: change login auth for context
