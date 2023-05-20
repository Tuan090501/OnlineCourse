<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $table = 'orders';
    protected $fillable = ['id','total'];
    public function orderDetail(){
        return $this->hasMany(order_detail::class)->with(['user:id,user_name','course:id,course_name,price']);
    }
    const UPDATED_AT = NULL;

}
