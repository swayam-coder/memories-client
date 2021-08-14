import React, { useEffect, useState } from 'react'
import "./Profile.scss"
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { changePasswordSchema } from '../../Validation/Auth';
import { useDispatch } from 'react-redux';
import { confirmPassword } from '../../redux/actions/auth';
import { User } from '../../util/_localstorage';

export default function Profile() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [showChange, setShowChange] = useState(false);
    const [password, setpassword] = useState(null)

    const dispatch = useDispatch();

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(changePasswordSchema),
        mode: 'onTouched' 
    });

    const onSubmit = (data) => {
        if(data)
            setpassword(data.password)
    }

    useEffect(() => {
        if(password !== null){
            dispatch(confirmPassword(password))
        }
    }, [password])

    return (
        <div className="profile">
            <div className={`card mb-3 ${showChange ? "profile-wide": "profile-thin"}`} style={{maxWidth: showChange ? 800 : 600, margin: "auto"}}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={user.result?.imageUrl} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{User.name}</h5>
                            <p class="card-text">{User.email}</p>
                            <p class="card-text"><small class="text-muted">Options:</small></p>
                            <button className="btn btn-secondary btn-sm" onClick={() => setShowChange((prevChange) => !prevChange)}>Change Password</button>
                            {showChange &&
                                <div>
                                    <br />
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <label className="form-label Label1">Password</label>
                                        <input {...register("password")} type="password" className={`form-control ${errors?.password && "is-invalid"}`} />
                                        {errors.password?.type === "required" && <label id="passwordHelp" class="text-danger Label1">{errors.password?.message}</label>}
    
                                        <label className="form-label Label1">Confirm Password</label>
                                        <input {...register("confirmpassword")} type="password" className={`form-control ${errors?.confirmpassword && "is-invalid"}`} />
                                        {errors.confirmpassword?.type === "required" && <label id="passwordHelp" className="text-danger Label1">{errors.confirmpassword?.message}</label>}
                                        {errors.confirmpassword?.type === "oneOf" && <label id="passwordHelp" className="text-danger Label1">{errors.confirmpassword?.message}</label>}
    
                                        <br /> <button type="submit" className="btn btn-outline-secondary btn-sm">Sent Reset Link</button>
                                    </form>
                                </div>
                                }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

//540px