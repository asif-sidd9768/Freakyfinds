import { Formik, Field, Form, ErrorMessage, useFormikContext } from 'formik';
import * as Yup from 'yup';
import { useContext, useEffect, useRef } from 'react';
import { addAddressService, editAddressService } from '../../../../services/user/addressService';

import "./AddressForm.css"
import { setUpdatedAddressAction, setUpdatedAddressFailureAction, setUpdatedAddressRequestAction, setUserAction, setUserFailureAction, setUserRequestAction, updateAddressAction } from '../../../../actions/userActions';
import { UserContext } from '../../../../contexts/UserContext';
import { NotificationContext } from '../../../../contexts/NotificationContext';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  mobile: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  city: Yup.string().required('Required'),
  state: Yup.string().required('Required'),
  zip: Yup.string().required('Required'),
  line: Yup.string().required('Required'),
});

export const AddressForm = ({toggleAddNewAddress}) => {
  const { showNotification } = useContext(NotificationContext)
  const { userState, userDispatch } = useContext(UserContext)
  
  const handleAddressSubmit = async (values, {resetForm}) => {
    if(userState.isLoading){
      showNotification("Some work is in progress", "error")
      return 
    }
    userDispatch(setUserRequestAction())
    try {
      const response = await addAddressService(userState?.user?.user?.id, values, userState?.user?.token)
      userDispatch(setUserAction(response.data))
      showNotification("Address added!", "success")
      resetForm()
    }catch(error){
      userDispatch(setUserFailureAction(error.response.data.message))
      showNotification(error.response.data.message, "error")
      resetForm()
    }finally{
      toggleAddNewAddress()
    }
    // Do whatever you need to do with the form values
  };

  const handleAddressEdit = async (values, vals) => {
    if(userState.isLoading) {
      return 
    }
    const isChanged = Object.keys(values).some(
      (key) => values[key] !== initialValues[key]
    );

    if (!isChanged) {
      showNotification("Nothing has changed", "info");
      return;
    }
    try{
      userDispatch(setUpdatedAddressRequestAction())
      const response = await editAddressService(userState?.user?.user?.id, values, userState?.user?.token)
      userDispatch(setUpdatedAddressAction(response.data))
      userDispatch(updateAddressAction(""))
    }catch(error){
      console.log(error)
      userDispatch(setUpdatedAddressFailureAction(error.message))
    }
  }

  // const initialValues = (userState.editingAddress.isEditing && userState.editingAddress.addressData) ? 
  //   userState.editingAddress.addressData : 
  //   { name: '', mobile: '', email: '', city: '', state: '', zip: '', address: '' }
  const initialValuesRef = useRef(
    userState.editingAddress.isEditing
      ? userState.editingAddress.addressData
      : {
          name: '',
          mobile: '',
          email: '',
          city: '',
          state: '',
          zip: '',
          line: '',
        }
  );

  useEffect(() => {
    if (userState.editingAddress.isEditing) {
      initialValuesRef.current = userState.editingAddress.addressData;
    }
  }, [userState.editingAddress.addressData, userState.editingAddress.isEditing]);

  return (
    <Formik
      initialValues={initialValuesRef.current}
      validationSchema={validationSchema}
      onSubmit={userState.editingAddress.isEditing ? handleAddressEdit : handleAddressSubmit}
      enableReinitialize
    >
      {({ errors, touched, dirty, values, resetForm, handleSubmit }) => {
        return (
        <Form className="address-detail-fields">
          <div className="address-detail-name">
            <p className="address-detail-label">Name</p>
            <Field
              type="text"
              name="name"
              className="address-detail-input"
              placeholder="Freaky Finds"
            />
            <ErrorMessage className="error-message" name="name" component="div" />
          </div>
          <div className="address-detail-mobile">
            <p className="address-detail-label">Mobile Number</p>
            <Field
              type="text"
              name="mobile"
              className="address-detail-input"
              placeholder="+91-9876543210"
            />
            <ErrorMessage className="error-message" name="mobile" component="div" />
          </div>
          <div className="address-detail-email">
            <p className="address-detail-label">Email</p>
            <Field
              type="text"
              name="email"
              className="address-detail-input"
              placeholder="finds@freakyfinds.com"
            />
            <ErrorMessage className="error-message" name="email" component="div" />
          </div>
          <div className="address-detail-city">
            <p className="address-detail-label">City</p>
            <Field
              type="text"
              name="city"
              className="address-detail-input"
              placeholder="Mumbai"
            />
            <ErrorMessage className="error-message" name="city" component="div" />
          </div>
          <div className="address-detail-state">
            <p className="address-detail-label">State</p>
            <Field
              type="text"
              name="state"
              className="address-detail-input"
              placeholder="Maharashtra"
            />
            <ErrorMessage className="error-message" name="state" component="div" />
          </div>
          <div className="address-detail-zip">
            <p className="address-detail-label">Pincode</p>
            <Field
              type="text"
              name="zip"
              className="address-detail-input"
              placeholder="400000"
            />
            <ErrorMessage className="error-message" name="zip" component="div" />
          </div>
          <div className="address-detail-line">
            <p className="address-detail-label">Line</p>
            <Field
              type="text"
              name="line"
              className="address-detail-input"
              placeholder="101, FreakyFinds Apartments"
            />
            <ErrorMessage className="error-message" name="line" component="div" />
          </div>
          <button type="submit" className="address-detail-add-btn">Submit</button>
        </Form>
      )}
      }
    </Formik>
  )
}