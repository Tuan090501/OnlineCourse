<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Session extends Model
{
    use HasFactory;
    protected $table ='sessions';
    protected $fillable = ['title', 'course_id'];

    public function course () {
        return $this->belongsTo(Course::class);
    }

    public function lectures()
    {
        return $this->hasMany(Lecture::class);
    }

    const UPDATED_AT = NULL;
    const CREATED_AT = NULL;

}
