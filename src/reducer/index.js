import update from "immutability-helper";
import { nanoid } from 'nanoid'


export const alertInitialState = {
    timeLimit: 10,
    text: "",
    link: "",
    alertType: "info",
    id: "",
    alertTitle: ""
};

const ADD_ALERT = "ALERT/ADD";
const REMOVE_ALERT = "ALERT/REMOVE";

export const addAlert = alert => ({
    type: ADD_ALERT,
    payload: { ...alert, id: alert.id? alert.id:nanoid() }
});
export const removeAlert = id => ({
    type: REMOVE_ALERT,
    payload: id
});
const alertReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_ALERT:
            return [...state, { ...alertInitialState, ...action.payload }];
        case REMOVE_ALERT:
            const index = state.findIndex(s => s.id === action.payload);
            if (index > -1) {
                return update(state, {
                    $splice: [[index, 1]]
                });
            } else
                return state;
        default:
            return state;
    }
};

export default alertReducer;