import Image from "next/image";
import Link from "next/link";

import { StateCard } from "@/components/reusable/StateCard";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";
import { columns } from "@/components/DataTable/Columns";
import { DataTable } from "@/components/DataTable/DataTable";

const AdminPage = async () => {
  const appointments = await getRecentAppointmentList();  
  

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/icons/logo-full.svg"
            height={32}
            width={162}
            alt="logo"
            className="h-8 w-fit"
          />
        </Link>

        <p className="text-16-semibold">Admin Dashboard</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome 👋</h1>
          <p className="text-dark-700">
            Start the day with managing new appointments
          </p>
        </section>

        <section className="admin-stat">
          <StateCard
            type="appointments"
            count={appointments.scheduledCount}
            label="Scheduled appointments"
            icon={"/assets/icons/appointments.svg"}
          />
          <StateCard
            type="pending"
            count={appointments.pendingCount}
            label="Pending appointments"
            icon={"/assets/icons/pending.svg"}
          />
          <StateCard
            type="cancel"
            count={appointments.cancelledCount}
            label="Cancelled appointments"
            icon={"/assets/icons/cancelled.svg"}
          />
        </section>

        <section>
          <DataTable columns={columns} data={appointments.documents} />
        </section>
      </main>
    </div>
  );
};

export default AdminPage;