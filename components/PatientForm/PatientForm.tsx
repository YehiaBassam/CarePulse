"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomForm/CustomForm";
import { FormFieldType } from "@/types";
import { createUser } from "@/lib/actions/patient.action";
import SubmitButton from "../reusable/SubmitButton";
import { useState } from "react";
import { UserFormValidation } from "@/lib/validations";
import { useRouter } from 'next/navigation';

export function PatientForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  })

  async function onSubmit(values: z.infer<typeof UserFormValidation>) {
    try {
      const user = await createUser(values);
      setIsLoading(true);
      user && router.push(`/patients/${user.$id}/register`);
      setIsLoading(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi there 👋</h1>
          <p className="text-dark-700">Get started with appointments.</p>
        </section>

        <CustomFormField
          control={form.control}
          type={FormFieldType.INPUT}
          name="name"
          placeholder="name"
          label="name"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user icon"
        />

        <CustomFormField
          control={form.control}
          type={FormFieldType.INPUT}
          name="email"
          placeholder="email"
          label="email"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email icon"
        />

        <CustomFormField
          control={form.control}
          type={FormFieldType.PHONE_INPUT}
          name="phone"
          placeholder="0512345678"
          label="phone"
          iconSrc="/assets/icons/phone.svg"
          iconAlt="phone icon"
        />

        <SubmitButton isLoading={isLoading} type="submit">Get Started</SubmitButton>
      </form>
    </Form>
  );
}

