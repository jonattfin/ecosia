import range from 'lodash/range';
import last from 'lodash/last';
import random from 'lodash/random';
import {loremIpsum} from "lorem-ipsum";
import {Project, ReportData, Tag} from "@/app/api/interfaces";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

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
    const tags: Tag[] = ["Partners", "Planting method", "Planting season", "Main threats", "Wildlife protected"].map(t => {
      return {
        id: t,
        title: t,
        subtitle: t,
      }
    })

    return range(0, months.length / 2)
      .map((id) => ({
        id,
        name: `Project ${months[id]}`,
        description: loremIpsum(),
        title: `Project ${months[id]}`,
        treesPlanted: 100,
        hectaresRestored: 100,
        yearSince: 2018,
        imageUrl: "https://picsum.photos/400/400",
        scope: "",
        tags
      }));
  }

  private static createReports(): ReportData[] {
    const categories = ["Marketing", "Infrastructure", "Salaries", "Trees" ];
    const countries = ["Uganda", "Kenia", "Zambia", "Cameroon"];

    return range(0, 7)
      .map(month => ({
          month: months[month],
          year: 2026,
          investmentsInCategories: range(0, categories.length).map((index) => ({
            categoryName: categories[index],
            amount: (index + 1) * 1000 * random(1, 10),
          })),
          investmentsInCountries: range(0,countries.length).map((index) => ({
            countryName: countries[index],
            amount: (index + 1) * 1000 * random(1, 10),
          }))
        })
      );
  }
}


const repository = new Repository();
export default repository;