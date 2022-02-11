<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddMetaTablesToServiceTranslationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('service_translations', function (Blueprint $table) {
            $table->string('meta_title')->after("description")->nullable();
            $table->string('meta_description')->after("meta_title")->nullable();
            $table->string('meta_keyword')->after("meta_description")->nullable();
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
            $table->dropColumn("meta_title");
            $table->dropColumn("meta_description");
            $table->dropColumn("meta_keyword");
        });
    }
}
