'use client';

import {useState, useEffect, useContext} from "react";
import {useRouter} from "next/navigation";
import {debounce} from "lodash";

import HomeComponent from "./home-component";
import {ResultQuery} from "@/app/api/interfaces";
import {LanguageContext} from "@/app/providers/context";


export default function Component() {
  const [counter, setCounter] = useState(0);
  const [query, setQuery] = useState("");
  const [data, setData] = useState<ResultQuery[]>([]);

  const onSearch = (q: string) => {
    setQuery(q);
    console.log(`called with ${q}`);
  };

  const router = useRouter();
  const onSearchValueSelected = (q: string) => router.push(`/search?q=${q}`);

  useEffect(() => {
    async function fetchData() {
      const fetchedData = {
        searches: []
      }
      setData(fetchedData.searches);
    }

    if (query.length > 0) {
      fetchData()
        .catch((reason) => console.error(reason));
    }

  }, [query]);

  const language = useContext(LanguageContext);

  return (
    <HomeComponent
      {...{
        q: query,
        counter,
        onSearch: debounce(onSearch, 10),
        onSearchValueSelected,
        language,
        data,
      }}
    />
  );
}
