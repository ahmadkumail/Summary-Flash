'use server';

/**
 * @fileOverview Generates a summary of a given text with options for short, medium, or detailed summaries.
 *
 * - generateSummary - A function that handles the summary generation process.
 * - GenerateSummaryInput - The input type for the generateSummary function.
 * - GenerateSummaryOutput - The return type for the generateSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSummaryInputSchema = z.object({
  text: z
    .string()
    .min(1, { message: 'Please enter some text.' })
    .refine((text) => text.trim().split(/\s+/).filter(Boolean).length >= 10, {
      message: 'Please enter text with at least 10 words.',
    })
    .refine((text) => text.trim().split(/\s+/).filter(Boolean).length <= 5000, {
      message: 'Text is too long. Please use text with up to 5,000 words.',
    }),
  length: z
    .enum(['short', 'medium', 'detailed'])
    .describe('The desired length of the summary.'),
});
export type GenerateSummaryInput = z.infer<typeof GenerateSummaryInputSchema>;

const GenerateSummaryOutputSchema = z.object({
  summary: z.string().describe('The generated summary.'),
});
export type GenerateSummaryOutput = z.infer<typeof GenerateSummaryOutputSchema>;

export async function generateSummary(input: GenerateSummaryInput): Promise<GenerateSummaryOutput> {
  return generateSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSummaryPrompt',
  input: {schema: GenerateSummaryInputSchema},
  output: {schema: GenerateSummaryOutputSchema},
  prompt: `You are a highly skilled AI text summarizer.

Please provide a summary of the following text.

{{#if (eq length "short")}}
The summary should be 1 sentence long.
{{/if}}
{{#if (eq length "medium")}}
The summary should be 3 sentences long.
{{/if}}
{{#if (eq length "detailed")}}
The summary should be 5 sentences long.
{{/if}}

Text: {{{text}}}`,
});

const generateSummaryFlow = ai.defineFlow(
  {
    name: 'generateSummaryFlow',
    inputSchema: GenerateSummaryInputSchema,
    outputSchema: GenerateSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
