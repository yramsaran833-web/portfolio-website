import { 
  FileText, 
  Image as ImageIcon, 
  Award, 
  MessageSquare,
  Users
} from 'lucide-react';
import { createClient } from '@/lib/supabase/server';

export default async function AdminDashboard() {
  const supabase = await createClient();

  const [
    { count: blogCount },
    { count: galleryCount },
    { count: awardsCount },
    { count: messagesCount },
    { data: siteStats }
  ] = await Promise.all([
    supabase.from('blog_posts').select('*', { count: 'exact', head: true }),
    supabase.from('gallery_items').select('*', { count: 'exact', head: true }),
    supabase.from('awards').select('*', { count: 'exact', head: true }),
    supabase.from('contact_messages').select('*', { count: 'exact', head: true }),
    supabase.from('site_stats').select('total_views').eq('id', 1).single()
  ]);

  const stats = [
    { name: 'Total Visitors', value: siteStats?.total_views?.toString() || '0', icon: Users },
    { name: 'Total Posts', value: blogCount?.toString() || '0', icon: FileText },
    { name: 'Gallery Items', value: galleryCount?.toString() || '0', icon: ImageIcon },
    { name: 'Awards', value: awardsCount?.toString() || '0', icon: Award },
    { name: 'Messages', value: messagesCount?.toString() || '0', icon: MessageSquare },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-[#050812] p-6 rounded-lg border border-gray-800 flex items-center space-x-4">
              <div className="p-3 bg-[#d4af37]/10 rounded-full">
                <Icon className="h-6 w-6 text-[#d4af37]" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-400">{stat.name}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-[#050812] border border-gray-800 rounded-lg p-6 min-h-[300px]">
        <h3 className="text-lg font-medium text-white mb-4">Recent Activity</h3>
        <p className="text-sm text-gray-400">Welcome to your new admin dashboard! Start managing your content from the sidebar.</p>
      </div>
    </div>
  );
}
