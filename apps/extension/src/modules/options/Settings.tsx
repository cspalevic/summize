import { Input } from "@/components/Input";
import { getStorage, setStorage } from "@/lib/browser";
import { STORAGE_KEYS } from "@/lib/constants";
import React, { useEffect, useState } from "react";

export const Settings = () => {
  const [apiKey, setApiKey] = useState<string>("");

  const handleSave: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const items: { [key: string]: string } = {
      [STORAGE_KEYS.OPENAI_KEY]: apiKey,
    };
    await setStorage(items);
  };

  useEffect(() => {
    const find = async () => {
      const result = await getStorage(STORAGE_KEYS.OPENAI_KEY);
      if (STORAGE_KEYS.OPENAI_KEY in result) {
        setApiKey(result[STORAGE_KEYS.OPENAI_KEY]);
      }
    };
    find();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl text-slate-200">Settings</h1>
      <form className="flex flex-col gap-5" onSubmit={handleSave}>
        <Input label="API Key" onChange={setApiKey} value={apiKey} />
        <div className="flex justify-center">
          <button
            className="text-slate-200 text-lg px-6 py-1 border-blue-400 border-2 border-solid rounded-md transition duration-75 hover:bg-blue-400 hover:text-black"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
