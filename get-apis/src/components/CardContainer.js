import React from 'react';


import { Grid } from "@material-ui/core"
import Card from "./Card"

function CardContainer({data}) {

    

    return (
        <Grid item>
            <Grid container direction="row" justify="space-around" alignItems="flex-start" spacing={2} >
                {
                    data.map((data, index) => (
                        <Card key={index} content={data} />
                    ))
                }
            </Grid>
        </Grid>

    );
}

export default CardContainer;