<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
class Categories extends Model
{
    use HasFactory;
    protected $table = 'categories';
    protected $fillable = ['category_name'];

    public function subcategory () : HasMany {
        return $this->hasMany(Subcategories::class,'id_category');
    }

}
