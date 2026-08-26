import {Grid} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";
import styled from "@emotion/styled";
import {ITranslationFunc, withTranslations} from "@/app/helpers";
import { ReportData } from "@/app/api/interfaces";
import {LinkDiv, MainSubtitleDiv, MainTitleDiv, Pie} from "@/app/shared-components";
import {Language} from "@/app/providers/context";

const Component = ({
                     t,
                     report,
                   }: {
  t: ITranslationFunc;
  report: ReportData;
}) => {
  return (
    <MainSection>
      <Grid container spacing={2}>
        <Grid size={6}>
          <MainTitleDiv data-test="reports-title">
            {t("monthlyReports")}
          </MainTitleDiv>
          <div>&nbsp;</div>
          <MainSubtitleDiv>
            {t("ourRevenue").replace(
              "[month]",
              `${report.month} ${report.year}`
            )}
          </MainSubtitleDiv>
          <ContentDiv>{t("reportsDescription")}</ContentDiv>
        </Grid>
        <Grid size={{xs:0, xl:2}}>
          &nbsp;
        </Grid>
        <Grid size={{xs:6, xl:4}}>
          <PieContainerDiv>
            <Pie data={getPieData(report)}/>
          </PieContainerDiv>
        </Grid>
        <Grid size={12}>
          <LinkDiv>
            <Link href="blog?id=reports">
              <>
                {t("exploreReports")}
                <ChevronRightIcon fontSize="small"/>
              </>
            </Link>
          </LinkDiv>
        </Grid>
      </Grid>
    </MainSection>
  );
};

const getPieData = (report: ReportData) => {
  return report.investmentsInCategories.map(({categoryName, amount: value}) => {
    return {
      id: categoryName,
      label: categoryName,
      value,
    };
  });
};

// Styled Components

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 35vh;
`;

const ContentDiv = styled.div`
  padding-top: 20px;
  font-size: larger;
`;

const PieContainerDiv = styled.div`
  width: 350px;
  height: 300px;
`;

// translations

const translations = {
  [Language.English]: {
    monthlyReports: "Monthly financial reports",
    ourRevenue: "Our revenue in [month]",
    reportsDescription:
      "Our monthly reports show how much ad revenue we made from your searches, how we spent it, and how many trees this helped us plant.",
    exploreReports: "Explore our financial reports ",
  },
  [Language.French]: {
    monthlyReports: "Rapports financiers mensuels",
    ourRevenue: "Notre chiffre d'affaires en [month]",
    reportsDescription:
      "Nos rapports mensuels montrent combien de revenus publicitaires nous avons tirés de vos recherches, comment nous les avons dépensés et combien d'arbres cela nous a aidés à planter.",
    exploreReports: "Explorez nos rapports financiers",
  },
};

export default withTranslations(translations)(Component);
