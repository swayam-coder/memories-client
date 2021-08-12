import { AccessToken, RefreshToken } from "./_localstorage";
import jwt from "jsonwebtoken";
import { refresh } from "../redux/actions/auth";

const checkToken = (dispatch) => {
    if(!AccessToken)
            return

    jwt.verify(AccessToken, process.env.ACCESS_TOKEN_SECRET, async (err, response) => {
        if(err) {
            await dispatch(refresh(RefreshToken))
        }
    });
}
export default checkToken;

