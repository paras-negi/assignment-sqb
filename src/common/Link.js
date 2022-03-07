import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { withContext } from "../context/Context";

function LinkCustom({location, children, href, styles, className, onClick }) {
  // console.log({location, getPrevScrName});

  if(href) {
    return (
      <Link to={href} style={{...styles}} className={`default-anchor ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button styles={styles} className={`btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default withContext(LinkCustom)
