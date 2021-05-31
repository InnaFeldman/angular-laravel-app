<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
//use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;
use App\User;

class UserModelTest2 extends TestCase
{
    //use DatabaseTransactions;
    use DatabaseMigrations;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_user_has_full_name_attribute()
    {

        //create user

        $user = User::create(['name' => 'Jack8 BLack', 'email' => 'jack-8@gmai.com', 'password' => '123456']);

        //assert user has full name

        $this->assertEquals('Jack8 BLack', $user->name);

        //$this->assertTrue($user->has('Jim'));
    }
}
