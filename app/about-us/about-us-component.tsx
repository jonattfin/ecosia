import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import Head from "next/head";

import * as Components from "./components";
import {Language} from "@/app/providers/context";
import {AppColor} from "@/app/shared-components";


export default function Component({ language }: { language?: Language }) {
  const title = "About Ecosia and the team";

  return (
    <section>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
      <Grid container>
        {/* section */}
        <BlueGrid size={12}>
          <Components.BannerComponent {...{ language }} />
        </BlueGrid>
        {/* section */}

        {/* section */}
        <GreyGrid size={{xl:3}}>
          &nbsp;
        </GreyGrid>
        <GreyGrid size={{xs:12, xl:6}} >
          <Components.SocialBusinessComponent {...{ language }} />
        </GreyGrid>
        <GreyGrid size={{xl:3}}>
          &nbsp;
        </GreyGrid>
        {/* section */}

        {/* section */}
        <Grid size={{xl:3}}>
          &nbsp;
        </Grid>
        <Grid size={{xs:12, xl:6}}>
          <Components.MeetTheTeamComponent {...{ language }} />
        </Grid>
        <Grid size={{xl:3}}>
          &nbsp;
        </Grid>
        {/* section */}

        {/* section */}
        <GreyGrid size={{xl:3}}>
          &nbsp;
        </GreyGrid>
        <GreyGrid size={{xs: 12, xl:6}}>
          <Components.HireComponent {...{ language }} />
        </GreyGrid>
        <GreyGrid size={{xl:3}}>
          &nbsp;
        </GreyGrid>
        {/* section */}

        {/* section */}
        <Grid size={{xl:4}}>
          &nbsp;
        </Grid>
        <Grid size={{xs: 12, xl:4}}>
          <Components.ContactUsComponent {...{ language }} />
        </Grid>
        <Grid size={{xl:4}}>
          &nbsp;
        </Grid>
        {/* section */}
      </Grid>
    </section>
  );
}

// Styled Components

const BlueGrid = styled(Grid)`
  background-color: ${AppColor.AliceBlue};
`;

const GreyGrid = styled(Grid)`
  background-color: ${AppColor.Grey};
`;
