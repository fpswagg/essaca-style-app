import '@/app/styles/urban-concrete.css';
import { Space_Mono } from 'next/font/google';
import ExampleSection from '@/components/urban-concrete/basic/ExampleSection';
import LoginFormsSection from '@/components/urban-concrete/basic/LoginFormsSection';
import AdminDashboardSection from '@/components/urban-concrete/basic/AdminDashboardSection';
import ClientDashboardSection from '@/components/urban-concrete/basic/ClientDashboardSection';
import StaffDashboardSection from '@/components/urban-concrete/basic/StaffDashboardSection';
import ApplicationFormsSection from '@/components/urban-concrete/basic/ApplicationFormsSection';
import AllDialogsSection from '@/components/urban-concrete/basic/AllDialogsSection';
import ApplicationDetailViewSection from '@/components/urban-concrete/basic/ApplicationDetailViewSection';
import ManagementPagesOverviewSection from '@/components/urban-concrete/basic/ManagementPagesOverviewSection';

const font = Space_Mono({
  subsets: ['latin'],
  weight: ["400","700"],
  variable: '--font-display',
  display: 'swap',
});

export default function UrbanconcreteBasicPage() {
  return (
    <div className={`${font.variable} min-h-screen bg-page`}>
      <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-16">
        <div className="text-center mb-12">
          <h1 className="text-display text-main mb-2">
            <span className="text-display-emphasis">Urban Concrete</span> - Basic
          </h1>
          <p className="text-main/70 text-sm sm:text-base">
            All sections displayed with urban-concrete / basic substyle
          </p>
        </div>

        <div className="space-y-16">
          <div className="border-t border-main/20 pt-8">
            <h2 className="text-2xl font-display font-light text-main mb-6">Example</h2>
            <ExampleSection />
          </div>
          <div className="border-t border-main/20 pt-8">
            <h2 className="text-2xl font-display font-light text-main mb-6">LoginForms</h2>
            <LoginFormsSection />
          </div>
          <div className="border-t border-main/20 pt-8">
            <h2 className="text-2xl font-display font-light text-main mb-6">AdminDashboard</h2>
            <AdminDashboardSection />
          </div>
          <div className="border-t border-main/20 pt-8">
            <h2 className="text-2xl font-display font-light text-main mb-6">ClientDashboard</h2>
            <ClientDashboardSection />
          </div>
          <div className="border-t border-main/20 pt-8">
            <h2 className="text-2xl font-display font-light text-main mb-6">StaffDashboard</h2>
            <StaffDashboardSection />
          </div>
          <div className="border-t border-main/20 pt-8">
            <h2 className="text-2xl font-display font-light text-main mb-6">ApplicationForms</h2>
            <ApplicationFormsSection />
          </div>
          <div className="border-t border-main/20 pt-8">
            <h2 className="text-2xl font-display font-light text-main mb-6">AllDialogs</h2>
            <AllDialogsSection />
          </div>
          <div className="border-t border-main/20 pt-8">
            <h2 className="text-2xl font-display font-light text-main mb-6">ApplicationDetailView</h2>
            <ApplicationDetailViewSection />
          </div>
          <div className="border-t border-main/20 pt-8">
            <h2 className="text-2xl font-display font-light text-main mb-6">ManagementPagesOverview</h2>
            <ManagementPagesOverviewSection />
          </div>
        </div>
      </div>
    </div>
  );
}
