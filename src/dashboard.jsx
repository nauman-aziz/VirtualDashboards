import React from "react";
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
  return (
    <div className="flex h-lvh">
      {/* nav-area */}
      <div className="col-lg-4">
        <NavigationBar />
      </div>
      {/* main-area */}
      <div className="col-lg-8 w-full p-4 overflow-hidden">
        <Header />
        <div className="relative h-full flex items-center justify-center">
          {/* <DialogBox /> */}
          <SelectProvider />
          {/* Content */}
          {/* <Modal /> */}
          {/* <OfferCards/> */}
          {/* <PaymentQrCode/> */}
          {/* <PaymentForm/> */}
          {/* <SuccessfulPayment/> */}
          {/* <GetYourCard/> */}
          {/* <LoginForm/> */}
          {/* <HistoryTable /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
