import React from 'react';

export default function RingLoader({mainLoader}) {
    return (
        <div className={mainLoader ? "" : "loader"}>
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
    )
}
