import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "motion/react";
import { toast } from "react-hot-toast";
import Lottie from "lottie-react";
import celebrate from "../assets/animations/celebrate.json";

export const Contact = () => {
  const [state, handleSubmit] = useForm("mdkdakoy");
  if (state.succeeded) {
    return (
      <div className="mt-8 w-[80%] md:w-[50%] mx-auto flex flex-col justify-center items-center gap-8">
        <h3 className="text-xl md:text-3xl font-bold">Contact Me</h3>
        <p>Thanks for Contacting!</p>
        <Lottie
            animationData={celebrate}
            loop
            className="fixed top-[50%] -translate-y-[50%] left-0 -translate-x-[50%]"
          />
          <Lottie
            animationData={celebrate}
            loop
            className="fixed top-[50%] -translate-y-[50%] right-0 translate-x-[50%]"
          />
      </div>
    );
  }
  return (
    <div className="bg-[#1a1d3c] mt-8 p-4 md:p-12 rounded-2xl w-[90%] md:w-[50%] mx-auto flex flex-col justify-center items-center gap-8">
      <h3 className="text-xl md:text-3xl font-bold">Contact Me</h3>
      <form onSubmit={handleSubmit} className="flex flex-col w-full items-center">
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          required
          className=" border-[0.5px] w-full p-3 rounded-lg my-2"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className=" border-[0.5px] w-full p-3 rounded-lg my-2"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <input
          id="number"
          type="text"
          name="number"
          placeholder="Phone Number"
          required
          className=" border-[0.5px] w-full p-3 rounded-lg my-2"
        />
        <ValidationError prefix="Number" field="number" errors={state.errors} />

        <textarea
          id="message"
          name="message"
          placeholder="Write a message"
          rows="5"
          required
          className=" border-[0.5px] w-full p-3 rounded-lg my-2"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
          type="submit"
          disabled={state.submitting}
          className="px-8 py-2 rounded-lg btn-gradient1 mt-8 customHover"
        >
          Submit
        </motion.button>
      </form>
    </div>
  );
};
