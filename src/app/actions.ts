"use server";

import { generateSummary } from "@/ai/flows/generate-summary";
import { z } from "zod";

const SummarizeSchema = z.object({
  text: z.string(),
  length: z.enum(["short", "medium", "detailed"]),
});

export async function handleSummarize(values: z.infer<typeof SummarizeSchema>) {
  const validatedFields = SummarizeSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid input." };
  }

  try {
    const result = await generateSummary(validatedFields.data);
    return { summary: result.summary };
  } catch (error) {
    console.error("Error generating summary:", error);
    return { error: "Failed to generate summary. Please try again later." };
  }
}
