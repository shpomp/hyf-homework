import React, { useEffect } from "react";

const MyfuncComponent = (props) => {
  const { test } = props;
  useEffect(() => {
    console.log("I updated func component");
  }, [test]); // in array - all the variables you want to observe
  // in class, the prop update runs after mount
  // here in func it runs everytime it updates
  // cannot really put fetch api here, cause it would fetch everytime it uodates
  // if you pass [] array, it will only run first time, and will never update!! - so that acts as component did mount
  useEffect(() => {
    console.log("I mounted func comp");
    return () => {
      console.log("I unmounted func comp");
    };
  }, []);

  return <div></div>;
};
// functional does not have cdu cdm , it has use effect

export default MyfuncComponent;
