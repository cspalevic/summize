import { SSE } from "sse.js";

const BASE_URL = "https://api.openai.com/v1";
const STOP_TOKEN = "[DONE]";

type Choice = {
  text: string;
  index: number;
  logprobs: number | null;
  finish_reason: string | null;
};

type Completion = {
  id: string;
  object: "text_completion";
  created: number;
  model: string;
  choices: Choice[];
};

type Length = 25 | 50 | 100;

type CompletionOptions = {
  length?: Length;
  onMessage: (text: string) => void;
  onEnd: () => void;
};

/**
 * OpenAI text predictions API
 * https://platform.openai.com/docs/api-reference/completions
 * @param url
 * @param onMessage
 */
export const getCompletions = (
  apiKey: string,
  url: string,
  { onMessage, onEnd, length = 100 }: CompletionOptions
) => {
  const source = new SSE(`${BASE_URL}/completions`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    method: "POST",
    payload: JSON.stringify({
      model: "text-davinci-003",
      prompt: `Summarize the following article for me in ${length} words or less: ${url}`,
      max_tokens: 2048,
      stream: true,
    }),
  });

  source.addEventListener("message", (event: never) => {
    const { data } = event;
    if (data === STOP_TOKEN) {
      onEnd();
      return;
    }
    const completion = JSON.parse(data) as Completion;
    const text = completion.choices[0].text;
    onMessage(text);
  });

  source.stream();
};
