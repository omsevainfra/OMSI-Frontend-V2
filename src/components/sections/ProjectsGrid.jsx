import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { SectionHeader } from '../ui/SectionHeader';
import { publicApi } from '../../lib/publicApi';

export function ProjectsGrid({
  limit,
  featuredOnly = false,
  interactiveFilters = true,
  showHeader = true,
  initialStatus = 'All'
}) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState(initialStatus);
  const [categoryFilter, setCategoryFilter] = useState('All');

  useEffect(() => {
    async function fetchProjects() {
      try {
        // Fetch all projects (or a very large limit)
        const res = await publicApi.get('/project/getAllProjects?limit=100');
        const data = res.data?.data?.projects || [];
        setProjects(data.filter(p => p.isLive));
      } catch (err) {
        console.error('Failed to fetch projects', err);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  // Compute filtered projects based on UI filters
  let filteredProjects = projects;
  if (featuredOnly) {
    filteredProjects = filteredProjects.filter(p => p.isFeatured);
  }
  if (interactiveFilters) {
    if (statusFilter !== 'All') {
      filteredProjects = filteredProjects.filter(p => p.status === statusFilter);
    }
    if (categoryFilter !== 'All') {
      filteredProjects = filteredProjects.filter(p => p.category === categoryFilter);
    }
  }
  if (limit) {
    filteredProjects = filteredProjects.slice(0, limit);
  }

  // Separate into featured (for cards) and non-featured (for table)
  // Wait, if featuredOnly is true (like on the homepage), we only show the cards.
  // If it's the Projects page, we show both.
  const featuredList = featuredOnly ? filteredProjects : filteredProjects.filter(p => p.isFeatured);
  const tableList = featuredOnly ? [] : filteredProjects;

  const categories = ['All', 'Transportation', 'Water', 'Structural', 'Construction', 'Surveying'];

  // Helper for Date formatting
  const formatDate = (isoStr) => {
    if (!isoStr) return 'N/A';
    return new Date(isoStr).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">

        {showHeader && (
          <SectionHeader
            tag="Our Portfolio"
            title="Building Civil Infrastructure That Lasts"
            subtitle="Explore our diverse range of engineering works, from coastal expressways and rural bridges to water distribution grids under federal schemes."
          />
        )}

        {/* Filter Controls (only if interactiveFilters is enabled) */}
        {interactiveFilters && (
          <div className="flex flex-col gap-6 mb-12">
            {/* Status Tabs */}
            <div className="flex justify-center border-b border-brand-border">
              <div className="flex gap-8 overflow-x-auto pb-1">
                {['All', 'Upcoming', 'Ongoing', 'Finished'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    className={`pb-4 text-sm font-semibold tracking-wide font-body transition-all relative whitespace-nowrap ${statusFilter === status
                        ? 'text-brand-green font-bold'
                        : 'text-brand-gray hover:text-brand-green'
                      }`}
                  >
                    {status === 'All' ? 'All Projects' : status}
                    {statusFilter === status && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-green rounded-full" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold font-body border transition-all ${categoryFilter === cat
                      ? 'bg-brand-black text-white border-brand-black'
                      : 'bg-brand-bg text-brand-gray border-brand-border hover:bg-white hover:text-brand-green hover:border-brand-green'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-green"></div>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-12 border border-dashed border-brand-border rounded-lg bg-brand-bg">
            <p className="font-body text-brand-gray text-base">
              No projects found matching the selected filters.
            </p>
          </div>
        ) : (
          <>
            {/* FEATURED PROJECTS (CARDS) */}
            {featuredList.length > 0 && (
              <div className="mb-16">
                {!featuredOnly && <h3 className="text-2xl font-bold font-display mb-8 text-brand-black border-b pb-4">Featured Projects</h3>}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredList.map((project) => (
                    <Card key={project._id} className="flex flex-col h-full overflow-hidden p-0">
                      {/* Cover Image */}
                      <div className="relative h-56 w-full overflow-hidden bg-brand-bg">
                        {project.images && project.images.length > 0 ? (
                          <img
                            src={project.images[0].url}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-brand-gray bg-gray-200">No Image</div>
                        )}
                        {/* Status Badge overlay */}
                        <div className="absolute top-4 right-4">
                          <Badge type="status">{project.status}</Badge>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="mb-3">
                          <Badge type="category">{project.category}</Badge>
                        </div>

                        <h3 className="text-xl font-bold font-display text-brand-black mb-3 line-clamp-2 hover:text-brand-green transition-colors">
                          <Link to={`/projects/${project._id}`}>{project.title}</Link>
                        </h3>

                        <p className="font-body text-sm text-brand-gray leading-relaxed mb-6 line-clamp-3">
                          {project.description}
                        </p>

                        <div className="mt-auto border-t border-brand-border/60 pt-4 flex flex-col gap-2">
                          <div className="flex items-center gap-2 text-xs text-brand-gray font-body">
                            <MapPin size={14} className="text-brand-green" />
                            <span>{project.location}</span>
                          </div>
                          <div className="flex items-center justify-between mt-2 pt-2 border-t border-brand-bg">
                            <span className="text-xs font-semibold text-brand-black font-body">
                              Budget: <span className="text-brand-green">{project.budget}</span>
                            </span>
                            <Link
                              to={`/projects/${project._id}`}
                              className="font-body text-xs font-bold text-brand-green hover:text-brand-green-hover flex items-center gap-1 group/btn"
                            >
                              View Details
                              <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* ALL PROJECTS (TABLE) */}
            {!featuredOnly && tableList.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold font-display mb-6 text-brand-black border-b pb-4">All Projects Directory</h3>
                <div className="overflow-x-auto bg-white border border-brand-border rounded-lg shadow-sm">
                  <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                      <tr className="bg-brand-bg text-brand-gray text-xs uppercase tracking-wider font-body border-b border-brand-border">
                        <th className="p-4 font-semibold">Title & Details</th>
                        <th className="p-4 font-semibold">Category</th>
                        <th className="p-4 font-semibold">Status</th>
                        <th className="p-4 font-semibold">Location</th>
                        <th className="p-4 font-semibold">Client</th>
                        <th className="p-4 font-semibold">Start Date</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm font-body divide-y divide-brand-border/50">
                      {tableList.map((p) => (
                        <tr key={p._id} className="hover:bg-brand-bg/50 transition-colors">
                          <td className="p-4">
                            <Link to={`/projects/${p._id}`} className="font-bold text-brand-black hover:text-brand-green block mb-1">
                              {p.title}
                            </Link>
                            <span className="text-xs text-brand-gray block">Leader: {p.teamLeader} | Budget: {p.budget}</span>
                          </td>
                          <td className="p-4 text-brand-black">{p.category}</td>
                          <td className="p-4">
                            <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold ${p.status === 'Finished' ? 'bg-green-100 text-green-800' :
                                p.status === 'Ongoing' ? 'bg-blue-100 text-blue-800' :
                                  'bg-amber-100 text-amber-800'
                              }`}>
                              {p.status}
                            </span>
                          </td>
                          <td className="p-4 text-brand-gray">{p.location}</td>
                          <td className="p-4 text-brand-gray">{p.client}</td>
                          <td className="p-4 text-brand-gray">{formatDate(p.startDate)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}

        {/* View All CTA (only when limited in view count) */}
        {limit && projects.length > limit && (
          <div className="text-center mt-12">
            <Button variant="primary" to="/projects" className="flex items-center gap-2 mx-auto">
              View All Projects
              <ArrowRight size={16} />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
export default ProjectsGrid;
