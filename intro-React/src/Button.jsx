import React from "react";

export default function Button(props) {

    const {name, onClick } = props;

    return (
        <div>
            <button onClick={onClick}>{name}</button>
        </div>
    )
}