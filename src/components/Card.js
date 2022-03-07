import React from "react";

export default function Card({
  subheading={},
  heading = { font_size: "f22", text: "", class: "txt-blue"},
  content= {font_size: "f14", text: ""}
}) {
  //f14 f17, f20; f22
  return (
    <div className="card">
      <h3 className={`${heading?.font_size} ${heading?.class} pb1`}>
        {heading?.text || "Get More Visibility"}{" "}
      </h3>

      <p className={`card-content ${content?.font_size}`}>{content?.text}</p>
    </div>
  );
}
