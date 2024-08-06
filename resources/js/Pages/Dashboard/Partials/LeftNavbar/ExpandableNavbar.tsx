import React, { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";

interface ExpandableNavbarProps {
    title: string;
    children: React.ReactNode;
}

const ExpandableNavbar: React.FC<ExpandableNavbarProps> = ({
    title,
    children,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className="flex flex-col justify-between rounded-md">
            <div
                className="flex justify-between bg-white rounded-md py-3 px-4 cursor-pointer"
                onClick={toggleOpen}
            >
                <div className="flex items-center gap-4 text-sm font-semibold">
                    <ChevronRightIcon
                        className={`h-4 w-4 ${isOpen ? "rotate-90" : ""}`}
                    />
                    <p>{title}</p>
                </div>
                <div className="flex items-center">
                    <ChevronDownIcon
                        className={`h-4 w-4 ${isOpen ? "" : "rotate-90"}`}
                    />
                </div>
            </div>
            {isOpen && (
                <div className="text-sm">
                    <ul className="px-4">{children}</ul>
                </div>
            )}
        </div>
    );
};

export default ExpandableNavbar;
