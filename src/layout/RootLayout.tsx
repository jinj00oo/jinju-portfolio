import type { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import TabBar from '../components/TabBar';

interface RootLayoutProps {
  children?: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content with TabBar */}
      <div className="hidden md:flex md:flex-col">
        {/* TabBar */}
        <TabBar />

        {/* Main Content Area */}
        <main className="mt-20 ml-50">{children}</main>
      </div>

      {/* Main Content without TabBar */}
      <div className="md:hidden flex flex-col">
        {/* Main Content Area */}
        <main className="mt-20">{children}</main>
      </div>
    </div>
  );
}
