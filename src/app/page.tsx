import { Metadata } from "next";
import DefaultLayout from "@/components/layout/DefaultLayout";
import Home from "@/pages/Home";

export const metadata: Metadata = {
  title: "Home",
  description: "Home Page",
};

const HomePage = () => {
  return (
    <DefaultLayout>
      <Home />
    </DefaultLayout>
  );
};

export default HomePage;
