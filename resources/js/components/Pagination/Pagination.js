import React from "react";
import {Link} from "@inertiajs/inertia-react";

export const Pagination = ({ length, active, links }) => {
  return (
    <div className="pagination flex centered">
        {links.slice(1, -1).map((item)=>{
            return(
                <Link href={item.url}>
                    <button
                        className="num"
                        style={{
                            opacity: item.active ? "1" : "0.5",
                            color: "#334E60",
                            margin: " 0 5px",
                            fontWeight: "bold",
                            fontSize: "16px",
                        }}
                    >
                        {item.label}
                    </button>
                </Link>
            );
        })}
    </div>
  );
};
