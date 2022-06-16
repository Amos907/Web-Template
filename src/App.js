import CssBaseline from "@mui/material/CssBaseline";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

import Website from "./routes/website";
import PageNotFound from "./routes/website/404/PageNotFound";
import Chat from "./components/static/Chat/Chat";

import Auth from "./routes/Auth";
import theme from "./theming";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline>
          <ToastContainer />

          <Routes>
            <Route path="/" element={<Website />} />
            <Route path="auth/*" element={<Auth />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>

          {/* <Chat /> */}
        </CssBaseline>
      </BrowserRouter>
    </ThemeProvider>
  );
}
