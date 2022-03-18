// 1. Import the extendTheme function
import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  gold: "#BC9C22",
};

const colorScheme = withDefaultColorScheme({
  colorScheme: "#BC9C22",
  components: ["Button", "Badge"],
});

export const extendThemeChakra = extendTheme({ colors, colorScheme });
