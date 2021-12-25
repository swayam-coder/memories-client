import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { SUCCESS } from '../redux/constants/message'
import moment from 'moment';

export default function SuccessModal() {
    const message = useSelector(state => state.msg?.successmsgs)
    const dispatch = useDispatch()

    return (
        <>
        {message &&
            <div class="modal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Error</h5>
                            <small class="text-muted">{moment(message.time).format('D/MM/YYYY, h:mm:ss a')}</small>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>{message.message}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => dispatch({type: SUCCESS, payload: null})}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    )
}
