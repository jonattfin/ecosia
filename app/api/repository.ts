import range from 'lodash/range';
import last from 'lodash/last';
import {loremIpsum} from "lorem-ipsum";
import {Project, ReportData} from "@/app/api/interfaces";


class Repository {
  private readonly projects: Project[] = [];
  private readonly reports: ReportData[] = [];

  constructor() {
    this.projects = Repository.createProjects();
    this.reports = Repository.createReports();
  }

  async getProjects(): Promise<Project[]> {
    return this.projects;
  }

  async getProject(id: number): Promise<Project | undefined> {
    return this.projects.find(p => p.id === id);
  }

  async getReports(): Promise<ReportData[]> {
    return this.reports;
  }

  async getLastReport(): Promise<ReportData | undefined> {
    return last(this.reports);
  }

  private static createProjects(): Project[] {
    return range(1, 10)
      .map((id) => ({
        id,
        name: `project_${id}`,
        description: loremIpsum(),
        title: `title_${id}`,
        treesPlanted: 100,
        hectaresRestored: 100,
        yearSince: 2018,
        imageUrl: 'url',
        scope: "",
        tags: [{
          id: 1,
          title: "Partners",
          subtitle: "partners"
        },
          {
            id: 2,
            title: "Challenges",
            subtitle: "Challenges"
          },
          {
            id: 3,
            title: "Wildlife protected",
            subtitle: "Wildlife protected"
          }]
      }));
  }

  private static createReports(): ReportData[] {
    return range(1, 10)
      .map(id => ({
          month: `month_${id}`,
          year: 2026,
          investmentsInCategories: range(1, 3).map((index) => ({
            categoryName: `category_${index}`,
            amount: (index + 1) * 10,
          })),
          investmentsInCountries: range(1,5).map((index) => ({
            countryName: `country ${index.toString()},`,
            amount: (index + 1) * 10,
          }))
        })
      );
  }
}


const repository = new Repository();
export default repository;