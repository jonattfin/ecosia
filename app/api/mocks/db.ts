import {factory, manyOf, oneOf, primaryKey} from "@mswjs/data";

const models = {
  project: {
    id: primaryKey(Number),
    name: String,
    scope: String,
    description: String,
    title: String,
    treesPlanted: Number,
    hectaresRestored: Number,
    yearSince: Number,
    imageUrl: String,
    tags: manyOf('tag')
  },
  tag: {
    id: primaryKey(Number),
    title: String,
    subtitle: String
  },
  report: {
    month: primaryKey(String),
    year: Number,
    investmentsInCategories: manyOf('categoryInvestment'),
    investmentsInCountries: manyOf('countryInvestment')
  },
  categoryInvestment: {
    categoryName: primaryKey(String),
    amount: Number
  },
  countryInvestment: {
    countryName: primaryKey(String),
    amount: Number
  },
  query: {
    id: primaryKey(Number),
    url: String,
    snippet: String,
    name: String
  }
}

export const db = factory(models);
