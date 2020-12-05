// react 
import React from "react";

// material-ui
import { CssBaseline } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// duke remote experience
import scenes from "../../public/data/scenes.json"
import HomeScreen from "./components/HomeScreen"
import Scene from "./components/Scene"

const dukeRemoteExperienceTheme = createMuiTheme({
    palette: {
        background: {
            default: "#012169",
        },
        primary: {
            main: "#00539B",
        },
        secondary: {
            main: "#C84E00"
        },
        whiteness: {
            main: "#FFFFFF"
        },
        type: "dark",
    },
    shadows: ["none"],
    //font-family: 'EB Garamond', serif;
    typography: {
        "fontFamily": `"EB Garamond", "Times New Roman", serif`,
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500
       },
});
function App() {

    return (
        <ThemeProvider theme={dukeRemoteExperienceTheme}>
            <CssBaseline />

            <Router>
                <Switch>
                    <Route path="/scene">
                        <Scene scene={scenes[0]} />
                    </Route>
                    <Route exact path="/">
                        <HomeScreen scenes={scenes} />
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App