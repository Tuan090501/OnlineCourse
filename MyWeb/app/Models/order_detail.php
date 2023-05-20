<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class order_detail extends Model
{
    use HasFactory;
    protected $table = 'order_detail';
    protected $fillable = ['id','order_id','user_id','course_id','price'];
    public function user () {
        return $this->hasOne(Users::class, 'id', 'user_id');
    }

    public function course () {
        return $this->hasOne(Course::class, 'id', 'course_id');
    }
    const UPDATED_AT = NULL;
    const CREATED_AT = NULL;

}
