import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Alert, Button, Paper } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { IUser } from "../interfaces";
import PasswordInputField from "./PasswordInputField";
import TextInputField from "./TextInputField";

interface MyFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
}

const validate = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  username: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Username is required"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .max(20, "Must be less than 20 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password does not match")
    .required("Confirm password is required"),
});

interface AppProps {
  setUser: React.Dispatch<React.SetStateAction<IUser | AxiosResponse>>;
}

const RegisterForm = ({ setUser }: AppProps) => {
  const initialValues: MyFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  };

  const [alert, setAlert] = useState<boolean>();
  const navigate = useNavigate();

  useEffect(() => {
    const timeId = setTimeout(() => {
      setAlert(false);
    }, 10000);

    return () => {
      clearTimeout(timeId);
    };
  }, [alert]);

  return (
    <div
      className="registration-page"
      style={{ height: "100vh", width: "100vw" }}
    >
      {alert ? (
        <Alert
          severity="error"
          onClose={() => {
            setAlert(false);
          }}
        >
          Duplicated email/username. Please choose another email
          address/username.
        </Alert>
      ) : (
        <></>
      )}
      <div style={{ height: "calc(50% - 459px)" }} />
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            actions.setSubmitting(false);
          }, 400);

          axios
            .post(`${process.env.REACT_APP_BACKEND_URL}/users`, {
              email: values.email,
              firstName: values.firstName,
              lastName: values.lastName,
              password: values.confirmPassword,
              username: values.username,
            })
            .then((data) => {
              setUser(data.data);
              navigate("/");
            })
            .catch(function (error) {
              setAlert(true);
            });
        }}
      >
        {(formik) => (
          <Paper
            elevation={24}
            sx={{
              marginLeft: "15vw",
              maxWidth: "500px",
              fontSize: "1.5rem",
              backgroundColor: "white",
              padding: "20px",
              // border: "5px rgb(90,253,90) solid",
              borderRadius: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <ArrowBackIcon
                fontSize="large"
                sx={{ cursor: "pointer" }}
                onClick={() => navigate("/")}
              />
              <h1 style={{ margin: "0" }}>Sign Up</h1>
              <div style={{ width: "35px", height: "35px" }} />
            </div>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                formik.handleSubmit(e);
              }}
            >
              <TextInputField label="First Name" name="firstName" />
              <TextInputField label="Last Name" name="lastName" />
              <TextInputField label="Email" name="email" />
              <TextInputField label="Username" name="username" />
              <PasswordInputField label="Password" name="password" />
              <PasswordInputField
                label="Confirm Password"
                name="confirmPassword"
              />
              <div style={{ display: "flex", gap: "40px" }}>
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => formik.resetForm()}
                >
                  Reset
                </Button>
              </div>
            </Form>
          </Paper>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
