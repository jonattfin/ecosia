import {Project, ProjectMetadata, ReportData, ReportMetadata, SearchMetadata} from "./interfaces";

export const {httpBaseUrl} = getEnvironment();

export const fetchProjects = async (): Promise<ProjectMetadata> => {
  const res = await fetch(`${httpBaseUrl}/projects`);
  return res.json();
};

export const fetchProjectById = async (
  projectId: string | Number
): Promise<Project> => {
  const res = await fetch(`${httpBaseUrl}/projects/${projectId}`);
  return res.json();
};

export const fetchTags = async () => {
  const res = await fetch(`${httpBaseUrl}/tags`);
  return res.json();
};

export const fetchReports = async (size: number = 12): Promise<ReportMetadata> => {
  const res = await fetch(`${httpBaseUrl}/reports/?size=${size}`);
  return res.json();
};

export const fetchReportById = async (
  reportId: string | string[] | undefined
): Promise<ReportData> => {
  const res = await fetch(`${httpBaseUrl}/reports/${reportId}`);
  return res.json();
};
export const fetchLastReport = async (): Promise<ReportData> => {
  const res = await fetch(`${httpBaseUrl}/reports/last`);
  return res.json();
};
export const searchByQueryAsync = async (
  query: string | undefined,
  size: number = 5,
  page: number = 1
): Promise<SearchMetadata> => {
  const res = await fetch(`${httpBaseUrl}/search?text=${query}&page=${page}&size=${size}`);
  return res.json();
};

function getEnvironment(isDevelopment: boolean = true) {
  return getDevEnvironment();

  function getDevEnvironment() {
    const baseUrl = "http://localhost:3000/api/v1";

    return {
      httpBaseUrl: baseUrl,
    };
  }
}
