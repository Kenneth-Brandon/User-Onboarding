import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import axios from "axios";
import { withFormik, Form, Field } from "formik";

const userForm = ({ values, errors, touched, status }) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    if (status) {
      setUser([...user, status]);
    }
  }, [status]);

  return (
    <div className="user-from">
      <Form>
        <label>
          Name:
          <Field type="text" name="name" placeholder="name" />
          {touched.name && errors.name && (
            <p className="error">{errors.name}</p>
          )}
        </label>

        <label>
          Email:
          <Field type="text" name="email" placeholder="email" />
        </label>

        <label>
          Password:
          <Field type="password" name="password" placeholder="password" />
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
        </label>

        <label>
          Role:
          <Field component="select" name="role">
            <option>Choose a role</option>
            <option value="I'm a pro!">I'm a pro!</option>
            <option value="Team Lead/Section Lead">
              Team Lead/Section Lead
            </option>
            <option value="Student">Student</option>
            <option value="Unicorn">Unicorn</option>
            <option value="Wizard">Wizard</option>
          </Field>
        </label>

        <label>
          Terms Of Service
          <Field type="checkbox" name="terms" checked={values.terms} />
        </label>

        <button>Submit!</button>
      </Form>
      {user.map(users => (
        <ul key={users.id}>
          <li>Name: {users.name}</li>
          <li>Email: {users.email}</li>
        </ul>
      ))}
    </div>
  );
};

const formikUserForm = withFormik({
    mapPropsToValues({name, email, password, terms, role}) {
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            terms: terms || false,
            role: role || ""
        }
    }

    validationSchema: Yup.object().shape({
        name: Yup.string().required("Name is a required field"),
        password: Yup.string().required("password required")
    })

    handleSubmit(values, {setStatus}) {
        axios
        .post(" https://reqres.in/api/users", values)
        .then(response => {
            setStatus(res.data);
            console.log("Here is your response!", response);
        })
        .catch(error => console.log("Sorry, an error has occurred", error.response))
    }
})

(userForm);
console.log("This is the higher order component:", formikUserForm);

export default formikUserForm;

