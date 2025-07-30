import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getQueryFn } from '@/lib/queryClient';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { Download, Mail, Users, Calendar, FileText, Filter } from 'lucide-react';
import type { Lead } from '@shared/schema';

const AdminLeads = () => {
  const [serviceFilter, setServiceFilter] = useState<string>('all');

  const { data: leads, isLoading, error } = useQuery({
    queryKey: ['/api/admin/leads', serviceFilter === 'all' ? undefined : serviceFilter],
    queryFn: async () => {
      const params = serviceFilter === 'all' ? '' : `?service=${encodeURIComponent(serviceFilter)}`;
      const response = await fetch(`/api/admin/leads${params}`);
      if (!response.ok) {
        throw new Error('Failed to fetch leads');
      }
      return response.json();
    },
  });

  const formatDate = (date: string | Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getServiceColor = (service: string) => {
    switch (service) {
      case '3 High-Paying Tech Roles Guide':
        return 'bg-purple-100 text-purple-800';
      case '5-Day SAFe Sprint':
        return 'bg-blue-100 text-blue-800';
      case 'SAFe Training':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const downloadCSV = () => {
    if (!leads || leads.length === 0) return;

    const csvContent = [
      ['Name', 'Email', 'Company', 'Service', 'Date'].join(','),
      ...leads.map((lead: Lead) => [
        `"${lead.name}"`,
        `"${lead.email}"`,
        `"${lead.company || ''}"`,
        `"${lead.service}"`,
        `"${formatDate(lead.createdAt)}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `leads-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="pt-6">
            <p className="text-red-600">Error loading leads data. Please try again.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const guideDownloads = leads?.filter((lead: Lead) => lead.service === '3 High-Paying Tech Roles Guide') || [];
  const safeSprintSignups = leads?.filter((lead: Lead) => lead.service === '5-Day SAFe Sprint') || [];
  const otherLeads = leads?.filter((lead: Lead) => !['3 High-Paying Tech Roles Guide', '5-Day SAFe Sprint'].includes(lead.service)) || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Lead Magnet Dashboard</h1>
          <p className="text-gray-600 mt-2">Track downloads and lead generation performance</p>
        </div>
        <Button onClick={downloadCSV} disabled={!leads || leads.length === 0}>
          <Download className="h-4 w-4 mr-2" />
          Export CSV
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
            <Users className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{leads?.length || 0}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Guide Downloads</CardTitle>
            <FileText className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{guideDownloads.length}</div>
            <p className="text-xs text-gray-500">Tech roles guide</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Course Signups</CardTitle>
            <Mail className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{safeSprintSignups.length}</div>
            <p className="text-xs text-gray-500">SAFe Sprint course</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Other Inquiries</CardTitle>
            <Calendar className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{otherLeads.length}</div>
            <p className="text-xs text-gray-500">General leads</p>
          </CardContent>
        </Card>
      </div>

      {/* Filter and List */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Lead Details</CardTitle>
              <CardDescription>View and manage your lead magnet downloads</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <Select value={serviceFilter} onValueChange={setServiceFilter}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Filter by service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Services</SelectItem>
                  <SelectItem value="3 High-Paying Tech Roles Guide">Tech Roles Guide</SelectItem>
                  <SelectItem value="5-Day SAFe Sprint">SAFe Sprint</SelectItem>
                  <SelectItem value="SAFe Training">SAFe Training</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
              ))}
            </div>
          ) : leads && leads.length > 0 ? (
            <div className="space-y-4">
              {leads.map((lead: Lead) => (
                <div key={lead.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <Users className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-gray-900">{lead.name}</h3>
                        <Badge variant="secondary" className={getServiceColor(lead.service)}>
                          {lead.service}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{lead.email}</span>
                        {lead.company && <span>• {lead.company}</span>}
                        <span>• {formatDate(lead.createdAt)}</span>
                      </div>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open(`mailto:${lead.email}`, '_blank')}
                  >
                    <Mail className="h-4 w-4 mr-1" />
                    Email
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No leads yet</h3>
              <p className="text-gray-500">Your lead magnet downloads will appear here.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLeads;