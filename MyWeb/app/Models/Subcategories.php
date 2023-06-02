<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subcategories extends Model
{
    use HasFactory;
    protected $table = 'subcategories';
    protected $fillable = ['sub_name','id_category'];

    public function category () {
        return $this->belongsTo(Categories::class);
    }
}
