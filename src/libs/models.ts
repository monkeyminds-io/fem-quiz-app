// =============================================================================
// File Name: Models File
// File Description:
// This file contains a repository of Models to use in the application
// =============================================================================
// =============================================================================
// SUBJECT MODELS
// =============================================================================
export type Question = {
  question: string;
  options: string[];
  answer: string;
};

export type Subject = {
  subject: string;
  title: string;
  icon: string;
  questions: Question[];
};
