import { Document, Operation, DemoUser } from './types';

// Helper to generate ISO date strings
const now = new Date();
const oneMonthAgo = new Date(now.setMonth(now.getMonth() - 1)).toISOString();
const twoMonthsAgo = new Date(now.setMonth(now.getMonth() - 1)).toISOString();
const threeMonthsAgo = new Date(now.setMonth(now.getMonth() - 1)).toISOString();
const fourMonthsAgo = new Date(now.setMonth(now.getMonth() - 1)).toISOString();
const fiveMonthsAgo = new Date(now.setMonth(now.getMonth() - 1)).toISOString();
const sixMonthsAgo = new Date(now.setMonth(now.getMonth() - 1)).toISOString();
const currentMonth = new Date().toISOString();
const yesterday = new Date(Date.now() - 86400000).toISOString();
const twoDaysAgo = new Date(Date.now() - 2 * 86400000).toISOString();
const threeDaysAgo = new Date(Date.now() - 3 * 86400000).toISOString();
const fourDaysAgo = new Date(Date.now() - 4 * 86400000).toISOString();
const fiveDaysAgo = new Date(Date.now() - 5 * 86400000).toISOString();
const sevenDaysAgo = new Date(Date.now() - 7 * 86400000).toISOString();


export const DEMO_USER: DemoUser = {
  id: 'user-2f74c8',
  name: 'Marcus Webb',
  email: 'marcus.webb@example.com',
  role: 'Technical Writer',
  plan: 'Pro',
  avatar: 'MW',
  joinedAt: sixMonthsAgo,
};

export const MOCK_DOCUMENTS: Document[] = [
  {
    id: 'doc-8e1f2b',
    title: 'Q3 Security Audit Report Draft',
    content: 'The Q3 security audit identified several critical vulnerabilities in the legacy authentication module. Remediation plans are in progress with a target completion date of October 31st...',
    status: 'active',
    createdAt: fourMonthsAgo,
    updatedAt: yesterday,
  },
  {
    id: 'doc-4d6c7a',
    title: 'ManusAI Release Notes v1.1.0',
    content: 'This release includes performance optimizations for summarization, a new "formal tone" rephrasing option, and minor UI improvements for document management...',
    status: 'active',
    createdAt: twoMonthsAgo,
    updatedAt: twoDaysAgo,
  },
  {
    id: 'doc-1b9e0c',
    title: 'Internal API Documentation Overview',
    content: 'The internal API serves as the backbone for inter-service communication. This document outlines the core endpoints, data models, and authentication mechanisms...',
    status: 'active',
    createdAt: sixMonthsAgo,
    updatedAt: threeDaysAgo,
  },
  {
    id: 'doc-7f3h5g',
    title: 'Project Phoenix - Phase 2 Proposal',
    content: 'Phase 2 of Project Phoenix focuses on extending our core AI capabilities to support advanced code generation. This requires integrating a specialized large language model locally...',
    status: 'archived',
    createdAt: fiveMonthsAgo,
    updatedAt: fiveDaysAgo,
  },
  {
    id: 'doc-2a8d9e',
    title: 'New Employee Onboarding Guide',
    content: 'Welcome to the team! This guide will walk you through setting up your development environment, understanding our code standards, and getting familiar with ManusAI workflows...',
    status: 'active',
    createdAt: oneMonthAgo,
    updatedAt: currentMonth,
  },
  {
    id: 'doc-0c5b6f',
    title: 'User Interface Component Library Guidelines',
    content: 'Our UI component library ensures consistency and reusability across all ManusAI desktop applications. This document details component usage, styling conventions, and accessibility considerations...',
    status: 'active',
    createdAt: threeMonthsAgo,
    updatedAt: fourDaysAgo,
  },
];

export const MOCK_OPERATIONS: Operation[] = [
  {
    id: 'op-1a2b3c',
    documentId: 'doc-8e1f2b',
    type: 'summarize',
    input: 'The Q3 security audit identified several critical vulnerabilities in the legacy authentication module...',
    output: 'Summary: Critical vulnerabilities found in legacy authentication module during Q3 audit; remediation planned by Oct 31st.',
    status: 'completed',
    createdAt: yesterday,
    updatedAt: yesterday,
  },
  {
    id: 'op-4d5e6f',
    documentId: 'doc-4d6c7a',
    type: 'rephrase',
    input: 'This release includes performance optimizations for summarization, a new "formal tone" rephrasing option, and minor UI improvements...',
    output: 'Version 1.1.0 of ManusAI introduces enhanced summarization efficiency, a refined formal rephrasing capability, and subtle user interface enhancements.',
    status: 'completed',
    createdAt: twoDaysAgo,
    updatedAt: twoDaysAgo,
  },
  {
    id: 'op-7g8h9i',
    documentId: 'doc-1b9e0c',
    type: 'generate',
    input: 'Generate a short introduction for our internal API documentation.',
    output: 'The internal API documentation provides a comprehensive guide to the core services and communication protocols that power ManusAI, enabling seamless inter-service operations.',
    status: 'completed',
    createdAt: threeDaysAgo,
    updatedAt: threeDaysAgo,
  },
  {
    id: 'op-0j1k2l',
    documentId: 'doc-8e1f2b',
    type: 'summarize',
    input: 'Remediation plans are in progress with a target completion date of October 31st...',
    output: 'Remediation efforts are underway, aiming for completion by October 31st.',
    status: 'pending',
    createdAt: fourDaysAgo,
    updatedAt: fourDaysAgo,
  },
  {
    id: 'op-3m4n5o',
    documentId: 'doc-2a8d9e',
    type: 'rephrase',
    input: 'Welcome to the team! This guide will walk you through setting up your development environment, understanding our code standards, and getting familiar with ManusAI workflows...',
    output: 'A warm welcome to our new team members! This guide facilitates the setup of your development environment, familiarization with our code standards, and integration into ManusAI workflows.',
    status: 'completed',
    createdAt: currentMonth,
    updatedAt: currentMonth,
  },
  {
    id: 'op-6p7q8r',
    documentId: 'doc-0c5b6f',
    type: 'generate',
    input: 'Generate a call to action for adhering to UI component library guidelines.',
    output: 'Ensure consistency and enhance user experience by rigorously adhering to the ManusAI UI Component Library Guidelines in all development efforts.',
    status: 'failed', // Example of a failed operation
    createdAt: fiveDaysAgo,
    updatedAt: fiveDaysAgo,
  },
];

export const STATS = {
  totalLocalOperations: '2,145',
  successfulOperationsRate: '+12.5%',
  documentsProcessed: '342',
  avgResponseTime: '1.2s',
};

export const SPARKLINE_DATA: Record<string, number[]> = {
  totalLocalOperations: [210, 245, 220, 280, 260, 310],
  successfulOperationsRate: [88, 90, 89, 92, 91, 93],
  documentsProcessed: [20, 35, 30, 42, 38, 50],
  avgResponseTime: [1.5, 1.3, 1.4, 1.1, 1.2, 1.0], // Representing 1.5s down to 1.0s
};

export const CHART_DATA = {
  weekly: [42, 58, 51, 73, 88, 65, 79, 94], // Weekly operations count
  labels: ['Jan W1', 'Jan W2', 'Jan W3', 'Jan W4', 'Feb W1', 'Feb W2', 'Feb W3', 'Feb W4'],
  operationsValue: [182, 224, 198, 312, 285, 331, 298, 356], // Abstract 'value' generated per week
};

export const RECENT_ACTIVITY = [
  { id: 'act-1', action: 'Summarized "Q3 Security Audit Report"', user: 'Marcus Webb', avatar: 'MW', time: '5 minutes ago', type: 'summarize' as const },
  { id: 'act-2', action: 'Rephrased "ManusAI Release Notes" with formal tone', user: 'Marcus Webb', avatar: 'MW', time: '1 hour ago', type: 'rephrase' as const },
  { id: 'act-3', action: 'Generated API documentation intro for "Internal API Docs"', user: 'Marcus Webb', avatar: 'MW', time: '3 hours ago', type: 'generate' as const },
  { id: 'act-4', action: 'Created new document "New Employee Onboarding Guide"', user: 'Marcus Webb', avatar: 'MW', time: 'Yesterday', type: 'create' as const },
  { id: 'act-5', action: 'Attempted to generate CTA for UI Guidelines (failed)', user: 'Marcus Webb', avatar: 'MW', time: '2 days ago', type: 'generate' as const },
  { id: 'act-6', action: 'Archived "Project Phoenix - Phase 2 Proposal"', user: 'Marcus Webb', avatar: 'MW', time: '4 days ago', type: 'archive' as const },
];

export function getById<T extends { id: string }>(arr: T[], id: string): T | undefined {
  return arr.find(x => x.id === id);
}

export const metrics = [
  { id: 'pipeline', label: 'Pipeline Value', value: '$486K', change: '+18.4%', trend: 'up', detail: 'Expansion-ready value this quarter' },
  { id: 'cycle', label: 'Cycle Time', value: '2.1d', change: '-31%', trend: 'down', detail: 'Median time from intake to decision' },
]

export const records = [
  { id: 'rec_001', name: 'Primary workflow intake', customer: 'Current workspace', status: 'queued', owner: 'Operations', value: 82000, priority: 'high', confidence: 96, cycleTime: '1.8d', nextStep: 'Prepare owner-ready output', notes: 'Generated contract fallback preserved deploy compatibility.', createdAt: '2026-05-01' },
  { id: 'rec_002', name: 'Risk review queue', customer: 'Current workspace', status: 'in_review', owner: 'Revenue', value: 64000, priority: 'medium', confidence: 88, cycleTime: '2.4d', nextStep: 'Resolve missing evidence', notes: 'Canonical record shape supports dashboard and feature screens.', createdAt: '2026-05-03' },
  { id: 'rec_003', name: 'Client-ready package', customer: 'Current workspace', status: 'approved', owner: 'Success', value: 41000, priority: 'medium', confidence: 91, cycleTime: '2.0d', nextStep: 'Export report', notes: 'Workflow output is ready for buyer review.', createdAt: '2026-05-04' },
]

export const activity = [
  { id: 'evt_1', title: 'Workflow intake normalized', actor: 'NEXUS OS', timestamp: '2026-05-23T10:30:00Z', status: 'queued' },
  { id: 'evt_2', title: 'Deploy contract checked', actor: 'BUILD gate', timestamp: '2026-05-23T10:45:00Z', status: 'approved' },
]
