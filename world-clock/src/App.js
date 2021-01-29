import React, {Component} from 'react';
import {Container, Grid, MenuItem, InputLabel, Input, FormControl, Options} from "@material-ui/core";
import Select from "@material-ui/core/Select";
import moment from "moment-timezone";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.names = ['America/Los_Angeles', 'America/Denver', 'America/Detroit', 'Atlantic/Canary',
            'Europe/Lisbon', 'Europe/Monaco', 'Europe/Sofia', 'Europe/Kiev', 'Europe/Volgograd',
            'Asia/Almaty', 'Asia/Chita', 'Asia/Shanghai', 'Asia/Tokyo'];
        this.state = {
            time: moment().tz('Europe/Kiev').format('HH:mm:ss'),
            timezone: "Europe/Kiev",
            name: ""
        }

    }
    onChange = (e) => {
        console.log(e.target.value);
        this.setState({
            name: e.target.value,
            timezone: e.target.value
        })
        clearInterval();

    }
    setTime = () => {
        setInterval(() => {
            this.setState(
                {time: moment().tz(String(this.state.timezone)).format('HH:mm:ss')}
            )
        }, 1000);
    }

    render() {
        this.setTime();
        return (
            <Container maxWidth='sm'>
                <Grid container direction='column' justify='center' alignItems='center'>
                    <Grid item className='title'> World Clock</Grid>
                    <Grid item className='time'>{this.state.time}</Grid>
                    <Grid item> current timezone:{this.state.timezone}</Grid>
                    <Grid item>

                        <FormControl className="formControl">
                            <InputLabel id="label">timezone</InputLabel>
                            <Select
                                labelId="label"
                                id="demo-mutiple-name"
                                style={{width: "150px"}}
                                value={this.state.name}
                                onChange={this.onChange}

                            >
                                {this.names.map((name) => (
                                    <MenuItem key={name} value={name}>
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                    </Grid>

                </Grid>
            </Container>
        );
    }
}

export default App;
