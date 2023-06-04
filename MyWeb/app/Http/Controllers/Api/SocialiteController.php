<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
class SocialiteController extends Controller
{
     public function login(Request $request)
    {
        $facebookUser = Socialite::driver('facebook');

        // Use $facebookUser to retrieve or create a user in your application's database

        return response()->json([
            'success' => true,
            'user' => $facebookUser
        ]);
    }
}
