import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Link } from 'wouter';
import { getQueryFn, apiRequest } from '@/lib/queryClient';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { Mail, Eye, EyeOff, Clock, User, MessageSquare } from 'lucide-react';
import type { Inquiry } from '@shared/schema';

const AdminInquiries = () => {
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: inquiries, isLoading, error } = useQuery({
    queryKey: ['/api/admin/inquiries', sortOrder],
    queryFn: getQueryFn({ on401: 'throw' }),
  });

  const markAsReadMutation = useMutation({
    mutationFn: async (id: number) => {
      return await apiRequest('PATCH', `/api/admin/inquiries/${id}/read`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/inquiries'] });
      toast({
        title: "Inquiry marked as read",
        description: "The inquiry status has been updated.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to update inquiry status.",
        variant: "destructive",
      });
    },
  });

  const markAsUnreadMutation = useMutation({
    mutationFn: async (id: number) => {
      return await apiRequest('PATCH', `/api/admin/inquiries/${id}/unread`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/inquiries'] });
      toast({
        title: "Inquiry marked as unread",
        description: "The inquiry status has been updated.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to update inquiry status.",
        variant: "destructive",
      });
    },
  });

  const handleMarkAsRead = (id: number) => {
    markAsReadMutation.mutate(id);
  };

  const handleMarkAsUnread = (id: number) => {
    markAsUnreadMutation.mutate(id);
  };

  const formatDate = (date: string | Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-4">
          <Skeleton className="h-8 w-48" />
          <div className="grid gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-32 w-full" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="pt-6">
            <p className="text-red-600">Failed to load inquiries. Please try again.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const inquiryList = (inquiries as any)?.data || [];
  const unreadCount = inquiryList.filter((inquiry: Inquiry) => !inquiry.isRead).length;

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Inquiries</h1>
          <p className="text-gray-600">
            {inquiryList.length} total inquiries, {unreadCount} unread
          </p>
        </div>
        
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <Select value={sortOrder} onValueChange={(value: 'newest' | 'oldest') => setSortOrder(value)}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
            </SelectContent>
          </Select>
          
          <Link href="/">
            <Button variant="outline">
              Back to Website
            </Button>
          </Link>
        </div>
      </div>

      {inquiryList.length === 0 ? (
        <Card>
          <CardContent className="pt-6 text-center">
            <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No inquiries yet</h3>
            <p className="text-gray-600">Contact form submissions will appear here.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {inquiryList.map((inquiry: Inquiry) => (
            <Card key={inquiry.id} className={`transition-all hover:shadow-md ${!inquiry.isRead ? 'border-l-4 border-l-blue-500 bg-blue-50/30' : ''}`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-lg">{inquiry.subject}</CardTitle>
                      {!inquiry.isRead && (
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                          New
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {inquiry.name}
                      </div>
                      <div className="flex items-center gap-1">
                        <Mail className="h-4 w-4" />
                        {inquiry.email}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {formatDate(inquiry.createdAt)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => inquiry.isRead ? handleMarkAsUnread(inquiry.id) : handleMarkAsRead(inquiry.id)}
                    >
                      {inquiry.isRead ? (
                        <>
                          <EyeOff className="h-4 w-4 mr-1" />
                          Mark Unread
                        </>
                      ) : (
                        <>
                          <Eye className="h-4 w-4 mr-1" />
                          Mark Read
                        </>
                      )}
                    </Button>
                    
                    <Link href={`/admin/inquiries/${inquiry.id}`}>
                      <Button size="sm">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-700 line-clamp-3">
                  {inquiry.message}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminInquiries;