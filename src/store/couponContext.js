import React, { useState, useContext, createContext } from "react";

export const couponContext = createContext({ coupon: [] });
export const useCouponContext = () => useContext(couponContext);

export function CouponContext({ children }) {
  const [coupon, setCoupon] = useState([]);

  const handleCouponAdd = (couponDetails) => {
    setCoupon((prevCoupons) => {
      const couponExists = prevCoupons.some(
        (item) => item.code === couponDetails.code
      );
      if (couponExists) {
        return prevCoupons.map((item) =>
          item.code === couponDetails.code ? couponDetails : item
        );
      } else {
        return [...prevCoupons, couponDetails];
      }
    });
  };

  const handleCouponDelete = (index) => {
    setCoupon((prevCoupons) => prevCoupons.filter((_, i) => i !== index));
  };

  const contextValue = {
    coupon,
    handleCouponAdd,
    handleCouponDelete,
  };

  return (
    <couponContext.Provider value={contextValue}>
      {children}
    </couponContext.Provider>
  );
}
