import React from "react";
import Button from "../Buttons/Button";
import NavItems from "../NavItems/NavItems";

export default function Navbar() {
  return (
    <>
      <div className="container px-6 mx-auto bg-[#333333] rounded-md mt-4 shadow-lg">
        <div className="flex justify-between items-center py-6">
          <div>
            <a href="#" className="text-xl text-[#FCFAF9] font-medium">
              The Mathematics Outlet
            </a>
          </div>
          <div className="flex-1">
            <NavItems />
          </div>
          <div className="flex gap-8">
            <Button>Login</Button>
            <Button>SignUp</Button>
          </div>
        </div>
      </div>
    </>
  );
}
