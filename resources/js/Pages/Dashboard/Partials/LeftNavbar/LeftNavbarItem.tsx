import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";

interface LeftNavbarItemProps {
    title: string; // Tetap menggunakan title
}

const LeftNavbarItem: React.FC<LeftNavbarItemProps> = ({ title }) => {
    // Mengubah title menjadi format URL yang valid
    const urlSlug = title.toLowerCase().replace(/\s+/g, "-"); // Mengubah spasi menjadi -

    return (
        <Link href={`/${urlSlug}`}>
            <div className="flex justify-between hover:bg-white rounded-md py-3 px-4 cursor-pointer">
                <div className="flex items-center gap-4 text-sm font-semibold">
                    <Button size="icon" className="h-8 w-8">
                        <ChevronRightIcon className="h-4 w-4" />
                    </Button>
                    <p>{title}</p>
                </div>
                <div className="flex items-center">
                    <ChevronLeftIcon className="h-4 w-4" />
                </div>
            </div>
        </Link>
    );
};

export default LeftNavbarItem;
