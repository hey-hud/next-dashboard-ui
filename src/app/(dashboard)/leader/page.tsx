import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const LeaderPage = () => {
    return (
    <>
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    </>
    )
}


export default LeaderPage