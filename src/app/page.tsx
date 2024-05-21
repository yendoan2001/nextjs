import { Metadata } from "next";
import DefaultLayout from "@/components/layout/DefaultLayout";
import Calendar from "@/components/calender";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce dashboard | TailAdmin - Next.js dashboard Template",
  description: "This is Next.js Home for TailAdmin dashboard Template",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Calendar />
      </DefaultLayout>
    </>
  );
}
