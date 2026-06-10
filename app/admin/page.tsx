import React from 'react';
import { desc } from 'drizzle-orm';
import { db } from '@/lib/db';
import { contactSubmissions } from '@/lib/schema';
import { env } from '@/lib/env';

interface AdminPageProps {
  searchParams: {
    secret?: string;
  };
}

export const dynamic = 'force-dynamic';

export default async function AdminPage({ searchParams }: AdminPageProps) {
  const { secret } = searchParams;

  // Verify authorization
  if (!secret || secret !== env.ADMIN_SECRET) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center p-6">
        <div className="bg-surface border border-red-500/20 rounded-xl p-8 max-w-md w-full text-center shadow-2xl">
          <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-4 border border-red-500/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"
              />
            </svg>
          </div>
          <h1 className="text-xl font-bold font-display text-text mb-2">Unauthorized</h1>
          <p className="text-sm text-muted">
            The provided access secret is invalid or missing. Please contact your system administrator.
          </p>
        </div>
      </div>
    );
  }

  // Fetch submissions from Neon database
  const submissions = await db
    .select()
    .from(contactSubmissions)
    .orderBy(desc(contactSubmissions.createdAt));

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  return (
    <div className="min-h-screen bg-bg pt-28 pb-16 px-6 relative overflow-hidden">


      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-muted/10 pb-6">
            <div>
              <h1 className="text-3xl font-bold font-display text-text">Submissions Desk</h1>
              <p className="text-sm text-muted mt-1">
                Review and manage incoming hiring mandates and talent queries.
              </p>
            </div>
            <div className="px-4 py-1.5 rounded bg-surface border border-muted/10 text-xs font-mono text-muted">
              Records: {submissions.length}
            </div>
          </div>

          {/* Table Container */}
          {submissions.length === 0 ? (
            <div className="bg-surface border border-muted/10 rounded-2xl p-16 text-center shadow-xl">
              <p className="text-muted font-light">No submissions found in database.</p>
            </div>
          ) : (
            <div className="bg-surface border border-muted/10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-muted/10 bg-bg/50">
                      <th className="p-4 sm:p-5 text-xs font-mono uppercase tracking-wider text-muted font-semibold">
                        Client / Candidate
                      </th>
                      <th className="p-4 sm:p-5 text-xs font-mono uppercase tracking-wider text-muted font-semibold">
                        Contact Email
                      </th>
                      <th className="p-4 sm:p-5 text-xs font-mono uppercase tracking-wider text-muted font-semibold">
                        Mandate Details
                      </th>
                      <th className="p-4 sm:p-5 text-xs font-mono uppercase tracking-wider text-muted font-semibold text-right">
                        Date Submitted
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-muted/10">
                    {submissions.map((sub) => {
                      const truncatedMessage =
                        sub.message.length > 80
                          ? `${sub.message.substring(0, 80)}...`
                          : sub.message;

                      return (
                        <tr key={sub.id} className="hover:bg-bg/25 transition-colors">
                          <td className="p-4 sm:p-5 text-sm font-semibold text-text">
                            {sub.name}
                          </td>
                          <td className="p-4 sm:p-5 text-sm font-mono text-muted">
                            <a
                              href={`mailto:${sub.email}`}
                              className="hover:text-accent transition-colors"
                            >
                              {sub.email}
                            </a>
                          </td>
                          <td className="p-4 sm:p-5 text-sm font-light text-muted max-w-md break-words">
                            {truncatedMessage}
                          </td>
                          <td className="p-4 sm:p-5 text-sm font-mono text-muted text-right">
                            {formatDate(sub.createdAt)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
