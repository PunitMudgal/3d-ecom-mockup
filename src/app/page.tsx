import CanvasComp from "@/components/Canvas";
import Customizer from "@/components/Customizer";
import RightComp from "@/components/RightComp";

export default function Home() {
  return (
    <div className="flex w-full h-screen  transition-all ease-in md:flex-row flex-col">
      <div className="relative flex-8/12">
        <CanvasComp />
        <Customizer />
      </div>
      <RightComp />
    </div>
  );
}
