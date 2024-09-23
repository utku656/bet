import React from "react";
import HomePage from "./pages/nesine-homepage/homepage";
import { CouponContext } from "./store/couponContext";
import { BulletinContext } from "./store/bulletinContext";

const App = () => (
  <BulletinContext>
    <CouponContext>
      <HomePage />
    </CouponContext>
  </BulletinContext>
);

export default App;
