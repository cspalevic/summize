import React, { useState } from "react";
import { Button } from "@/components/Button";
import { Loading } from "@/components/Loading";
import { getCurrentUrl, getStorage } from "@/lib/browser";
import { getCompletions } from "@/lib/openai";
import { STORAGE_KEYS } from "@/lib/constants";

export const Popup = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [loadingResults, setLoadingResults] = useState<boolean>(false);

  const handleMessage = (text: string) => {
    setResult((currentResult) => (currentResult ?? "").concat(text));
  };

  const handleEnd = () => {
    setLoadingResults(false);
  };

  const reset = () => {
    setResult(null);
  };

  const getApiKey = async (): Promise<string> => {
    const result = await getStorage(STORAGE_KEYS.OPENAI_KEY);
    return result[STORAGE_KEYS.OPENAI_KEY] ?? "";
  };

  const summize = async () => {
    try {
      const [apiKey, url] = await Promise.all([getApiKey(), getCurrentUrl()]);
      setLoadingResults(true);
      getCompletions(apiKey, url, {
        onMessage: handleMessage,
        onEnd: handleEnd,
      });
    } catch (error: unknown) {
      const message = (error as Error).message;
      setErrorMessage(message);
    }
  };

  if (!result) {
    if (loadingResults)
      return (
        <div className="h-4/5 flex items-center justify-items-center">
          <Loading />
        </div>
      );

    return (
      <div className="h-full flex items-center justify-center">
        <div className="flex flex-col">
          <Button text="Summmize!" onClick={summize} />
          {errorMessage && (
            <span className="text-rose-700">{errorMessage}</span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto flex flex-col-reverse px-4 pb-6">
      {!loadingResults && (
        <div className="flex justify-center mt-2">
          <Button text="Reset" onClick={reset} />
        </div>
      )}
      <p className="text-slate-200 text-left">{result}</p>
    </div>
  );
};
