<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Partner_id extends Model
{
    // Nama tabel yang digunakan oleh model ini
    protected $table = 'partner_id';

    // Kolom yang dapat diisi massal
    protected $fillable = [
        'name',
        'type',
        'contact_email',
        'contact_phone',
        'address',
        'price_per_minute',
        'credit_limit',
        'balance',
        'can_modify_pricing',
    ];
}
