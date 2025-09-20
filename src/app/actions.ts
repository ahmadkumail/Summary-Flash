"use server";

import { generateSummary, GenerateSummaryInput } from "@/ai/flows/generate-summary";

export async function handleSummarize(values: GenerateSummaryInput) {
  try {
    const result = await generateSummary(values);
    return { summary: result.summary };
  } catch (error) {
    console.error("Error generating summary:", error);
    return { error: "Failed to generate summary. Please try again later." };
  }
}
