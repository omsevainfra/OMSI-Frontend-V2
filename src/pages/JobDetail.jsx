import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Briefcase, Clock, Award, Calendar, AlertCircle } from 'lucide-react';
import Markdown from 'react-markdown';
import { publicApi } from '../lib/publicApi';
import { Button } from '../components/ui/Button';

function MetaItem({ icon: Icon, label, value }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-9 h-9 rounded bg-brand-green/10 flex items-center justify-center shrink-0">
        <Icon size={16} className="text-brand-green" />
      </div>
      <div>
        <span className="text-[10px] font-bold text-brand-gray tracking-wider uppercase block font-body">{label}</span>
        <span className="font-body text-sm font-semibold text-brand-black">{value || '—'}</span>
      </div>
    </div>
  );
}

export function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchJob() {
      try {
        const res = await publicApi.get(`/job/getJobById/${id}`);
        setJob(res.data?.data ?? res.data);
      } catch (err) {
        setError(err.response?.status === 404 ? 'not_found' : 'error');
      } finally {
        setLoading(false);
      }
    }
    fetchJob();
  }, [id]);

  if (loading) {
    return (
      <div className="py-24 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-green" />
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="py-24 text-center px-4">
        <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle size={36} className="text-red-400" />
        </div>
        <h2 className="text-3xl font-bold font-display text-brand-black mb-4">
          {error === 'not_found' ? 'Position Not Found' : 'Something Went Wrong'}
        </h2>
        <p className="font-body text-brand-gray text-base mb-8 max-w-md mx-auto">
          {error === 'not_found'
            ? 'This job listing may have been closed or removed. Check our Careers page for current openings.'
            : 'We could not load this job posting. Please try again later.'}
        </p>
        <Button variant="primary" to="/careers">Back to Careers</Button>
      </div>
    );
  }

  const deadline = job.applicationDeadline
    ? new Date(job.applicationDeadline).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
    : null;

  return (
    <div className="py-12 bg-white">
      <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">

        {/* Back */}
        <div className="mb-8">
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 font-body text-sm font-semibold text-brand-green hover:text-brand-green-hover transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Careers
          </Link>
        </div>

        {/* Header */}
        <div className="mb-10 border-b border-brand-border/60 pb-6">
          <div className="flex flex-wrap gap-2 items-center mb-3">
            {job.department && (
              <span className="bg-brand-green/10 text-brand-green text-xs font-semibold px-2.5 py-1 rounded border border-brand-green/20 font-body">
                {job.department}
              </span>
            )}
            {job.employmentType && (
              <span className="bg-brand-bg text-brand-gray text-xs font-semibold px-2.5 py-1 rounded border border-brand-border font-body">
                {job.employmentType}
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-display text-brand-black leading-tight max-w-4xl">
            {job.title}
          </h1>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left: Markdown Description */}
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-bold font-display text-brand-black mb-5">Job Description</h2>
            <div className="job-prose font-body">
              <Markdown>{job.description}</Markdown>
            </div>
          </div>

          {/* Right: Meta Sidebar */}
          <div className="lg:col-span-4 bg-brand-bg/60 border border-brand-border/60 rounded-xl p-6 md:p-8 flex flex-col gap-6 shadow-sm">
            <h3 className="text-lg font-bold font-display text-brand-black border-b border-brand-border pb-3">
              Position Details
            </h3>

            <div className="flex flex-col gap-5">
              {job.location && <MetaItem icon={MapPin} label="Location" value={job.location} />}
              {job.employmentType && <MetaItem icon={Briefcase} label="Employment Type" value={job.employmentType} />}
              {job.experienceLevel && <MetaItem icon={Award} label="Experience Level" value={job.experienceLevel} />}
              {job.department && <MetaItem icon={Clock} label="Department" value={job.department} />}
              {deadline && <MetaItem icon={Calendar} label="Application Deadline" value={deadline} />}
            </div>

            <div className="border-t border-brand-border/60 pt-5 mt-2">
              <p className="font-body text-xs text-brand-gray leading-relaxed mb-4">
                Interested in this role? Scroll up and submit a general application or reach out to us directly.
              </p>
              <Link
                to="/careers#application-form"
                className="w-full flex items-center justify-center gap-2 py-3 bg-brand-green hover:bg-brand-green-hover text-white text-sm font-bold font-body rounded-lg transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default JobDetail;
