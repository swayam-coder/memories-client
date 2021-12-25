import { WARNING, SUCCESS } from "../constants/message";

const reducerobj = { warnings: null, successmsgs: null }

const messageProvider = (msg = reducerobj, action) => {
    switch (action.type) {
        case WARNING:
            return {...msg, warnings: action.payload}
        case SUCCESS:
            return {...msg, successmsgs: action.payload}
        default:
            return msg;
    }
}

export default messageProvider;