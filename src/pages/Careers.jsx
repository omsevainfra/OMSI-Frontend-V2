import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Briefcase, Award, ArrowUpRight, Download, Send, CheckCircle2, ChevronDown, ChevronUp, Search, Loader2, AlertCircle } from 'lucide-react';
import { benefits, activeTenders } from '../data/careers';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { publicApi } from '../lib/publicApi';

export function Careers() {
  const navigate = useNavigate();

  // ── Live Jobs State ─────────────────────────────────────────────
  const [jobs, setJobs] = useState([]);
  const [jobsLoading, setJobsLoading] = useState(true);
  const [jobsError, setJobsError] = useState(null);
  const [pagination, setPagination] = useState({ page: 1, totalPages: 1, totalJobs: 0 });
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [department, setDepartment] = useState('');
  const [employmentType, setEmpType] = useState('');
  const [location, setLocation] = useState('');
  const [expandedId, setExpandedId] = useState(null);

  const fetchJobs = useCallback(async () => {
    setJobsLoading(true);
    setJobsError(null);
    try {
      const params = new URLSearchParams({ page, limit: 8 });
      if (search) params.set('search', search);
      if (department) params.set('department', department);
      if (employmentType) params.set('employmentType', employmentType);
      if (location) params.set('location', location);
      const res = await publicApi.get(`/jobs/getJobs?${params}`);
      setJobs(res.data?.data?.jobs || []);
      setPagination(res.data?.data?.pagination || { page: 1, totalPages: 1, totalJobs: 0 });
    } catch (err) {
      setJobsError('Could not load job listings. Please try again later.');
    } finally {
      setJobsLoading(false);
    }
  }, [page, search, department, employmentType, location]);

  useEffect(() => { fetchJobs(); }, [fetchJobs]);

  function handleJobSearch(e) {
    e.preventDefault();
    setPage(1);
    fetchJobs();
  }

  // Application Form States
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: 'Senior Structural Designer',
    message: ''
  });
  const [resume, setResume] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // ── Application Form State ────────────────────────────────────

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleScrollToForm = (jobTitle) => {
    setFormData(prev => ({ ...prev, position: jobTitle }));
    const element = document.getElementById('application-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate upload and submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: 'Senior Structural Designer',
        message: ''
      });
      setResume(null);
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero */}
      <section className="relative py-20 bg-brand-black text-white text-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 select-none pointer-events-none"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1600&h=400')` }}
        />
        <div className="relative z-10 px-4 md:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold font-display mb-4">Build the Future With Us</h1>
          <p className="font-body text-base text-gray-300 max-w-xl mx-auto">
            Join Om Seva Design & Build to work on nationwide infrastructure projects and shape critical civil facilities.
          </p>
        </div>
      </section>

      {/* 2. Why Join Us (Benefits Grid) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <SectionHeader
            tag="Corporate Culture"
            title="Why Join Om Seva?"
            subtitle="We offer an environment that encourages technical rigor, continuous learning, and direct contribution to public works."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b) => (
              <Card key={b.id} hoverEffect={true} className="flex flex-col bg-brand-bg/40">
                <div className="w-10 h-10 bg-brand-green/10 flex items-center justify-center rounded-lg mb-4">
                  <Award size={20} className="text-brand-green" />
                </div>
                <h4 className="font-display font-bold text-base text-brand-black mb-2">{b.title}</h4>
                <p className="font-body text-xs text-brand-gray leading-relaxed">{b.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Open Positions — Live from API */}
      <section className="py-16 bg-brand-bg border-y border-brand-border/40">
        <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <SectionHeader
            tag="Careers"
            title="Available Vacancies"
            subtitle="Browse our current openings. Click any role to view the full description."
          />

          {/* Filters */}
          <form
            className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-3 mb-8"
            onSubmit={handleJobSearch}
          >
            <div className="relative flex-1">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-gray/50 pointer-events-none" />
              <input
                type="search"
                placeholder="Search title…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 border border-brand-border rounded-lg text-sm font-body text-brand-black focus:outline-none focus:border-brand-green bg-white"
              />
            </div>
            <select
              value={department}
              onChange={(e) => { setDepartment(e.target.value); setPage(1); }}
              className="px-4 py-2.5 border border-brand-border rounded-lg text-sm font-body text-brand-black focus:outline-none focus:border-brand-green bg-white cursor-pointer"
            >
              <option value="">All Departments</option>
              {['Engineering', 'Design', 'Surveying', 'Management', 'Administration', 'Other'].map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
            <select
              value={employmentType}
              onChange={(e) => { setEmpType(e.target.value); setPage(1); }}
              className="px-4 py-2.5 border border-brand-border rounded-lg text-sm font-body text-brand-black focus:outline-none focus:border-brand-green bg-white cursor-pointer"
            >
              <option value="">All Types</option>
              {['Full-time', 'Part-time', 'Contract', 'Internship'].map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            <button type="submit"
              className="px-5 py-2.5 bg-brand-green hover:bg-brand-green-hover text-white text-sm font-bold font-body rounded-lg transition-colors"
            >
              Search
            </button>
          </form>

          {/* Results */}
          <div className="max-w-4xl mx-auto flex flex-col gap-4">
            {jobsLoading ? (
              <div className="flex justify-center items-center py-16">
                <Loader2 size={32} className="animate-spin text-brand-green" />
              </div>
            ) : jobsError ? (
              <div className="flex items-start gap-3 p-5 bg-red-50 border border-red-200 rounded-lg text-sm font-body text-red-700">
                <AlertCircle size={18} className="shrink-0 mt-0.5" />
                {jobsError}
              </div>
            ) : jobs.length === 0 ? (
              <div className="text-center py-10 border border-dashed border-brand-border rounded-lg bg-white">
                <p className="font-body text-brand-gray text-sm">No open positions match your filters. Please check back soon.</p>
              </div>
            ) : (
              jobs.map((job) => {
                const isExpanded = expandedId === job._id;
                return (
                  <div
                    key={job._id}
                    className="bg-white border border-brand-border rounded-lg shadow-sm overflow-hidden transition-all duration-300"
                  >
                    {/* Header Row */}
                    <div
                      onClick={() => setExpandedId(isExpanded ? null : job._id)}
                      className="p-6 flex items-center justify-between cursor-pointer hover:bg-brand-bg/20 transition-colors select-none"
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                        <h4 className="font-display font-bold text-lg text-brand-black">{job.title}</h4>
                        <div className="flex gap-2 flex-wrap">
                          {job.department && (
                            <span className="bg-brand-green/10 text-brand-green text-xs font-semibold px-2 py-0.5 rounded border border-brand-green/20">
                              {job.department}
                            </span>
                          )}
                          {(job.location || job.employmentType) && (
                            <span className="bg-brand-bg text-brand-gray text-xs font-semibold px-2 py-0.5 rounded border border-brand-border">
                              {[job.location, job.employmentType].filter(Boolean).join(' | ')}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-brand-green font-body text-sm font-semibold flex items-center gap-1">
                        {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </div>
                    </div>

                    {/* Expanded details */}
                    {isExpanded && (
                      <div className="px-6 pb-6 border-t border-brand-bg pt-6 animate-in slide-in-from-top-2 duration-200">
                        {job.experienceLevel && (
                          <div className="mb-4">
                            <span className="text-xs font-bold text-brand-black uppercase tracking-wider block mb-1.5 font-display">Experience:</span>
                            <p className="text-xs font-body text-brand-gray">{job.experienceLevel}</p>
                          </div>
                        )}
                        <Button
                          variant="primary"
                          onClick={() => navigate(`/careers/${job._id}`)}
                          className="py-2.5 px-5 text-xs inline-flex items-center gap-1.5"
                        >
                          View Full Description <ArrowUpRight size={14} />
                        </Button>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Pagination */}
          {pagination.totalPages > 1 && (
            <div className="max-w-4xl mx-auto flex items-center justify-center gap-4 mt-8">
              <button
                disabled={page <= 1}
                onClick={() => setPage((p) => p - 1)}
                className="px-4 py-2 border border-brand-border rounded-lg text-sm font-body font-semibold text-brand-black hover:border-brand-green hover:text-brand-green transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                ← Prev
              </button>
              <span className="font-body text-sm text-brand-gray">Page {page} of {pagination.totalPages}</span>
              <button
                disabled={page >= pagination.totalPages}
                onClick={() => setPage((p) => p + 1)}
                className="px-4 py-2 border border-brand-border rounded-lg text-sm font-body font-semibold text-brand-black hover:border-brand-green hover:text-brand-green transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Next →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. Active Tenders Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <SectionHeader
            tag="Contracts"
            title="Active Infrastructure Tenders"
            subtitle="We bid for and collaborate on public utilities design schemes. Registered vendors and authority executives can find active tenders here."
          />

          <div className="max-w-4xl mx-auto flex flex-col gap-6">
            {activeTenders.length === 0 ? (
              <div className="text-center py-10 border border-dashed border-brand-border rounded-lg bg-brand-bg">
                <p className="font-body text-brand-gray text-sm">No active tenders listed at this time. Please check back later.</p>
              </div>
            ) : (
              activeTenders.map((tender) => (
                <div
                  key={tender.id}
                  className="bg-brand-bg/40 border border-brand-border/70 rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-brand-green/30 hover:bg-white hover:shadow-sm transition-all duration-300"
                >
                  <div className="flex flex-col gap-1.5 max-w-2xl">
                    <span className="text-[10px] font-bold text-brand-green uppercase tracking-widest font-body">Ref: {tender.refNumber}</span>
                    <h4 className="font-display font-bold text-base text-brand-black leading-snug">{tender.title}</h4>
                    <span className="font-body text-xs text-brand-gray">Authority: {tender.authority}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end justify-between md:justify-center gap-4 shrink-0 border-t md:border-t-0 border-brand-border/60 pt-4 md:pt-0">
                    <div className="flex flex-col">
                      <span className="text-[9px] font-bold text-brand-gray uppercase tracking-wider font-body md:text-right">Submission Deadline</span>
                      <span className="font-body text-xs font-bold text-brand-black md:text-right">{tender.deadline}</span>
                    </div>

                    <a
                      href={tender.documentUrl}
                      className="inline-flex items-center gap-1.5 font-body text-xs font-bold text-brand-green hover:text-brand-green-hover"
                    >
                      <Download size={14} />
                      Download Bid Scoping (.PDF)
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* 5. General Application Form */}
      <section id="application-form" className="py-16 md:py-24 bg-brand-bg scroll-mt-20 border-t border-brand-border/40">
        <div className="px-4 md:px-8 lg:px-16 max-w-4xl mx-auto">

          <div className="bg-white border border-brand-border rounded-xl p-8 md:p-12 shadow-sm">
            <div className="text-center mb-8">
              <span className="text-xs font-bold tracking-widest text-brand-green uppercase mb-2 block font-body">Apply Online</span>
              <h3 className="text-2xl font-bold font-display text-brand-black">General Application</h3>
              <p className="font-body text-sm text-brand-gray mt-2">Submit your details and CV. We review submissions weekly.</p>
            </div>

            {isSuccess ? (
              <div className="text-center py-6 flex flex-col items-center justify-center animate-in fade-in zoom-in duration-300">
                <div className="w-14 h-14 bg-brand-green/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={36} className="text-brand-green" />
                </div>
                <h4 className="text-xl font-bold font-display text-brand-black mb-2">Application Submitted!</h4>
                <p className="font-body text-brand-gray text-xs md:text-sm max-w-md mx-auto mb-6">
                  Thank you for applying. If your credentials match our requirements, the department director will reach out for a technical interview.
                </p>
                <Button variant="secondary" onClick={() => setIsSuccess(false)} className="px-5 py-2 text-xs">
                  Submit Another Resume
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="text-xs font-semibold text-brand-black uppercase tracking-wider font-body">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Rajesh Chavan"
                      className="px-4 py-2.5 border border-brand-border rounded-lg text-sm font-body text-brand-black focus:outline-none focus:border-brand-green transition-colors bg-brand-bg/30"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-xs font-semibold text-brand-black uppercase tracking-wider font-body">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="rajesh@gmail.com"
                      className="px-4 py-2.5 border border-brand-border rounded-lg text-sm font-body text-brand-black focus:outline-none focus:border-brand-green transition-colors bg-brand-bg/30"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="phone" className="text-xs font-semibold text-brand-black uppercase tracking-wider font-body">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="px-4 py-2.5 border border-brand-border rounded-lg text-sm font-body text-brand-black focus:outline-none focus:border-brand-green transition-colors bg-brand-bg/30"
                    />
                  </div>

                  {/* Position dropdown */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="position" className="text-xs font-semibold text-brand-black uppercase tracking-wider font-body">Position of Interest</label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="px-4 py-2.5 border border-brand-border rounded-lg text-sm font-body text-brand-black focus:outline-none focus:border-brand-green bg-white cursor-pointer"
                    >
                      <option value="Senior Structural Designer">Senior Structural Designer</option>
                      <option value="Highway Design & Planning Engineer">Highway Design & Planning Engineer</option>
                      <option value="GIS Mapping & Land Surveyor">GIS Mapping & Land Surveyor</option>
                      <option value="Internship / Graduate Trainee">Internship / Graduate Trainee</option>
                      <option value="General Technical Inquiry">General Technical Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* Resume Upload */}
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold text-brand-black uppercase tracking-wider block font-body">Upload Resume *</span>
                  <div className="border-2 border-dashed border-brand-border hover:border-brand-green/50 rounded-lg p-5 text-center transition-colors cursor-pointer bg-brand-bg/10 relative">
                    <input
                      type="file"
                      id="resume"
                      required
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <div className="flex flex-col items-center justify-center gap-1 select-none">
                      <FileText size={28} className="text-brand-gray/60 mb-1" />
                      <p className="font-body text-xs font-semibold text-brand-black">
                        {resume ? `Selected: ${resume.name}` : 'Click to upload CV (PDF, DOCX)'}
                      </p>
                      <p className="font-body text-[10px] text-brand-gray">Max file size: 5MB</p>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="message" className="text-xs font-semibold text-brand-black uppercase tracking-wider font-body">Short Cover Note / Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us briefly about your engineering background and when you are available to start..."
                    className="px-4 py-2.5 border border-brand-border rounded-lg text-sm font-body text-brand-black focus:outline-none focus:border-brand-green transition-colors bg-brand-bg/30 resize-y"
                  />
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="primary"
                  className="w-full flex items-center justify-center gap-2 py-3 mt-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Submit Application
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
export default Careers;
