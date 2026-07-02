import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Spinner } from '../components/ui/Spinner';
import logo from '../../assets/logo.png';

export function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = await login(email, password);

    if (result.success) {
      navigate('/osi-console/dashboard', { replace: true });
    } else {
      setError(result.message || 'Login failed. Please check your credentials.');
    }
    setLoading(false);
  }

  return (
    <div className="admin-login-page">
      {/* Left panel – branding */}
      <div className="admin-login-brand">
        <div className="admin-login-brand__inner">
          <img src={logo} alt="Om Seva" className="admin-login-brand__logo" />
          <h1 className="admin-login-brand__title">Om Seva Design &amp; Build</h1>
          <p className="admin-login-brand__sub">Admin Management Portal</p>
          <div className="admin-login-brand__divider" />
          <p className="admin-login-brand__tagline">
            Manage users, projects, and your team from one place.
          </p>
        </div>
      </div>

      {/* Right panel – form */}
      <div className="admin-login-form-panel">
        <form
          id="admin-login-form"
          className="admin-login-form"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="admin-login-form__header">
            <h2 className="admin-login-form__title">Welcome back</h2>
            <p className="admin-login-form__sub">Sign in to your admin account</p>
          </div>

          {error && (
            <div className="admin-alert admin-alert--error" role="alert">
              {error}
            </div>
          )}

          <div className="admin-form-field">
            <label htmlFor="login-email" className="admin-form-field__label">
              Email address
            </label>
            <input
              id="login-email"
              type="email"
              className="admin-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              autoComplete="email"
              required
              autoFocus
            />
          </div>

          <div className="admin-form-field">
            <label htmlFor="login-password" className="admin-form-field__label">
              Password
            </label>
            <div className="admin-input-group">
              <input
                id="login-password"
                type={showPassword ? 'text' : 'password'}
                className="admin-input admin-input--with-action"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password@123"
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                className="admin-input-action"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? '🙈' : '👁'}
              </button>
            </div>
          </div>

          <button
            id="admin-login-submit"
            type="submit"
            className="admin-btn admin-btn--primary admin-btn--full"
            disabled={loading}
          >
            {loading ? <Spinner size="sm" /> : 'Sign In'}
          </button>

          <p className="admin-login-form__footer">
            Session expires after ~15 minutes of inactivity.
          </p>
        </form>
      </div>
    </div>
  );
}
