"use client";
import { slideAnimation } from "@/lib/motion";
import { AnimatePresence, motion } from "framer-motion";
import { EditorTabs } from "@/lib/constants";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Upload } from "lucide-react";
import { useState } from "react";

interface iLeftCompTab {
  name: string;
  icon: File | string;
}

const Customizer = () => {
  return (
    <AnimatePresence>
      {/* left customize buttons */}
      <motion.div
        key="custom"
        className="absolute top-0 left-0 z-10"
        {...slideAnimation("left")}
      >
        <div className="flex items-center min-h-screen">
          <Tabs>
            {/* Left sidebar with vertical tabs */}
            <div className="flex ml-4">
              {/* <div className="w-fit  rounded-2xl shadow-lg m-3 p-1"> */}
              <TabsList className="flex flex-col h-full bg-gray-100/70 backdrop-blur-md p-1 space-y-2">
                {EditorTabs.map((tab: iLeftCompTab) => (
                  <TabsTrigger
                    key={tab.name}
                    value={tab.name}
                    className="w-16 bg-gray-50 h-16 rounded-xl data-[state=active]:bg-blue-200 flex flex-col items-center justify-center p-2 hover:bg-gray-50"
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
              {/* </div> */}

              {/* Right content area */}
              <div className="flex-1 my-4 ml-0">
                {/* first card */}
                <TabsContent value="Upload File" className="mt-0 w-full">
                  <Card className=" border-gray-400/20 p-2  backdrop-blur-sm bg-gray-900/10 shadow-lg ">
                    <CardHeader className="font-semibold text-xl text-center">
                      Upload Image
                    </CardHeader>
                    <CardContent className="w-full">
                      <div className="h-48 w-48 p-2 rounded-xl border-2 border-dashed border-teal-600  flex flex-col gap-2 justify-center items-center">
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
                  <Card className=" border-gray-400/20 p-2  backdrop-blur-sm bg-gray-900/10 shadow-lg">
                    <CardHeader className="text-xl font-semibold text-center ">
                      Files
                    </CardHeader>
                    <p className="text-gray-600">Files content goes here...</p>
                  </Card>
                </TabsContent>

                {/* Third card */}
                <TabsContent value="Colors" className="mt-0 h-full">
                  <Card className=" border-gray-400/20 p-2  backdrop-blur-sm bg-gray-900/10 shadow-lg">
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
      </motion.div>
    </AnimatePresence>
  );
};

export default Customizer;
