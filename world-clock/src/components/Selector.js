import React from "react"
import { Grid, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core"
import { useState } from "react"
import { useDispatch } from "react-redux";
import zones from "./timezones.json"
import {CHANGE_TIMEZONE} from "../redux/actions"

function Selector() {
    let dispatch = useDispatch();
    let [timezone, setTimezone] = useState("Europe/Kiev");

    return (
        <React.Fragment>
            <Grid item>
                <FormControl className="formControl">
                    <InputLabel id="label">timezone</InputLabel>
                    <Select
                        labelId="label"
                        id="demo-mutiple-name"
                        style={{ width: "230px" }}
                        value={timezone}
                        onChange={(e) => {
                            setTimezone(e.target.value)
                            dispatch({type: CHANGE_TIMEZONE, payload: e.target.value })
                        }}
                    >
                        {zones.map((name) => (
                            <MenuItem key={name} value={name}>
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

            </Grid>
        </React.Fragment>
    );

}
export default Selector;