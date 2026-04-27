import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#000435",
      light: "#1a237e",
    },
    secondary: {
      main: "#00bcd4",
    },
    background: {
      default: "#f8f9fb",
      paper: "#ffffff",
    },
    text: {
      primary: "#1a1a2e",
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', sans-serif",
    fontSize: 16,
    h3: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
    },
    body1: {
      lineHeight: 1.75,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          transition: "box-shadow 0.2s",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 500,
        },
      },
    },
  },
});

theme = createTheme(theme, {
  typography: {
    h3: {
      [theme.breakpoints.up("xl")]: { fontSize: "3.5rem" },
    },
    h5: {
      [theme.breakpoints.up("xl")]: { fontSize: "1.75rem" },
    },
    h6: {
      [theme.breakpoints.up("xl")]: { fontSize: "1.375rem" },
    },
    body1: {
      [theme.breakpoints.up("xl")]: { fontSize: "1.125rem" },
    },
    body2: {
      [theme.breakpoints.up("xl")]: { fontSize: "1rem" },
    },
    subtitle1: {
      [theme.breakpoints.up("xl")]: { fontSize: "1.125rem" },
    },
    subtitle2: {
      [theme.breakpoints.up("xl")]: { fontSize: "1rem" },
    },
  },
});

export default theme;
