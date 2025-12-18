import '@/app/styles/biophilic-nature.css';
import { Cormorant_Garamond } from 'next/font/google';
import ExampleSection from '@/components/biophilic-nature/meadow/ExampleSection';
import LoginFormsSection from '@/components/biophilic-nature/meadow/LoginFormsSection';
import AdminDashboardSection from '@/components/biophilic-nature/meadow/AdminDashboardSection';
import ClientDashboardSection from '@/components/biophilic-nature/meadow/ClientDashboardSection';
import StaffDashboardSection from '@/components/biophilic-nature/meadow/StaffDashboardSection';
import ApplicationFormsSection from '@/components/biophilic-nature/meadow/ApplicationFormsSection';
import AllDialogsSection from '@/components/biophilic-nature/meadow/AllDialogsSection';
import ApplicationDetailViewSection from '@/components/biophilic-nature/meadow/ApplicationDetailViewSection';
import ManagementPagesOverviewSection from '@/components/biophilic-nature/meadow/ManagementPagesOverviewSection';

const font = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ["300","400"],
  variable: '--font-display',
  display: 'swap',
});

export default function BiophilicnatureMeadowPage() {
  return (
    <div className={`${font.variable} min-h-screen bg-page`}>
      <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-16">
        <div className="text-center mb-12">
          <h1 className="text-display text-main mb-2">
            <span className="text-display-emphasis">Biophilic Nature</span> - Meadow
          </h1>
          <p className="text-main/70 text-sm sm:text-base">
            All sections displayed with biophilic-nature / meadow substyle
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
