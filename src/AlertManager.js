
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import AlertComponent from "./AlertComponent";
import Stack from "@mui/material/Stack";
import { addAlert, removeAlert } from "./reducer";
function AlertManager() {
    const alerts = useSelector(state => state.alerts);

    return (<Stack sx={{ position: "absolute", top: 16, right: 16, width: 400 }} spacing={2}>
        {
            alerts.map((alert) => (<AlertComponent key={alert.id} {...alert} />))
        }
    </Stack>)
}

export function useAlertReducer() {
    const dispatch = useDispatch();
    return {
        showAlert: (alert) => { dispatch(addAlert(alert)) },
        removeAlert: (id) => { dispatch(removeAlert(id)) }
    }
}

export default AlertManager;