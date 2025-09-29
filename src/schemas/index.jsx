import * as yup from "yup";

export const basicSchema = yup.object().shape({
  firstName: yup.string().required("Required characters a-z"),
  lastName: yup.string().required("Required characters a-z"),
  email: yup.string().email("Invalid email format").required("Required"),
  age: yup.number().integer().required("Required a positive integer"),
  password: yup.string().min(6).required("Minimum 6 characters required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("Required"),
});
