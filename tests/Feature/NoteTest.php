<?php

namespace Tests\Feature;

use App\Models\Note;
use Tests\TestCase;

class NoteTest extends TestCase {

    /** @test */
    public function show_notes(){

        $this->json('GET','/api/notes')
        ->assertStatus(200);
    }

    /** @test */
    public function create_note(){
        
        $response = $this->post('api/note/store', [
            'note' => [
                'title'    => 'new test title',
                'content'     => 'new test content'
            ]
        ]);
    
        $this->assertEquals(201, $response->getStatusCode());
    }
    /** @test */
    public function delete_note(){
        $request = $this->delete('api/note/18' );
        $this->assertEquals(200, $request->getStatusCode());
    }

    /** @test */
    public function update_note(){
        $response = $this->put('api/note/18', [
            'note' => [
                'title' => 'test unit title',
                'content' => 'test unit content'
            ]
            ]);

        $this->assertEquals(200, $response->getStatusCode());
    }
    
}
