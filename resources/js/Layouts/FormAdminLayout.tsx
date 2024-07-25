import { Button } from '@/Components/ui/button'
import { Input } from '@/Components/ui/input'
import { Label } from '@/Components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select'
import { useForm, usePage } from '@inertiajs/react'
import { FormEventHandler } from 'react'

export default function FormAdminLayout() {
    const csrf = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        username: '',
        email: '',
        password: '',
        role: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('items.store'));
    };
  return (
    <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                   
                        <form action="/items" method="POST">
                        
                        <div className="grid m-4 w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="username" className="font-extrabold">Username</Label>
                            <Input type="username" id="username" name='username' placeholder="Username" />
                            <Label htmlFor="email" className="font-extrabold">Email</Label>
                            <Input type="email" id="email" name='email' placeholder="Email" />
                            <Label htmlFor="password" className="font-extrabold">Password</Label>
                            <Input type="password" id="password" name='password' placeholder="Password" />
                            <Input type="hidden" name="_token" value="halo" />
                            <Label htmlFor="password" className="font-extrabold">Role</Label>
                            <Select name='role'>
                                <SelectTrigger>
                                    <SelectValue placeholder="Role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="superadmin">Super Admin</SelectItem>
                                    <SelectItem value="admin">Admin</SelectItem>
                                </SelectContent>
                            </Select>

                        <Button type='submit'>Tambahkan</Button>
                        </div>  
                        </form>
                    </div>
            </div>
    </div>
  )
}
