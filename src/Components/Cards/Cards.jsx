import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import style from "./Cards.module.css";
import CountUp from "react-countup"
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading.....'
    }
    return (
        <div className={style.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Injected</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                        <Typography color="textSecondary">Real date</Typography>
                        <Typography variant="body2">Under of active cases of Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5"><CountUp
                            start={0}
                            end={recovered.value}
                            duration={2.5}
                            separator=','
                        /></Typography>
                        <Typography color="textSecondary">Real date</Typography>
                        <Typography variant="body2">Under of recoveries cases from Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5"><CountUp
                            start={0}
                            end={deaths.value}
                            duration={2.5}
                            separator=','
                        /></Typography>
                        <Typography color="textSecondary">Real date</Typography>
                        <Typography variant="body2">Under of deaths cased of Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
