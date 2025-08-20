// API Service Layer
// This file contains functions for making API calls

/**
 * Base API configuration
 */
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

/**
 * Generic API request handler
 * @param {string} endpoint - API endpoint
 * @param {Object} options - Fetch options
 * @returns {Promise} API response
 */
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    ...options
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Request failed:', error);
    throw error;
  }
};

/**
 * Contact form submission
 * @param {Object} formData - Contact form data
 * @returns {Promise} Submission response
 */
export const submitContactForm = async (formData) => {
  return apiRequest('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData)
  });
};

/**
 * Job application submission
 * @param {Object} applicationData - Job application data
 * @returns {Promise} Submission response
 */
export const submitJobApplication = async (applicationData) => {
  return apiRequest('/api/jobs/apply', {
    method: 'POST',
    body: JSON.stringify(applicationData)
  });
};

/**
 * Get job listings
 * @returns {Promise} Job listings
 */
export const getJobListings = async () => {
  return apiRequest('/api/jobs');
};

/**
 * Newsletter subscription
 * @param {string} email - Email address
 * @returns {Promise} Subscription response
 */
export const subscribeNewsletter = async (email) => {
  return apiRequest('/api/newsletter/subscribe', {
    method: 'POST',
    body: JSON.stringify({ email })
  });
};