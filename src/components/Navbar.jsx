import PrivateRoute from "@/app/route/PrivateRoute";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center gap-14">
      <PrivateRoute>
      <Link className="text-xl font-bold text-blue-500" href={"/"}>
        Home
      </Link>
      </PrivateRoute>
     <PrivateRoute>
     <Link className="text-xl font-bold text-blue-500" href={"/about"}>
        about
      </Link>
     </PrivateRoute>
      <Link className="text-xl font-bold text-blue-500" href={"/login"}>
        Log In
      </Link>
    </div>
  );
};

export default Navbar;
