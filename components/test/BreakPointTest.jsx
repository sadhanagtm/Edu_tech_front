import React from "react";

function BreakPointTest() {
  return (
    <div className="text-2xl">
      <p className="hidden fold:block fold:bg-orange-800">fold</p>
      <p>mobile</p>
      <p className="hidden sm:block sm:bg-green-800">sm</p>
      <p className="hidden md:block md:bg-purple-800">md</p>
      <p className="hidden md:block lg:bg-pink-700">lg</p>
      <p className="hidden md:block xl:bg-blue-600">xl</p>
      <p className="hidden md:block 2xl:bg-red-700">2xl</p>
    </div>
  );
}

export default BreakPointTest;
