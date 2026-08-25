import _ from 'lodash';
import {loremIpsum} from "lorem-ipsum";

export const testData = {
  projects: _.range(1, 10)
    .map((id) => ({
      id,
      name: `project_${id}`,
      description: loremIpsum(),
      title: `title_${id}`,
      treesPlanted: 100,
      hectaresRestored: 100,
      yearSince: 2018,
      imageUrl: 'url',
      tags: []
    })),
  tags: _.range(1, 10)
    .map(id => ({id, title: `title_${id}`, subtitle: `subtitle_${id}`})),
  reports: _.range(1, 10)
    .map(id => ({month: `month_${id}`, year: 2022, investmentsInCategories: [], investmentsInCountries: []})),
  queries: _.range(1, _.random(10, 100))
    .map(id => ({id, url: `url${id}`, snippet: `snippet${id}`, name: `name${id}`})),
  categoryInvestment: _.range(1, 10)
    .map(id => ({categoryName: `category_${id}`, amount: _.random(100, 1000)})),
  countryInvestment: _.range(1, 10)
    .map(id => ({countryName: `country_${id}`, amount: _.random(100, 1000)}))
}
