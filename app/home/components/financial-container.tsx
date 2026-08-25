import {Fragment} from "react";

import FinancialComponent from "./financial-component";
import {useQuery} from "@tanstack/react-query";

export const useLastReport = () => {
  const {
    data,
    isPending,
    error,
  } = useQuery({
    queryKey: ["last-report"],
    queryFn: async () => {
      const response = await fetch("/api/reports/last-report");
      return await response.json();
    }
  });

  return {
    isPending,
    data,
    error,
  }
}

export default function Component({
                                    language,
                                  }: {
  language: string | undefined;
}) {
  const {data, isPending, error} = useLastReport();

  if (isPending) return <Fragment>Loading...</Fragment>;
  if (error || !data) return <Fragment>An error has occurred</Fragment>;

  return <FinancialComponent {...{report: data, language}} />;
}
