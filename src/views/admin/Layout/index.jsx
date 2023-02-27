import { Outlet } from "react-router-dom";
import { ColorModeContext, useMode } from "../../../context/themeContext";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./TopBar";
import Sidebar from "./sidebar";

const Layout = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <TopBar />
            <Outlet />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Layout;
