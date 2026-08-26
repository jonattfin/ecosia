import * as Components from "./components";
import {withLanguageControls} from "@/app/helpers";
import {ReportData} from "@/app/api/interfaces";
import type { Meta } from "@storybook/nextjs-vite";

const HomeComponent = () => <div>&nbsp;</div>

const meta = {
  title: "Ecosia/Home",
  component: HomeComponent,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof HomeComponent>;

export default meta;

export const SearchComponent = withLanguageControls(
  Components.SearchComponent,
  {
    onSearch: () => { console.log('search')},
    counter: 100,
  }
);

export const CountriesComponent = withLanguageControls(
  Components.CountriesComponent
);

export const MapComponent = withLanguageControls(Components.MapComponent, {
  counter: 100,
});

const report: ReportData = {
  month: "January",
  year: 2022,
  investmentsInCountries: [],
  investmentsInCategories: []
};

export const FinancialComponent = withLanguageControls(
  Components.FinancialComponent,
  {
    report,
  }
);

export const WhyChooseUsComponent = withLanguageControls(
  Components.WhyChooseUsComponent
);

export const JoinUsComponent = withLanguageControls(Components.JoinUsComponent);
