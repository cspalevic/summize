import { Button } from "@/components/Button";
import { Loading } from "@/components/Loading";
import { getCurrentUrl } from "@/lib/browser";
import { getCompletions } from "@/lib/openai";
import React, { useState } from "react";
import { getApiKey } from "./utils";

export const App = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [loadingResults, setLoadingResults] = useState<boolean>(false);

  const handleMessage = (text: string) => {
    setResult((currentResult) => (currentResult ?? "").concat(text));
  };

  const handleEnd = () => {
    setLoadingResults(false);
  };

  const handleError = () => {
    setLoadingResults(false);
    setErrorMessage(
      "Something unexpected happened. Please try again or come again later."
    );
  };

  const reset = () => {
    setResult(null);
  };

  const summize = async () => {
    try {
      const [apiKey, url] = await Promise.all([getApiKey(), getCurrentUrl()]);
      setLoadingResults(true);
      getCompletions(apiKey, url, {
        onMessage: handleMessage,
        onEnd: handleEnd,
        onError: handleError,
      });
    } catch (error: unknown) {
      setErrorMessage(
        "Something unexpected happened. Please try again or come again later."
      );
    }
  };

  if (errorMessage) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="flex flex-col p-4">
          <span className="text-rose-600">{errorMessage}</span>
        </div>
      </div>
    );
  }

  if (result === null) {
    if (loadingResults) {
      return (
        <div className="h-4/5 flex items-center justify-items-center">
          <Loading />
        </div>
      );
    }
    return (
      <div className="h-full flex items-center justify-center">
        <div className="flex flex-col">
          <Button text="Summize!" onClick={summize} />
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
      <p className="text-slate-200 text-left leading-7">{result}</p>
    </div>
  );
};
