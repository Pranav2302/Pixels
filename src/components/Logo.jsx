import React from 'react'
import Log from "./Logoimage/Logo.png"
function Logo({width="100px"}) {
  return (
    <div>
      <img
        width={width}
        // height="80"
        src={Log}
        alt="Pixels"
        className="rounded-lg"
      />
    </div>
  );
}

export default Logo
