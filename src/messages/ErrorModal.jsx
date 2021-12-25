import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { WARNING } from '../redux/constants/message'
import moment from 'moment';

const demo = {message: "demo", time: "demo"}

export default function ErrorModal() {
    const errormessage = demo
    // const errormessage = useSelector(msg => msg.warnings)
    const dispatch = useDispatch()

    return (
        <>
        {
            errormessage && 
            <div class="modal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Error</h5>
                            <small class="text-muted">{moment(errormessage.time).format('D/MM/YYYY, h:mm:ss a')}</small>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>{errormessage.message}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => dispatch({type: WARNING, payload: null})}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    )
}
