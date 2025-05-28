import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Card, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

const RightComp = () => {
  return (
    <Card className="flex-1/3 h-full p-2">
      <ScrollArea>
        <Badge variant="outline">Premium Collection</Badge>
        <CardHeader>Custom 3D t-shirt</CardHeader>
      </ScrollArea>
    </Card>
  );
};

export default RightComp;
