import {NextRequest, NextResponse} from "next/server";

import repository from "@/app/api/repository";

export async function GET(request: NextRequest) {
  const data = await repository.getReports();
  return NextResponse.json({
    reports: data
  });
}
