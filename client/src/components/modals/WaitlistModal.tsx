import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertWaitlistSchema } from "@shared/schema";

const waitlistFormSchema = insertWaitlistSchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  preferredTime: z.enum(["Morning", "Midday", "Evening"], {
    required_error: "Please select a preferred time",
  }),
});

type WaitlistForm = z.infer<typeof waitlistFormSchema>;

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseType: string;
  sessionDate: string;
  courseName: string;
}

export default function WaitlistModal({ 
  isOpen, 
  onClose, 
  courseType, 
  sessionDate, 
  courseName 
}: WaitlistModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<WaitlistForm>({
    resolver: zodResolver(waitlistFormSchema),
    defaultValues: {
      name: "",
      email: "",
      courseType,
      sessionDate,
      preferredTime: undefined,
      notifyOnUpdate: true,
    },
  });

  const onSubmit = async (data: WaitlistForm) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/waitlist", data);
      
      toast({
        title: "Added to Waitlist!",
        description: "We'll notify you when spots become available.",
      });

      // Redirect to thank you page
      window.location.href = "/thank-you-waitlist";
    } catch (error) {
      console.error("Waitlist submission error:", error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-900">
            Join Waitlist: {courseName}
          </DialogTitle>
          <p className="text-sm text-gray-600">
            Session: {sessionDate}
          </p>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="preferredTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Training Time</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select preferred time" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Morning">Morning</SelectItem>
                      <SelectItem value="Midday">Midday</SelectItem>
                      <SelectItem value="Evening">Evening</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="notifyOnUpdate"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm font-normal">
                      Notify me if a spot opens or more seats are added
                    </FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-3 pt-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={onClose} 
                className="flex-1"
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="flex-1 bg-purple-600 hover:bg-purple-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Joining..." : "Join Waitlist"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}