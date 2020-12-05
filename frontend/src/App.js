// react 
import React from "react";

// material-ui
import { Box, Button, Typography } from "@material-ui/core"
import { CssBaseline } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

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

    function handleClickStart() {
        alert("lol")
    }

    return (
        <ThemeProvider theme={dukeRemoteExperienceTheme}>
            <CssBaseline />

            {/* title */}
            <Box align="center" mt={10}>
                <Typography>Remote Duke Experience</Typography>
            </Box>

            {/* button */}
            <Box align="center" p={3}>
                <Button
                    onClick={handleClickStart}
                    variant="contained"
                    color="primary"
                >
                    start
                </Button>
            </Box>

            <Box align="center" p={3}>
                <Button
                    variant="contained"
                    color="secondary"
                >
                    start
                </Button>
            </Box>

            <Box align="center">

                {JSON.stringify(scenes)}
                {scenes.map(scene => {
                    return <Box>
                        <Typography variant="h3">{scene.name}</Typography>
                    </Box>

                })}
            </Box>
        </ThemeProvider>
    );
}

export default App