import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import ScrollableDialogBox from "./selectCountryDialogBox";

function App() {
  const [navbarVisible, setNavbarVisible] = useState(true);

  const toggleNavbarVisibility = () => {
    setNavbarVisible(!navbarVisible);
  };

  return (
        <Router>
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
            <Routes>
              <Route path="/" element={<DialogBox />} exact />
              <Route path="/home" element={<DialogBox />} />
              <Route path="/select-provider" element={<SelectProvider />} />
              <Route path="/offer-cards" element={<OfferCards />} />
              <Route path="/payment-qr-code" element={<PaymentQrCode />} />
              <Route path="/payment-form" element={<PaymentForm />} />
              <Route path="/successful-payment" element={<SuccessfulPayment />} />
              <Route path="/get-your-card" element={<GetYourCard />} />
              <Route path="/login-form" element={<LoginForm />} />
              <Route path="/history-table" element={<HistoryTable />} />
              <Route path="/select-country" element={<ScrollableDialogBox />} />
            </Routes>
        </div>
      </div>
    </div>
          </Router>
  );
}

export default App;
