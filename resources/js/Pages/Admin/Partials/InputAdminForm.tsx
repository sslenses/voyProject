import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import ConfirmPassword from "@/Pages/Auth/ConfirmPassword";
import { useForm, usePage } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function FormAdminLayout() {
    const csrf = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        company: "",
        role: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("items.store"));
    };
    return (
        <div className="bg-white rounded-2xl  dark:bg-gray-800 overflow-hidden shadow-smmx-auto py-12 ">
            <div className=" mx-auto w-fit  ">
                <form action="/items" method="POST">
                    <div className="mb-4  flex flex-col">
                        <span className="text-xl font-bold">New Admin</span>
                        <span className="text-sm">
                            Form Untuk Menambahkan Admin
                        </span>
                    </div>
                    <div className="flex gap-12 w-full ">
                        <div className="w-60 ">
                            <div className="flex flex-col gap-2 pt-4 ">
                                <Label
                                    htmlFor="username"
                                    className="font-black text-xs"
                                >
                                    Username
                                </Label>
                                <Input
                                    type="username"
                                    id="username"
                                    name="username"
                                    placeholder="Username"
                                />
                            </div>
                            <div className="flex flex-col gap-2 pt-4">
                                <Label
                                    htmlFor="email"
                                    className="text-xs font-black"
                                >
                                    Email
                                </Label>
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="flex flex-col gap-2 pt-4">
                                <Label
                                    htmlFor="password"
                                    className="font-black text-xs"
                                >
                                    Password
                                </Label>
                                <Input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                        <div className="w-60">
                            <div className="flex flex-col gap-2 pt-4">
                                <Label
                                    htmlFor="confirmpassword"
                                    className="font-black text-xs"
                                >
                                    Confirm Password
                                </Label>
                                <Input
                                    type="password"
                                    id="confirmpassword"
                                    name="confirmpassword"
                                    placeholder="Confirm Password"
                                />
                            </div>
                            <div className="flex flex-col gap-2 pt-4">
                                <Label
                                    htmlFor="company"
                                    className="font-black text-xs"
                                >
                                    Company
                                </Label>
                                <Input
                                    type="company"
                                    id="company"
                                    name="company"
                                    placeholder="eg. Voy Team"
                                />
                            </div>
                            <div className="flex flex-col gap-2 pt-4">
                                <Input
                                    type="hidden"
                                    name="_token"
                                    value="halo"
                                />

                                <Label
                                    htmlFor="role"
                                    className="font-black text-xs"
                                >
                                    Role
                                </Label>
                                <Select name="role">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Role" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="superadmin">
                                            Super Admin
                                        </SelectItem>
                                        <SelectItem value="admin">
                                            Admin
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse mt-6  ">
                        <Button type="submit">Tambahkan</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
