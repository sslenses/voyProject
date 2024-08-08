<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('partner_id', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->enum('type', ['Conventional', 'Fleet', 'Micromobility']);
            $table->string('contact_email');
            $table->string('contact_phone', 20)->nullable();
            $table->text('address')->nullable();
            $table->decimal('price_per_minute', 10, 2)->default(0.00);
            $table->decimal('credit_limit', 10, 2)->default(0.00);
            $table->decimal('balance', 10, 2)->default(0.00);
            $table->boolean('can_modify_pricing')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('partner_id');
    }
};
