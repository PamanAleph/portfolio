import Link from "next/link";
import React from "react";

function Button() {
  return (
    <div className="fixed right-10 bottom-4 w-full flex justify-end">
      <Link
        href="https://api.whatsapp.com/send/?phone=6285161611095"
        className="w-max bg-pink-600 duration-200 hover:bg-pink-700 text-white rounded-xl m-6"
      >
        <p className="font-bold text-end p-3">
          <i className="fa-brands fa-whatsapp fa-lg"></i> Chat Us !!
        </p>
      </Link>
    </div>
  );
}

export default Button;
