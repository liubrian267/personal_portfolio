import React from "react";
import MiscFeature from "@/components/miscFeature";
const page = () => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="flex justify-center items-center text-4xl font-bold mt-10">
        Good Eats and Misc
      </div>

      <div className="pl-9 py-6 min-h-[150px]">
        <MiscFeature />
      </div>
    </div>
  );
};

export default page;
