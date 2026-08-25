import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import Head from "next/head";

import * as Components from "./components";
import {AppColor} from "@/app/shared-components";
import {Language} from "@/app/providers/context";

export default function Component({ language }: { language?: Language }) {
  const title = "What is Ecosia? - The search engine that plants trees";

  return (
    <section>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
      <Grid container>
        <BlueGrid size={{xl:3}}>
          &nbsp;
        </BlueGrid>
        <BlueGrid size={{xs:12, xl:6}}>
          <Components.PlantTreesComponent {...{ language }} />
        </BlueGrid>
        <BlueGrid size={{xl:3}}>
          &nbsp;
        </BlueGrid>

        {/* Brands section */}
        <Grid size={12}>
          <Components.BrandsComponent />
        </Grid>
        {/* Brands section */}

        {/* How it works section */}
        <Grid size={{xl:3}}>
          &nbsp;
        </Grid>
        <Grid size={{xs: 12, xl:6}}>
          <Components.HowItWorksComponent {...{ language }} />
        </Grid>
        <Grid size={{xl:3}}>
          &nbsp;
        </Grid>
        {/* How it works section */}

        {/* Graphics section */}
        <BlueGrid size={{xl:3}}>
          &nbsp;
        </BlueGrid>
        <BlueGrid size={{xs: 12, xl:6}}>
          <Components.GraphicsComponent {...{ language }} />
        </BlueGrid>
        <BlueGrid size={{xl:3}}>
          &nbsp;
        </BlueGrid>
        {/* Graphics section */}

        {/* Reports section */}
        <Grid size={{xl:3}}>
          &nbsp;
        </Grid>
        <Grid size={{xs: 12, xl:6}}>
          <Components.ReportsComponent {...{ language }} />
        </Grid>
        <Grid size={{xl:3}}>
          &nbsp;
        </Grid>
        {/* Reports section */}
      </Grid>
    </section>
  );
}

// Styled Components

const BlueGrid = styled(Grid)`
  background-color: ${AppColor.AliceBlue};
`;
