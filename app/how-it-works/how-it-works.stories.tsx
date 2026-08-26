import HowItWorksPage from "./how-it-works-component";
import * as Components from "./components";
import {withLanguageControls} from "@/app/helpers";
import type { Meta } from "@storybook/nextjs-vite";

function Index() {
  return <div></div>;
}

const meta = {
  title: "Ecosia/HowItWorks",
  component: Index,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Index>;

export default meta;

export const BrandsComponent = withLanguageControls(Components.BrandsComponent);

export const GraphicsComponent = withLanguageControls(
  Components.GraphicsComponent
);

export const HowItWorksComponent = withLanguageControls(
  Components.HowItWorksComponent
);

export const PlantTreesComponent = withLanguageControls(
  Components.PlantTreesComponent
);

export const ReportsComponent = withLanguageControls(
  Components.ReportsComponent
);

export const HowItWorksPageIndex = withLanguageControls(HowItWorksPage);
