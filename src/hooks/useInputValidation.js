import { useState } from 'react';

export const useInputValidation = ({ initialValue, validate = () => '' }) => {
  const WARNING_CLASS_NAME = 'input-warning';
  const [value, setValue] = useState(initialValue);
  const [touched, setTouched] = useState(false);

  const err = validate(value);
  const isValid = !err;

  console.log(err);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleBlur = () => {
    setTouched(true);
  };

  const reset = () => {
    setValue(initialValue);
    setTouched(false);
  };

  const shouldShowErr = touched && !isValid;
  const className = shouldShowErr ? WARNING_CLASS_NAME : '';

  return {
    value,
    err,
    isValid,
    touched,
    shouldShowErr,
    className,
    handleChange,
    handleBlur,
    reset,
  };
};
