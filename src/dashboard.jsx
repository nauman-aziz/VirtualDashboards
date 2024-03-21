import React, { useState } from "react";
import Header from "./header";
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
  const [navbarVisible, setNavbarVisible] = useState(false);

  const toggleNavbarVisibility = () => {
    console.log("visibility", navbarVisible);
    if (!navbarVisible) {
      setNavbarVisible(true);
    }
  };

  return (
    <div className="flex h-lvh">
      {/* nav-area */}
      <div className="">
        <NavigationBar
          navbarVisible={navbarVisible}
          toggleNavbarVisibility={toggleNavbarVisibility}
        />
      </div>
      {/* main-area */}
      <div className="w-full overflow-x-hidden overflow-y-auto sm:overflow-y-hidden">
        <Header toggleNavbarVisibility={toggleNavbarVisibility} />
        {/* content-area*/}
        <div className="relative h-full flex items-center justify-center p-2">
          <DialogBox />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
