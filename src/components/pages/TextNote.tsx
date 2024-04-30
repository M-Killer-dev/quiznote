import { Dispatch, SetStateAction } from "react";

export default function TextNote() {
  return (
    <>
      <label htmlFor="subject" className="block mb-3">
        <span className="block text-sm font-semibold text-zinc-600 mb-2">
          Topic
        </span>
        <input
          type="text"
          id="subject"
          placeholder="Object-oriented programming in Java"
          className="font-geistmono appearance-none w-full p-3 border border-zinc-200 placeholder-zinc-400 text-zinc-700 rounded-md focus:outline-none focus:ring-zinc-300 text-sm"
        />
      </label>

      <label htmlFor="message" className="block mb-3">
        <span className="block text-sm font-semibold text-zinc-600 mb-2">
          Note
        </span>
        <textarea
          id="message"
          cols={30}
          rows={10}
          required
          placeholder="Paste your note here. (Recommend 1000+ words)"
          className="font-geistmono appearance-none w-full p-3 border border-zinc-200 placeholder-zinc-400 text-zinc-700 rounded-md focus:outline-none focus:ring-zinc-300 text-sm"
        ></textarea>
      </label>
    </>
  );
}