<?php
/**
 *  app/Repositories/Eloquent/ProductRepository.php
 *
 * Date-Time: 30.07.21
 * Time: 10:36
 * @author Vito Makhatadze <vitomaxatadze@gmail.com>
 */

namespace App\Repositories\Eloquent;


use App\Models\Apartment;
use App\Models\Floor;
use App\Models\Product;
use App\Repositories\ApartmentRepositoryInterface;
use App\Repositories\Eloquent\Base\BaseRepository;
use App\Repositories\FloorRepositoryInterface;
use App\Repositories\ProductRepositoryInterface;

/**
 * Class LanguageRepository
 * @package App\Repositories\Eloquent
 */
class FloorRepository extends BaseRepository implements FloorRepositoryInterface
{

    /**
     * @param Floor $model
     */
    public function __construct(Floor $model)
    {
        parent::__construct($model);
    }

}
