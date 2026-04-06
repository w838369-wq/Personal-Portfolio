import React from 'react';

// Controlled ContactForm: parent should pass formData, setFormData, errors, setErrors, and onSuccess
function ContactForm({ formData, setFormData, errors, setErrors, onSuccess }) {
  // Fallbacks: in case the component is used without props, avoid crashing
  const safeFormData = formData || {
    name: '',
    email: '',
    messageType: '',
    otherType: '',
    message: ''
  };

  const safeSetFormData = setFormData || (() => {});
  const safeSetErrors = setErrors || (() => {});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    safeSetFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors && errors[name]) {
      safeSetErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!safeFormData.name.trim()) newErrors.name = 'Name is required';
    if (!safeFormData.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(safeFormData.email)) newErrors.email = 'Please enter a valid email address';
    if (!safeFormData.messageType) newErrors.messageType = 'Please select a message type';
    if (safeFormData.messageType === 'other' && !safeFormData.otherType.trim()) newErrors.otherType = 'Please specify the type of inquiry';
    if (!safeFormData.message.trim()) newErrors.message = 'Message is required';

    safeSetErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (typeof onSuccess === 'function') onSuccess();
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className={`form-input ${errors && errors.name ? 'error' : ''}`}
          value={safeFormData.name}
          onChange={handleChange}
        />
        {errors && errors.name && <span className="form-error">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          className={`form-input ${errors && errors.email ? 'error' : ''}`}
          value={safeFormData.email}
          onChange={handleChange}
        />
        {errors && errors.email && <span className="form-error">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="messageType" className="form-label">Message Type</label>
        <select
          id="messageType"
          name="messageType"
          className={`form-input ${errors && errors.messageType ? 'error' : ''}`}
          value={safeFormData.messageType}
          onChange={handleChange}
        >
          <option value="">Select a type</option>
          <option value="general">General Inquiry</option>
          <option value="job">Job Opportunity</option>
          <option value="collaboration">Collaboration</option>
          <option value="other">Other</option>
        </select>
        {errors && errors.messageType && <span className="form-error">{errors.messageType}</span>}
      </div>

      {safeFormData.messageType === 'other' && (
        <div className="form-group">
          <label htmlFor="otherType" className="form-label">Please specify</label>
          <input
            type="text"
            id="otherType"
            name="otherType"
            className={`form-input ${errors && errors.otherType ? 'error' : ''}`}
            value={safeFormData.otherType}
            onChange={handleChange}
            placeholder="Type of inquiry"
          />
          {errors && errors.otherType && <span className="form-error">{errors.otherType}</span>}
        </div>
      )}

      <div className="form-group">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea
          id="message"
          name="message"
          className={`form-input form-textarea ${errors && errors.message ? 'error' : ''}`}
          rows="6"
          value={safeFormData.message}
          onChange={handleChange}
        />
        {errors && errors.message && <span className="form-error">{errors.message}</span>}
      </div>

      <div className="form-actions">
        <button type="submit" className="btn-primary btn-submit">Send Message</button>
      </div>
    </form>
  );
}

export default ContactForm;