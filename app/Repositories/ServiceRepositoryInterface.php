<?php
/**
 *  app/Repositories/ServiceRepositoryInterface.php
 *
 * Date-Time: 06.08.21
 * Time: 14:57
 * @author Vito Makhatadze <vitomakhatadze@gmail.com>
 */
namespace App\Repositories;


use App\Http\Requests\Admin\ServiceRequest;


interface ServiceRepositoryInterface
{

    /**
     * @param ServiceRequest $request
     * @param array $with
     *
     * @return mixed
     */
    public function getData(ServiceRequest $request, array $with = []);
}
