import { Formik, Form, Field, ErrorMessage } from "formik";

const ContactForm = () => {
  return (
    <div>
      <h1>Please, enter your contact information</h1>
      <Formik
        initialValues={{ email: "", name: "", address: "", phone: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="text" name="phone" />
            <ErrorMessage name="phone" component="div" />
            <Field type="text" name="address" />
            <ErrorMessage name="address" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
