import React from 'react'

export default function Profile({User}) {
    return (
        <>
            <div class="card mb-3" style={{maxWidth: 540}}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="..." class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{User.name}</h5>
                            <p class="card-text">{User.email}</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
