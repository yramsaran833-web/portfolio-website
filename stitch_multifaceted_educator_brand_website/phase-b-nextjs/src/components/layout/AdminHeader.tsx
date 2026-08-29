import { Bell, Search, UserCircle } from 'lucide-react';

export function AdminHeader() {
  return (
    <header className="h-16 bg-[#050812] border-b border-gray-800 flex items-center justify-between px-6 shrink-0">
      <div className="flex items-center flex-1">
        <div className="relative w-64">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-4 w-4 text-gray-500" />
          </span>
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-1.5 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37]"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-400 hover:text-white transition-colors">
          <Bell className="h-5 w-5" />
        </button>
        <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
          <UserCircle className="h-6 w-6" />
          <span className="text-sm font-medium hidden sm:block">Admin</span>
        </button>
      </div>
    </header>
  );
}
