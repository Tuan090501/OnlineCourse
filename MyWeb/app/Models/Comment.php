<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;
    protected $table = 'comments';
    protected $fillable = ['id_user','id_course','rate','comment'];

    const UPDATED_AT = NULL;
    const CREATED_AT = NULL;
}
