"use client";
import { slideAnimation } from "@/lib/motion";
import { AnimatePresence, motion } from "framer-motion";
import { EditorTabs } from "@/lib/constants";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Eye, Fullscreen, Minus, Plus, Upload } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { SketchPicker } from "react-color";
import type { ColorResult } from "react-color";
import { TheStore } from "@/store";
import { Toggle } from "./ui/toggle";
import shirtPngLogo from "../../public/icons/shirtPng.png";
import LockBtn from "./LockBtn";
import { Label } from "./ui/label";
import { reader } from "@/lib/helpers";
import LogoControls from "./LogoControls";

interface iLeftCompTab {
  name: string;
  icon: string;
}

const Customizer = () => {
  const {
    color,
    eyeView,
    isLogo,
    setColor,
    setIsLogo,
    setEyeView,
    setLogoDecal,
    logoScale,
    setLogoScale,
  } = TheStore();

  const [file, setFile] = useState<File | null>(null);

  const handleSetPhoto = (e: ChangeEvent<HTMLInputElement>) => {
    const setlectedFile = e.target.files?.[0];
    if (setlectedFile) setFile(setlectedFile);
  };

  const uploadFile = () => {
    reader(file!).then((result) => {
      if (typeof result === "string") {
        setLogoDecal(result);
        setFile(null);
      } else {
        console.error("Invalid image data");
      }
    });
  };

  const increaseScale = () => {
    setLogoScale(Math.min(logoScale + 0.02, 0.4));
  };

  const decreaseScale = () => {
    setLogoScale(Math.max(logoScale - 0.02, 0.05));
  };

  return (
    <AnimatePresence>
      {/* left customize buttons */}
      {!eyeView && (
        <motion.div
          key="customized-sidebar"
          className="absolute top-0 left-0 z-20"
          {...slideAnimation("left")}
        >
          <div className="flex items-center min-h-screen">
            <Tabs>
              {/* Left sidebar with vertical tabs */}
              <div className="flex ml-4">
                <TabsList className="flex flex-col h-full bg-gray-100/70  p-1 space-y-2">
                  {EditorTabs.map((tab: iLeftCompTab) => (
                    <TabsTrigger
                      key={tab.name}
                      value={tab.name}
                      className="w-16 bg-gray-50 h-16 rounded-xl data-[state=active]:bg-blue-200 flex flex-col items-center justify-center p-2 hover:bg-gray-50"
                    >
                      <Image
                        src={tab.icon}
                        className="h-8 w-8 mb-1"
                        alt={tab.name}
                      />
                      <span className="text-xs font-medium">
                        {tab.name.split(" ")[0]}
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>

                {/* Right content area */}
                <div className="flex-1 my-4 ml-0">
                  {/* upload logo card */}
                  <TabsContent value="Upload File" className="mt-0 w-full">
                    <Card className=" border-gray-400/20 p-2   bg-gray-100/60 shadow-lg ">
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
                          <input
                            className="hidden"
                            type="file"
                            id="uploadPic"
                            onChange={handleSetPhoto}
                          />
                          <Button className="bg-[#3F72AF]">
                            <label htmlFor="uploadPic" className="flex gap-1">
                              <Upload /> Upload
                            </label>
                          </Button>
                          <p className="text-wrap text-xs text-center text-[#3F72AF]">
                            upload in png, jpg, jpeg, svg format{" "}
                          </p>
                        </div>
                        {file && (
                          <p className="text-xs text-gray-600">{file.name}</p>
                        )}
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="secondary"
                          className="w-full"
                          disabled={!file}
                          onClick={uploadFile}
                        >
                          Upload
                        </Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>

                  <TabsContent value="Logo Controls" className="mt-0 w-full">
                    <LogoControls />
                  </TabsContent>

                  {/* Files Tab */}
                  <TabsContent value="Files" className="mt-0 h-full">
                    <Card className=" border-gray-400/20 p-2  backdrop-blur-sm bg-gray-900/10 shadow-lg">
                      <CardHeader className="text-xl font-semibold text-center ">
                        Files
                      </CardHeader>
                      <CardContent></CardContent>
                    </Card>
                  </TabsContent>

                  {/* Third card */}
                  <TabsContent value="Colors" className="mt-0 h-full">
                    <Card className=" border-gray-400/20 p-2  backdrop-blur-sm bg-gray-900/10 shadow-lg">
                      <CardHeader className="text-xl font-semibold text-center">
                        Color Picker
                      </CardHeader>
                      <CardContent>
                        <SketchPicker
                          color={color}
                          presetColors={[
                            "#000000",
                            "#FFFFFF",
                            "##000080",
                            "#808080",
                            "#FF0000",
                            "#00FF00",
                            "#FFFF00",
                          ]}
                          disableAlpha
                          onChange={(color: ColorResult) => setColor(color.hex)}
                        />
                      </CardContent>
                    </Card>
                  </TabsContent>
                </div>
              </div>
            </Tabs>
          </div>
        </motion.div>
      )}

      {/* Zoom in out buttons */}
      {!eyeView && (
        <motion.div {...slideAnimation("up")} key="control-keys">
          <div className="absolute bottom-24 left-1/2  px-3 py-2 rounded-xl bg-gray-100 shadow-xl flex gap-1 items-center z-20">
            <Button
              variant="outline"
              onClick={increaseScale}
              disabled={!isLogo}
            >
              <Plus />
            </Button>
            <Button
              variant="outline"
              onClick={decreaseScale}
              disabled={!isLogo}
            >
              <Minus />
            </Button>
            <Button onClick={() => setEyeView(!eyeView)} variant="outline">
              <Fullscreen />
            </Button>
            <Toggle onClick={() => setIsLogo(!isLogo)} aria-label="toggle-logo">
              <Image
                className="h-8 w-auto"
                src={shirtPngLogo}
                alt="toggle-image"
              />
            </Toggle>
          </div>
        </motion.div>
      )}

      {/* Lock unlock button */}
      <motion.div
        key="lock-controls"
        {...slideAnimation("down")}
        className="absolute top-2 left-1/2 z-20"
      >
        {!eyeView ? (
          <>
            {" "}
            <LockBtn />
            <Label className="text-center text-xs text-gray-700 ml-2">
              3D View
            </Label>{" "}
          </>
        ) : (
          <Button onClick={() => setEyeView(!eyeView)} variant="outline">
            <Eye />
          </Button>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Customizer;
