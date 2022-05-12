<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function index() {
       return response()->json([
            'access_token' => '123',
            'token_type' => 'bearer',
            //'expires_in' => auth('backend_api')->factory()->getTTL() * 10,
            'user' => '1'
        ]); 
    }
}
