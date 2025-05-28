"use client";
import React, { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Toggle } from "./ui/toggle";
import { Button } from "./ui/button";
import { Dot, Heart, Minus, Plus, ShoppingCart } from "lucide-react";

const RightComp = () => {
  const [price, setPrice] = useState<number>(29.99);
  const [quantity, setQuantity] = useState<number>(1);

  const tshirtSizes = [
    { name: "XS" },
    { name: "S" },
    { name: "M" },
    { name: "L" },
    { name: "XL" },
    { name: "XXL" },
  ];

  const qualityTypes = [
    { name: "Cotton" },
    { name: "Polyster" },
    { name: "Polycotton" },
    { name: "Organic Cotton" },
    // { name: "Spandex " },
    { name: "Bamboo Fabric" },
  ];

  const prodFeatures = [
    { name: "100% premium Cotton" },
    { name: "High-Quality Digital Printing" },
    { name: "Machine Washable" },
    { name: "Fade Resistant Color" },
    { name: "Cusom Logo Placement" },
    { name: "Available in All sizes & colors" },
  ];

  return (
    <Card className="flex-1/3 h-fit py-4 px-6">
      <ScrollArea className="space-y-4">
        <Badge
          variant="outline"
          className="bg-gradient-to-r from-sky-600 bg-cyan-100"
        >
          Premium Collection
        </Badge>
        <CardHeader className="text-3xl font-semibold pl-0">
          Custom 3D T-Shirt
        </CardHeader>
        <CardDescription className="text-gray-600 ">
          High-quality t-shirts with custom logo printing. Perfect for personal
          branding, team uniforms, or promotional merchandise.
        </CardDescription>

        <CardContent className="space-y-8 mt-5 pl-0">
          <p className=" text-xl font-bold ">
            ${Math.floor(price * 100) / 100}
          </p>

          {/* size */}
          <Card>
            <CardHeader className="text-xl font-semibold">Size</CardHeader>
            <CardContent className="grid grid-cols-3 gap-3">
              {tshirtSizes.map((size) => (
                <Toggle variant="outline" key={size.name}>
                  {size.name}
                </Toggle>
              ))}
            </CardContent>
          </Card>

          {/* Quantity */}
          <Card>
            <CardHeader className="text-xl font-semibold">Quantity</CardHeader>
            <CardContent className="flex items-center gap-1">
              <Button
                variant="outline"
                disabled={quantity === 1}
                onClick={() => {
                  setQuantity(quantity - 1);
                  setPrice(price - 29.99);
                }}
              >
                <Minus />
              </Button>
              <Badge variant="outline" className="text-lg font-semibold">
                {quantity}
              </Badge>
              <Button
                variant="outline"
                onClick={() => {
                  setQuantity(quantity + 1);
                  setPrice(price + 29.99);
                }}
              >
                <Plus />
              </Button>
            </CardContent>
          </Card>

          {/* Quality */}
          <Card>
            <CardHeader className="text-xl font-semibold">
              Quality Types
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              {qualityTypes.map((size) => (
                <Toggle variant="outline" key={size.name}>
                  {size.name}
                </Toggle>
              ))}
            </CardContent>
          </Card>

          {/* Features */}
          <Card>
            <CardHeader className="text-xl font-semibold">
              Product Features
            </CardHeader>
            <CardContent>
              {prodFeatures.map((feature, i) => (
                <Badge variant="outline" className="border-0" key={i}>
                  <Dot /> {feature.name}
                </Badge>
              ))}
            </CardContent>
          </Card>

          <div className="flex flex-col gap-1 ">
            <Button className="bg-accent" variant="outline">
              <ShoppingCart /> Add to cart
            </Button>
            <Button variant="outline">
              <Heart />
              Add to wishlist
            </Button>
          </div>
        </CardContent>
      </ScrollArea>
    </Card>
  );
};

export default RightComp;
