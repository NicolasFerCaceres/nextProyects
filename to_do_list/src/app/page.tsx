import ToDoTitle from "@/components/TitleComponent";
import Image from "next/image";
import { montserrat } from "@/ui/fonts";
export default function Home() {
  return (
    <div className={`${montserrat.className} antialiased flex justify-center text-center`}>
      <ToDoTitle/>
    </div>
  );
}
