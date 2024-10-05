import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h2>Something went wrong</h2>
      <h3>
        {error.status} -- {error.statusText}
      </h3>
    </>
  );
}
