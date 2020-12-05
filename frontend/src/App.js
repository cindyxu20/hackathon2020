import React, { useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Box } from "@material-ui/core"

function Demo() {
    return (
        <div>
            <Router>
                <NavBar />
                <Box p={2}>
                    <Switch>
                        <Route path="/draw">
                            <Draw />
                        </Route>
                        <Route path="/view">
                            <View />
                        </Route>
                        <Route exact path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Box>
            </Router>
        </div>
    );
}

export default Demo