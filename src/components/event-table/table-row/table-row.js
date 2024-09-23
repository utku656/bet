import React, { useState, memo } from "react";
import { useCouponContext } from "../../../store/couponContext";
import {
  BET_INDEX_ONE,
  BET_INDEX_SEVEN,
  BET_INDEX_TWO,
  BET_INDEX_TREE,
  BET_INDEX_FOUR,
  BET_INDEX_FIVE,
  BET_INDEX_SIX,
} from "../../../constants/constants";
import "./table-row.scss";

function TableRow({ code, time, info, mbsVariable, oddsObject }) {
  const [matchResultSelected, setMatchResultSelected] = useState();
  const { coupon, handleCouponAdd, handleCouponDelete } = useCouponContext();

  const match = {
    info,
    code,
    mbsVariable,
  };

  const handleCoupon = (rateDetails, matchItem, index) => {
    setMatchResultSelected((prevState) => (prevState === index ? "" : index));

    const deletedIndex = coupon.findIndex(
      (item) => item.code === matchItem.code && item.rate === rateDetails.rate
    );

    if (deletedIndex > -1) {
      handleCouponDelete(deletedIndex);
    } else {
      const matchInfo = {
        ...rateDetails,
        ...matchItem,
      };
      handleCouponAdd(matchInfo);
    }
  };

  return (
    <div className="table-row">
      <div className="match-info">
        <div>{code}</div>
        <div>{time}</div>
        <div>{info}</div>
      </div>
      <div>Yorumlar</div>
      <div>{mbsVariable}</div>
      <div
        className={`pointer ${
          matchResultSelected === BET_INDEX_ONE ? "selected" : ""
        }`}
        onClick={() =>
          handleCoupon(oddsObject.matchResult.host, match, BET_INDEX_ONE)
        }
      >
        {oddsObject.matchResult.host.rate}
      </div>
      <div
        className={`pointer ${
          matchResultSelected === BET_INDEX_TWO ? "selected" : ""
        }`}
        onClick={() =>
          handleCoupon(oddsObject.matchResult.draw, match, BET_INDEX_TWO)
        }
      >
        {oddsObject.matchResult.draw.rate}
      </div>
      <div />
      <div
        className={`pointer ${
          matchResultSelected === BET_INDEX_TREE ? "selected" : ""
        }`}
        onClick={() =>
          handleCoupon(oddsObject.goalCountResult.lower, match, BET_INDEX_TREE)
        }
      >
        {oddsObject.goalCountResult.lower.rate}
      </div>
      <div
        className={`pointer ${
          matchResultSelected === BET_INDEX_FOUR ? "selected" : ""
        }`}
        onClick={() =>
          handleCoupon(oddsObject.goalCountResult.upper, match, BET_INDEX_FOUR)
        }
      >
        {oddsObject.goalCountResult.upper.rate}
      </div>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div
        className={`pointer ${
          matchResultSelected === BET_INDEX_FIVE ? "selected" : ""
        }`}
        onClick={() =>
          handleCoupon(oddsObject.doubleChanceResult.x1, match, BET_INDEX_FIVE)
        }
      >
        {oddsObject.doubleChanceResult.x1.rate}
      </div>
      <div
        className={`pointer ${
          matchResultSelected === BET_INDEX_SIX ? "selected" : ""
        }`}
        onClick={() =>
          handleCoupon(oddsObject.doubleChanceResult.x12, match, BET_INDEX_SIX)
        }
      >
        {oddsObject.doubleChanceResult.x12.rate}
      </div>
      <div
        className={`pointer ${
          matchResultSelected === BET_INDEX_SEVEN ? "selected" : ""
        }`}
        onClick={() =>
          handleCoupon(oddsObject.doubleChanceResult.x2, match, BET_INDEX_SEVEN)
        }
      >
        {oddsObject.doubleChanceResult.x2.rate}
      </div>
      <div />
      <div />
      <div>3</div>
    </div>
  );
}
export default memo(TableRow);
