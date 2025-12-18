import '@/app/styles/digital-tech.css';
import { Space_Grotesk } from 'next/font/google';
import ExampleSection from '@/components/digital-tech/matrix/ExampleSection';
import LoginFormsSection from '@/components/digital-tech/matrix/LoginFormsSection';
import AdminDashboardSection from '@/components/digital-tech/matrix/AdminDashboardSection';
import ClientDashboardSection from '@/components/digital-tech/matrix/ClientDashboardSection';
import StaffDashboardSection from '@/components/digital-tech/matrix/StaffDashboardSection';
import ApplicationFormsSection from '@/components/digital-tech/matrix/ApplicationFormsSection';
import AllDialogsSection from '@/components/digital-tech/matrix/AllDialogsSection';
import ApplicationDetailViewSection from '@/components/digital-tech/matrix/ApplicationDetailViewSection';
import ManagementPagesOverviewSection from '@/components/digital-tech/matrix/ManagementPagesOverviewSection';

const font = Space_Grotesk({
  subsets: ['latin'],
  weight: ["300","400"],
  variable: '--font-display',
  display: 'swap',
});

export default function DigitaltechMatrixPage() {
  return (
    <div className={`${font.variable} min-h-screen bg-page`}>
      <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-16">
        <div className="text-center mb-12">
          <h1 className="text-display text-main mb-2">
            <span className="text-display-emphasis">Digital Tech</span> - Matrix
          </h1>
          <p className="text-main/70 text-sm sm:text-base">
            All sections displayed with digital-tech / matrix substyle
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
