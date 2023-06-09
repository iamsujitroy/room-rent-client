"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { showRegistierForm, showLoginForm } from "@/redux/features/layout/layoutSlice.js";
import token from "@/services/auth";
import { AiFillHeart } from "react-icons/ai";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function HeaderWithoutSearch() {
  const dispatch = useDispatch();
  const [isLoggedIn, setLoggedIn] = useState(null);
  const router = useRouter();
  
  useEffect(() => {
    if (token) {
      return setLoggedIn(true)
    }else{
      return setLoggedIn(false);
    }
  }, [token]);

  function logoutHandler() {
    Cookies.remove("token");
    localStorage.removeItem("token");
    router.refresh();
  }

  return (
    <>
      {<header className="fixed w-full shadow-md z-[1000] bg-white min-h-20">
        <div className="container m-auto py-5 flex items-center justify-between text-dark">
          <Link href="/" className="text-3xl font-semibold">Room Rent</Link>
          <div className="flex items-center gap-4">
            {!isLoggedIn && <>
              <button className="px-5 py-2 bg-white text-dark font-medium border border-dark rounded-md" onClick={()=>dispatch(showLoginForm())}>Login</button>
              <button className="px-5 py-2 bg-dark text-white font-medium border border-dark rounded-md" onClick={()=>dispatch(showRegistierForm())}>Sign up</button>
            </>}
            {isLoggedIn && <>
              <Link href="/wishlist" className="flex gap-2 mr-2">
                <AiFillHeart size="25px" className="text-red" />
                <span className="">Wishlist</span>
              </Link>
              <button className="px-5 py-2 bg-dark text-white font-medium border border-dark rounded-md" onClick={logoutHandler}>Logout</button>
            </>}
          </div>
        </div>
      </header>}
    </>
  );
}
