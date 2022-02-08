<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddNewTablesToServiceTranslationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('service_translations', function (Blueprint $table) {
            $table->string('subtitle_1')->nullable()->after("title");
            $table->string('subtitle_2')->nullable()->after("subtitle_1");
            $table->longText('content_1')->nullable()->after("subtitle_2");;
            $table->longText('content_2')->nullable()->after("content_1");;

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('service_translations', function (Blueprint $table) {
            $table->dropColumn("subtitle_1");
            $table->dropColumn("subtitle_2");
            $table->dropColumn("content_1");
            $table->dropColumn("content_2");
        });
    }
}
