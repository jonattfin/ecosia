import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import styled from "@emotion/styled";

import _ from "lodash";

import { ITranslationFunc } from "@/app/helpers";
import { Grid } from "@mui/material";
import { AppColor, Pie } from "@/app/shared-components";
import React, { Fragment } from "react";
import { ReportData } from "@/app/api/interfaces";

export interface ReportsProps {
  t: ITranslationFunc;
  reports: ReportData[];
}

export default function Component({ t, reports }: ReportsProps) {
  const [month, setMonth] = React.useState(0);

  const handleMonthChange = (event: SelectChangeEvent) => {
    setMonth(parseInt(event.target.value));
  };

  const getReport = () => {
    return reports[month];
  };

  const currentReport = getReport();

  const getPieData = () => {
    return currentReport.investmentsInCategories.map(({ categoryName, amount }) => {
      return {
        id: categoryName,
        label: categoryName,
        value: amount,
      };
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid size={{xs:4, xl:4}}>
        <InputLabel id="month-select-label">Month</InputLabel>
        <Select
          labelId="month-select-label"
          id="month-select"
          value={month.toString()}
          label="Month"
          onChange={handleMonthChange}
        >
          {reports.map((report, index) => {
            return (
              <MenuItem key={`month_${report.month}_year${report.year}`} value={index}>
                {`${report.month}/${report.year}`}
              </MenuItem>
            );
          })}
        </Select>
        <CenteredContainerDiv>
          <TitleHeader>{t("title")}</TitleHeader>
          <SubtitleParagraph>{t("aboutTransparency")}</SubtitleParagraph>
        </CenteredContainerDiv>
      </Grid>
      <Grid size={{xs:4, xl:4}}>
        <Card variant="outlined">
          <CardContent>
            <CardDiv>
              <h1>
                {formatMoney(
                  _.sumBy(currentReport.investmentsInCategories, (i) => i.amount)
                )}
              </h1>
            </CardDiv>
          </CardContent>
          <CardDiv>{t("totalIncome")}</CardDiv>
        </Card>
        <br />
        <CenteredContainerDiv>
          {currentReport.investmentsInCategories.map(({ categoryName, amount }) => {
            return (
              <Fragment key={categoryName}>
                <SubtitleParagraph>
                  {categoryName} {formatMoney(amount)}
                </SubtitleParagraph>
              </Fragment>
            );
          })}
        </CenteredContainerDiv>
      </Grid>
      <Grid size={{xs:4, xl:4}}>
        <Card variant="outlined">
          <CardContent>
            <CardDiv>
              <h1>
                {formatMoney(
                  _.sumBy(
                    currentReport.investmentsInCategories.filter((i) =>
                      i.categoryName.toLowerCase().includes("trees")
                    ),
                    (i) => i.amount
                  )
                )}
              </h1>
            </CardDiv>
          </CardContent>
          <CardDiv>{t("treesFinanced")}</CardDiv>
        </Card>
        <PieContainerDiv>
          <Pie data={getPieData()} />
        </PieContainerDiv>
      </Grid>
      {currentReport.investmentsInCountries.length > 0 && (
        <Grid size={{xs:4, xl:4}}>
          <CenteredContainerDiv>
            Countries:
            {currentReport.investmentsInCountries.map(({ countryName, amount }) => {
              return (
                <ChipContainer key={countryName}>
                  <Chip label={countryName} />
                  {formatMoney(amount)}
                </ChipContainer>
              );
            })}
          </CenteredContainerDiv>
        </Grid>
      )}
    </Grid>
  );
}

function formatMoney(money: number) {
  return <Fragment>&euro;{money.toLocaleString()}</Fragment>;
}

// Styled Components

const TitleHeader = styled.h1`
  color: ${AppColor.Teal};
  text-transform: uppercase;
`;

const SubtitleParagraph = styled.p`
  font-size: larger;
`;

const ChipContainer = styled.div`
  font-size: larger;
`;

const CardDiv = styled.div`
  text-align: center;
`;

const CenteredContainerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const PieContainerDiv = styled.div`
  width: 400px;
  height: 400px;
`;
