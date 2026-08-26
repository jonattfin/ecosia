import { Grid } from "@mui/material";
import styled from "@emotion/styled";

import { Image } from "@/app/shared-components";
import * as Images from "./images";

export default function Component() {
  const imageProps = { width: 250, height: 0 };

  return (
    <section>
      <Grid container spacing={2}>
        <Grid size={5}>
          {/*<BrandsContainerDiv>*/}
            {getBrands().map((brand, index) => (
              <Image
                src={brand}
                key={`brand_image_${index}`}
                alt="tdlr"
                {...imageProps}
              ></Image>
            ))}
          {/*</BrandsContainerDiv>*/}
        </Grid>
      </Grid>
    </section>
  );
}

function getBrands() {
  const {
    UpWorthyImage,
    ScientificImage,
    GuardianImage,
    SalonImage,
    ForbesImage,
  } = Images;

  return [
    UpWorthyImage,
    ScientificImage,
    GuardianImage,
    SalonImage,
    ForbesImage,
  ];
}

// Styled Components

const BrandsContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 5vh;
  background-color: #ededed;
`;
