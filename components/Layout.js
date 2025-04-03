import React from "react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#f8f4ed] text-blue-900 flex flex-col">
      <div className="flex justify-end p-4">
        <img src="/logo.png" alt="Logo" className="w-[100px] h-[100px]" />
      </div>
      <main className="flex-1 px-4 sm:px-6 py-2 sm:py-4">{children}</main>
      <footer className="text-center text-sm text-gray-600 p-4">
        כל הזכויות שמורות לליאור ברמן אמיר
      </footer>
    </div>
  );
}
