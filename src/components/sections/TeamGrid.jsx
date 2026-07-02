import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, Award, BookOpen, FileDown } from 'lucide-react';
import { Card } from '../ui/Card';
import { SectionHeader } from '../ui/SectionHeader';
import { publicApi } from '../../lib/publicApi';

/**
 * Renders a grid of director profile cards and a compact grid for other employees.
 * Fetches data from the public API dynamically.
 */
export function TeamGrid({ showHeader = true }) {
  const navigate = useNavigate();
  const [leaders, setLeaders] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTeam() {
      try {
        const res = await publicApi.get('/employee/getAllTeamMembers');
        const teamData = res.data?.data?.teamMembers || [];
        // Only show live members
        const liveMembers = teamData.filter((m) => m.isLive);
        setLeaders(liveMembers.filter((m) => m.isLeader));
        setEmployees(liveMembers.filter((m) => !m.isLeader));
      } catch (error) {
        console.error('Failed to fetch team members:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchTeam();
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        
        {showHeader && (
          <SectionHeader
            tag="Our Leadership"
            title="Board of Directors"
            subtitle="Meet our founding partners, bringing together over six decades of combined engineering expertise, certified academic credentials, and robust execution records."
          />
        )}

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-green"></div>
          </div>
        ) : (
          <>
            {/* Leaders Grid (Detailed Cards) */}
            {leaders.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
                {leaders.map((director) => (
                  <Card 
                    key={director._id} 
                    className="flex flex-col h-full overflow-hidden p-0 cursor-pointer hover:border-brand-green/50 transition-all duration-300" 
                    hoverEffect={true}
                    onClick={() => navigate(`/team/${director._id}`)}
                  >
                    {/* Photo Area */}
                    <div className="h-64 w-full overflow-hidden bg-brand-bg relative group">
                      {director.image?.url ? (
                        <img
                          src={director.image.url}
                          alt={director.name}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
                          No Image
                        </div>
                      )}
                      <div className="absolute bottom-4 left-4 bg-brand-black/80 backdrop-blur-sm px-3 py-1 rounded text-white text-xs font-semibold flex items-center gap-1">
                        <MapPin size={12} className="text-brand-green" />
                        <span>{director.location?.split(',')[0]}</span>
                      </div>
                    </div>

                    {/* Card Details */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold font-display text-brand-black mb-1">
                          {director.name}
                        </h3>
                        <p className="text-sm font-bold text-brand-green font-body uppercase tracking-wider">
                          {director.designation}
                        </p>
                      </div>

                      {/* Academic Credentials */}
                      <div className="flex gap-2 mb-4 bg-brand-bg/50 p-2.5 rounded border border-brand-border/40">
                        <BookOpen size={16} className="text-brand-green shrink-0 mt-0.5" />
                        <p className="text-xs font-semibold text-brand-black font-body leading-tight">
                          {director.qualification}
                        </p>
                      </div>

                      {/* Specializations List */}
                      {director.specializations && director.specializations.length > 0 && (
                        <div className="mb-6 flex-grow">
                          <span className="text-xs font-bold text-brand-black uppercase tracking-wider block mb-2 font-display">
                            Key Specialties:
                          </span>
                          <ul className="flex flex-col gap-1.5">
                            {director.specializations.map((spec, index) => (
                              <li key={index} className="text-xs text-brand-gray font-body flex items-start gap-1.5">
                                <Award size={12} className="text-brand-green shrink-0 mt-0.5" />
                                <span>{spec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Key Project Reference */}
                      {director.keyProjects && director.keyProjects.length > 0 && (
                        <div className="border-t border-brand-border/60 pt-4 mb-4">
                          <span className="text-xs font-bold text-brand-black uppercase tracking-wider block mb-1 font-display">
                            Notable Project:
                          </span>
                          <p className="text-xs font-body text-brand-gray italic leading-relaxed line-clamp-2">
                            "{director.keyProjects[0]}"
                          </p>
                        </div>
                      )}

                      {/* Contact Information */}
                      <div className="border-t border-brand-border/60 pt-4 mt-auto flex flex-col gap-2 font-body text-xs text-brand-gray">
                        <a
                          href={`mailto:${director.email}`}
                          className="flex items-center gap-2 hover:text-brand-green transition-colors duration-200"
                          title={`Email ${director.name}`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Mail size={14} className="text-brand-green" />
                          <span className="truncate">{director.email}</span>
                        </a>
                        <a
                          href={`tel:+91${director.phone}`}
                          className="flex items-center gap-2 hover:text-brand-green transition-colors duration-200"
                          title={`Call ${director.name}`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Phone size={14} className="text-brand-green" />
                          <span>+91 {director.phone}</span>
                        </a>
                        {director.resume?.url && (
                          <a
                            href={director.resume.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 font-semibold text-brand-green hover:text-brand-green-hover transition-colors duration-200 mt-1"
                            title={`Download ${director.name}'s resume`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FileDown size={14} />
                            <span>Download Resume (PDF)</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {/* Employees Grid (Compact Cards) */}
            {employees.length > 0 && (
              <div className="mt-12">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold font-display text-brand-black">Our Team</h3>
                  <p className="text-brand-gray font-body mt-2">The dedicated professionals driving our projects.</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {employees.map((employee) => (
                    <div key={employee._id} className="flex flex-col items-center text-center p-4 bg-brand-bg rounded-lg border border-brand-border/40 hover:border-brand-green/30 transition-colors">
                      <div className="w-24 h-24 rounded-full overflow-hidden mb-3 border-2 border-white shadow-sm">
                        {employee.image?.url ? (
                          <img src={employee.image.url} alt={employee.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 font-bold text-xl">
                            {employee.name?.charAt(0)}
                          </div>
                        )}
                      </div>
                      <h4 className="font-bold font-display text-brand-black text-sm">{employee.name}</h4>
                      <p className="text-xs text-brand-green font-body mt-1">{employee.designation}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
export default TeamGrid;
