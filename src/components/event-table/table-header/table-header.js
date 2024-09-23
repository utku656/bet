import React, { memo } from "react";
import "./table-header.scss";

function TableHeader({ isFirstElement, index, title }) {
  return (
    <div className={`table-row ${isFirstElement ? "header" : ""}`}>
      <div className="title">
        <div className="title-number">{index}</div>
        {title}
      </div>
      <div>Yorumlar</div>
      <div />
      <div>1</div>
      <div>x</div>
      <div>2</div>
      <div>Alt</div>
      <div>Üst</div>
      <div>H1</div>
      <div>1</div>
      <div>x</div>
      <div>2</div>
      <div>H-2</div>
      <div>1-X</div>
      <div>1-2</div>
      <div>X-2</div>
      <div>Var</div>
      <div>Yok</div>
      <div>+99</div>
    </div>
  );
}

export default memo(TableHeader);
