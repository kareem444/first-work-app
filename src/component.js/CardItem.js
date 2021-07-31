import React from "react";

export default function CardItem({ Theuser }) {
    return (
        <div className="card w-100 mt-3 ">
            <div style={{ width: "100%" }}>
                <img
                    src={"https://picsum.photos/200/300?random="+Theuser.id}
                    className="card-img-top"
                    alt="..."
                />
            </div>
            <div className="card-body">
                <h5 className="card-title"> {Theuser.name}</h5>
                <p className="card-text">{Theuser.email}</p>
            </div>
        </div>
    );
}
