<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFloorTranslationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('floor_translations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('floor_id')->unsigned();
            $table->string('locale')->index();

            $table->string('title')->nullable();
            $table->string('meta_title')->nullable();
            $table->string('meta_description')->nullable();
            $table->string('meta_keyword')->nullable();

            $table->unique(['floor_id','locale']);
            $table->foreign('floor_id')
                ->references('id')
                ->on('floors')
                ->onDelete('cascade')
                ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('floor_translations');
    }
}
