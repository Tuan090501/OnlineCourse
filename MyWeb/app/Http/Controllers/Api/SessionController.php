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

    public function insert (Request $request){
        $session = Session::create($request->all());
        if ($session) {
           return response()->json(['message' => 'Session create successfull']);
        } else {
            return response()->json(['message'=> 'Session create fail']);
        }
    }

}
