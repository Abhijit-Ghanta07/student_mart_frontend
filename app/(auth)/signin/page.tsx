import React from "react";
import { MdVisibility } from "react-icons/md";

export default function page() {
  return (
    <body className="bg-background-light">
      <div className="relative font-jakarta flex h-auto min-h-screen w-full flex-col items-center bg-background-light group/design-root overflow-x-hidden">
        <div className="w-full max-w-md px-4 flex flex-col justify-center flex-grow">
          <div className="pt-12 pb-6 text-center">
            <h1 className="text-slate-800 tracking-light text-[32px] font-bold leading-tight">
              CampusCart
            </h1>
          </div>
          <div className="w-full">
            <h2 className="text-slate-800 text-[22px] font-bold leading-tight tracking-[-0.015em] text-left pb-5 pt-5">
              Welcome Back!
            </h2>
            <div className="flex flex-col gap-4">
              <label className="flex flex-col w-full">
                <p className="text-slate-700 text-base font-medium leading-normal pb-2">
                  Email
                </p>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-800 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 bg-background-light focus:border-primary h-14 placeholder:text-slate-400 p-[15px] text-base font-normal leading-normal font-display"
                  placeholder="Enter your email"
                  value=""
                />
              </label>
              <label className="flex flex-col w-full">
                <p className="text-slate-700 text-base font-medium leading-normal pb-2">
                  Password
                </p>
                <div className="flex w-full flex-1 items-stretch">
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-800 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 bg-background-light focus:border-primary h-14 placeholder:text-slate-400 p-[15px] rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal font-display"
                    placeholder="Enter your password"
                    type="password"
                    value=""
                  />
                  <div className="text-slate-500 flex border border-slate-300 bg-background-light items-center justify-center pr-[15px] rounded-r-lg border-l-0">
                    <span className="material-symbols-outlined text-xl">
                      <MdVisibility />
                    </span>
                  </div>
                </div>
              </label>
            </div>
            <div className="w-full text-right pt-3">
              <a
                className="text-primary hover:text-primary/80 text-sm font-medium leading-normal underline font-display"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <button className="w-full mt-6 h-14 bg-primary text-[#10221c] font-bold text-base rounded-lg flex items-center justify-center transition-colors hover:bg-primary/90 font-display">
              Login
            </button>
            <div className="flex items-center gap-4 my-8">
              <hr className="w-full border-t border-slate-300" />
              <span className="text-sm text-slate-500 font-display">or</span>
              <hr className="w-full border-t border-slate-300" />
            </div>
            <button className="w-full h-14 bg-transparent border border-slate-300 text-slate-800 font-medium text-base rounded-lg flex items-center justify-center gap-3 transition-colors hover:bg-slate-100 font-display">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.818 10.0455C21.818 9.37273 21.7591 8.72727 21.6409 8.1H12V11.8h5.50909C17.3 13.2 16.5273 14.3364 15.3182 15.1545V17.6182H18.2364C19.9636 16.0364 21.0818 13.3 21.0818 10.0455H21.818Z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M12 22C14.7818 22 17.1182 21.0818 18.8 19.6182L15.3182 17.1545C14.3636 17.8 13.2636 18.2 12 18.2C9.58182 18.2 7.51818 16.5909 6.72727 14.3909H3.72727V16.9182C5.35455 19.9727 8.44545 22 12 22Z"
                  fill="#34A853"
                ></path>
                <path
                  d="M6.72727 14.3909C6.48182 13.7182 6.35455 12.9818 6.35455 12.2273C6.35455 11.4727 6.48182 10.7364 6.72727 10.0636V7.53636H3.72727C2.88182 9.17273 2.35455 11.0273 2.35455 12.2273C2.35455 13.4273 2.88182 15.2818 3.72727 16.9182L6.72727 14.3909Z"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M12 6.2C13.4 6.2 14.5455 6.7 15.4 7.53636L18.8636 4.4C17.1 2.8 14.7818 2 12 2C8.44545 2 5.35455 4.02727 3.72727 7.53636L6.72727 10.0636C7.51818 7.86364 9.58182 6.2 12 6.2Z"
                  fill="#EA4335"
                ></path>
              </svg>
              Continue with Google
            </button>
          </div>
          <div className="w-full text-center py-8">
            <p className="text-slate-600 text-sm font-normal leading-normal font-display">
              Don&apos;t have an account?{" "}
              <a
                className="font-bold text-primary hover:text-primary/80"
                href="#"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </body>
  );
}
