import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await axios
        .post(`${process.env.Url}/contact/create`, {
          full_name: data.full_name,
          phone: data.phone,
          email: data.email,
          message: data.message,
        })
        .then((res) => {
          setSuccess(res.data.msg);

          setLoading(false);
          setTimeout(() => {
            setSuccess("");
          }, 4000);
          reset();
        });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1 className="px-4 text-lg  md:text-xl lg:text-2xl   capitalize font-openSansSeven py-2">
        we want to hear from you
      </h1>
      <hr />

      <form
        action=""
        className="p-4 font-openSansSix lg:px-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className=" flex flex-col  space-y-2 mt-4">
          <input
            type="text"
            id="name"
            placeholder="Full name"
            className="border p-2 shadow"
            {...register("full_name", { required: true })}
          />
          {errors.full_name && (
            <span className="text-red-600 ">Full name is required</span>
          )}
        </div>
        <div className=" flex flex-col space-y-2 mt-4">
          {/* <label htmlFor="phone">Phone</label> */}
          <input
            type="text"
            placeholder="Phone"
            className="border p-2 shadow"
            id="phone"
            {...register("phone", { required: true })}
          />
          {errors.phone && (
            <span className="text-red-600 ">Phone is required</span>
          )}
        </div>
        <div className=" flex flex-col space-y-2 mt-4">
          {/* <label htmlFor="email">Email</label> */}
          <input
            type="text"
            placeholder="Email"
            className="border p-2 shadow"
            id="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-600 ">Email is required</span>
          )}
        </div>
        <div className=" flex flex-col space-y-2 mt-4">
          {/* <label>Message</label> */}
          <textarea
            placeholder="Message"
            type="text"
            rows="5"
            className="border p-2 shadow"
            {...register("message", { required: true })}
          />
          {errors.message && (
            <span className="text-red-600 ">Message is required</span>
          )}
        </div>
        {success.length > 0 ? (
          <p className="bg-green-600 p-2 font-openSansSix rounded-md text-white my-4">
            Your Message has been submited successfully ! Our Team will connect
            with you soon. Thank you for your message.
          </p>
        ) : (
          ""
        )}
        <input
          type="submit"
          value={loading ? "LOADING..." : "SUBMIT"}
          className="btn-primary font-openSansSix rounded-md my-8 cursor-pointer"
        />
      </form>
    </div>
  );
}

export default ContactForm;
