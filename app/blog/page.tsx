'use client';

import {useSearchParams} from "next/navigation";
import {Suspense, useContext} from "react";

import {fetchProjects, fetchReports} from "@/app/api";


import BlogComponent, {BlogProps} from "./blog-component";
import {LanguageContext} from "@/app/providers/context";
import {useQuery} from "@tanstack/react-query";

function InternalComponent() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id') || "projects";

  const language = useContext(LanguageContext);

  const {
    isLoading: projectsAreLoading,
    error: projectsError,
    data: projectsData,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects
  });

  const {
    isLoading: reportsAreLoading,
    error: reportsError,
    data: reportsData,
  } = useQuery({
    queryKey: ["reports"],
    queryFn: () => fetchReports()
  });

  if (projectsAreLoading || reportsAreLoading) return "Loading...";
  if (projectsError || reportsError || !projectsData || !reportsData)
    return "An error has occurred...";

  const props: BlogProps = {
    projects: projectsData.projects,
    reports: [...reportsData.reports],
    language,
    id: id == "projects" ? 0 : 1,
  };

  return (
      <BlogComponent {...props}></BlogComponent>
  )
}

export default function Component() {
  return (
    <Suspense fallback={<>...</>}>
      <InternalComponent />
    </Suspense>
  )
}
