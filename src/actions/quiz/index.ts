// =============================================================================
// File Name: Quiz Action
// File Description:
// This file contains the Quiz Action
// =============================================================================
// =============================================================================
// Actions Imports
// =============================================================================
import { Dispatch, SetStateAction } from 'react';
import { z } from 'zod';

// =============================================================================
// Actions Form Schemas
// =============================================================================
const FormSchema = z.object({
  id: z.string(),
  option: z.string({
    required_error: 'Please select an answer',
  }),
});

// Form Schema Omits ////////////////
const actionForm = FormSchema.omit({ id: true });

// =============================================================================
// Actions Types
// =============================================================================
export type State = {
  errors?: {};
  message?: string | null;
};

// =============================================================================
// Actions Functions
// =============================================================================
export const action = async (
  setLoading: Dispatch<SetStateAction<boolean>>,
  prevState: State | undefined,
  formData: FormData
) => {
  const validatedFields = actionForm.safeParse(
    Object.fromEntries(formData.entries())
  );

  // Sending errors if any
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please select an answer',
    };
  }

  // Action Processes
  try {
    setLoading(true);
    setTimeout(() => {
      console.log(validatedFields);
      setLoading(false);
    }, 2000);
  } catch (error) {
    return {
      message: 'API ERROR: Failed to perform API call.',
    };
  }
};
