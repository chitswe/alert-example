import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import * as React from "react";
import { alertInitialState } from "./reducer";
import Button from '@mui/material/Button';
import { useAlertReducer } from "./AlertManager";
function AlertExample() {
    const [alert, setAlert] = React.useState(alertInitialState);
    const { showAlert } = useAlertReducer();   
    const { timeLimit,
        text,
        link,
        alertType,
        alertTitle } = alert;
    const [errors,setErrors] = React.useState({});
    const validate = React.useCallback(() => {
        const errors = {}
        var isValid = true;
        if (!alert.text) {
            errors.text = 'Alert message is required!';
            isValid = false;
        }
        if (!alert.timeLimit || alert.timeLimit < 1) {
            errors.timeLimit = 'Time limit must be greater than zero.';
            isValid = false;
        }
        setErrors(errors);
        return isValid;
    }, [alert,setErrors]);

    React.useEffect(()=>{
        validate();
    },[validate,alert]);

    const handleShowAlert = React.useCallback(() => {
        if(validate())
            showAlert(alert);
    }, [validate,showAlert,alert]);
    return (<Container maxWidth="sm">
        <Box margin={2}>
            <Stack spacing={2}>
                <TextField variant="standard" value={alertTitle} label="Alert Title" onChange={(e) => { setAlert({ ...alert, alertTitle: e.target.value }) }} />
                <TextField variant="standard" value={text} label="Alert Message" error={!!errors.text} helperText={errors.text} onChange={(e) => { setAlert({ ...alert, text: e.target.value }); }} />
                <TextField variant="standard" value={link} label="Reference Link" onChange={(e) => { setAlert({ ...alert, link: e.target.value }) }} />
                <TextField variant="standard" value={timeLimit} label="Time limit(seconds)" error={!!errors.timeLimit} helperText={errors.timeLimit} onChange={(e) => { setAlert({ ...alert, timeLimit: e.target.value }) }} type="number" />
                <FormControl variant="standard" fullWidth>
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