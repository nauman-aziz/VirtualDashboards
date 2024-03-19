import React, { useState } from "react";
import Header from "./header";
import { useWindowSize } from "react-use";
import NavigationBar from "./NavigationBar";
import DialogBox from "./DialogBox";
import SelectProvider from "./SelectProvider";
import OfferCards from "./OffersCards";
import PaymentQrCode from "./PaymentQrCode";
import PaymentForm from "./PaymentForm";
import SuccessfulPayment from "./SuccessfulPayment";
import GetYourCard from "./GetYourCard";
import LoginForm from "./LoginForm";
import HistoryTable from "./HistoryTable";

const Dashboard = () => {
  const { width } = useWindowSize();
  const [mobileView, setMobileView] = useState(true);
  const [navbarVisible, setNavbarVisible] = useState(false);

  return (
    <div className="flex h-lvh">
      {/* nav-area */}
      <div className="">
        <NavigationBar mobileView={mobileView} navbarVisible={navbarVisible} />
      </div>
      {/* main-area */}
      <div className="w-full p-4 overflow-hidden">
        <Header mobileView={mobileView} />
        {/* content-area*/}
        <div className="relative h-full flex items-center justify-center">
          {/* <DialogBox /> */}
          {/* <SelectProvider /> */}
          {/* <Modal /> */}
          {/* <OfferCards /> */}
          {/* <PaymentQrCode /> */}
          {/* <PaymentForm /> */}
          {/* <SuccessfulPayment /> */}
          {/* <GetYourCard /> */}
          {/* <LoginForm /> */}
          <HistoryTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
