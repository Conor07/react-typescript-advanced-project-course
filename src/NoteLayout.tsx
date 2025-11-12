import React from "react";
import type { Note } from "./App";
import {
  Navigate,
  Outlet,
  useOutletContext,
  useParams,
} from "react-router-dom";

export const useNote = () => {
  return useOutletContext<Note>();
};

type NoteLayoutProps = {
  notes: Note[];
};

const NoteLayout: React.FC<NoteLayoutProps> = ({ notes }) => {
  const { id } = useParams();

  const note = notes.find((note) => note.id === id) ?? null;

  console.log("note: ", note);

  if (note === null) return <Navigate to="/" replace />;

  return <Outlet context={note} />;
};

export default NoteLayout;
