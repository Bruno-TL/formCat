"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const setShowModal = () => {
    setShow(!show);
    console.log(show);
  };

  const OpenSignIn = () => {
    router.push("/signin");
  };

  const OpenSignUp = () => {
    router.push("/signup");
  };

  function ModalLogin() {
    return (
      <div className="bg-slate-200 text-black absolute right-44 w-52 flex justify-around h-14 items-center rounded-lg">
        <div className="flex flex-col">
          <button onClick={OpenSignIn}>Sign In</button>
          <button onClick={OpenSignUp}>Sign Up</button>
        </div>
        <button onClick={setShowModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={setShowModal}>Login</button>
      {show && <ModalLogin />}
    </div>
  );
}
