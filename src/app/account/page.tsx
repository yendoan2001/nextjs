import Calendar from "../../components/calender";
import { Metadata } from "next";
import DefaultLayout from "@/components/layout/DefaultLayout";
import Account from "@/pages/account";

export const metadata: Metadata = {
  title: "Account",
  description:
    "Account Page",
};

const CalendarPage = () => {
  return (
    <DefaultLayout>
      <Account/>
    </DefaultLayout>
  );
};

export default CalendarPage;
