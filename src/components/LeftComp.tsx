import { EditorTabs } from "@/lib/constants";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Upload } from "lucide-react";

interface iLeftCompTab {
  name: string;
  icon: File | string;
}

const LeftCompSec = () => {
  return (
    <div className="flex h-screen">
      <Tabs defaultValue="Upload File">
        {/* Left sidebar with vertical tabs */}
        <div className="flex ">
          <div className="w-fit bg-white rounded-2xl shadow-lg m-3 p-1">
            <TabsList className="flex flex-col h-full bg-transparent space-y-2">
              {EditorTabs.map((tab: iLeftCompTab) => (
                <TabsTrigger
                  key={tab.name}
                  value={tab.name}
                  className="w-16 h-16 rounded-xl data-[state=active]:bg-cyan-600/20 data-[state=active]:text-cyan-800 flex flex-col items-center justify-center p-2 hover:bg-gray-50"
                >
                  <Image
                    src={tab.icon || "/placeholder.svg"}
                    className="h-8 w-8 mb-1"
                    alt={tab.name}
                  />
                  <span className="text-xs font-medium">
                    {tab.name.split(" ")[0]}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Right content area */}
          <div className="flex-1 my-4 ml-0">
            {/* first card */}
            <TabsContent value="Upload File" className="mt-0 w-full">
              <Card className="h-full w-full p-2 bg-white shadow-lg ">
                <CardHeader className="font-semibold text-xl text-center">
                  Upload Image
                </CardHeader>
                <CardContent className="w-full">
                  <div className="h-48 w-48 p-2 rounded-xl border-2 border-dashed border-teal-600 bg-teal-50 flex flex-col gap-2 justify-center items-center">
                    <Image
                      src="./icons/photos.svg"
                      width={30}
                      height={30}
                      alt="images"
                    />
                    <Button
                      // variant="outline"
                      className="bg-[#3F72AF]"
                    >
                      <Upload /> Upload
                    </Button>
                    <p className="text-wrap text-xs text-center text-[#3F72AF]">
                      upload in png, jpg, jpeg, svg format{" "}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Second card */}
            <TabsContent value="Files" className="mt-0 h-full">
              <Card className="h-full p-2 bg-white rounded-2xl shadow-lg">
                <CardHeader className="text-xl font-semibold text-center ">
                  Files
                </CardHeader>
                <p className="text-gray-600">Files content goes here...</p>
              </Card>
            </TabsContent>

            {/* Third card */}
            <TabsContent value="Colors" className="mt-0 h-full">
              <Card className="h-full p-2 bg-white rounded-2xl shadow-lg">
                <CardHeader className="text-xl font-semibold text-center">
                  Color Picker
                </CardHeader>
                <p className="text-gray-600">
                  Color picker content goes here...
                </p>
              </Card>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default LeftCompSec;
