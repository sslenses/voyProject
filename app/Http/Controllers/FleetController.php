<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Fleet;
use Inertia\Inertia;

class FleetController extends Controller
{
    // Method untuk menampilkan semua fleet
    public function index()
    {
        // Ambil semua data fleet dari database
        $fleets = Fleet::all();

        // Kembalikan view Inertia dengan data fleet
        return Inertia::render('Fleet/Page', ['fleets' => $fleets]);}
}
