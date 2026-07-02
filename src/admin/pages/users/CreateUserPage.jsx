import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { api } from '../../lib/api';
import { useToast } from '../../context/ToastContext';
import { FormField } from '../../components/ui/FormField';

const ROLES = ['ADMIN', 'ENGINEER', 'RECRUITER', 'USER', 'SUPERADMIN'];

export function CreateUserPage() {
  const navigate = useNavigate();
  const toast = useToast();

  const [form, setForm] = useState({
    email: '',
    password: '',
    role: 'ADMIN',
    isActive: true,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  function set(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: '' }));
  }

  function validate() {
    const errs = {};
    if (!form.email) errs.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email.';

    if (!form.password) errs.password = 'Password is required.';
    else if (form.password.length < 8 || form.password.length > 32) errs.password = 'Password must be 8–32 characters.';
    else if (!/[A-Z]/.test(form.password)) errs.password = 'Must include an uppercase letter.';
    else if (!/[a-z]/.test(form.password)) errs.password = 'Must include a lowercase letter.';
    else if (!/[0-9]/.test(form.password)) errs.password = 'Must include a number.';
    else if (!/[^A-Za-z0-9]/.test(form.password)) errs.password = 'Must include a special character.';

    if (!form.role) errs.role = 'Role is required.';
    return errs;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setLoading(true);
    try {
      await api.post('/user/createUser', {
        email: form.email,
        password: form.password,
        role: form.role,
        isActive: form.isActive,
      });
      toast.success('User created successfully.');
      navigate('/osi-console/users');
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
          <h2 className="admin-page__title">Create User</h2>
          <p className="admin-page__sub">Add a new user to the system.</p>
        </div>
        <Link to="/osi-console/users" className="admin-btn admin-btn--ghost">← Back to Users</Link>
      </div>

      <div className="admin-card admin-card--narrow">
        <form id="create-user-form" onSubmit={handleSubmit} noValidate>
          <FormField id="cu-email" label="Email address" type="email" required
            value={form.email} onChange={(e) => set('email', e.target.value)} error={errors.email}
            placeholder="user@example.com" />

          <FormField id="cu-password" label="Password" type="password" required
            value={form.password} onChange={(e) => set('password', e.target.value)} error={errors.password}
            hint="8–32 chars · uppercase · lowercase · number · special character"
            placeholder="Password@123" />

          <div className="admin-form-field">
            <label htmlFor="cu-role" className="admin-form-field__label">
              Role <span className="admin-form-field__req">*</span>
            </label>
            <select id="cu-role" className="admin-select" value={form.role}
              onChange={(e) => set('role', e.target.value)}>
              {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
            {errors.role && <p className="admin-form-field__error">{errors.role}</p>}
          </div>

          <div className="admin-form-field">
            <label className="admin-form-field__label">Account Status</label>
            <label className="admin-toggle">
              <input
                id="cu-is-active"
                type="checkbox"
                checked={form.isActive}
                onChange={(e) => set('isActive', e.target.checked)}
              />
              <span className="admin-toggle__track" />
              <span className="admin-toggle__label">
                {form.isActive ? 'Active' : 'Inactive'}
              </span>
            </label>
          </div>

          <div className="admin-form-actions">
            <Link to="/osi-console/users" className="admin-btn admin-btn--ghost">Cancel</Link>
            <button id="cu-submit" type="submit" className="admin-btn admin-btn--primary" disabled={loading}>
              {loading ? 'Creating…' : 'Create User'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
