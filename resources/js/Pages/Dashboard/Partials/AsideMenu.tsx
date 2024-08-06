import { Button } from "@/Components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon, DotIcon } from "lucide-react";
import React from "react";

// Tipe untuk props MenuItem
interface MenuItemProps {
    title: string;
}

// Tipe untuk props ExpandableMenu
interface ExpandableMenuProps {
    title: string;
    children: React.ReactNode;
}

// Tipe untuk props MenuListItem
interface MenuListItemProps {
    title: string;
}

export default function AsideMenu() {
    return (
        <div className="flex flex-col px-6 w-64 space-y-12">
            <div className="flex items-center h-20 font-black text-4xl">
                <h1>LOGO HERE</h1>
            </div>
            <div className="">
                <MenuItem title="Dashboard" />
                <ExpandableMenu title="Rentals">
                    {["New Rental", "Rental List", "Rental Reports"].map(
                        (item, index) => (
                            <MenuListItem key={index} title={item} />
                        )
                    )}
                </ExpandableMenu>
                <MenuItem title="Vehicles" />
                <MenuItem title="Reports" />
                <MenuItem title="Settings" />
            </div>
        </div>
    );
}

// Komponen untuk item menu
const MenuItem: React.FC<MenuItemProps> = ({ title }) => (
    <div className="flex justify-between hover:bg-white rounded-md py-3 px-4">
        <div className="flex items-center gap-4 text-sm font-semibold">
            <Button size="icon" className="h-8 w-8">
                <ChevronRightIcon className="h-8" />
            </Button>
            <p>{title}</p>
        </div>
        <div className="flex items-center">
            <ChevronLeftIcon className="h-4 w-4" />
        </div>
    </div>
);

// Komponen untuk menu yang dapat diperluas
const ExpandableMenu: React.FC<ExpandableMenuProps> = ({ title, children }) => (
    <div className="flex flex-col justify-between rounded-md">
        <div className="flex justify-between bg-white rounded-md py-3 px-4">
            <div className="flex items-center gap-4 text-sm font-semibold">
                <Button size="icon" className="h-8 w-8">
                    <ChevronRightIcon className="h-8" />
                </Button>
                <p>{title}</p>
            </div>
            <div className="flex items-center">
                <ChevronLeftIcon className="h-4 w-4" />
            </div>
        </div>
        <div className="text-sm">
            <ul className="px-4">{children}</ul>
        </div>
    </div>
);

// Komponen untuk item dalam daftar menu
const MenuListItem: React.FC<MenuListItemProps> = ({ title }) => (
    <li className="flex items-center gap-4">
        <DotIcon className="h-9 w-8 flex-shrink-0" />
        <span>{title}</span>
    </li>
);
