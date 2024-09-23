import React, { memo } from "react";
import { useCouponContext } from "../../store/couponContext";
import "./coupon.scss";

function Coupon() {
  const { coupon } = useCouponContext();
  let total = coupon
    .reduce((count, element) => count * Number(element.rate), 1)
    .toFixed(2);

  return (
    <div className="coupon-content">
      {coupon?.map((element) => (
        <div key={`${element.code} - ${element.rate}`} className="event">
          <div className="coupon-match">
            <div className="mbs">{element.mbsVariable}</div>
            <div>Kod: {element.code}</div>
            <div>Maç: {element.info}</div>
            <div>Oran: {element.rate}</div>
          </div>
        </div>
      ))}
      <div className="total">Toplam Tutar: {total !== 1 && total}</div>
    </div>
  );
}

export default memo(Coupon);
