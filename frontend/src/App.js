// react 
import React from "react";

// material-ui
import { CssBaseline } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import HomeScreen from "./components/HomeScreen"

// duke remote experience
import scenes from "../../public/data/scenes.json"

const dukeRemoteExperienceTheme = createMuiTheme({
    palette: {
        background: {
            default: "#f7f3f2",
        },
        primary: {
            main: "#012169",
        },
        secondary: {
            main: "#C84E00"
        },
        type: "light",
    },
    shadows: ["none"],
});
function App() {

    return (
        <ThemeProvider theme={dukeRemoteExperienceTheme}>
            <CssBaseline />
            <HomeScreen scenes={scenes} />
        </ThemeProvider>
    );
}

export default App