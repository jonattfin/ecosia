import {useState} from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {createTheme, ThemeProvider} from "@mui/material/styles";

import Switch from '@mui/material/Switch';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';

import {useRouter} from "next/navigation";

import {Language} from "@/app/providers/context";

import {withTranslations} from "@/app/helpers";
import Tabs from '@mui/material/Tabs';
import {FormControlLabel, FormGroup} from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

const Component = ({changeLanguage, t, language}: any) => {
  const router = useRouter();

  const otherLanguage: Language =
    language == Language.English ? Language.French : Language.English;

  const [value, setValue] = useState('home');
  const [checked, setChecked] = useState(true);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    router.push(newValue);
  };

  const handleChangeLanguage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    changeLanguage(otherLanguage);
  };

  return (
    <Box sx={{flexGrow: 1}}>
      <ThemeProvider theme={darkTheme}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            </Typography>
            <Box
              sx={{display: {xs: "none", md: "flex"}}}
              component={"section"}
            >
              <Box>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="wrapped label tabs example"
                >
                  <Tab
                    value="home"
                    label={t("home")}
                    wrapped
                  />
                  <Tab value="how-it-works" label={t("howItWorks")}/>
                  <Tab value="mobile" label={t("mobileApp")}/>
                  <Tab value="privacy" label={t("privacy")}/>
                  <Tab value="about-us" label={t("aboutUs")}/>
                </Tabs>
              </Box>
              <FormGroup>
                <FormControlLabel control={<Switch checked={checked} onChange={handleChangeLanguage}/>} label={""}/>
              </FormGroup>
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
};

// translations

const translations = {
  [Language.English]: {
    home: "Home",
    howItWorks: "How Ecosia works",
    aboutUs: "About us",
    mobileApp: "Mobile app",
    privacy: "Privacy",
  },
  [Language.French]: {
    home: "Home",
    howItWorks: "Comment fonctionne Ecosia",
    aboutUs: "Qui sommes-nous",
    mobileApp: "Application mobile",
    privacy: "Vie privée",
  },
};

export default withTranslations(translations)(Component);
