import DropZoneTriggerButton from "@/components/filesDropZone/dropZoneTriggerButton";
import UserData from "@/components/userData";

export default function Home() {
  return (
    //change h for full later
    <div className="flex align-center justify-center h-screen w-full bg-black">
      <DropZoneTriggerButton />
      <UserData />
    </div>
  );
}
