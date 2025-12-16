/**
 * Utility functions for handling responses
 */

/**
 * Creates a standardized success response
 * @param {Object} data - Response data
 * @param {string} message - Success message
 * @returns {Object} Standardized response object
 */
export function createSuccessResponse(data = null, message = 'Success') {
  return {
    success: true,
    message,
    data,
    timestamp: new Date().toISOString()
  };
}

/**
 * Creates a standardized error response
 * @param {string} message - Error message
 * @param {number} statusCode - HTTP status code
 * @returns {Object} Standardized error response object
 */
export function createErrorResponse(message = 'Error', statusCode = 500) {
  return {
    success: false,
    message,
    statusCode,
    timestamp: new Date().toISOString()
  };
}