// import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Landing from './Components/Client/Landing/Landing';
// import AboutUs from './Components/Client/Landing/AboutUs';
// import SignUp from './Components/Client/SignUp/SignUp';
// import TellUsAboutYourself from './Components/Client/SignUp/TellUsAboutYourself';
// import AlternativeContact from './Components/Client/SignUp/AlternativeContact';
// import SignIn from './Components/Client/SignIn/Signin';
// import BusinessRegistration from './Components/Client/BusinessRegistration/BusinessRegistration';
// import AddProductsAndServices from './Components/Client/BusinessRegistration/AddProductsAndServices';
import PaymentInfo from "./Components/Client/BusinessRegistration/PaymentInfo";
// import ProductDetails from './Components/Client/ProductDetails/ProductDetails';
// import BusinessProducts from './Components/Client/ProductDetails/BusinessProducts';
// import UserProfile from './Components/Client/AccountAndBusinessPage/UserProfile';
// import AccountAndBusinessPage from './Components/Client/AccountAndBusinessPage/AccountBusinessPage';
// import OrderHistory from './Components/Client/CartAndOrderHistory/OrderHistory';
// import PayFast from './Components/Client/CartAndOrderHistory/PayFast';
// import CourierGuy from './Components/Client/CartAndOrderHistory/CourierGuy';
// import Reciept from './Components/Client/CartAndOrderHistory/Reciept';
// import DeliveryOngoing from './Components/Client/CartAndOrderHistory/DeliveryOngoing';
// import DeliveryAndChatSystem from './Components/Client/CartAndOrderHistory/DeliveryAndChatSystem';
// import DateSelectionAndCheckout  from './Components/Client/CartAndOrderHistory/DateSelectionAndCheckout';
// import Favourites from './Components/Client/Favourites/Favourites';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Landing/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/tellus' element={<TellUsAboutYourself/>}/>
        <Route path='/altnative-contact' element={<AlternativeContact/>}/>
        <Route path='/signin' element={<SignIn/>}/> */}
        {/* <Route path='/business-reg' element={<BusinessRegistration/>}/> */}
        {/* <Route path='/add-products-and-services' element={<AddProductsAndServices/>}/> */}
        <Route path="/payment-info" element={<PaymentInfo />} />
        {/* <Route path='/product-details' element={<ProductDetails/>}/> */}
        {/* <Route path='/business-products' element={<BusinessProducts/>}/> */}
        {/* <Route path='/user' element={<UserProfile/>}/> */}
        {/* <Route path='/account-bussiness-page' element={<AccountAndBusinessPage/>}/> */}
        {/* <Route path='/order' element={<OrderHistory/>}/> */}
        {/* <Route path='/pay' element={<PayFast/>}/> */}
        {/* <Route path='/courier' element={<CourierGuy/>}/> */}
        {/* <Route path='/reciept' element={<Reciept/>}/>  */}
        {/* <Route path='/delivery' element={<DeliveryOngoing/>}/> */}
        {/* <Route path='/chat' element={<DeliveryAndChatSystem/>}/> */}
        {/* <Route path='/date' element={<DateSelectionAndCheckout/>}/> */}
        {/* <Route path='/favourites' element={<Favourites/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
