import type { Meta } from "@storybook/nextjs-vite";

import { withLanguageControls } from "@/app/helpers";
import BlogComponent, { BlogProps } from "./blog-component";
import repository from "@/app/api/repository";

const meta = {
  title: "Ecosia/Blog",
  component: BlogComponent,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof BlogComponent>;

export default meta;

const props: BlogProps = {
  id: 1,
  projects: await repository.getProjects(),
  reports: await repository.getReports(),
  language: "",
};

export const BlogIndex = withLanguageControls(BlogComponent, props);