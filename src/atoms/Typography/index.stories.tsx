import React from "react";
import Typography from ".";

import { ThemeProvider } from "@mui/material";
import baseTheme from "../../../utils/theme";

export default {
  title: "Atoms/Typography",
  component: Typography,
};

const Template = ({
  children,
  ...args
}: {
  children: React.ReactNode;
  args?: any;
}) => (
  <ThemeProvider theme={baseTheme}>
    <Typography {...args}>{children}</Typography>
  </ThemeProvider>
);

export const Header = Template.bind({});