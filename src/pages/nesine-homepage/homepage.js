import React from "react";
import Table from "../../components/event-table/table";
import Coupon from "../../components/coupon/coupon";
import { useBulletinContext } from "../../store/bulletinContext";

function Homepage() {
  const { loading } = useBulletinContext();

  return (
    <div>
      {loading ? (
        <>Loading ... </>
      ) : (
        <>
          <Table />
          <Coupon />
        </>
      )}
    </div>
  );
}
export default Homepage;
