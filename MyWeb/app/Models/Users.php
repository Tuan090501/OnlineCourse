<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class Users extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;
    protected $table = 'users';
    protected $fillable = ['user_name', 'password', 'email',"address", "avatar","birthday", "gender","phone_number","role","status","facebook_id","image"];
    protected $hidden = [
        'password',
        'remember_token',
    ];



    public function getJWTIdentifier(){
        return $this->getKey();
    }
    public function getJWTCustomClaims()
    {
        return [];
    }

}
