import React, { useState } from 'react'
import './Form.css'

const FormSimple2 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Type of Inquiry',
    message: ''
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage('Thank you for your message! We\'ll get back to you soon.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          type: 'Type of Inquiry',
          message: ''
        });
      } else {
        setSubmitMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitMessage('Failed to send message. Please try again later.');
    }

    setSubmitting(false);
  };

  return (
    <form 
      name="listed" 
      className='Form'
      onSubmit={handleSubmit}
    >  
      <label className='Form--Label' htmlFor="name"></label>
      <input 
        style={{color:'white'}}
        type="text" 
        name="name" 
        id="name"
        placeholder='Name'
        className='Form--Input'
        value={formData.name}
        onChange={handleChange}
        required
      />
    
      <label className='Form--Label' htmlFor="email"></label>
      <input 
        type="email" 
        name="email" 
        id="email"
        placeholder='Email'
        className='Form--Input'
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label className='Form--Label has-arrow'>
        <select 
          className='Form--Input Form--Select'
          name='type'
          value={formData.type}
          onChange={handleChange}
          id="inquiry"
        >
          <option disabled hidden value="Type of Inquiry">
            Type of Inquiry
          </option>
          <option>Bookings Inquiry</option>
          <option>Productions And Events</option>
          <option>General Inquiry</option>
        </select>
      </label>
      
      <label className='Form--Label' htmlFor="message"></label>
      <textarea 
        name="message" 
        id="message" 
        placeholder='Message'
        className='Form--Input Form--Textarea'
        rows='10'
        value={formData.message}
        onChange={handleChange}
        required
      />
      
      {submitMessage && (
        <div style={{ 
          color: submitMessage.includes('Thank you') ? '#4CAF50' : '#f44336',
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          {submitMessage}
        </div>
      )}
      
      <button 
        name="contactSubmitButton" 
        id="contactSubmitButton" 
        type="submit" 
        className="example_d"
        disabled={submitting}
      >  
        <span>{submitting ? 'Sending...' : 'Send'}</span>
      </button>  
    </form>
  )
}

export default FormSimple2