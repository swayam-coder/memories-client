import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import { Paper } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { NameInput } from './Input';
import { ConfirmPassword } from './Input';
import { GoogleLogin } from "react-google-login"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signup } from "../../redux/actions/auth"
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { schema } from "../../Validation/Auth";
import { useSelector } from "react-redux";
import './Auth.css';

const useStyles = makeStyles((theme) => ({ 
    root: {
        padding: "30px 0px",
        width: '30%',
        margin: 'auto',
        position: "relative",
        top: 60,
        [theme.breakpoints.down("sm")]: {
            width: 400,
        }
    },
    root1: {
        padding: "30px 0px",
        width: '30%',
        margin: 'auto',
        position: "relative",
        top: 30,
        [theme.breakpoints.down("sm")]: {
            width: 400,
        }
    },
    button: {
        backgroundColor: "#DD4D3F",
        color: "white"
    },
    btn2: {
        color: "blue"
    },
    signupButton: {
        display: 'block',
        backgroundColor: '#FFCA2C',
        margin: 'auto',
        marginTop: 20,
    }
}))

export default function SignUp() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [formData, setFormData] = useState({firstName: " ", lastName: " ", email: " ", password: null})
    // const authwarning = useSelector(state => state.state?.authdata)

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onTouched' 
    });

    // useEffect(() => {
    //     if(authwarning){
    //         alert(authwarning)
    //     }
    // }, [authwarning])

    const toggleSignup = () => {
        history.push("/login")
        setFormData({firstName: " ", lastName: " ", email: " ", password: null});
    }

    const onSubmit = (data) => {
        if(data) {
            const { firstName, lastName, email, password } = data
            setFormData({firstName, lastName, email, password})
        }
    }

    useEffect(() => {
        if(formData.firstName !== " ") {
            console.log(formData);
            dispatch(signup(formData, history))
        }
    }, [formData])

    const googleSuccess = async (res) => {
        
        const token = res?.tokenId;
        const result = res?.profileObj;
        
        try {
            dispatch({type: "AUTH", payload: {token, result}});
            history.push("/posts");
        } catch (error) {
            console.log(error);
        }
        
    }

    const googleFailure = (res) => {
        console.log(res);
    }

    return (
        <div className="authbackground_dark">
            <Paper elevation={3} className={classes.root1}>
            <h3 className="signup">{"SignUp"}</h3>

            <form style={{width: "70%", margin: "auto"}} onSubmit={handleSubmit(onSubmit)}>
                {/* name fields */}
                <NameInput formData={formData} register={register} errors={errors} />
                
                {/* email field */}
                <label className="form-label Label">Email</label>
                <input type="email" {...register("email")} className={`form-control ${errors?.email && "is-invalid"}`} />
                {errors.email?.type === "email" && <label id="passwordHelp" class="text-danger">{errors.email?.message}</label>}
                {errors.email?.type === "required" && <label id="passwordHelp" class="text-danger">{errors.email?.message}</label>}

                {/* password field */}
                <ConfirmPassword formData={formData} register={register} errors={errors} />
                
                {/* submit button */}
                <Button type="submit" variant="contained" className={classes.signupButton}>{"SignUp"}</Button>
            </form>

            <br />

            <p className="signup">OR</p>
            <div className="buttons">
            <GoogleLogin 
                clientId="316313260853-bsfl2laem9ma945ses2g9144t0cvmr51.apps.googleusercontent.com"
                render={renderProps => (
                    <Button variant="contained" className={classes.button} onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        <span><i class="fab fa-google"></i>&nbsp;Google</span>
                    </Button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy="single_host_origin"
            />
                
                <Button variant="contained" color="primary">
                    <span className={classes.btn1}><i class="fab fa-facebook"></i>&nbsp;Facebook</span>
                </Button>
                <Button className={classes.btn2} onClick={toggleSignup}>Already have an account? Login from here</Button>
            </div>
            </Paper>
        </div>
    )
}
