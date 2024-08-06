import React from "react";
import LeftNavbarItem from "./LeftNavbarItem";
import ExpandableNavbar from "./ExpandableNavbar";

export default function LeftNavbar() {
    return (
        <div className="flex flex-col px-6 w-64 space-y-12">
            <div className="flex items-center h-20 font-black text-4xl">
                <h1>LOGO HERE</h1>
            </div>
            <div className="">
                <LeftNavbarItem title="Dashboard" />
                <ExpandableNavbar title="Rental">
                    {["New Rental", "Rental List", "Rental Reports"].map(
                        (item, index) => (
                            <LeftNavbarItem key={index} title={item} />
                        )
                    )}
                </ExpandableNavbar>
                <LeftNavbarItem title="Vehicle" />
                <LeftNavbarItem title="Reports" />
                <LeftNavbarItem title="Settings" />
            </div>
        </div>
    );
}
