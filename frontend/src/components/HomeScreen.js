// react
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"

// material-ui
import { Box, Button, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

export default function HomeScreen() {

  const history = useHistory()
  const [fadeOut, setFadeOut] = useState(false)

  function handleClickState() {

    setFadeOut(true)


    setTimeout(() => {
      
    }, 4000)
  }

  return (
    <Fade timeout={4000} in={!fadeOut}>
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
                  Explore Duke while gaining insights, resources, and advice to help you succeed in an online learning environment!
              </Typography>
              </Box>

              {/* button */}
              <Box align="center" p={3}>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to={"/scene"}
                >
                  start
              </Button>
              </Box>

              <Box align="center" p={3}>
                <Button href="credit.html" variant="contained" color="secondary">
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
