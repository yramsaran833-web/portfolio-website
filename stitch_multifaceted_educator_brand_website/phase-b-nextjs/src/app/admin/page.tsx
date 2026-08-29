import { 
  FileText, 
  Image as ImageIcon, 
  Award, 
  MessageSquare 
} from 'lucide-react';

const stats = [
  { name: 'Total Posts', value: '12', icon: FileText },
  { name: 'Gallery Items', value: '45', icon: ImageIcon },
  { name: 'Awards', value: '8', icon: Award },
  { name: 'Messages', value: '3', icon: MessageSquare },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
        <p className="text-sm text-gray-400">Activity stream will be displayed here...</p>
      </div>
    </div>
  );
}
