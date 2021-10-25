import React from "react";

export default function ComponentB(props) {
  return (
      <div>
          <p>This is component B</p>
          {props.children}
      </div>
    );
}