'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  FileText, 
  Image as ImageIcon, 
  Award, 
  MessageSquare,
  Quote,
  Mail,
  Calendar,
  FolderDown, 
  Settings 
} from 'lucide-react';

const navItems = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Blog', href: '/admin/blog', icon: FileText },
  { name: 'Gallery', href: '/admin/gallery', icon: ImageIcon },
  { name: 'Awards', href: '/admin/awards', icon: Award },
  { name: 'Testimonials', href: '/admin/testimonials', icon: Quote },
  { name: 'Resources', href: '/admin/resources', icon: FolderDown },
  { name: 'Messages', href: '/admin/messages', icon: Mail },
  { name: 'Appointments', href: '/admin/appointments', icon: Calendar },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-[#050812] border-r border-gray-800 hidden md:flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-gray-800">
        <h1 className="text-[#d4af37] font-bold text-lg tracking-wider">RSY ADMIN</h1>
      </div>
      <nav className="flex-1 py-6 px-3 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                isActive && item.href !== '/admin' 
                  ? "bg-[#d4af37]/10 text-[#d4af37]" 
                  : item.href === '/admin' && pathname === '/admin'
                  ? "bg-[#d4af37]/10 text-[#d4af37]"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              )}
            >
              <Icon className={cn("mr-3 h-5 w-5", 
                isActive && item.href !== '/admin' 
                  ? "text-[#d4af37]" 
                  : item.href === '/admin' && pathname === '/admin'
                  ? "text-[#d4af37]"
                  : "text-gray-400"
              )} />
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-gray-800">
        <div className="text-xs text-gray-500">Ram Saran Yadav &copy; 2026</div>
      </div>
    </aside>
  );
}
