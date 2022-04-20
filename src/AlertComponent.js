import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Link from "@mui/material/Link";
import { useAlertReducer } from "./AlertManager";
import { alertInitialState } from "./reducer";
import PropTypes from 'prop-types';


function AlertComponent({ timeLimit, text, link, alertType, id, alertTitle }) {
    const { removeAlert } = useAlertReducer();
    const close = React.useCallback(() => {
        removeAlert(id);
    }, [removeAlert, id]);
    React.useEffect(() => {
        const timeout = setTimeout(close, timeLimit * 1000);
        return () => { clearTimeout(timeout); };
    }, [close, timeLimit]);
    return (<Link id={id} underline="none" target="_blank" href={encodeURI(link)} sx={{ display: "block", pointerEvents: link ? "auto" : "none" }}>
        <Alert href={link} severity={alertType}>
            <AlertTitle>{alertTitle}</AlertTitle>
            {text}
        </Alert>
    </Link>);
}

AlertComponent.defaultProps = alertInitialState;
AlertComponent.propTypes = {
    timeLimit: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  };

export default AlertComponent