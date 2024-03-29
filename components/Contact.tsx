"use client";
import { useForm } from "react-hook-form";
import { FC } from "react";
import { sendEmail } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  function onSubmit(data: FormData) {
    sendEmail(data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="mb-3 block text-base font-medium text-white"
        >
          Full Name
        </label>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-[#36a8b3] focus:shadow-md"
          {...register("name", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-3 block text-base font-medium text-white"
        >
          Email Address
        </label>
        <input
          type="email"
          placeholder="example@domain.com"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-[#36a8b3] focus:shadow-md"
          {...register("email", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="message"
          className="mb-3 block text-base font-medium text-white"
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder="Type your message"
          className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-[#36a8b3] focus:shadow-md"
          {...register("message", { required: true })}
        ></textarea>
      </div>
      <div>
        <Button className="hover:shadow-form rounded-md bg-[#36a8b3] py-3 px-8 text-base font-semibold text-white outline-none">
          Submit
        </Button>
      </div>
    </form>
  );
};
export default Contact;
