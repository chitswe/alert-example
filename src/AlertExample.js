import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import * as React from "react";
import {  alertInitialState } from "./reducer";
import Button from '@mui/material/Button';
import { useAlertReducer } from "./AlertManager";
function AlertExample() {
    const [alert, setAlert] = React.useState(alertInitialState);
    const { showAlert } = useAlertReducer();

    const handleShowAlert = React.useCallback(() => {
        showAlert(alert);
    }, [showAlert, alert]);
    const { timeLimit,
        text,
        link,
        alertType,
        alertTitle } = alert;
    return (<Container maxWidth="sm">
        <Box margin={2}>
            <Stack spacing={2}>
                <TextField value={alertTitle} label="Title" onChange={(e) => { setAlert({ ...alert, alertTitle: e.target.value }) }} />
                <TextField value={text} label="Message" onChange={(e) => { setAlert({ ...alert, text: e.target.value }) }} />
                <TextField value={link} label="Link" onChange={(e) => { setAlert({ ...alert, link: e.target.value }) }} />
                <TextField value={timeLimit} label="Time limit" onChange={(e) => { setAlert({ ...alert, timeLimit: e.target.value }) }} type="number" />
                <FormControl fullWidth>
                    <InputLabel id="alert-type-label">Alert type</InputLabel>
                    <Select
                        labelId="alert-type-label"
                        id="demo-simple-select"
                        value={alertType}
                        label="Age"
                        onChange={(e) => { setAlert({ ...alert, alertType: e.target.value }) }}
                    >
                        <MenuItem value="info">Info</MenuItem>
                        <MenuItem value="success">Success</MenuItem>
                        <MenuItem value="warning">Warning</MenuItem>
                        <MenuItem value="error">Error</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" color='secondary' onClick={handleShowAlert}>Show Alert</Button>
            </Stack>
        </Box>
    </Container>);
}

export default AlertExample;