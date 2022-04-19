import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Link from "@mui/material/Link";
import { useAlertReducer } from "./AlertManager";


function AlertComponent({ timeLimit, text, link, alertType, id, alertTitle }) {
    const { removeAlert } = useAlertReducer();
    const close = React.useCallback(() => {
        removeAlert(id);
    }, [removeAlert, id]);
    React.useEffect(() => {
        const timeout = setTimeout(close, timeLimit);
        return () => { clearTimeout(timeout); };
    }, [close, timeLimit]);
    return (<Link id={id} underline="none" href={link} sx={{ display: "block", pointerEvents: link ? "auto" : "none" }}>
        <Alert  href={link} severity={alertType}>
            <AlertTitle>{alertTitle}</AlertTitle>
            {text}
        </Alert>
    </Link>);
}

export default AlertComponent