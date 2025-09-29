import { Formik, useFormik } from "formik";
import "./signUpForm.css";
import { basicSchema } from "../schemas";

export function SignUpFormV2() {
  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      age: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  return (
    <div className="signUpForm">
      <div className="signUpFormTitle">
        Hello, welcome to ABC
        <p>Create your account</p>
      </div>
      <form onSubmit={formik.handleSubmit} className="userSignUpForm">
        <div className="userSignUpInput">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
        </div>
        {formik.errors.firstName && formik.touched.firstName && (
          <div className="userInputError">{formik.errors.firstName}</div>
        )}
        <div className="userSignUpInput">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </div>
        {formik.errors.lastName && formik.touched.lastName && (
          <div className="userInputError">{formik.errors.lastName}</div>
        )}
        <div className="userSignUpInput">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            id="age"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.age}
          />
        </div>
        {formik.errors.age && formik.touched.age && (
          <div className="userInputError">{formik.errors.age}</div>
        )}
        <div className="userSignUpInput">
          <label htmlFor="userEmail">Email</label>
          <input
            type="email"
            name="email"
            id="userEmail"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        {formik.errors.email && formik.touched.email && (
          <div className="userInputError">{formik.errors.email}</div>
        )}
        <div className="userSignUpInput">
          <label htmlFor="userPassword">password</label>
          <input
            type="password"
            name="password"
            id="userPassword"
            minLength={6}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        {formik.errors.password && formik.touched.password && (
          <div className="userInputError">{formik.errors.password}</div>
        )}
        <div className="userSignUpInput">
          <label htmlFor="userConfirmPassword">confirm password</label>
          <input
            type="password"
            name="confirmPassword"
            id="userConfirmPassword"
            minLength={6}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            required
          />
        </div>
        {formik.errors.confirmPassword && formik.touched.confirmPassword && (
          <div className="userInputError">{formik.errors.confirmPassword}</div>
        )}
        <button type="submit" className="userSignUpButton">
          Register with us
        </button>
      </form>
      <div className="loginPrompt">
        Already have an account? <a href="/login-form">Login</a>
      </div>
    </div>
  );
}
