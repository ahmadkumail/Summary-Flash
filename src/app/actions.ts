"use server";

import { generateSummary, GenerateSummaryInput } from "@/ai/flows/generate-summary";
import { formSchema } from "@/lib/schemas";
import { z } from "zod";

export async function handleSummarize(values: z.infer<typeof formSchema>) {
  try {
    const result = await generateSummary(values);
    return { summary: result.summary };
  } catch (error) {
    console.error("Error generating summary:", error);
    return { error: "Failed to generate summary. Please try again later." };
  }
}
