import React from "react";
import { IoStorefront } from "react-icons/io5";

export default function page() {
  return (
    <div className="font-display bg-background-light">
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4">
        <div className="w-full max-w-sm text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/20 text-primary">
              <span className="material-symbols-outlined text-5xl">
                <IoStorefront />
              </span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-slate-900">
            The Campus Marketplace
          </h1>
          <p className="mt-2 text-base text-slate-600">
            Buy and sell goods with fellow students.
          </p>
          <div className="mt-10 space-y-4">
            <div className="flex">
              <button className="flex h-12 flex-1 cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-lg bg-primary px-5 text-base font-bold text-background-dark shadow-sm transition-opacity hover:opacity-90">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.56 12.25C22.56 11.45 22.49 10.68 22.36 9.92H12V14.4H18.06C17.74 16.08 16.73 17.5 15.1 18.45V21.09H18.97C21.2 19.12 22.56 15.96 22.56 12.25Z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M12 23C14.97 23 17.45 22.03 18.97 20.09L15.1 17.45C14.04 18.15 12.83 18.59 11.45 18.59C8.78 18.59 6.45 16.92 5.56 14.48H1.58V17.21C3.44 20.61 7.33 23 12 23Z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M5.56 14.48C5.34 13.82 5.21 13.13 5.21 12.4C5.21 11.67 5.34 10.98 5.56 10.32V7.59H1.58C0.83 8.99 0.36 10.63 0.36 12.4C0.36 14.17 0.83 15.81 1.58 17.21L5.56 14.48Z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M12 5.41C13.44 5.41 14.67 5.92 15.54 6.74L19.04 3.25C17.45 1.76 15.06 0.8 12 0.8C7.33 0.8 3.44 3.39 1.58 6.79L5.56 9.52C6.45 7.08 8.78 5.41 12 5.41Z"
                    fill="#EA4335"
                  ></path>
                </svg>
                <span className="truncate">Continue with Google</span>
              </button>
            </div>
            <div className="flex">
              <button className="flex h-12 flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-slate-200/80 px-5 text-base font-bold text-slate-800 shadow-sm transition-opacity hover:opacity-90">
                <span className="truncate">Sign Up with Email</span>
              </button>
            </div>
          </div>
          <p className="mt-8 text-sm text-slate-600">
            Already have an account?
            <a className="font-bold text-primary hover:underline" href="#">
              Log In
            </a>
          </p>
        </div>
        <div className="absolute bottom-6 px-4 text-center">
          <p className="text-xs text-slate-500">
            By continuing, you agree to our
            <a className="underline hover:text-primary" href="#">
              Terms of Service
            </a>
            and
            <a className="underline hover:text-primary" href="#">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
