import * as yup from "yup";

const schema = yup.object().shape({
    email: yup.string().email("Enter a valid email").required("Email is required"),
    password: yup.string().min(6, "Atleast 6 Characters").max(20, "Must be less than 20 characters").required(),
    // loginpassword: yup.string().required("Password is required"),
    firstName: yup.string().required("Firstname is required"),
    lastName: yup.string(),
    confirmpassword: yup.string().required("This field is required").oneOf([yup.ref("password"), null], "Passwords don't match") //yup.ref returns an array containing the input value
})

const schema1 = yup.object().shape({
    email: yup.string().email("Enter a valid email").required("Email is required"),
    password: yup.string().required("Password is required")
})

export  {schema, schema1};
