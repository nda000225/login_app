import { toast } from "react-hot-toast";

export async function usernameValidate(values) {
  const errors = usernameVerify({}, values);
  return errors;
}

function usernameVerify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error("Username required!");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalid Username!");
  }

  return error;
}

export async function passwordValidate(values) {
  const errors = passwordVerify({}, values);
  return errors;
}

function passwordVerify(error = {}, values) {
  const specialChars = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>\/?~]/;
  if (!values.password) {
    error.password = toast.error("password required!");
  } else if (values.password.includes(" ")) {
    error.password = toast.error("Wrong password!");
  } else if (values.password.length < 6) {
    error.password = toast.error("Password must be more than 6 character");
  } else if (!specialChars.test(values.password)) {
    error.password = toast.error("Password must be special character");
  }

  return error;
}

export async function resetPasswordValidate(values) {
  const errors = passwordVerify({}, values);
  if (values.password != values.password_confirm) {
    errors.exist = toast.error("password not match");
  }
  return errors;
}

export async function registerValidation(values) {
  const errors = usernameVerify({}, values);
  passwordVerify(errors, values);
  emailVerify(errors, values);
  return errors
}

function emailVerify(error = {}, values) {
  if (!values.email) {
    error.email = toast.error("Email required!");
  } else if (values.email.includes(" ")) {
    error.email = toast.error("Wrong email!");
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z][2,4]$/i.test(values.email)) {
    error.email = toast.error("Invalid email address");
  }

  return error;
}
