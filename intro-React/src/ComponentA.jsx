import React from "react";

export default function ComponentA(props) {
  return (
        <div>
            <h2>Component A</h2>
            {props.children}
        </div>
    );
}