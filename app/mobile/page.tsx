'use client';

import Head from "next/head";
import { useContext } from "react";


import * as Components from "./components";
import {LanguageContext} from "@/app/providers/context";

export default function Component() {
  const title = "Ecosia for mobile";
  const language = useContext(LanguageContext);
  return (
    <section>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
      <Components.BannerComponent {...{ language }} />
    </section>
  );
}
