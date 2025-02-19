import React from "react";

export default function Button({
  setOpenCash,
  hiddens,
  setCloseCash,
  hiddensClosing,
}) {
  return (
    <>
      <button
        onClick={() => setOpenCash(true)}
        disabled={hiddens}
        className={`${
          hiddens
            ? "cursor-not-allowed bg-lwsGreen text-white hover:text-gray-200 py-2 px-12 rounded-md sm:hidden lg:block "
            : "bg-lwsGreen text-white hover:text-gray-200  py-2 px-12 rounded-md sm:hidden lg:block "
        }`}
      >
        Opening Cash
      </button>

      <button
        onClick={() => setCloseCash(true)}
        disabled={hiddensClosing}
        className={`${
          hiddensClosing
            ? "cursor-not-allowed bg-lwsGreen text-white hover:text-gray-200  py-2 px-12 rounded-md"
            : "bg-lwsGreen text-white hover:text-gray-200  py-2 px-12 rounded-md"
        }`}
      >
        Day Closed Cash
      </button>
    </>
  );
}
