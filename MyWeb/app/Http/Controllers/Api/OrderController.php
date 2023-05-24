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
       $order = Order::with('orderDetail')->orderby('created_at','DESC')->get();

       return response()->json($order);
    }
    public function insert(Request $request) {

         $order_id = random_int(100000,999999);
         $order_details = [];
         foreach ($request->order_detail as $order_detail_data) {
             $order_detail = order_detail::create([
                 'order_id' => $order_id,
                 'user_id' => $order_detail_data['user_id'],
                 'course_id' => $order_detail_data['course_id'],
                 'price' => $order_detail_data['price']
             ]);
             $order_details[] = $order_detail;
         }

         // Tạo order duy nhất
         $order = Order::create([
             'id' => $order_id,
             'total' => $request->total
         ]);

         if ($order && count($order_details) > 0) {
             return response()->json(['message' => 'Order created'], 201);
         } else {
             return response()->json(['message' => 'Create order failed'], 404);
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
