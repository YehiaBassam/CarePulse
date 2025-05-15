import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { PatientForm } from "@/components/PatientForm/PatientForm";
import { PasskeyModal } from "@/components/modals/PasskeyModal";
import { SearchParamProps } from "@/types/interfaces/db.interface";

function Home({ searchParams }: SearchParamProps) {
  const isAdmin = searchParams.admin;

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          {isAdmin && <PasskeyModal />}

          <Image
            src="/assets/icons/logo-full.svg"
            height={100}
            width={100}
            alt="patient"
          />

          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © {new Date().getFullYear()} CarePluse
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/onboarding-img.jpg"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
};

export default Home;