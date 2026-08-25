import {NextRequest, NextResponse} from "next/server";
import {ReportData} from "@/app/api/interfaces";

export async function GET(request: NextRequest) {
  const data: ReportData = {
    month: "August",
    year: 2026,
    investmentsInCategories: [
      {
        categoryName: "a",
        amount: 100
      },
      {
        categoryName: "b",
        amount: 200
      },
      {
        categoryName: "c",
        amount: 300
      }
    ],
    investmentsInCountries: [
      {
        countryName: "a",
        amount: 100
      },
      {
        countryName: "b",
        amount: 200
      },
      {
        countryName: "c",
        amount: 300
      }
    ]
  };
  return NextResponse.json(data);
}
