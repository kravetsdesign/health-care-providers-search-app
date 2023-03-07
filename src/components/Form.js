import { useRef } from 'react';
import classes from './Form.module.css';
import { stateSelectionOptions } from '../utility/stateSelectionOptions';

const Form = (props) => {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const cityInputRef = useRef();
  const stateInputRef = useRef();

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    const formData = {
      firstName: firstNameInputRef.current.value,
      lastName: lastNameInputRef.current.value,
      city: cityInputRef.current.value,
      state: stateInputRef.current.value,
    };

    props.onFormSubmission(formData);
  };

  return (
    <div className={classes.formContainer}>
      <h1>Health Care Provider Search</h1>

      <form id='health-care-search-form' onSubmit={formSubmissionHandler}>
        <div className={classes.inputWrapper}>
          <label htmlFor='firstName'>First Name</label>
          <input
            ref={firstNameInputRef}
            type='text'
            name='firstName'
            id='firstName'
          />
        </div>

        <div className={classes.inputWrapper}>
          <label htmlFor='lastName'>Last Name (Required)</label>
          <input
            required
            ref={lastNameInputRef}
            type='text'
            name='lastName'
            id='lastName'
          />
        </div>

        <div className={classes.inputWrapper}>
          <label htmlFor='city'>City</label>
          <input ref={cityInputRef} type='text' name='city' id='city' />
        </div>

        <div className={classes.inputWrapper}>
          <label htmlFor='state'>State</label>
          <select
            ref={stateInputRef}
            type='text'
            name='state'
            id='state'
            maxLength={2}
          >
            <option value={''} defaultValue></option>
            {stateSelectionOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className={classes.submitWrapper}>
          <input type='submit' value={'Search'} />
        </div>
      </form>
    </div>
  );
};

export default Form;
