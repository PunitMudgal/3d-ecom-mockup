import CanvasComp from "@/components/Canvas";
import Customizer from "@/components/Customizer";

export default function Home() {
  return (
    <div className=" w-full h-screen overflow-hidden transition-all ease-in">
      <CanvasComp />
      <Customizer />
      {/* <div className="grid grid-cols-[1fr_3fr_1fr] ">
        <LeftComp />
        <CanvasComp />
        <RightComp />
      </div> */}
    </div>
  );
}
