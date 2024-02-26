import React from "react";

export default function Button({ children }) {
  return (
    <div>
      <a href="#" className="bg-[#FCFAF9] text-[#333333] text-lg font-medium px-4 py-2 inline rounded-md">
        {children}
      </a>
    </div>
  );
}
