import {useState} from "react";
import {Button, Grid} from "@mui/material";
import styled from "@emotion/styled";
import {ITranslationFunc, withTranslations} from "@/app/helpers";
import {MainSubtitleDiv, MainTitleDiv} from "@/app/shared-components";
import {Language} from "@/app/providers/context";


const Component = ({t}: { t: ITranslationFunc }) => {
  const [play, setPlay] = useState(false);

  return (
    <section>
      <Grid container spacing={2}>
        <Grid size={12}>
          <TeamContainerDiv>
            <>
              <MainTitleDiv>{t("stepInside")}</MainTitleDiv>
              <MainSubtitleDiv>{t("meetTheHumans")}</MainSubtitleDiv>
              <div>
                {play}
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => setPlay(true)}
                >
                  Play
                </Button>
              </div>
            </>
          </TeamContainerDiv>
        </Grid>
      </Grid>
    </section>
  );
};

// Styled Components

const TeamContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 30vh;
`;

// translations

const translations = {
  [Language.English]: {
    stepInside: "Step inside!",
    meetTheHumans:
      "Meet the humans who make Ecosia and learn what it's like to work here.",
  },
  [Language.French]: {
    stepInside: "Entrez à l'intérieur!",
    meetTheHumans:
      "Rencontrez les humains qui fabriquent Ecosia et découvrez ce que c'est que de travailler ici.",
  },
};

export default withTranslations(translations)(Component);
