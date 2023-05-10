<?php

namespace App\Http\Controllers;

use App\Mail\SendOTP;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class OtpController extends Controller
{
    public function index (Request $request) {
        $otp = $this->generateOtp();
        $email = $request->input('email');
        $mailData = [
            'title' => 'Xác thực email với OTP',
            'body' => 'Mã xác thực của bạn là: ',
            'otp' => $otp
        ];
        try {
            Mail::to($email)->send(new SendOTP($mailData));
            return response()->json(['message' => 'OTP email sent successfully']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to send OTP email'], 500);
        }
    }

    private function generateOtp()
    {
        // Generate the OTP logic here
        $otp = mt_rand(100000, 999999);
        return $otp;
    }
}
