import { Fragment } from "react";

import FinancialComponent from "./financial-component";
import {fetchLastReport} from "@/app/api";
import {useQuery} from "@tanstack/react-query";

export default function Component({
  language,
}: {
  language: string | undefined;
}) {
  const {
    data: report,
    isLoading: reportIsLoading,
    error: reportError,
  } = useQuery({
    queryKey: ["fetchLastReport"],
    queryFn: () => fetchLastReport()
  });

  if (reportIsLoading) return <Fragment>Loading...</Fragment>;
  if (reportError || !report) return <Fragment>An error has occurred</Fragment>;

  return <FinancialComponent {...{ report, language }} />;
}
