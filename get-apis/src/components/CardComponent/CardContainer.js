import React from 'react';
import {useSelector} from "react-redux";
import {v4} from 'uuid';
import { Grid } from "@material-ui/core";
import Card from "../Card";

function CardContainer() {
    const data = useSelector(state=>state.apis);

    return (
        <Grid item>
            <Grid container direction="row" justify="space-around" alignItems="flex-start" spacing={2} >
                {
                    data.map((data) => (
                        <Card key={v4} content={data} />
                    ))
                }
            </Grid>
        </Grid>

    );
}

export default CardContainer;
