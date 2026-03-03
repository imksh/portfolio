import { useForm, ValidationError } from "@formspree/react";
import { motion } from "motion/react";
import Lottie from "lottie-react";
import celebrate from "../assets/animations/celebrate.json";

export const Contact = () => {
  const [state, handleSubmit] = useForm("mdkdakoy");
  if (state.succeeded) {
    return (
      <div className="section-container mt-10 w-[95%] md:w-[60%] mx-auto glass-surface rounded-2xl p-8 flex flex-col justify-center items-center gap-4 text-center">
        <h3 className="text-xl md:text-3xl font-bold text-clip1">Contact Me</h3>
        <p className="subtle-text">
          Thanks for contacting. I will get back to you soon.
        </p>
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
    <div className="soft-card mt-10 p-4 md:p-12 rounded-2xl w-[92%] md:w-[52%] mx-auto flex flex-col justify-center items-center gap-8">
      <h3 className="text-xl md:text-3xl font-bold text-clip1">Contact Me</h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full items-center"
      >
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          required
          className="border border-white/20 bg-white/5 w-full p-3 rounded-lg my-2 outline-none focus:border-(--primary)"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="border border-white/20 bg-white/5 w-full p-3 rounded-lg my-2 outline-none focus:border-(--primary)"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="number" className="sr-only">
          Phone number
        </label>
        <input
          id="number"
          type="tel"
          name="number"
          placeholder="Phone Number"
          required
          className="border border-white/20 bg-white/5 w-full p-3 rounded-lg my-2 outline-none focus:border-(--primary)"
        />
        <ValidationError prefix="Number" field="number" errors={state.errors} />

        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Write a message"
          rows="5"
          required
          className="border border-white/20 bg-white/5 w-full p-3 rounded-lg my-2 outline-none focus:border-(--primary)"
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
