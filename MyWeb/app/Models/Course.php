<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;
    protected $table = 'courses';
    protected $fillable = ['course_name', 'price', 'id_category','user_id','status','description','video','img','rating','discount'];

    public function sessionsWithLectures(){
        return $this->hasMany(Session::class)->with('lectures');
    }

    public function lecturer () {
        return $this->hasOne(Users::class, 'id', 'user_id');
    }

    public function category () {
        return $this->hasOne(Categories::class, 'id', 'id_category');
    }

}
