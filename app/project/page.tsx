'use client';

import {useSearchParams} from "next/navigation";


import ProjectComponent, {ProjectProps} from "./project-component";
import {Project} from "@/app/api/interfaces";
import {fetchProjectById} from "@/app/api";
import {useQuery} from "@tanstack/react-query";
import {Suspense} from "react";


type ProjectQuery = {
  data: Project;
  isLoading: boolean;
  error: unknown;
}

function Page() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id') || 0;

  const {
    data: project,
    isLoading: projectIsLoading,
    error: projectError,
  } = useQuery({
    queryKey: ["project", id],
    queryFn:() => fetchProjectById(id)
  }) as ProjectQuery;

  if (projectIsLoading) return "Loading...";
  if (projectError || !project) return "An error has occurred: ";

  const props: ProjectProps = {
    project,
  };

  return <ProjectComponent {...props} />;
}


export default function Component() {
  return (
    <Suspense fallback={<>...</>}>
      <Page />
    </Suspense>
  )
}
