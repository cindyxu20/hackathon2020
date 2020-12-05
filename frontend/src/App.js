// react 
import React from "react";

// material-ui
import { Box, Button, Typography } from "@material-ui/core"
import { CssBaseline } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

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

    function handleClickStart() {
        alert("lol")
    }

    return (
        <ThemeProvider theme={dukeRemoteExperienceTheme}>
            <CssBaseline />
            <Box align="center" mt={10}>
                {/* title */}
                <Typography>Remote Duke Experience</Typography>

                {/* button */}
                <Button
                    onClick={handleClickStart}
                    variant="contained"
                    color="primary"
                >
                    start
            </Button>
                <Button
                    onClick={handleClickStart}
                    variant="contained"
                    color="secondary"
                >
                    start
            </Button>
            </Box>
        </ThemeProvider>
    );
}

export default App