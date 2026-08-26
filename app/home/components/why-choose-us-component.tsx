import {Grid} from "@mui/material";
import styled from "@emotion/styled";

import {
  AppColor,
  Image,
  MainTitleDiv,
  MainSubtitleDiv,
} from "../../shared-components";
import * as Images from "./images";
import {ITranslationFunc, withTranslations} from "../../helpers";
import {Language} from "@/app/providers/context";

const Component = ({t}: { t: ITranslationFunc }) => {
  const imageProps = {width: 75, height: 0};

  return (
    <section>
      <MainDiv>
        <Grid container spacing={2}>
          <Grid size={12}>
            <div>&nbsp;</div>
            <MainTitleDiv>{t("why")}</MainTitleDiv>
            {/*<MainSubtitleDiv>{t("wePutPeople")}</MainSubtitleDiv>*/}
          </Grid>
          <Grid size={{md: 12, xl: 6}}>
            <MainDiv>
              <Image src={Images.ProfitsImage} alt="profits" {...imageProps} />
              <ContainerDiv>
                <TitleDiv>{t("notForProfit")}</TitleDiv>
                <div>{t("weDedicate")}</div>
              </ContainerDiv>
            </MainDiv>
          </Grid>
          <Grid size={{md: 12, xl: 6}}>
            <MainDiv>
              <Image src={Images.WorldImage} alt="world" {...imageProps} />
              <ContainerDiv>
                <TitleDiv>{t("isPoweredByRenewable")}</TitleDiv>
                <div>{t("ourSolarPanels")}</div>
              </ContainerDiv>
            </MainDiv>
          </Grid>
          <Grid size={{md: 12, xl: 6}}>
            <MainDiv>
              <Image src={Images.PrivacyImage} alt="privacy" {...imageProps} />
              <ContainerDiv>
                <TitleDiv>{t("privacyFirst")}</TitleDiv>
                <div>{t("weAnonymize")}</div>
              </ContainerDiv>
            </MainDiv>
          </Grid>
          <Grid size={{md: 12, xl: 6}}>
            <MainDiv>
              <Image src={Images.CoinImage} alt="coin" {...imageProps} />
              <ContainerDiv>
                <TitleDiv>{t("weAreTransparent")}</TitleDiv>
                <div>{t("wePublishReports")}</div>
              </ContainerDiv>
            </MainDiv>
          </Grid>
          <Grid size={12}>
            &nbsp;
          </Grid>
        </Grid>
      </MainDiv>
    </section>
  );
};

// Styled Components

const MainDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const ContainerDiv = styled.div`
    font-size: larger;
    padding-left: 20px;
    padding-top: 1rem;
`;

const TitleDiv = styled.div`
    color: ${AppColor.Teal};
    padding-bottom: 10px;
    text-align: center;
`;

// translations

const translations = {
  [Language.English]: {
    why: "Why choose Ecosia?",
    wePutPeople: "We put people and planet before profit",
    notForProfit: "We’re a not-for-profit business",
    weDedicate:
      "We dedicate 100% of our profits to climate action, with at least 80% financing tree-planting projects.",
    isPoweredByRenewable: "Ecosia is powered by 200% renewable energy",
    ourSolarPanels:
      "Our solar panels produce twice the amount of energy needed to power all searches with renewables.",
    privacyFirst: "We always put your privacy first",
    weAnonymize:
      "We anonymize your searches and don’t create a profile of you. We’re interested in trees, not your data.",
    weAreTransparent: "We are transparent about everything we do",
    wePublishReports:
      "We publish detailed financial reports and frequent updates from our tree planting projects.",
    otherReasons: "Other reasons",
  },
  [Language.French]: {
    why: "Pourquoi choisir Ecosia?",
    wePutPeople: "Nous plaçons les gens et la planète avant le profit",
    notForProfit: "Nous sommes une entreprise à but non lucratif",
    weDedicate:
      "Nous consacrons 100% de nos bénéfices à l'action climatique, avec au moins 80% de financement de projets de plantation d'arbres.",
    isPoweredByRenewable:
      "Ecosia est alimenté à 200% par de l'énergie renouvelable",
    ourSolarPanels:
      "Nos panneaux solaires produisent deux fois plus d'énergie que nécessaire pour alimenter toutes les recherches avec des énergies renouvelables.",
    privacyFirst: "Nous accordons toujours la priorité à votre vie privée",
    weAnonymize:
      "Nous anonymisons vos recherches et ne créons pas de profil de vous. Nous nous intéressons aux arbres, pas à vos données.",
    weAreTransparent: "Nous sommes transparents sur tout ce que nous faisons",
    wePublishReports:
      "Nous publions des rapports financiers détaillés et des mises à jour fréquentes de nos projets de plantation d'arbres.",
    otherReasons: "Autres raisons",
  },
};

export default withTranslations(translations)(Component);
