import { ExamTypes, NoteTypes, Semesters } from "./enums";
declare global {
  interface MaterialMetadata {
    id: number;
    year: number;
    semester: Semesters | null;
    uploader?: MaterialUploader;
  }

  interface NoteAttributes {
    type: NoteTypes;
    title?: string | null;
    is_solved: never;
  }
  interface ExamAttributes {
    type: ExamTypes;
    is_solved: boolean;
    title?: string | null;
  }

  type MaterialSpecificAttributes<T extends NoteAttributes | ExamAttributes> = MaterialTypeAttributes & T 
}
export {};

interface MaterialUploader {
  id: number;
  name: string;
  email?: string | null;
}

interface MaterialTypeAttributes {
  id: number;
  __component: "material.exam-data" | "material.note-data";
}
