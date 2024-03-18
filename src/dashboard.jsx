import React from 'react';
import Header from './header';
import NavigationBar from './NavigationBar';
import DialogBox from './DialogBox';
import SelectProvider from './SelectProvider';
import OfferCards from './OffersCards';
import PaymentQrCode from './PaymentQrCode';
import PaymentForm from './PaymentForm';
import SuccessfulPayment from './SuccessfulPayment';
import GetYourCard from './GetYourCard';
import LoginForm from './LoginForm';
import HistoryTable from './HistoryTable';






const Dashboard = () => {
  return (
    
    <div className="flex">

        <div className="col-lg-4">
            <NavigationBar />
        </div>
        <div className=' col-lg-8 w-full'>
            <Header />
        <div className="flex-grow">
            {/* <DialogBox/> */}
            {/* <SelectProvider /> */}
            {/* Content */}
            {/* <Modal /> */}
          {/* <OfferCards/> */}
          {/* <PaymentQrCode/> */}
          {/* <PaymentForm/> */}
          {/* <SuccessfulPayment/> */}
          {/* <GetYourCard/> */}
          {/* <LoginForm/> */}
          <HistoryTable/>

        </div>
        </div>

    </div>
  );
};

export default Dashboard;
