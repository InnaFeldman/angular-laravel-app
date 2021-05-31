<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use App\User;

class ModelUserTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * A basic unit test example.
     *
     * @return void
     */

    public function test_user_has_full_name_attribute()
    {

        //create user

        $user = User::create(['name' => 'Jon Golds', 'email' => 'golds@gmai.com', 'password' => '123456']);

        //assert user has full name

        $this->assertEquals('Jon Golds', $user->name);

        //$this->assertTrue($user->has('Jim'));
    }
}
