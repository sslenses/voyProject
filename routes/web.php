<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\InputController;
use App\Http\Controllers\VehicleController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');



Route::get('/rental', function () {
    return Inertia::render('Rental/Page');
})->name('rentals.page');

Route::get('/vehicle', function () {
    return Inertia::render('Vehicle/Page');
})->name('vehicles.page');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

// route input
Route::get('items/create', [InputController::class, 'create'])->name('items.create');
Route::post('items', [InputController::class, 'store'])->name('items.store');

// route table vehicle 
Route::get('/viewdata', [VehicleController::class, 'index']);