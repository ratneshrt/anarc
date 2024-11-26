import React from "react";
import { Cover } from "@/app/component/ui/Cover";

export function CoverDemo() {
  return (
    <div>
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 via-neutral-500 to-neutral-100 pb-56">
        Build amazing notes <br /> at <Cover>warp speed</Cover>
      </h1>
    </div>
  );
}
