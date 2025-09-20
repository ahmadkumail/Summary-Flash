import * as z from 'zod';

export const formSchema = z.object({
  text: z
    .string()
    .min(1, { message: 'Please enter some text.' })
    .refine((text) => text.trim().split(/\s+/).filter(Boolean).length >= 10, {
      message: 'Please enter text with at least 10 words.',
    })
    .refine((text) => text.trim().split(/\s+/).filter(Boolean).length <= 5000, {
      message: 'Text is too long. Please use text with up to 5,000 words.',
    }),
  length: z.enum(['short', 'medium', 'detailed']),
});
