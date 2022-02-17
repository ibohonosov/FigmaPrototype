import React from "react";
import * as Yup from "yup";
import { Field, Formik } from "formik";
import classes from "./TeamsForm.module.css";

const TeamsForm = (props) => {
  const validationsSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[aA-zZ\s]+$/, "Only letters")
      .required("Required"),
    city: Yup.string()
      .matches(/^[aA-zZ\s]+$/, "Only letters")
      .required("Required"),
    abbreviation: Yup.string()
      .matches(/^[aA-zZ\s]+$/, "Only letters")
      .required("Required"),
  });

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          city: "",
          abbreviation: "",
          conference: "East",
        }}
        validationSchema={validationsSchema}
        validateOnBlur
        onSubmit={(values) => props.AddTeam(values)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <div className={classes.form}>
            <div className={classes.wrapp}>
              <label htmlFor={`name`}>Name</label>
              <input
                type={"text"}
                name={`name`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {touched.name && errors.name && (
                <p className={classes.errors}>{errors.name}</p>
              )}
            </div>
            <div className={classes.wrapp}>
              <label htmlFor={`city`}>City</label>
              <input
                type={"text"}
                name={`city`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.city}
              />
              {touched.city && errors.city && (
                <span className={classes.errors}>{errors.city}</span>
              )}
            </div>
            <div className={classes.wrapp}>
              <label htmlFor={`abbreviation`}>Abbreviation</label>
              <input
                type={"text"}
                name={`abbreviation`}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Only Upper Case"
                value={values.abbreviation.toLocaleUpperCase()}
              />
              {touched.abbreviation && errors.abbreviation && (
                <p className={classes.errors}>{errors.abbreviation}</p>
              )}
            </div>
            <div className={classes.wrapp}>
              <label htmlFor={`conference`}>Conference</label>
              <Field
                className={classes.selectField}
                component="select"
                name="conference"
              >
                <option value="East">East</option>,
                <option value="West">West</option>
              </Field>
            </div>
            <div>
              <button
                className={classes.formButton}
                disabled={!isValid && !dirty}
                onClick={handleSubmit}
                type={`submit`}
              >
                Add team
              </button>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default TeamsForm;
