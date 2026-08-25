'use client';

import {Container} from "@mui/material";
import React, {useState} from "react";

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { Language, LanguageContext, TreesContext } from "./providers/context";
import * as SharedComponents from './shared-components';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({children}: RootLayoutProps) {
  const [numberOfTrees, setNumberOfTrees] = useState(0);
  const [language, setLanguage] = useState(Language.English);

  const incrementTreeCount = () => {
    setNumberOfTrees((prevValue) => prevValue + 1);
  };

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <html lang={"en"}>
    <body>

    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}/>
      <LanguageContext.Provider value={language}>
        <TreesContext.Provider value={numberOfTrees}>
            <header>
              <SharedComponents.Header {...{changeLanguage}} />
            </header>
            <main>
                {children}
            </main>
            <Container>
              <section>
                <SharedComponents.Links/>
              </section>
              <footer>
                <SharedComponents.Footer/>
              </footer>
            </Container>
        </TreesContext.Provider>
      </LanguageContext.Provider>
    </QueryClientProvider>
    </body>
    </html>
  )
}
