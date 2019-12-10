import express, { Router } from 'express';
import { graphQLRouter } from './graphql.server';
import apiRouter from './api.router';

const router = Router();

// Middlewares
router.use(express.json());

// API routes
router.use('/api', apiRouter);
router.use('/graphql', graphQLRouter);

export default router;
