import React, { useRef } from "react";
import { Box, Button, Typography } from "@material-ui/core"

function App() {

    function handleClickStart() {
        alert("lol")
    }


    return (
        <Box align="center" mt={10}>
            {/* title */}
            <Typography>Remote Duke Experience</Typography>

            {/* button */}
            <Button
                onClick={handleClickStart}
                variant="contained"
                color="secondary"
            >
                start
            </Button>
        </Box>
    );
}

export default App