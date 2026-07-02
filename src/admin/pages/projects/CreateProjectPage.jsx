import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { api } from '../../lib/api';
import { useToast } from '../../context/ToastContext';
import { FormField } from '../../components/ui/FormField';
import { FileUpload } from '../../components/ui/FileUpload';

const CATEGORIES = ['Construction', 'Transportation', 'Structural', 'Water', 'Surveying'];
const STATUSES = ['Upcoming', 'Ongoing', 'Finished'];

const INITIAL = {
  title: '', category: 'Construction', status: 'Ongoing', location: '',
  client: '', description: '', budget: '', startDate: '', endDate: '',
  isLive: true, teamLeader: '', isFeatured: false,
};

export function CreateProjectPage() {
  const navigate = useNavigate();
  const toast = useToast();

  const [form, setForm] = useState(INITIAL);
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  function set(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: '' }));
  }

  function validate() {
    const errs = {};
    if (!form.title.trim()) errs.title = 'Title is required.';
    if (!form.status) errs.status = 'Status is required.';
    if (!form.location.trim()) errs.location = 'Location is required.';
    if (!form.client.trim()) errs.client = 'Client is required.';
    if (!form.description.trim()) errs.description = 'Description is required.';
    if (!form.budget.trim()) errs.budget = 'Budget is required.';
    if (!form.startDate) errs.startDate = 'Start date is required.';
    if (!form.teamLeader.trim()) errs.teamLeader = 'Team leader is required.';
    if (form.isFeatured && images.length === 0) errs.images = 'Featured projects require at least 1 image (max 3).';
    if (images.length > 3) errs.images = 'Maximum 3 images allowed.';
    return errs;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setLoading(true);
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, String(v)));
      images.forEach((img) => fd.append('images', img));

      await api.post('/project/createProject', fd);
      toast.success('Project created successfully.');
      navigate('/osi-console/projects');
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="admin-page">
      <div className="admin-page__header">
        <div>
          <h2 className="admin-page__title">New Project</h2>
          <p className="admin-page__sub">Fill in the details to create a project.</p>
        </div>
        <Link to="/osi-console/projects" className="admin-btn admin-btn--ghost">← Back</Link>
      </div>

      <form id="create-project-form" className="admin-card admin-form-wide" onSubmit={handleSubmit} noValidate>
        <div className="admin-form-grid">
          <FormField id="cp-title" label="Title" required value={form.title}
            onChange={(e) => set('title', e.target.value)} error={errors.title} placeholder="Bridge Construction Project" />

          <div className="admin-form-field">
            <label htmlFor="cp-category" className="admin-form-field__label">Category</label>
            <select id="cp-category" className="admin-select" value={form.category} onChange={(e) => set('category', e.target.value)}>
              {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div className="admin-form-field">
            <label htmlFor="cp-status" className="admin-form-field__label">Status <span className="admin-form-field__req">*</span></label>
            <select id="cp-status" className="admin-select" value={form.status} onChange={(e) => set('status', e.target.value)}>
              {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            {errors.status && <p className="admin-form-field__error">{errors.status}</p>}
          </div>

          <FormField id="cp-location" label="Location" required value={form.location}
            onChange={(e) => set('location', e.target.value)} error={errors.location} placeholder="Pune, Maharashtra" />

          <FormField id="cp-client" label="Client" required value={form.client}
            onChange={(e) => set('client', e.target.value)} error={errors.client} placeholder="ABC Infrastructure Ltd" />

          <FormField id="cp-budget" label="Budget" required value={form.budget}
            onChange={(e) => set('budget', e.target.value)} error={errors.budget} placeholder="5000000" />

          <FormField id="cp-team-leader" label="Team Leader" required value={form.teamLeader}
            onChange={(e) => set('teamLeader', e.target.value)} error={errors.teamLeader} placeholder="John Doe" />

          <FormField id="cp-start-date" label="Start Date" type="date" required value={form.startDate}
            onChange={(e) => set('startDate', e.target.value)} error={errors.startDate} />

          <FormField id="cp-end-date" label="End Date (optional)" type="date" value={form.endDate}
            onChange={(e) => set('endDate', e.target.value)} />
        </div>

        {/* Description – full width */}
        <div className="admin-form-field">
          <label htmlFor="cp-description" className="admin-form-field__label">
            Description <span className="admin-form-field__req">*</span>
          </label>
          <textarea id="cp-description" className={`admin-textarea ${errors.description ? 'admin-input--error' : ''}`}
            rows={4} value={form.description} onChange={(e) => set('description', e.target.value)}
            placeholder="Describe the project…" />
          {errors.description && <p className="admin-form-field__error">{errors.description}</p>}
        </div>

        {/* Toggles */}
        <div className="admin-form-toggles">
          <label className="admin-toggle">
            <input id="cp-is-live" type="checkbox" checked={form.isLive} onChange={(e) => set('isLive', e.target.checked)} />
            <span className="admin-toggle__track" />
            <span className="admin-toggle__label">Live (visible on public site)</span>
          </label>
          <label className="admin-toggle">
            <input id="cp-is-featured" type="checkbox" checked={form.isFeatured} onChange={(e) => set('isFeatured', e.target.checked)} />
            <span className="admin-toggle__track" />
            <span className="admin-toggle__label">Featured (requires at least 1 image)</span>
          </label>
        </div>

        {/* Image upload */}
        <FileUpload
          id="cp-images"
          label="Project Images (PNG, JPG, JPEG · max 3 · max 5 MB each)"
          accept="image/png,image/jpeg"
          multiple
          files={images}
          onChange={setImages}
          error={errors.images}
          hint={form.isFeatured ? 'Required for featured projects (1–3 images).' : 'Optional. Upload up to 3 images.'}
        />

        <div className="admin-form-actions">
          <Link to="/osi-console/projects" className="admin-btn admin-btn--ghost">Cancel</Link>
          <button id="cp-submit" type="submit" className="admin-btn admin-btn--primary" disabled={loading}>
            {loading ? 'Creating…' : 'Create Project'}
          </button>
        </div>
      </form>
    </div>
  );
}
