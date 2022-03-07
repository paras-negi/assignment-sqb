import React from "react";
import RingLoader from "../components/RingLoader";

export default function EmptyLayout(props) {
  const {
    children,
    hideBreadCrumb = false,
    hideBorder = false,
    loading,
    title,
  } = props;

  useEffect(() => {
    document.title = title;
  }, []);

  return loading ? (
    <div className="main-loader">
      <RingLoader />
    </div>
  ) : (
    // <h5>Please wait..</h5>
    { children }
  );
}
