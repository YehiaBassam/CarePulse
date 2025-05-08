"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { SelectItem } from "@/components/ui/select";
import CustomFormField from "../CustomForm/CustomForm";
import { FormFieldType } from "@/types";
import SubmitButton from "../reusable/SubmitButton";
import { useState } from "react";
import { getAppointmentSchema, UserFormValidation } from "@/lib/validations";
import { useRouter } from 'next/navigation';
import { Doctors } from "@/constants";
import Image from "next/image";
import { createAppointment } from "@/lib/actions/appointment.actions";
import { Status } from "@/types/interfaces/db.interface";

export function AppointmentForm({
  patientId,
  userId,
  type }: {
    patientId?: string;
    userId?: string;
    type: "create" | "schedule" | "cancel"
  }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const AppointmentFormValidation = getAppointmentSchema(type);

  const form = useForm<z.infer<typeof AppointmentFormValidation>>({
    resolver: zodResolver(AppointmentFormValidation),
    defaultValues: {
      primaryPhysician: "",
      schedule: new Date(Date.now()),
      reason: "",
      note: "",
      // cancellationReason: appointment?.cancellationReason || "",
    },
  });

  let buttonLabel;
  switch (type) {
    case "cancel":
      buttonLabel = "Cancel Appointment";
      break;
    case "schedule":
      buttonLabel = "Schedule Appointment";
      break;
    default:
      buttonLabel = "Submit Appointment";
  }

  let status: Status;
  switch (type) {
    case "schedule":
      status = "scheduled";
      break;
    case "cancel":
      status = "cancelled";
      break;
    default:
      status = "pending";
  }

  async function onSubmit(values: z.infer<typeof AppointmentFormValidation>) {
    try {
      if (!userId || !patientId) return;

      setIsLoading(true);

      const appointment = {
        userId,
        patient: patientId,
        primaryPhysician: values.primaryPhysician,
        schedule: new Date(values.schedule),
        reason: values.reason!,
        note: values.note,
        status: status,
      };

      const newAppointment = await createAppointment(appointment);
      setIsLoading(false);

      if (newAppointment) {
        form.reset();
        router.push(
          `/patients/${userId}/new-appointment/success?appointmentId=${newAppointment.$id}`
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-6">
        {type === "create" && (
          <section className="mb-12 space-y-4">
            <h1 className="header">New Appointment</h1>
            <p className="text-dark-700">
              Request a new appointment in 10 seconds.
            </p>
          </section>
        )}

        {type !== "cancel" && (
          <>
            <CustomFormField
              type={FormFieldType.SELECT}
              control={form.control}
              name="primaryPhysician"
              label="Doctor"
              placeholder="Select a doctor"
            >
              {Doctors.map((doctor, i) => (
                <SelectItem key={doctor.name + i} value={doctor.name}>
                  <div className="flex cursor-pointer items-center gap-2">
                    <Image
                      src={doctor.image}
                      width={32}
                      height={32}
                      alt="doctor"
                      className="rounded-full border border-dark-500"
                    />
                    <p>{doctor.name}</p>
                  </div>
                </SelectItem>
              ))}
            </CustomFormField>

            <CustomFormField
              type={FormFieldType.DATE_PICKER}
              control={form.control}
              name="schedule"
              label="Expected appointment date"
              showTimeSelect
              dateFormat="MM/dd/yyyy  -  h:mm aa"
            />

            <div
              className={`flex flex-col gap-6  ${type === "create" && "xl:flex-row"}`}
            >
              <CustomFormField
                type={FormFieldType.TEXTAREA}
                control={form.control}
                name="reason"
                label="Appointment reason"
                placeholder="Annual montly check-up"
                disabled={type === "schedule"}
              />

              <CustomFormField
                type={FormFieldType.TEXTAREA}
                control={form.control}
                name="note"
                label="Comments/notes"
                placeholder="Prefer afternoon appointments, if possible"
                disabled={type === "schedule"}
              />
            </div>
          </>
        )}

        {/* {type === "cancel" && (
          <CustomFormField
            type={FormFieldType.TEXTAREA}
            control={form.control}
            name="cancellationReason"
            label="Reason for cancellation"
            placeholder="Urgent meeting came up"
          />
        )} */}

        <SubmitButton
          isLoading={isLoading}
          className={`${type === "cancel" ? "shad-danger-btn" : "shad-primary-btn"} w-full`}
        >
          {buttonLabel}
        </SubmitButton>
      </form>
    </Form>
  );
}

