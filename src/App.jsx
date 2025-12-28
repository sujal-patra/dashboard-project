import React, { useState } from 'react';
import { LayoutDashboard, TrendingUp, Users, DollarSign, Activity, ChevronRight, Search, Bell, Settings, Menu, X, BarChart2, Calendar, Filter, Download, Share2, MoreVertical, Eye, Star, ArrowUp, ArrowDown } from 'lucide-react';

export default function ModernDashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Modern Sidebar */}
      <aside className={`${sidebarCollapsed ? 'w-20' : 'w-72'} bg-gradient-to-b from-indigo-600 to-purple-700 text-white transition-all duration-300 flex flex-col shadow-2xl`}>
        {/* Logo Section */}
        <div className="p-6 flex items-center justify-between border-b border-white border-opacity-20">
          {!sidebarCollapsed && (
            <div>
              <h2 className="text-2xl font-bold">DashPro</h2>
              <p className="text-xs text-indigo-200">Analytics Platform</p>
            </div>
          )}
          <button 
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-2 hover:bg-white hover:bg-opacity-10 rounded-lg transition"
          >
            {sidebarCollapsed ? <Menu size={20} /> : <X size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active collapsed={sidebarCollapsed} />
          <NavItem icon={<BarChart2 size={20} />} label="Analytics" collapsed={sidebarCollapsed} />
          <NavItem icon={<Users size={20} />} label="Team" badge="8" collapsed={sidebarCollapsed} />
          <NavItem icon={<TrendingUp size={20} />} label="Revenue" collapsed={sidebarCollapsed} />
          <NavItem icon={<Activity size={20} />} label="Reports" badge="3" collapsed={sidebarCollapsed} />
          
          {!sidebarCollapsed && (
            <>
              <div className="pt-6 pb-2">
                <p className="text-xs uppercase text-indigo-200 font-semibold px-3">Projects</p>
              </div>
              <ProjectItem name="E-Commerce" color="bg-pink-400" collapsed={sidebarCollapsed} />
              <ProjectItem name="SaaS Platform" color="bg-yellow-400" collapsed={sidebarCollapsed} />
              <ProjectItem name="Mobile App" color="bg-green-400" collapsed={sidebarCollapsed} />
            </>
          )}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-white border-opacity-20">
          <div className={`flex items-center gap-3 ${sidebarCollapsed ? 'justify-center' : ''}`}>
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center font-bold">
              JS
            </div>
            {!sidebarCollapsed && (
              <div className="flex-1">
                <p className="font-semibold text-sm">John Smith</p>
                <p className="text-xs text-indigo-200">Admin</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation Bar */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between px-8 py-4">
            <div className="flex items-center gap-4 flex-1">
              <h1 className="text-2xl font-bold text-gray-800">Analytics Overview</h1>
              <div className="flex items-center gap-2 ml-8">
                <button 
                  onClick={() => setActiveTab('overview')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${activeTab === 'overview' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  Overview
                </button>
                <button 
                  onClick={() => setActiveTab('sales')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${activeTab === 'sales' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  Sales
                </button>
                <button 
                  onClick={() => setActiveTab('performance')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${activeTab === 'performance' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  Performance
                </button>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition">
                <Bell size={20} className="text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                <Settings size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-8">
          {/* Date Range Selector */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Calendar size={20} className="text-gray-600" />
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option>Last 30 Days</option>
                <option>Last 7 Days</option>
                <option>Last 90 Days</option>
                <option>This Year</option>
              </select>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                <Filter size={18} />
                <span>Filters</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                <Download size={18} />
                <span>Export</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                <Share2 size={18} />
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Stats Cards - Different Layout */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <MetricCard 
              title="Total Revenue" 
              value="$547,892" 
              change="+12.5%" 
              positive 
              icon={<DollarSign size={24} />}
              color="from-emerald-500 to-teal-600"
            />
            <MetricCard 
              title="Active Users" 
              value="8,429" 
              change="+8.2%" 
              positive 
              icon={<Users size={24} />}
              color="from-blue-500 to-indigo-600"
            />
            <MetricCard 
              title="Conversion Rate" 
              value="3.24%" 
              change="-2.1%" 
              positive={false} 
              icon={<TrendingUp size={24} />}
              color="from-purple-500 to-pink-600"
            />
            <MetricCard 
              title="Avg. Deal Size" 
              value="$12,438" 
              change="+15.3%" 
              positive 
              icon={<Activity size={24} />}
              color="from-orange-500 to-red-600"
            />
          </div>

          {/* Main Content Grid - Different Structure */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {/* Revenue Chart - Takes 2 columns */}
            <div className="col-span-2 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Revenue Trends</h3>
                  <p className="text-sm text-gray-500">Monthly performance comparison</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 text-sm bg-indigo-100 text-indigo-700 rounded-lg font-medium">
                    Monthly
                  </button>
                  <button className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
                    Weekly
                  </button>
                </div>
              </div>
              
              {/* Chart Visualization */}
              <div className="relative h-64">
                <svg className="w-full h-full" viewBox="0 0 600 250">
                  {/* Grid */}
                  <line x1="0" y1="50" x2="600" y2="50" stroke="#f0f0f0" strokeWidth="1"/>
                  <line x1="0" y1="100" x2="600" y2="100" stroke="#f0f0f0" strokeWidth="1"/>
                  <line x1="0" y1="150" x2="600" y2="150" stroke="#f0f0f0" strokeWidth="1"/>
                  <line x1="0" y1="200" x2="600" y2="200" stroke="#f0f0f0" strokeWidth="1"/>
                  
                  {/* Bars */}
                  <rect x="40" y="120" width="40" height="80" fill="#818cf8" rx="4"/>
                  <rect x="110" y="100" width="40" height="100" fill="#818cf8" rx="4"/>
                  <rect x="180" y="80" width="40" height="120" fill="#818cf8" rx="4"/>
                  <rect x="250" y="140" width="40" height="60" fill="#818cf8" rx="4"/>
                  <rect x="320" y="60" width="40" height="140" fill="#6366f1" rx="4"/>
                  <rect x="390" y="90" width="40" height="110" fill="#818cf8" rx="4"/>
                  <rect x="460" y="50" width="40" height="150" fill="#6366f1" rx="4"/>
                  <rect x="530" y="70" width="40" height="130" fill="#818cf8" rx="4"/>
                  
                  {/* Labels */}
                  <text x="60" y="230" fontSize="12" fill="#666" textAnchor="middle">Jan</text>
                  <text x="130" y="230" fontSize="12" fill="#666" textAnchor="middle">Feb</text>
                  <text x="200" y="230" fontSize="12" fill="#666" textAnchor="middle">Mar</text>
                  <text x="270" y="230" fontSize="12" fill="#666" textAnchor="middle">Apr</text>
                  <text x="340" y="230" fontSize="12" fill="#666" textAnchor="middle">May</text>
                  <text x="410" y="230" fontSize="12" fill="#666" textAnchor="middle">Jun</text>
                  <text x="480" y="230" fontSize="12" fill="#666" textAnchor="middle">Jul</text>
                  <text x="550" y="230" fontSize="12" fill="#666" textAnchor="middle">Aug</text>
                </svg>
              </div>
            </div>

            {/* Top Performers */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Top Performers</h3>
              <div className="space-y-4">
                <PerformerItem name="Sarah Johnson" value="$89,234" rank={1} />
                <PerformerItem name="Michael Chen" value="$76,891" rank={2} />
                <PerformerItem name="Emily Davis" value="$64,523" rank={3} />
                <PerformerItem name="David Wilson" value="$58,912" rank={4} />
              </div>
            </div>
          </div>

          {/* Bottom Section - Different Layout */}
          <div className="grid grid-cols-2 gap-6">
            {/* Recent Activities */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-800">Recent Activities</h3>
                <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                <ActivityItem 
                  user="Alex Morgan" 
                  action="closed a deal worth" 
                  value="$24,500"
                  time="2 hours ago"
                  color="bg-green-500"
                />
                <ActivityItem 
                  user="Jordan Lee" 
                  action="added new client" 
                  value="TechCorp Inc."
                  time="5 hours ago"
                  color="bg-blue-500"
                />
                <ActivityItem 
                  user="Taylor Swift" 
                  action="updated proposal for" 
                  value="StartupXYZ"
                  time="1 day ago"
                  color="bg-purple-500"
                />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-6">Quick Insights</h3>
              <div className="space-y-4">
                <QuickStat label="Pending Approvals" value="12" />
                <QuickStat label="Active Campaigns" value="8" />
                <QuickStat label="Team Members" value="24" />
                <QuickStat label="Projects Completed" value="156" />
              </div>
              <button className="w-full mt-6 bg-white text-indigo-600 py-3 rounded-lg font-semibold hover:bg-gray-50 transition">
                View Dashboard
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Reusable Components
function NavItem({ icon, label, badge, active, collapsed }) {
  return (
    <a
      href="#"
      className={`flex items-center gap-3 px-3 py-3 rounded-lg transition ${
        active ? 'bg-white bg-opacity-20' : 'hover:bg-white hover:bg-opacity-10'
      } ${collapsed ? 'justify-center' : ''}`}
    >
      {icon}
      {!collapsed && (
        <>
          <span className="flex-1 font-medium">{label}</span>
          {badge && (
            <span className="px-2 py-0.5 bg-pink-500 rounded-full text-xs font-bold">
              {badge}
            </span>
          )}
        </>
      )}
    </a>
  );
}

function ProjectItem({ name, color, collapsed }) {
  if (collapsed) return null;
  return (
    <a href="#" className="flex items-center gap-3 px-3 py-2 hover:bg-white hover:bg-opacity-10 rounded-lg transition">
      <div className={`w-3 h-3 ${color} rounded-full`}></div>
      <span className="text-sm">{name}</span>
    </a>
  );
}

function MetricCard({ title, value, change, positive, icon, color }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 bg-gradient-to-br ${color} rounded-xl text-white`}>
          {icon}
        </div>
        <div className={`flex items-center gap-1 text-sm font-semibold ${positive ? 'text-green-600' : 'text-red-600'}`}>
          {positive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
          {change}
        </div>
      </div>
      <h3 className="text-gray-600 text-sm font-medium mb-1">{title}</h3>
      <p className="text-3xl font-bold text-gray-800">{value}</p>
    </div>
  );
}

function PerformerItem({ name, value, rank }) {
  const medals = ['🥇', '🥈', '🥉', '🏅'];
  return (
    <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{medals[rank - 1]}</span>
        <div>
          <p className="font-semibold text-gray-800">{name}</p>
          <p className="text-xs text-gray-500">Sales Representative</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-bold text-gray-800">{value}</p>
        <p className="text-xs text-gray-500">This month</p>
      </div>
    </div>
  );
}

function ActivityItem({ user, action, value, time, color }) {
  return (
    <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition">
      <div className={`w-10 h-10 ${color} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
        {user.split(' ').map(n => n[0]).join('')}
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-800">
          <span className="font-semibold">{user}</span> {action} <span className="font-semibold">{value}</span>
        </p>
        <p className="text-xs text-gray-500 mt-1">{time}</p>
      </div>
    </div>
  );
}

function QuickStat({ label, value }) {
  return (
    <div className="flex items-center justify-between pb-4 border-b border-white border-opacity-20">
      <span className="text-indigo-100">{label}</span>
      <span className="text-2xl font-bold">{value}</span>
    </div>
  );
}