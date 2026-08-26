import { createContext } from "react";

export const TreesContext = createContext(0);

export enum Language {
  English = "English",
  French = "French",
}

export interface ITranslation {
  [Language.English]: object;
  [Language.French]: object;
}

export const LanguageContext = createContext(Language.English);


