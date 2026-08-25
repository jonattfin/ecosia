import {db} from './db';
import {testData} from "@/app/api/mocks/test-data";

export const seedDb = () => {
  if (db.project.count() > 0) {
    return;
  }

  testData.projects.forEach(project =>
    db.project.create(project)
  );

  testData.tags.forEach(tag =>
    db.tag.create(tag)
  );

  // @ts-ignore
  const categoryInvestments = [];
  testData.categoryInvestment.forEach(categoryInvestment => {
    categoryInvestments.push(db.categoryInvestment.create(categoryInvestment))
  });

  // @ts-ignore
  const countryInvestments = [];
  testData.countryInvestment.forEach(countryInvestment => {
    countryInvestments.push(db.countryInvestment.create(countryInvestment));
  })

  testData.reports.forEach(report => {
    // @ts-ignore
    report.investmentsInCategories = _.take(categoryInvestments, _.random(1, _.size(categoryInvestments)));
    // @ts-ignore
    report.investmentsInCountries = _.take(countryInvestments, _.random(1, _.size(countryInvestments)));

    db.report.create(report)
  });

  testData.queries.forEach(query =>
    db.query.create(query)
  )

}
