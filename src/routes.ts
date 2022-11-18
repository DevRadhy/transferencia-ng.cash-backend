import { Router } from 'express';

const router = Router();

// TODO: Create routes

/**
 * Login
 * 
 * @param {string} username - Must be unique and contain at least 3 characters.
 * @param {string} password - Must be at least 8 characters long and contain at least one number and one uppercase letter.
 * 
 * @returns {string} token - JWT token with 24h expiration.
 */
router.get("/login");

/**
 * Register
 * 
 * @param {string} username - Must be unique and contain at least 3 characters.
 * @param {string} password - Must be at least 8 characters long and contain at least one number and one uppercase letter.
 * 
 * Creates a new user with a base balance of R$ 100,00.
 */
router.post("/register");

/**
 * Get user balance
 * 
 * @param {string} token - JWT token.
 * 
 * @returns {number} balance - User balance.
 */
router.get("/balance");

/**
 * Cash out
 * 
 * @param {string} token - JWT token.
 * @param {string} destination - Destination account.
 * @param {number} amount - Amount to be cashed out.
 * 
 * @returns {number} balance - User balance.
 * 
 * @throws {Error} - If the user does not have enough balance.
 * @throws {Error} - If the destination account is invalid.
 * 
 * Creates a new transaction with the amount and destination account.
 */
router.post("/cash-out");

/**
 * Transaction
 * 
 * @param {string} token - JWT token.
 * 
 * @query {number} date - Filter transactions by date in milliseconds.
 * @query {string} type - Filter transactions by type (cash-in and cash-out).
 * 
 * @returns {Array} transactions - Array of transactions.
 */
router.get("/transaction");

export { router };