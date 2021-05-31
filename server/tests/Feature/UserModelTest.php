<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use App\User;

class UserModelTest extends TestCase
{
    use DatabaseTransactions;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_user_has_full_name_attribute()
    {

        //create user

        $user = User::create(['name' => 'Rus Moon', 'email' => 'rus@gmai.com', 'password' => '123456']);

        //assert user has full name

        $this->assertEquals('Rus Moon', $user-> name);
    }
}
