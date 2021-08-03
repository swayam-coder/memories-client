import React from 'react'

export const NameInput = ({ formData, handleChange, register, errors }) => {
    return (
        <>
            <div className="row">
                    <div className="col-sm-6">
                        <label className="form-label">First Name</label>
                        <input {... register("firstName")} type="text" className={`form-control ${errors?.firstName && "is-invalid"}`} name="firstName" />
                        {errors.firstName?.type === "required" && <label id="passwordHelp" class="text-danger">{errors.firstName?.message}</label>}
                    </div>
                    <div className="col-sm-6">
                        <label className="form-label">Last Name</label>
                        <input {...register("lastName")} type="text" name="lastName" className="form-control" />
                    </div>
            </div>
        </>
    )
}

export const ConfirmPassword = ({ formData, handleChange, register, errors, isSignedUp }) => {
    const InvalidPassword = (err) => {
        return (
            <>
                <label className="form-label Label">Confirm Password</label> 
                <input {...register("confirmpassword")} type="password" class="form-control is-invalid" id="inputPassword" />
                {err.type === "required" && <label id="passwordHelp" class="text-danger">{err.message}</label>}
                {err.type === "oneOf" && <label id="passwordHelp" class="text-danger">{err.message}</label>}
            </>
        )
    }

    const ValidPassword = () => {
        return(
            <>
                <label className="form-label Label">Confirm Password</label>
                <input {...register("confirmpassword")} type="password" name="confirmpassword" className="form-control" />
            </>
            )
    }

    return (
        <>
            <div className="row">
                    <div className="col-sm-6 spassword">
                        <label className="form-label Label">Password</label>
                        <input {...register("password")} id="signuppassword" type="password" name="password" className={`form-control ${errors?.password && "is-invalid"}`} />

                        {errors.password?.type === "required" && <label id="passwordHelp" class="text-danger">{errors.password?.message}</label>}
                        {errors.password?.type === "min" && <label id="passwordHelp" class="text-danger">{errors.password?.message}</label>}
                        {errors.password?.type === "max" && <label id="passwordHelp" class="text-danger">{errors.password?.message}</label>}
                    </div>
                    <div className="col-sm-6">
                        {/* {confirmPassword !== null ? (confirmPassword === formData.password ? ValidPassword() : InvalidPassword()) : ValidPassword() }  */}
                        {errors ? (errors?.confirmpassword ? InvalidPassword(errors?.confirmpassword) : ValidPassword()): ValidPassword() }
                    </div>
            </div>
        </>
    )
}

// client ci run