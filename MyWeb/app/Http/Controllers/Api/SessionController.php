<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Session;

class SessionController extends Controller
{
    public function index (){
        return Session::all();
    }

<<<<<<< HEAD
    public function insert (Request $request){
        $session = Session::create($request->all());
        if ($session) {
           return response()->json(['message' => 'Session create successfull']);
        } else {
            return response()->json(['message'=> 'Session create fail']);
        }
    }

}
=======


}
>>>>>>> 8882ad7271c1e5ed411890d9f6d6662cbeb649a8
