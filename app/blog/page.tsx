'use client';

import {useSearchParams} from "next/navigation";
import {Suspense, useContext} from "react";

import BlogComponent, {BlogProps} from "./blog-component";
import {LanguageContext} from "@/app/providers/context";
import {useQuery} from "@tanstack/react-query";

const useProjects = () => {
  const {
    data,
    isPending,
    error,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await fetch("/api/projects/all");
      return await response.json();
    }
  });

  return {
    isPending,
    data,
    error,
  }
}

const useReports = () => {
  const {
    data,
    isPending,
    error,
  } = useQuery({
    queryKey: ["reports"],
    queryFn: async () => {
      const response = await fetch("/api/reports/all");
      return await response.json();
    }
  });

  return {
    isPending,
    data,
    error,
  }
}

function InternalComponent() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id') || "projects";

  const language = useContext(LanguageContext);

  const {data: projectsData, isPending: projectsArePending, error: projectsError} = useProjects();
  const {data: reportsData, isPending: reportsArePending, error: reportsError} = useReports();

  if (projectsArePending || reportsArePending) return "Loading...";
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
      <InternalComponent/>
    </Suspense>
  )
}
