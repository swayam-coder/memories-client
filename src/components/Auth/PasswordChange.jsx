import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { verifyToken } from '../../redux/actions/auth';

export default function PasswordChange() {
    const authInfo = (window.location.pathname).split("/");
    const [authenticated, setauthenticated] = useState(false)
    const urlstate = useSelector(state => state.URLstatus)
    const dispatch = useDispatch();

    useEffect(() => {
        if(!authenticated)
            dispatch(verifyToken(authInfo[0], authInfo[1]))
    }, [authenticated])

    useEffect(() => {
        if(urlstate !== null && urlstate.urlStatus === "verified")
            setauthenticated(true)
    }, [urlstate])
    
    return (
        <>
        {
            authenticated &&
            <div>
                <h1>hi</h1>
            </div>
        }
        </>
    )
}
