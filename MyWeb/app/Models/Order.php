<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $table = 'orders';
    protected $fillable = ['id','total','user_id'];
    public function orderDetail(){
        return $this->hasMany(order_detail::class)->with(['course:id,course_name,price']);
    }
    public function user () {
        return $this->hasOne(Users::class, 'id', 'user_id');
    }
    const UPDATED_AT = NULL;

}
