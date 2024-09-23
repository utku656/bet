import React, { Fragment } from "react";
import TableHeader from "../table-header/table-header";
import TableRow from "../table-row/table-row";

const TableEvent = ({ event, index }) => {
  const mbsVariable = event.OCG[1].OC[0].MBS;
  const oddsObject = {
    matchResult: {
      host: {
        rate: event.OCG[1].OC[0].O,
        mbs: event.OCG[1].OC[0].MBS,
        id: event.OCG[1].ID,
      },
      draw: {
        rate: event.OCG[1].OC[1].O,
        mbs: event.OCG[1].OC[1].MBS,
        id: event.OCG[1].ID,
      },
    },

    goalCountResult: {
      lower: {
        rate: event.OCG[5].OC[25].O,
        mbs: event.OCG[5].OC[25].MBS,
        id: event.OCG[5].ID,
      },
      upper: {
        rate: event.OCG[5].OC[26].O,
        mbs: event.OCG[5].OC[26].MBS,
        id: event.OCG[5].ID,
      },
    },

    doubleChanceResult: {
      x1: {
        rate: event.OCG[2].OC[3].O,
        mbs: event.OCG[2].OC[3].MBS,
        id: event.OCG[2].ID,
      },
      x12: {
        rate: event.OCG[2].OC[4].O,
        mbs: event.OCG[2].OC[4].MBS,
        id: event.OCG[2].ID,
      },
      x2: {
        rate: event.OCG[2].OC[5].O,
        mbs: event.OCG[2].OC[5].MBS,
        id: event.OCG[2].ID,
      },
    },
  };

  return (
    <Fragment key={`${event.C}-${event.N}`}>
      <TableHeader
        title={`${event.D} ${event.DAY} ${event.LN}`}
        index={index}
      />
      <TableRow
        code={event.C}
        time={event.T}
        info={event.N}
        mbsVariable={mbsVariable}
        oddsObject={oddsObject}
      />
    </Fragment>
  );
};

export default TableEvent;
