import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import "../styles/ContactPage.css"
import { useContext } from 'react';
import { NotificationContext } from '../contexts/NotificationContext';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  message: Yup.string().required("Required")
});


export const ContactPage = () => {
  const { showNotification } = useContext(NotificationContext)

  const handleContactSubmit = (values, {resetForm}) => {
    showNotification("Submitted your query", "success")
    resetForm()
  }

  return (
      <div className="contact-bg">
      <section className="contact-container">
        <p className='contact-heading'>Contact US</p>
        <div className='contact-form-container'>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validationSchema={validationSchema}
          onSubmit={handleContactSubmit}
        >
          {({ errors, touched }) => (
            <Form className="contact-fields">
              <div className="contact-field-container">
                <p className="contact-label">Name</p>
                <Field
                  type="text"
                  name="name"
                  className="contact-input"
                  placeholder="Freaky Finds"
                />
                <ErrorMessage className="error-message" name="name" component="div" />
              </div>
              <div className="contact-field-container">
                <p className="contact-label">Email</p>
                <Field
                  type="text"
                  name="email"
                  className="contact-input"
                  placeholder="finds@freakyfinds.com"
                />
                <ErrorMessage className="error-message" name="email" component="div" />
              </div>
              <div className="contact-field-container">
                <p className="contact-label">Message</p>
                <Field
                  type="text"
                  name="message"
                  rows="3"
                  component="textarea"
                  className="contact-input"
                  placeholder="Type your concern here..."
                />
                <ErrorMessage className="error-message" name="message" component="div" />
              </div>
              <div className='contact-add-btn-container'>
                <button type="submit" className="contact-add-btn">Submit</button>
              </div>
            </Form>
          )}
        </Formik>
        </div>
      </section>
    </div>
  )
}