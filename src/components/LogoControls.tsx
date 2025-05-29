"use client";
import { TheStore } from "@/store";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { RotateCcw, Move, ImageUpscale } from "lucide-react";

const LogoControls = () => {
  const {
    logoPosition,
    logoScale,
    logoRotation,
    setLogoPosition,
    setLogoScale,
    setLogoRotation,
    resetLogoTransform,
  } = TheStore();

  const handlePositionChange = (axis: number, value: number[]) => {
    const newPosition = [...logoPosition] as [number, number, number];
    newPosition[axis] = value[0];
    setLogoPosition(newPosition);
  };

  const handleRotationChange = (axis: number, value: number[]) => {
    const newRotation = [...logoRotation] as [number, number, number];
    newRotation[axis] = (value[0] * Math.PI) / 180; // Convert degrees to radians
    setLogoRotation(newRotation);
  };

  return (
    <Card className="border-gray-400/20 p-2 bg-gray-100/60 shadow-lg">
      <CardHeader className="font-semibold text-xl text-center">
        Logo Controls
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Position Controls */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Move className="h-4 w-4" />
            <Label className="font-medium">Position</Label>
          </div>

          <div className="space-y-2">
            <div>
              <Label className="text-xs text-gray-600">Horizontal (X)</Label>
              <Slider
                value={[logoPosition[0]]}
                onValueChange={(value) => handlePositionChange(0, value)}
                min={-0.3}
                max={0.3}
                step={0.01}
                className="w-full"
              />
              <span className="text-xs text-gray-500">
                {logoPosition[0].toFixed(2)}
              </span>
            </div>

            <div>
              <Label className="text-xs text-gray-600">Vertical (Y)</Label>
              <Slider
                value={[logoPosition[1]]}
                onValueChange={(value) => handlePositionChange(1, value)}
                min={-0.2}
                max={0.3}
                step={0.01}
                className="w-full"
              />
              <span className="text-xs text-gray-500">
                {logoPosition[1].toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Scale Control */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <ImageUpscale className="h-4 w-4" />
            <Label className="font-medium">Size</Label>
          </div>

          <div>
            <Slider
              value={[logoScale]}
              onValueChange={(value) => setLogoScale(value[0])}
              min={0.05}
              max={0.4}
              step={0.01}
              className="w-full"
            />
            <span className="text-xs text-gray-500">
              {logoScale.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Rotation Controls */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <RotateCcw className="h-4 w-4" />
            <Label className="font-medium">Rotation</Label>
          </div>

          <div className="space-y-2">
            <div>
              <Label className="text-xs text-gray-600">Z-axis (degrees)</Label>
              <Slider
                value={[(logoRotation[2] * 180) / Math.PI]}
                onValueChange={(value) => handleRotationChange(2, value)}
                min={-180}
                max={180}
                step={1}
                className="w-full"
              />
              <span className="text-xs text-gray-500">
                {Math.round((logoRotation[2] * 180) / Math.PI)}°
              </span>
            </div>
          </div>
        </div>

        {/* Reset Button */}
        <Button
          onClick={resetLogoTransform}
          variant="outline"
          className="w-full"
        >
          Reset to Default
        </Button>
      </CardContent>
    </Card>
  );
};

export default LogoControls;
