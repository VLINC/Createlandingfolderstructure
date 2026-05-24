import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";

export default function ProviderDashboardPage() {
  return (
    <>
      <Header hideNav />

      <main className="min-h-screen bg-gray-50 px-6 pb-12 pt-28">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <Breadcrumbs />

          {/* Page Title */}
          <h1 className="text-3xl font-bold text-[#D91429] mb-6">
            Provider Dashboard
          </h1>

          {/* TOP WIDGETS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Earnings */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
              <p className="text-sm text-gray-600">Earnings (This Week)</p>
              <p className="text-3xl font-bold mt-2">$0.00</p>
              <p className="text-xs text-gray-500 mt-1">
                Live earnings will appear here as you complete jobs.
              </p>
            </div>

            {/* Upcoming Jobs */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
              <p className="text-sm text-gray-600">Upcoming Jobs</p>
              <p className="text-3xl font-bold mt-2">0</p>
              <p className="text-xs text-gray-500 mt-1">
                Once you accept jobs, they will show up here.
              </p>
            </div>

            {/* Rating */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
              <p className="text-sm text-gray-600">Rating</p>
              <p className="text-3xl font-bold mt-2">—</p>
              <p className="text-xs text-gray-500 mt-1">
                Your customer rating will appear after your first completed job.
              </p>
            </div>

            {/* Provider Level */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
              <p className="text-sm text-gray-600">Provider Level</p>
              <p className="text-3xl font-bold mt-2">New</p>
              <p className="text-xs text-gray-500 mt-1">
                Levels update automatically based on performance and activity.
              </p>
            </div>
          </div>

          {/* UPCOMING JOBS */}
          <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Upcoming Jobs</h2>

            <p className="text-gray-700">
              You don&apos;t have any upcoming jobs yet. Once you accept a job,
              it will appear here with date, time, location, and job details.
            </p>

            <button className="mt-4 bg-[#D91429] text-white px-4 py-2 rounded-md font-semibold border border-black hover:bg-[#b81022] transition">
              View Job Offers
            </button>
          </section>

          {/* EARNINGS SUMMARY */}
          <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Earnings Summary</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-4">
              <div>
                <p className="text-gray-600">This Week</p>
                <p className="text-2xl font-bold">$0.00</p>
              </div>
              <div>
                <p className="text-gray-600">This Month</p>
                <p className="text-2xl font-bold">$0.00</p>
              </div>
              <div>
                <p className="text-gray-600">Year-to-Date</p>
                <p className="text-2xl font-bold">$0.00</p>
              </div>
            </div>

            <p className="text-gray-700 text-sm">
              As you complete jobs, your earnings will be summarized here by
              week, month, and year.
            </p>

            <button className="mt-4 bg-[#D91429] text-white px-4 py-2 rounded-md font-semibold border border-black hover:bg-[#b81022] transition">
              View Earnings Details
            </button>
          </section>

          {/* PAYOUTS */}
          <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Payouts</h2>

            <p className="text-gray-700">
              No payouts have been issued yet. Once your earnings are processed
              and sent to your connected payout account, they will appear here
              with date, amount, and status.
            </p>

            <button className="mt-4 bg-[#D91429] text-white px-4 py-2 rounded-md font-semibold border border-black hover:bg-[#b81022] transition">
              View Payout History
            </button>
          </section>

          {/* JOB HISTORY */}
          <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Job History</h2>

            <p className="text-gray-700">
              Once you start completing jobs, your full job history will appear
              here, including job type, duration, payout, and status.
            </p>

            <button className="mt-4 bg-[#D91429] text-white px-4 py-2 rounded-md font-semibold border border-black hover:bg-[#b81022] transition">
              View All Jobs
            </button>
          </section>

          {/* PERFORMANCE METRICS */}
          <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Performance Metrics</h2>

            <p className="text-gray-700 mb-2">
              Your performance metrics will appear here once you have completed
              enough jobs:
            </p>

            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• On-time arrival rate</li>
              <li>• Job completion rate</li>
              <li>• Average customer rating</li>
              <li>• Repeat customer percentage</li>
            </ul>
          </section>

          {/* VIOLATIONS */}
          <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Violations</h2>

            <p className="text-gray-700">
              You currently have no violations on your account. Any policy
              issues or serious incidents will be listed here with details and
              status.
            </p>
          </section>

          {/* TAX INFO */}
          <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Tax Documents</h2>

            <p className="text-gray-700 mb-3">
              At the end of the year, your 1099 tax form and yearly earnings
              summary will be available here for download.
            </p>

            <div className="flex flex-wrap gap-3">
              <button className="bg-[#D91429] text-white px-4 py-2 rounded-md font-semibold border border-black hover:bg-[#b81022] transition">
                Download 1099 (when available)
              </button>

              <button className="bg-black text-white px-4 py-2 rounded-md font-semibold border border-black hover:bg-gray-800 transition">
                View Yearly Earnings Summary
              </button>
            </div>
          </section>

          {/* AVAILABILITY CALENDAR */}
          <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Availability Calendar</h2>

            <p className="text-gray-700 mb-2">
              You&apos;ll be able to manage your working hours and blackout
              dates here.
            </p>
            <p className="text-gray-700 text-sm">
              Once calendar integration is enabled, you can set your weekly
              schedule, mark days off, and control when you&apos;re available
              for new jobs.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}












