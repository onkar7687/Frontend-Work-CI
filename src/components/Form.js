// src/QuestionnaireForm.js
import React, { useState } from 'react';
import AxiosInstance from './Axios'; // Import the Axios instance



const QuestionnaireForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    comments: '',
    status: '',
    start_date: '',
    end_date: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate date format (YYYY-MM-DD)
  const isValidDate = (date) => /^\d{4}-\d{2}-\d{2}$/.test(date);

  // Format date to YYYY-MM-DD (if needed)
  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidDate(formData.start_date) || !isValidDate(formData.end_date)) {
      alert('Dates must be in YYYY-MM-DD format.');
      return;
    }

    // Prepare submission data
    const submissionData = {
      ...formData,
      start_date: formatDate(formData.start_date),
      end_date: formatDate(formData.end_date),
    };

    try {
      // Send POST request to the backend API
      const response = await AxiosInstance.post('/questionnaire/', submissionData);
      console.log('Form data submitted successfully:', response.data);
      alert('Questionnaire submitted successfully!');
      
      // Reset form fields
      setFormData({
        name: '',
        comments: '',
        status: '',
        start_date: '',
        end_date: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting the questionnaire.');
    }
  };

  return (
    <div className="container">
      <h2>Submit Questionnaire</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="comments" className="form-label">Comments</label>
          <input type="text" className="form-control" id="comments" name="comments" value={formData.comments} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="status" className="form-label">Status</label>
          <input type="text" className="form-control" id="status" name="status" value={formData.status} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="start_date" className="form-label">Start Date</label>
          <input type="date" className="form-control" id="start_date" name="start_date" value={formData.start_date} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="end_date" className="form-label">End Date</label>
          <input type="date" className="form-control" id="end_date" name="end_date" value={formData.end_date} onChange={handleChange} required />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default QuestionnaireForm;
