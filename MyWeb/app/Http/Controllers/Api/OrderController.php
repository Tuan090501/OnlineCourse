<?php

namespace App\Http\Controllers\APi;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\order_detail;
use Illuminate\Support\Facades\DB;
class OrderController extends Controller
{
    public function index () {
       $order = Order::with('orderDetail')->get();

       return response()->json($order);
    }
    public function insert(Request $request) {
         $order_id = random_int(100000,999999);
         $order = Order::create([
            'id' => $order_id,
            'total' => $request->total
         ]);
         $order_detail = order_detail::create([
            'order_id' => $order_id,
            'user_id' => $request->user_id,
            'course_id'=> $request->course_id,
            'price' => $request->price
         ]);
         if($order_detail && $order) {
            return response()->json(['message' => 'Order created'], 201);

        } else {
            return response()->json(['message'=>'Crete orderl false',404]);
        }
    }

    public function show($id){
        $order = Order::with('orderDetail')->find($id);
        if($order){
            return response()->json($order);
        } else {
            return response()->json(['message'=>'order not exist']);
        }
    }
}
