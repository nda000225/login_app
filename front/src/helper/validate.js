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
