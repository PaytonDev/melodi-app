import { extendTheme, type ThemeConfig, withDefaultColorScheme } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme(
  {
    config,
    styles: {
      global: {
        "::-webkit-scrollbar": {
          width: "8px",
        },
        "::-webkit-scrollbar-track": {
          width: "6px",
        },
        "::-webkit-scrollbar-thumb": {
          background: "gray.700",
          borderRadius: "full",
        },
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "teal" })
);

export default theme;
