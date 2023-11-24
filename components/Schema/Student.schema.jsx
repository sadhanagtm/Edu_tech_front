import * as yup from "yup";

// add schema for video
export const AddStudentSchema = yup.object().shape({
  first_name: yup.string().required("first name is required"),
  last_name: yup.string().required("last name is required"),
  password: yup
    .string()
    .min(6, "password length to small")
    .required("Please Enter your password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  email: yup
    .string()
    .email("email invalid !!  please provide a valid email")
    .required("email is required"),
  contact: yup
    .string()
    .min(10, "contact no must  be more then or equals to  10 digits"),
  country: yup.string().required("country is required"),
  address: yup.string().required("address is required"),
  gender: yup.string().required("gender is required"),
  dob: yup.string().required("date of birth is required"),
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
  intrest_name: yup.array().of(
    yup.object().shape({
      course_Category: yup.string().required(),
    })
  ),
});

// MOdify student information

export const ModifyStudentSchema = yup.object().shape({
  first_name: yup.string().required("first name is required"),
  last_name: yup.string().required("last name is required"),
  contact: yup
    .string()
    .min(10, "contact no must  be more then or equals to  10 digits"),
  country: yup.string().required("country is required"),
  address: yup.string().required("address is required"),
  gender: yup.string().required("gender is required"),
  dob: yup.string().required("date of birth is required"),
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
