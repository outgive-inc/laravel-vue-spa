<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Note;
use Illuminate\Support\Carbon;

class NoteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Note::orderBy('created_at',"DESC")->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $newNote = new Note;
        $newNote->title = $request->note["title"];
        $newNote->content = $request->note["content"];
        $newNote->save();

        return $newNote;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $existingNote = Note::find( $id );

        if( $existingNote ){
            // $existingNote->updated_at = $request->note["updated_at"] ? Carbon::now() : null;
            $existingNote->title = $request->note['title'];
            $existingNote->content = $request->note['content'];
            $existingNote->save();
            return $existingNote;
        }

        return "Note not found";
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $existingNote = Note::find( $id );
        if($existingNote){
            $existingNote->delete();
            return "Note successfully removed";
        }
    }
}
