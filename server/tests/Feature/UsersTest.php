<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    // public function test_userspage_contains_notempty_users_table()
    // {
    //     $response = $this->get('/users');

    //     //$response->assertSee('Inna Feldman');

    //     $response->assertStatus(200);
    // }


    public function test_users_route_return_something(){
        $response = $this->get('/users');
        //dd($response);
        $response->assertSeeText('Name', $escaped = true);
    }
}
