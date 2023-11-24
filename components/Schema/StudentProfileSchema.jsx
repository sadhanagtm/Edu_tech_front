// for KYC Verification Schema
import * as yup from "yup";
export const KycVerificationSchema = yup.object().shape({
  first_name: yup.string().required("first name is required"),
  last_name: yup.string().required("last name is required"),
  email: yup.string().email("not a valid email").required("email is required"),
  phone: yup.string().required("phone no is required"),
  address: yup.string().required("address is required"),
  gender: yup.string().required("gender is required"),
  dateofbirth: yup.string().required("date of birth is required"),
  image: yup
    .mixed()
    .test("required", "You need to provide a file", (value) => {
      return value && value.length;
    })
    .test("type", "We only support jpeg,png,jpg", function (value) {
      return (
        (value && value[0] && value[0].type === "image/jpeg") ||
        (value && value[0] && value[0].type === "image/png")
      );
    }),
});

// for  UpdatePassword Schema

export const UpdatePasswordSchema = yup.object().shape({
  old_password: yup.string().required("old password is required"),
  new_password: yup
    .string()
    .min(6, "password length to small")
    .required("Please Enter your new password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  confirm_password: yup
    .string()
    .min(6, "password length to small")
    .required("Please Enter  your confirm  password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
});

// for UpdateProfile  Schema

export const UpdateProfileSchema = yup.object().shape({
  image: yup
    .mixed()
    .test("required", "You need to provide a file", (value) => {
      return value && value.length;
    })
    .test("type", "We only support jpeg,png,jpg", function (value) {
      return (
        (value && value[0] && value[0].type === "image/jpeg") ||
        (value && value[0] && value[0].type === "image/png")
      );
    }),
});
