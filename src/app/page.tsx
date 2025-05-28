import CanvasComp from "@/components/Canvas";
import Customizer from "@/components/Customizer";
import RightComp from "@/components/RightComp";

export default function Home() {
  return (
    <div className="flex w-full h-screen overflow-hidden transition-all ease-in md:flex-row flex-col">
      <CanvasComp />
      <Customizer />
      <RightComp />
      {/* <div className="grid grid-cols-[1fr_3fr_1fr] ">
        <LeftComp />
        <CanvasComp />
        <RightComp />
      </div> */}
    </div>
  );
}
