export default function formValidation(values) {
  let errors = {};
  let isValid = true;

  // Username
  if (!values.username.trim()) {
    errors.username = "*Username required";
    isValid = false;
  } else if (values.username.trim().length < 3) {
    errors.username = "*Username needs to be 3 characters or more";
    isValid = false;
  }

  // Name
  if (!values.name.trim()) {
    errors.name = "*Name required";
    isValid = false;
  } else if (values.name.trim().length < 3) {
    errors.name = "*Name needs to be 3 characters or more";
    isValid = false;
  }

  // Passowrd
  if (!values.password) {
    errors.password = "*Password required";
    isValid = false;
  } else if (values.password.length < 7) {
    errors.password = "*Password needs to be 7 characters or more";
    isValid = false;
  }

  return { isValid, errors };
}
