import * as yup from "yup";
import UpdatePassword from "../../pages/updatePassword";
const phoneRgx = RegExp(
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
);
const DataEmpty = RegExp(/[]+/);
const PasswordRgxCapitaCharacter = RegExp(/[A-Z]+/);
const PasswordRgx = RegExp(/[a-z]+/);
const PasswordRgxSpaces = RegExp(/\s/);
const PasswordRgxNumber = RegExp(/[0-9]+/);
const PasswordRgxSpecialLast = RegExp(/["!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]/);

const PasswordRgxSpecial = RegExp(/[" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]/);
export const AuthSchema = yup.object().shape({
  email: yup.string().email("Incorrect Email ID").required("Email is required"),
  password: yup.string().required("  Password is required"),
});

export const signUpSchema = yup.object().shape({
  address: yup.string().required("Address is required"),
  referrer: yup.string(),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .mixed()
    .test(
      "min",
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character",
      (value) => {
        if (value.trim().length < 6 && PasswordRgxSpaces.test(value)) {
          return false;
        } else {
          return value;
        }
      }
    )
    .test("min", "Password must Contain 6 Characters", (value) => {
      if (value.trim().length >= 6) {
        return value;
      } else {
        return false;
      }
    })
    .test("max", "Password must be less than 20 Characters", (value) => {
      if (value.trim().length <= 20) {
        return value;
      } else {
        return false;
      }
    })
    .test("alphabet", "Password must Contain One Lowercase", (value) => {
      if (PasswordRgx.test(value)) {
        return value;
      } else {
        return false;
      }
    })
    .test("capital", " Password must Contain One Uppercase ", (value) => {
      if (PasswordRgxCapitaCharacter.test(value)) {
        return value;
      } else {
        return false;
      }
    })
    .test("number", "Password must Contain One number ", (value) => {
      if (PasswordRgxNumber.test(value)) {
        return value;
      } else {
        return false;
      }
    })
    .test(
      "special",
      "Password must Contain One Special Character ",
      (value) => {
        if (PasswordRgxSpecial.test(value)) {
          return value;
        } else {
          return false;
        }
      }
    )
    .test("space", "Password must not Contain space ", (value) => {
      if (PasswordRgxSpaces.test(value)) {
        return false;
      } else {
        return value;
      }
    }),

  first_name: yup
    .string()
    .required("first name is required"),


  middle_name: yup
    .string(),

  last_name: yup
    .string()
    .required("last name is required")
    .test("special", "only alphabet  allowed ", (value) => {
      if (PasswordRgxSpecialLast.test(value)) {
        return false;
      } else {
        return true;
      }
    })
    .test("number", "only alphabet  allowed ", (value) => {
      if (PasswordRgxNumber.test(value)) {
        return false;
      } else {
        return value;
      }
    }),

  phone: yup
    .string()
    .min(10, "too small")
    .max(10, "too large")
    .required("Phone no is required")
    .test("special", "only number is  allowed ", (value) => {
      if (PasswordRgxSpecial.test(value)) {
        return false;
      } else {
        return true;
      }
    })
    .test("number", "only number is  allowed ", (value) => {
      if (PasswordRgxCapitaCharacter.test(value)) {
        return false;
      } else {
        return value;
      }
    })
    .test("number", "only number is  allowed ", (value) => {
      if (PasswordRgx.test(value)) {
        return false;
      } else {
        return value;
      }
    }),
});

// UpdatePassword.jsx page ko schema
export const UpdateSchema = yup.object().shape({
  newpassword: yup
    .mixed()
    .test(
      "min",
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character",
      (value) => {
        if (value?.trim()?.length < 6 && PasswordRgxSpaces.test(value)) {
          return false;
        } else {
          return value;
        }
      }
    )
    .test("min", "Password must Contain 6 Characters", (value) => {
      if (value?.trim()?.length >= 6) {
        return value;
      } else {
        return false;
      }
    })
    .test("max", "Password must be less than 20 Characters", (value) => {
      if (value?.trim()?.length <= 20) {
        return value;
      } else {
        return false;
      }
    })
    .test("alphabet", "Password must Contain One Lowercase", (value) => {
      if (PasswordRgx.test(value)) {
        return value;
      } else {
        return false;
      }
    })
    .test("capital", " Password must Contain One Uppercase ", (value) => {
      if (PasswordRgxCapitaCharacter.test(value)) {
        return value;
      } else {
        return false;
      }
    })
    .test("number", "Password must Contain One number ", (value) => {
      if (PasswordRgxNumber.test(value)) {
        return value;
      } else {
        return false;
      }
    })
    .test(
      "special",
      "Password must Contain One Special Character ",
      (value) => {
        if (PasswordRgxSpecial.test(value)) {
          return value;
        } else {
          return false;
        }
      }
    )
    .test("space", "Password must not Contain space ", (value) => {
      if (PasswordRgxSpaces.test(value)) {
        return false;
      } else {
        return value;
      }
    }),

  confirmpassword: yup
    .string()
    .oneOf([yup.ref("newpassword")], " Password doesnot match"),
});
