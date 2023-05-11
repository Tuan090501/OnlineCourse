<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UsersController;
use App\Http\Controllers\Api\JWTAuthController;
use App\Http\Controllers\Api\CourseController;
use App\Http\Controllers\Api\CategoriesController;
use App\Http\Controllers\Api\SubCategoriesController;
use App\Http\Controllers\Api\SessionController;
use App\Http\Controllers\OtpController;
use Laravel\Socialite\Facades\Socialite;

use App\Models\User;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//User controller
Route::prefix('users')->group(function () {
    Route::get('/',[ UsersController::class,'index']);
    Route::post('/',[UsersController::class,'insert']);
    Route::get('/{id}',[UsersController::class,'show']);
    Route::put('/{id}',[UsersController::class,'update']);
    Route::delete('/{id}', [UsersController::class, 'delete']);
    Route::put('/reset-password/{id}', [UsersController::class, 'resetpassword']);

});

//Send OTP
Route::post('send-otp',[OtpController::class, 'index']);

//Authentication user
Route::controller(JWTAuthController::class)->group(function(){
    Route::post('register','register');
    Route::post('login','login');

});
Route::post('/logout', [JWTAuthController::class,'logout']
    );


//Route course
Route::prefix('course')->group(function (){
    Route::get('/',[CourseController::class,'index']);
    Route::post('/',[CourseController::class,'insert']);
    Route::put('/{id}',[CourseController::class,'update']);
});


Route::prefix('categories')->group(function () {
    Route::get('/',[CategoriesController::class,'index']);
    Route::post('/',[CategoriesController::class,'insert']);
    Route::put('/{id}',[CategoriesController::class,'update']);
    Route::delete('/{id}',[CategoriesController::class,'delete']);
});


Route::prefix('sub-categories')->group(function () {
    Route::get('/',[SubCategoriesController::class,'index']);
    Route::post('/',[SubCategoriesController::class,'insert']);
    Route::put('/{id}',[SubCategoriesController::class,'update']);
    Route::delete('/{id}',[SubCategoriesController::class,'delete']);});



