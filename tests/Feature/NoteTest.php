<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Note;
use Tests\TestCase;

class NoteTest extends TestCase
{
    /** @test */
    public function authenticated_users_can_add_new_note()
    {
        $this->actingAs($user = User::factory()->create())
            ->postJson('/api/notes', [
            'title' => 'Test Title',
            'content' => 'Test Content',
        ])
            ->assertStatus(201)
            ->assertJsonStructure(['id', 'title', 'content', 'created_at', 'updated_at']);

        $this->assertDatabaseHas('notes', [
            'title' => 'Test Title',
            'content' => 'Test Content',
        ]);

        $this->assertCount(1, Note::all());
    }

    /** @test */
    public function unauthenticated_users_can_not_add_new_note()
    {
        $this->postJson('/api/notes', [
            'title' => 'Test Title',
            'content' => 'Test Content',
        ])
            ->assertStatus(401)
            ->assertExactJson([
                'message' => 'Unauthenticated.'
            ]);
    }

    /** @test */
    public function can_not_add_new_note_with_empty_required_fields()
    {
        $this->actingAs($user = User::factory()->create())
            ->postJson('/api/notes', [
                'title' => '',
                'content' => '',
            ])
            ->assertStatus(422)
            ->assertJson([
                'errors' => [
                    'title' => [
                        'The title field is required.'
                    ],
                    'content' => [
                        'The content field is required.'
                    ]
                ]
            ]);
    }

    /** @test */
    public function authenticated_users_can_fetch_all_notes()
    {
        $this->actingAs($user = User::factory()->create())
            ->getJson('/api/notes')
            ->assertStatus(200);
    }

    /** @test */
    public function authenticated_users_can_update_existing_note()
    {
        $note = Note::factory()->create([
            'title' => 'Test Title',
            'content' => 'Test Content',
        ]);

        $this->actingAs($user = User::factory()->create())
            ->putJson("api/notes/{$note->id}", [
                'title' => 'Updated Title',
                'content' => 'Test Content',
            ])
            ->assertStatus(200)
            ->assertJsonFragment(['title' => 'Updated Title']);
    }

    /** @test */
    public function authenticated_users_can_delete_existing_note()
    {
        $note = Note::factory()->create([
            'title' => 'Test Title',
            'content' => 'Test Content',
        ]);

        $this->actingAs($user = User::factory()->create())
            ->deleteJson("api/notes/{$note->id}")
            ->assertStatus(200);
        $this->assertCount(0, Note::all());
    }
}
