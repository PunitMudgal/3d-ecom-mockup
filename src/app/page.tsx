import CanvasComp from "@/components/Canvas";
import LeftComp from "@/components/LeftComp";
import RightComp from "@/components/RightComp";

export default function Home() {
  return (
    <div className="bg-gray-200 w-full min-h-screen  gap-2 mx-auto container px-4 py-6">
      <div className="grid grid-cols-[1fr_3fr_1fr] ">
        <LeftComp />
        <CanvasComp />
        <RightComp />
      </div>
    </div>
  );
}
