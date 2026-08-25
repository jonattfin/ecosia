'use client';

import { useContext } from "react";
import HowItWorksComponent from "./how-it-works-component";
import {LanguageContext} from "@/app/providers/context";

export default function Component() {
  const language = useContext(LanguageContext);
  return <HowItWorksComponent {...{ language }} />;
}
