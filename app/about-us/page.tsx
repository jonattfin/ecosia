'use client';

import { useContext } from "react";
import AboutUsComponent from "./about-us-component";
import {LanguageContext} from "@/app/providers/context";

export default function Component() {
  const language = useContext(LanguageContext);
  return <AboutUsComponent {...{ language }} />;
}
