import { useCallback, useEffect, useState } from "react";
import { useAddMessageMutation } from "../store/channelsApi";

export default function NewMessageForm({ selectedChannel }: { selectedChannel: number }) {
  const [addMessage] = useAddMessageMutation();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (inputValue.trim() !== "") {
        addMessage({ message: inputValue, id: selectedChannel });
        setInputValue("");
      }
    },
    [inputValue, selectedChannel]
  );

  useEffect(() => {
    setInputValue("");
  }, [selectedChannel]);

  return (
    <div className="basis-1/3 border-slate-100 border p-3 mr-3 rounded-lg">
      <h2 className="text-2xl text-center text-violet-700 font-bold">New message</h2>
      <hr className="my-1"></hr>
      <form action="submit" onSubmit={handleSubmit} className="flex flex-col aitems-center">
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          placeholder="Your message"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></textarea>
        <button
          className={`text-lg text-center p-2 mt-2 rounded-lg ${
            inputValue.trim() !== ""
              ? "bg-amber-400 hover:scale-95"
              : "disabled bg-gray-300 cursor-not-allowed"
          }`}
        >
          Add message
        </button>
      </form>
    </div>
  );
}
