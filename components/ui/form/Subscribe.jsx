import React from "react";

export default function Subscribe() {
  return (
    <form className="flex flex-col gap-2 md:flex-row items-center justify-center">
      <div>
        <label
          htmlFor="email"
          className="sr-only block text-sm font-semibold text-heading"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          className="block w-full rounded-xl border-2 border-layer-3 bg-muted-1 px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
        />
      </div>
      <button
        type="submit"
        className="inline-flex bg-[#FF3131] cursor-pointer items-center justify-center rounded-xl border-2 border-primary bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80"
      >
        Try it for free
      </button>
    </form>
  );
}
