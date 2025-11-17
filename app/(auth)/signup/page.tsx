import React from "react";

export default function page() {
  return (
    <div className="bg-background-light font-display antialiased">
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden bg-background-light p-4">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <svg
              className="mx-auto h-8 w-auto text-primary"
              fill="currentColor"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="M20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0ZM26.6667 13.3333C27.5833 13.3333 28.3333 14.0833 28.3333 15C28.3333 15.9167 27.5833 16.6667 26.6667 16.6667H13.3333C12.4167 16.6667 11.6667 15.9167 11.6667 15C11.6667 14.0833 12.4167 13.3333 13.3333 13.3333H26.6667ZM26.6667 23.3333C27.5833 23.3333 28.3333 24.0833 28.3333 25C28.3333 25.9167 27.5833 26.6667 26.6667 26.6667H13.3333C12.4167 26.6667 11.6667 25.9167 11.6667 25C11.6667 24.0833 12.4167 23.3333 13.3333 23.3333H26.6667Z"
                fill-rule="evenodd"
              ></path>
            </svg>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 mt-4">
              Create Your Account
            </h1>
            <p className="text-slate-600 mt-2 text-base">
              Join the student marketplace today.
            </p>
          </div>
          <form className="space-y-4">
            <label className="flex flex-col flex-1">
              <p className="text-slate-900 text-base font-medium leading-normal pb-2">
                Full Name
              </p>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg bg-white text-slate-900 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 focus:border-primary/50 h-14 placeholder:text-slate-400 p-[15px] text-base font-normal leading-normal"
                placeholder="Enter your full name"
                value=""
              />
            </label>
            <label className="flex flex-col flex-1">
              <p className="text-slate-900 text-base font-medium leading-normal pb-2">
                Email Address
              </p>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg bg-white text-slate-900 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 focus:border-primary/50 h-14 placeholder:text-slate-400 p-[15px] text-base font-normal leading-normal"
                placeholder="Enter your email address"
                value=""
              />
            </label>
            <label className="flex flex-col flex-1">
              <p className="text-slate-900 text-base font-medium leading-normal pb-2">
                Password
              </p>
              <div className="flex w-full flex-1 items-stretch rounded-lg">
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg bg-white text-slate-900 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 focus:border-primary/50 h-14 placeholder:text-slate-400 p-[15px] rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
                  placeholder="Enter your password"
                  type="password"
                  value=""
                />
                <button
                  className="text-slate-400 flex border border-slate-300 bg-white items-center justify-center px-4 rounded-r-lg border-l-0 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:z-10"
                  type="button"
                >
                  <span className="material-symbols-outlined">visibility</span>
                </button>
              </div>
            </label>
            <label className="flex flex-col flex-1">
              <p className="text-slate-900 text-base font-medium leading-normal pb-2">
                Confirm Password
              </p>
              <div className="flex w-full flex-1 items-stretch rounded-lg">
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg bg-white text-slate-900 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 focus:border-primary/50 h-14 placeholder:text-slate-400 p-[15px] rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
                  placeholder="Confirm your password"
                  type="password"
                  value=""
                />
                <button
                  className="text-slate-400 flex border border-slate-300 bg-white items-center justify-center px-4 rounded-r-lg border-l-0 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:z-10"
                  type="button"
                >
                  <span className="material-symbols-outlined">
                    visibility_off
                  </span>
                </button>
              </div>
            </label>
            <button
              className="flex w-full items-center justify-center rounded-lg bg-primary h-14 text-base font-bold text-slate-900 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 mt-6"
              type="submit"
            >
              Create Account
            </button>
          </form>
          <div className="relative flex items-center py-5">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="mx-4 flex-shrink text-sm font-medium text-slate-500">
              OR
            </span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>
          <button
            className="flex w-full items-center justify-center gap-3 rounded-lg border border-slate-300 bg-white h-14 text-base font-medium text-slate-800 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-500/50 focus:ring-offset-2"
            type="button"
          >
            <img
              className="h-6 w-6"
              data-alt="Google logo"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH4qQkLggeg7kuBxLCPu9PRIphmVvpLq0EytA_Akial5W0U2HkMx9mRyQN2ZflD2dsxDeRdU7p8gjYCuQ_KjxB5enymZRwCF-zSvbc6uW_8BYlrefZgEkDtIv476LnRGqHNQ83YCjDRkrniPy2O-PsZw9NPBXUlfulEqwA0QZqbxsNdObbXOcUntbjb_Yi_6912nzvLImZHUjdXTvZGiwoGefAr2SuPwCvbpTrIh-Vv1GAmFeLrip8H5vb-w4LSMwFucfzy8sg3uhI"
            />
            <span>Continue with Google</span>
          </button>
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-600">
              Already have an account?
              <a
                className="font-semibold text-primary hover:text-primary/90"
                href="#"
              >
                Log In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
