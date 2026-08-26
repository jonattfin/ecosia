import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import {ITranslationFunc, withTranslations} from "@/app/helpers";
import {AppColor, MainSubtitleDiv, MainTitleDiv, Image} from "@/app/shared-components";
import * as Images from './images';
import {Language} from "@/app/providers/context";

const Component = ({ t }: { t: ITranslationFunc }) => {
  const imageProps = { width: 300, height: 0 };
  imageProps.height = imageProps.width * 0.7;

  return (
    <section>
      <Grid container spacing={2}>
        <Grid size={12}>
          <div>&nbsp;</div>
          <MainTitleDiv data-test="countries-title">
            {t("whereAreTreesPlanted")}
          </MainTitleDiv>
          {/*<MainSubtitleDiv data-test="countries-subtitle">*/}
          {/*  {t("wePlantIn30Countries")}*/}
          {/*</MainSubtitleDiv>*/}
          <div>&nbsp;</div>
        </Grid>
        <Grid size={{xs:12, xl: 6}}>
          <Image src={Images.BrazilImage} alt="brazil" {...imageProps} />
          <div>&nbsp;</div>
          <NameDiv>Brazil</NameDiv>
          <TextDiv>{t("treesInBrasil")}</TextDiv>
        </Grid>
        <Grid size={{xs:12, xl: 6}}>
          <Image
            src={Images.BurkinaFasoImage}
            alt="burkina faso"
            {...imageProps}
          />
          <div>&nbsp;</div>
          <NameDiv>Burkina Faso</NameDiv>
          <TextDiv>{t("treesInBurkinaFaso")}</TextDiv>
        </Grid>
        <Grid size={{xs:12, xl: 6}}>
          <Image src={Images.IndonesiaImage} alt="indonesia" {...imageProps} />
          <div>&nbsp;</div>
          <NameDiv>Indonesia</NameDiv>
          <TextDiv>{t("treesInIndonesia")}</TextDiv>
        </Grid>
        <Grid>&nbsp;</Grid>
      </Grid>
      <div>&nbsp;</div>
    </section>
  );
};

// Styled Components

const NameDiv = styled.div`
  padding: 1%;
  border-left: 5px solid ${AppColor.Teal};
  text-transform: uppercase;
`;

const TextDiv = styled.div`
  padding-top: 2%;
`;

// translations

const translations = {
  [Language.English]: {
    whereAreTreesPlanted: "Where are your trees being planted?",
    wePlantIn30Countries: "We plant in 30+ countries with local organizations",
    treesInBrasil:
      "Your trees in Brazil protect thousands of endangered plants and animals.",
    treesInBurkinaFaso:
      "By planting trees in Burkina Faso, you restore desertified land to its former fertility.",
    treesInIndonesia:
      "In Indonesia, your searches bring back forests on former palm oil plantations while creating alternative sources of income.",
  },
  [Language.French]: {
    whereAreTreesPlanted: "Où vos arbres sont-ils plantés?",
    wePlantIn30Countries:
      "Nous plantons dans plus de 30 pays avec des organisations locales",
    treesInBrasil:
      "Vos arbres au Brésil protègent des milliers de plantes et d'animaux en voie de disparition.",
    treesInBurkinaFaso:
      "En plantant des arbres au Burkina Faso, vous redonnez aux terres désertifiées leur fertilité d'antan.",
    treesInIndonesia:
      "En Indonésie, vos recherches ramènent des forêts sur d'anciennes plantations de palmiers à huile tout en créant des sources alternatives de revenus.",
  },
};

export default withTranslations(translations)(Component);
