import React from 'react'
import { Box, Button, Typography } from "@material-ui/core"

export default function HomeScreen({scenes}) {
    return (
        <div>
            {/* title */}
            <Box align="center" mt={10}>
                <Typography>Remote Duke Experience</Typography>
            </Box>

            {/* button */}
            <Box align="center" p={3}>
                <Button
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
                    credits
                </Button>
            </Box>

            <Box align="center">
                <Typography>Scenes: </Typography>
                {scenes.map(scene => {
                    return <Box>
                        <Typography variant="h3">{scene.name}</Typography>
                    </Box>

                })}
            </Box>
        </div>
    )
}
