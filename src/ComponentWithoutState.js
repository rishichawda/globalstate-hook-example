import React from 'react'

const ComponentWithoutState = () => (
  <div>
    <p>
      This component is not connected to store and uses React.memo
      to prevent unnecessary renders.
    </p>
  </div>
);

export default React.memo(ComponentWithoutState);
