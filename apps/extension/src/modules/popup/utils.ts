import { getStorage } from "@/lib/browser";
import { STORAGE_KEYS } from "@/lib/constants";

export const getApiKey = async (): Promise<string> => {
  const result = await getStorage(STORAGE_KEYS.OPENAI_KEY);
  return result[STORAGE_KEYS.OPENAI_KEY] ?? "";
};
