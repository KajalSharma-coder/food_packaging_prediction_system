import { createTheme } from "@mui/material/styles";

export const paletteConfig = { primary: "#263c32", secondary: "#b99a63" };

export const appTheme = createTheme({
  palette: {
    mode: "light", primary: { main: paletteConfig.primary, contrastText: "#f8f5ee" }, secondary: { main: paletteConfig.secondary },
    background: { default: "#f7f5ef", paper: "#fffdf8" }, text: { primary: "#26312c", secondary: "#68736d" }, divider: "#e4e0d5",
  },
  typography: {
    fontFamily: '"DM Sans", "Helvetica Neue", Arial, sans-serif',
    h1: { fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 600, letterSpacing: "-.045em" },
    h2: { fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 600, letterSpacing: "-.035em" },
    h3: { fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 600 }, h5: { fontWeight: 700, letterSpacing: "-.02em" }, h6: { fontWeight: 700 }, button: { fontWeight: 700 },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: 4, textTransform: "none", padding: "11px 19px", boxShadow: "none" } } },
    MuiTextField: { defaultProps: { fullWidth: true } },
    MuiCard: { styleOverrides: { root: { boxShadow: "0 12px 32px rgba(38, 60, 50, .06)", border: "1px solid #e8e4da" } } },
  },
});
