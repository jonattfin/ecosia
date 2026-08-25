'use client';

import {Suspense, useEffect, useState} from "react";
import {useSearchParams, useRouter} from "next/navigation";
import {debounce} from "lodash";

import SearchComponent, {SearchProps} from "./search-component";
import {ResultQuery} from "@/app/api/interfaces";
import {searchByQueryAsync} from "@/app/api";

type IndexSearchProps = object

type ResultsState = {
  page: number;
  size: number;
  count: number;
  searches: ResultQuery[];
}

function InternalComponent({}: IndexSearchProps) {
  const searchParams = useSearchParams();
  const q = searchParams.get('q');

  const [resultsObject, setResultsObject] = useState<ResultsState>({
    page: 1,
    size: 0,
    count: 0,
    searches: [],
  });

  const [progress, setProgress] = useState(false);

  const router = useRouter();

  const doSearch = (query: string) => {
    console.log(query);
    router.push(`/search?q=${query}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      setProgress(true);

      const data = await searchByQueryAsync(q?.toString());

      setResultsObject(data);
      setProgress(false);
    };

    if (q) {
      fetchData()
        .catch(reason => console.error(reason));
    }

    // incrementTreeCount(); // TODO
  }, [q]);

  const props: SearchProps = {
    query: (q || "").toString(),
    resultsObject,
    doSearch: debounce(doSearch, 200),
    progress,
  };

  return <SearchComponent {...props} />;
}

export default function Component() {
  return (
    <Suspense fallback={<>...</>}>
      <InternalComponent />
    </Suspense>
  )
}
