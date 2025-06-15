import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Link, useParams } from 'wouter';
import { getQueryFn, apiRequest } from '@/lib/queryClient';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Mail, User, Clock, MessageSquare, Eye, EyeOff } from 'lucide-react';
import type { Inquiry } from '@shared/schema';

const AdminInquiryDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: inquiry, isLoading, error } = useQuery({
    queryKey: ['/api/admin/inquiries', id],
    queryFn: getQueryFn({ on401: 'throw' }),
    enabled: !!id,
  });

  const markAsReadMutation = useMutation({
    mutationFn: async () => {
      return await apiRequest('PATCH', `/api/admin/inquiries/${id}/read`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/inquiries'] });
      toast({
        title: "Inquiry marked as read",
        description: "The inquiry status has been updated.",
      });
    },
  });

  const markAsUnreadMutation = useMutation({
    mutationFn: async () => {
      return await apiRequest('PATCH', `/api/admin/inquiries/${id}/unread`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/inquiries'] });
      toast({
        title: "Inquiry marked as unread",
        description: "The inquiry status has been updated.",
      });
    },
  });

  const formatDate = (date: string | Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
    });
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-6">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-64 w-full" />
        </div>
      </div>
    );
  }

  if (error || !(inquiry as any)?.data) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card>
          <CardContent className="pt-6">
            <p className="text-red-600">Failed to load inquiry details. Please try again.</p>
            <Link href="/admin/inquiries">
              <Button className="mt-4" variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Inquiries
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const inquiryData: Inquiry = (inquiry as any).data;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <Link href="/admin/inquiries">
          <Button variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Inquiries
          </Button>
        </Link>
        
        <Button
          onClick={() => inquiryData.isRead ? markAsUnreadMutation.mutate() : markAsReadMutation.mutate()}
          disabled={markAsReadMutation.isPending || markAsUnreadMutation.isPending}
        >
          {inquiryData.isRead ? (
            <>
              <EyeOff className="h-4 w-4 mr-2" />
              Mark as Unread
            </>
          ) : (
            <>
              <Eye className="h-4 w-4 mr-2" />
              Mark as Read
            </>
          )}
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <CardTitle className="text-2xl">{inquiryData.subject}</CardTitle>
                {!inquiryData.isRead && (
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    Unread
                  </Badge>
                )}
              </div>
              <CardDescription>
                Submitted on {formatDate(inquiryData.createdAt)}
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-medium text-gray-900">{inquiryData.name}</p>
                  <p className="text-sm text-gray-600">Contact Name</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-500" />
                <div>
                  <a 
                    href={`mailto:${inquiryData.email}`}
                    className="font-medium text-blue-600 hover:text-blue-800"
                  >
                    {inquiryData.email}
                  </a>
                  <p className="text-sm text-gray-600">Email Address</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-medium text-gray-900">{formatDate(inquiryData.createdAt)}</p>
                  <p className="text-sm text-gray-600">Date Submitted</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MessageSquare className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-medium text-gray-900">Contact Form</p>
                  <p className="text-sm text-gray-600">Source</p>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Message</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                {inquiryData.message}
              </p>
            </div>
          </div>

          <Separator />

          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              onClick={() => window.open(`mailto:${inquiryData.email}?subject=Re: ${inquiryData.subject}`)}
              className="flex-1"
            >
              <Mail className="h-4 w-4 mr-2" />
              Reply via Email
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => navigator.clipboard.writeText(inquiryData.email)}
              className="flex-1"
            >
              Copy Email Address
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminInquiryDetail;