import Calendar from "../../components/calender";
import { Metadata } from "next";
import DefaultLayout from "@/components/layout/DefaultLayout";

export const metadata: Metadata = {
  title: "Transaction History",
  description:
    "Transaction History Page",
};

const CalendarPage = () => {
  return (
    <DefaultLayout>
      <Calendar />
    </DefaultLayout>
  );
};

export default CalendarPage;
