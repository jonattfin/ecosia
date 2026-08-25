import {NextRequest, NextResponse} from "next/server";

import _ from 'lodash';

export async function GET(request: NextRequest) {
  const data = _.range(1, 10)
    .map(id => ({month: `month_${id}`, year: 2022, investmentsInCategories: [], investmentsInCountries: []}));
  return NextResponse.json({
    reports: data
  });
}
