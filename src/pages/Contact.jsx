import { useState, useRef, useEffect } from 'react';
import ContactForm from '../components/ContactForm';

function Contact() {
  // Lifted form state so modal form data can be visible outside
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    messageType: '',
    otherType: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [lastSubmission, setLastSubmission] = useState(null);

  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleKey = (e) => {
      if (e.key === 'Escape') {
        if (dialog.open) dialog.close();
        setIsDialogOpen(false);
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isDialogOpen) {
      try {
        dialog.showModal();
      } catch (e) {
        // fallback for browsers that don't support dialog
        dialog.setAttribute('open', '');
      }
    } else {
      try {
        dialog.close();
      } catch (e) {
        dialog.removeAttribute('open');
      }
    }
  }, [isDialogOpen]);

  const handleOpen = () => setIsDialogOpen(true);

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  const handleSuccess = () => {
    // Save a copy of submission to state visible outside
    setLastSubmission({ ...formData, submittedAt: new Date().toISOString() });

    // Reset form data for next time
    setFormData({ name: '', email: '', messageType: '', otherType: '', message: '' });
    setErrors({});

    // Close dialog
    setIsDialogOpen(false);
  };

  return (
    <div className="contact-page">
      <section className="section section-white">
        <div className="container">
          <div className="contact-content">
            <h1>Get In Touch</h1>
            <p>Have a question or want to work together? Feel free to reach out!</p>

            <button className="btn-primary" onClick={handleOpen}>Open Contact Form</button>

            {lastSubmission && (
              <div className="last-submission">
                <h3>Last submitted message</h3>
                <p><strong>Name:</strong> {lastSubmission.name}</p>
                <p><strong>Email:</strong> {lastSubmission.email}</p>
                <p><strong>Type:</strong> {lastSubmission.messageType === 'other' ? lastSubmission.otherType : lastSubmission.messageType}</p>
                <p><strong>Message:</strong> {lastSubmission.message}</p>
                <p className="submitted-at">Submitted at: {new Date(lastSubmission.submittedAt).toLocaleString()}</p>
              </div>
            )}

            {/* Native dialog element for modal */}
            <dialog ref={dialogRef} className="contact-dialog" aria-modal="true">
              <button className="dialog-close" onClick={handleClose} aria-label="Close dialog">
                <img src="/icons/close.svg" alt="Close" />
              </button>
              <h2>Contact Me</h2>
              <ContactForm
                formData={formData}
                setFormData={setFormData}
                errors={errors}
                setErrors={setErrors}
                onSuccess={handleSuccess}
              />
            </dialog>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;