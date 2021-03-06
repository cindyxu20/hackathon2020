// react
import React, { useState } from "react";

import { useHistory } from "react-router-dom"

// material-ui
import { Box, Button, Typography, Fade } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

export default function HomeScreen() {

  const history = useHistory()
  const [fadeOut, setFadeOut] = useState(false)

  function handleClickStart() {
    setFadeOut(true)
    setTimeout(() => {
      history.push('/scene')
    }, 2500)
  }

  return (
    <Fade timeout={2500} in={!fadeOut}>
      <div
        class="overlay"
        style={{
          height: "100vh",
          background: "url(./img/front-page-entrance.jpg)",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* title */}
        <Grid
          container
          style={{ height: "100vh" }}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Box bgcolor="primary">
              <Box align="center">
                <Typography color="whiteness" variant="h4">
                  Welcome to the Remote University Experience
              </Typography>
                <Typography color="whiteness" variant="h6">
                  Explore Duke while gaining insights, resources, and advice<br></br> to help you succeed in an online learning environment!
              </Typography>
              </Box>

              {/* button */}
              <Box align="center" p={3}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleClickStart}
                >
                  start
              </Button>
              </Box>

            <Box align="center" p={3}>
              <Button href = "./credit" variant="contained" color="primary">
                  Credits
              </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </Fade>
  );
}
