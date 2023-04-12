<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Users;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;
use Lcobucci\JWT\Token\Builder;

class JWTAuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','register']]);
    }

    public function login(Request $request)
    {

        $credentials = $request->only('user_name', 'password');

        $token=Auth::attempt($credentials);



        if (!$token) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized',
                'token' => $token,

            ], 401);
        }

        $user = JWTAuth::user();

        return response()->json([
                'status' => 'success',
                'user' => $user,

                'authorisation' => [
                    'token' => $token,
                    'type' => 'bearer',

                ],

            ]);

    }

    public function register(Request $request){
        $request->validate([

            'user_name' => 'required|string|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        $user = Users::create([

            'user_name' => $request->user_name,
            'password' => bcrypt($request->password),
            'email' => $request->user_name,

        ]);

        $token = Auth::login($user);
        return response()->json([
            'status' => 'success',
            'message' => 'User created successfully',
            'user' => $user,
            'authorisation' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
    }

    public function logout()
    {
         Auth::logout();
         JWTAuth::invalidate(JWTAuth::getToken());
         return response()->json(['message' => 'Successfully logged out']);
    }

    public function refresh()
    {
        return response()->json([
            'status' => 'success',
            'user' => Auth::user(),
            'authorisation' => [
                'token' => Auth::refresh(),
                'type' => 'bearer',
            ]
        ]);
    }
    }


