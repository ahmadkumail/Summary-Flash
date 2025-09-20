'use client';

import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { handleSummarize } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Copy, FileUp, Sparkles, Trash2 } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
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

type FormValues = z.infer<typeof formSchema>;

export default function Summarizer() {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: '',
      length: 'medium',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    setSummary('');

    // This is already validated by the resolver.
    const result = await handleSummarize(data);
    setIsLoading(false);

    if (result.error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: result.error,
      });
    } else if (result.summary) {
      setSummary(result.summary);
      toast({
        title: 'Success!',
        description: 'Your summary has been generated.',
      });
    }
  };

  const handleCopy = () => {
    if (summary) {
      navigator.clipboard.writeText(summary);
      toast({
        title: 'Copied to clipboard!',
      });
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type === 'text/plain' || file.type === 'application/pdf' || file.type === 'application/msword' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        setFileName(file.name);
        const reader = new FileReader();
        reader.onload = (e) => {
          const text = e.target?.result as string;
          form.setValue('text', text, { shouldValidate: true });
        };
        reader.readAsText(file);
      } else {
        toast({
          variant: 'destructive',
          title: 'Invalid File Type',
          description: 'For now, we only support .txt, .pdf, .doc and .docx files.',
        });
      }
    }
    if (event.target) {
      event.target.value = '';
    }
  };

  const clearText = () => {
    form.reset({ text: '', length: form.getValues('length') });
    setSummary('');
    setFileName('');
  };
  
  const textValue = form.watch('text');
  
  const getWordCount = (text: string) => {
    if (!text) return 0;
    return text.trim().split(/\s+/).filter(Boolean).length;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
      <Card className="w-full flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Your Text</span>
            <div className="flex items-center gap-2">
              {textValue && <span className="text-sm font-normal text-muted-foreground">{getWordCount(textValue)} words</span>}
              <Button variant="ghost" size="icon" onClick={clearText} disabled={!textValue || isLoading} aria-label="Clear text">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1 flex flex-col">
              <FormField
                control={form.control}
                name="text"
                render={({ field }) => (
                  <FormItem className="flex-1 flex flex-col">
                    <FormControl className="flex-1">
                      <Textarea
                        placeholder="Paste your long text here... (maximum 5000 words)"
                        className="min-h-[300px] resize-y h-full"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-2">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-2">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                      accept=".txt,.pdf,.doc,.docx"
                      className="hidden"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={isLoading}
                    >
                      <FileUp className="mr-2 h-4 w-4" />
                      Upload File
                    </Button>
                    {fileName && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted px-2 py-1 rounded-md">
                        <span>{fileName}</span>
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">Supported file types: .txt, .pdf, .doc, .docx</p>
              </div>

              <FormField
                control={form.control}
                name="length"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Summary Length</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col sm:flex-row gap-4"
                        disabled={isLoading}
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="short" />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">Short</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="medium" />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">Medium</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="detailed" />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">Detailed</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isLoading}>
                <Sparkles className="mr-2 h-4 w-4" />
                {isLoading ? 'Summarizing...' : 'Summarize Now'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <div className="lg:sticky top-24 h-full">
        <Card className="w-full h-full flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>AI Summary</span>
              <div className="flex items-center gap-2">
                {summary && <span className="text-sm font-normal text-muted-foreground">{getWordCount(summary)} words</span>}
                <Button variant="ghost" size="icon" onClick={handleCopy} disabled={!summary || isLoading} aria-label="Copy summary">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            {isLoading ? (
              <div className="space-y-3 pt-2 flex-1">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[90%]" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[80%]" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[95%]" />
              </div>
            ) : (
              <Textarea
                readOnly
                value={summary}
                placeholder="Your summary will appear here."
                className="resize-y bg-muted/40 flex-1"
              />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
