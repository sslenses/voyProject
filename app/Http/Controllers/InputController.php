<?php

namespace App\Http\Controllers;

use App\Models\FormLogin;
use Illuminate\Http\Request;

class InputController extends Controller
{
    public function create()
    {
        dd('data sudah masuk');
    }

    public function store(Request $request)
    {
        $request->validate([
            'username' => 'required|string|max:255',
            'email' => 'required|string|max:255',
            'password' => 'required|string|max:255',
            'role' => 'required|string',
        ]);
        

        FormLogin::create([
            'username' => $request->input('username'),
            'email' => $request->input('email'),
            'password' => $request->input('password'),
            'role' => $request->input('role'),
        ]);

        return redirect()->route('items.create')->with('success', 'Item created successfully.');
    }
}
