import type { Preview } from "@storybook/react";
import { extendTheme } from "@chakra-ui/react";
import { theme } from "./theme/theme";

const preview: Preview = {
  parameters: {
    chakra: { theme: extendTheme(theme) },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
