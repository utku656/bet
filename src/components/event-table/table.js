import React, { useState, useEffect, memo } from "react";
import TableHeader from "./table-header/table-header";
import "./table.scss";
import TableEvent from "./table-event/table-event";
import { PER_PAGE } from "../../constants/constants";
import { useBulletinContext } from "../../store/bulletinContext";

function Table() {
  const [page, setPage] = useState(1);
  const { bulletinData } = useBulletinContext();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const innerHeight = window.innerHeight;
    const yOffSet = window.pageYOffset;
    const height = document.body.offsetHeight;

    if (innerHeight + yOffSet >= height) {
      setPage((prevState) => prevState + 1);
    }
  };
  return (
    <div className="table-container">
      <TableHeader
        title={`Event Count:${bulletinData.length}`}
        isFirstElement
      />
      {bulletinData.slice(0, page * PER_PAGE).map((event, index) => (
        <TableEvent event={event} index={index} key={index} />
      ))}
    </div>
  );
}

export default Table;
