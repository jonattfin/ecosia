interface IMetadata {
  page: number;
  size: number;
  count: number;
}

export interface SearchMetadata extends IMetadata {
  searches: ResultQuery[];
}

export interface ResultQuery {
  url: string;
  snippet: string;
  name: string;
}

export interface CountryInvestment {
  countryName: string;
  amount: number;
}

export interface CategoryInvestment {
  categoryName: string;
  amount: number;
}

export interface ReportMetadata extends IMetadata {
  reports: ReportData[];
}

export interface ReportData {
  month: string;
  year: number;
  investmentsInCategories: CategoryInvestment[];
  investmentsInCountries: CountryInvestment[];
}

export interface ProjectMetadata extends IMetadata {
  projects: Project[];
}

export interface Project {
  id: number;
  name: string;
  scope: string;
  description: string;
  title: string;
  treesPlanted: string;
  hectaresRestored: string;
  yearSince: number;
  imageUrl: string;
  tags: Tag[];
}

export interface Tag {
  id: number;
  title: string;
  subtitle: string;
}
