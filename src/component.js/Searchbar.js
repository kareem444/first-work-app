import React from "react";

export default function Searchbar({ setTheInputVal }) {
    return (
        <div>
            <input
                type="text"
                placeholder="tap here"
                onChange={(val) => {
                    setTheInputVal(val.target.value);
                }}
            />
        </div>
    );
}
