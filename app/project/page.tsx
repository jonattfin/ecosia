'use client';

import {useSearchParams} from "next/navigation";

import ProjectComponent from "./project-component";
import {useQuery} from "@tanstack/react-query";
import {Suspense} from "react";


const useProject = (id: string | null) => {
  const {
    data,
    isPending,
    error,
  } = useQuery({
    queryKey: ["project", id],
    queryFn: async () => {
      const response = await fetch("/api/projects/id");
      return await response.json();
    }
  });

  return {
    isPending,
    data,
    error,
  }
}

function Page() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const {data, isPending, error} = useProject(id);

  if (isPending) return "Loading...";
  if (error || !data) return "An error has occurred: ";

  return <ProjectComponent {...{project: data}} />;
}


export default function Component() {
  return (
    <Suspense fallback={<>...</>}>
      <Page/>
    </Suspense>
  )
}
