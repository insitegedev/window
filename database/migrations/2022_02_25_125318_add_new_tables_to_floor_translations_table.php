<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddNewTablesToFloorTranslationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('floor_translations', function (Blueprint $table) {
            $table->string('dimension')->nullable()->after("title");
            $table->string('apartment')->nullable()->after("dimension");
            $table->string('area')->nullable()->after("apartment");
            $table->longText('specifications')->nullable()->after("area");

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('floor_translations', function (Blueprint $table) {
            $table->dropColumn("dimension");
            $table->dropColumn("apartment");
            $table->dropColumn("area");
            $table->dropColumn("specifications");
        });
    }
}
