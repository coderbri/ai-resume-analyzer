# Changelog
A roadmap to track the progress of **Resumind — AI Resume Analyzer** app.

<!-- ## v0.6.0 - ...
**Release Date**: January 10, 2026

--- -->

## v0.5.0 - PDF-Image Conversion & AI Feedback
**Release Date**: January 10, 2026

- Implemented end-to-end resume analysis workflow in `Upload` page with `handleAnalyze` function processing form submissions
- Added comprehensive error handling with status messages for each processing stage (file upload, PDF conversion, image upload, AI analysis)
- Integrated PDF-to-image conversion using `convertPdfToImage` utility to transform uploaded PDFs into PNG images for AI processing
- Implemented file upload to Puter Storage for both original PDF files and converted image files
- Created data persistence layer using Puter key-value store to save resume metadata, file paths, and AI feedback with UUID-based keys
- Integrated AI feedback generation using Puter's AI service with Claude Sonnet 4 model for resume analysis
- Created `prepareInstructions` function in `constants/index.ts` that generates contextual AI prompts incorporating job title and job description
- Defined `AIResponseFormat` constant specifying structured feedback format with scores and tips for ATS, tone/style, content, structure, and skills categories
- Implemented UUID generation using `generateUUID` utility to create unique identifiers for each resume analysis session
- Added navigation flow redirecting users to `/resume/${uuid}` route upon successful analysis completion

---

## v0.4.0 - Upload Form & File Uploader Component
**Release Date**: January 9, 2026

- Added `/upload` route to `app/routes.ts` pointing to `routes/upload.tsx` for the resume upload page
- Integrated **react-dropzone** library for robust file upload functionality with drag-and-drop support
- Implemented `Upload` page component with a comprehensive form for resume analysis submission
- Created form fields for company name, job title, and job description to capture job-specific context
- Integrated form submission handler that collects all form data and selected file (ready for AI integration)
- Added processing state management with `isProcessing` and `statusText` for future loading states
- Built reusable `FileUploader` component (`app/components/FileUploader.tsx`) using react-dropzone library
- Implemented drag-and-drop and click-to-upload functionality for PDF files
- Configured file upload restrictions: PDF-only file type acceptance and 20MB maximum file size limit
- Added visual file selection feedback showing selected file name and formatted file size
- Implemented file removal functionality allowing users to clear selected files before submission
- Created PDF conversion utility (`app/lib/pdf2img.ts`) using pdfjs-dist for converting PDF pages to PNG images
- Implemented lazy loading of PDF.js library with worker configuration for efficient PDF processing
- Added utility functions (`app/lib/utils.ts`) including `formatSize` for human-readable file size formatting (Bytes, KB, MB, GB)
- Added `cn` utility function for merging Tailwind CSS class names using clsx and tailwind-merge
- Added `generateUUID` utility function for generating unique identifiers
- Established frontend upload infrastructure ready for integration with Puter storage and AI services

---

## v0.3.1 - Authentication & Puter.js Backend Integration (Frontend)

**Release Date**: January 9, 2026

Defined dedicated authentication route (`/auth`) in `app/routes.ts` pointing to `routes/auth.tsx`
- Implemented `Auth` page backed by `usePuterStore` to surface Puter authentication state (`isLoading`, `auth`)
- Added conditional UI that:
  - Shows a pulsing “Signing you in…” state while authentication checks are running
  - Swaps between **Log In** and **Log Out** based on `auth.isAuthenticated`
- Implemented redirect flow using `useLocation`, `useNavigate`, and a `next` query parameter so users are returned to their intended route after logging in
- Protected the home route by redirecting unauthenticated users to `/auth?next=/` using `useEffect` in `home.tsx`
- Fixed the loading-state bug by calling `init()` from `usePuterStore` in `root.tsx` on app load, ensuring Puter is initialized and `isLoading` resolves correctly
- Completed end‑to‑end frontend authentication flow so Puter login/logout and protected routes now work seamlessly

---

## v0.3.0 - Authentication & Puter.js Backend Integration (Backend)
**Release Date**: January 8, 2026

- Integrated Puter.js SDK as serverless backend platform for authentication, storage, and AI services
- Added Puter.js script to root layout for global API access throughout the application
- Created Zustand store wrapper (app/lib/puter.ts) to abstract Puter.js API interactions
- Implemented authentication state management with sign in, sign out, and user data tracking
- Wrapped Puter.js file system operations for resume storage (upload, read, write, delete, list)
- Integrated Puter.js AI services for chat, image-to-text, and file-based feedback functionality
- Added key-value storage operations for application data persistence
- Defined comprehensive TypeScript type declarations (types/puter.d.ts) for Puter.js interfaces
- Extended Window interface with Puter.js API structure for type safety
- Established backend foundation enabling resume storage and AI-powered analysis

---

## v0.2.0 - Homepage, Navbar & Resume Card
**Release Date**: January 4, 2026

- Replaced default Vite boilerplate homepage with a custom landing page layout
- Updated route metadata to reflect application branding and description
- Implemented a reusable Navbar component with primary navigation
- Designed and rendered a dynamic homepage hero section
- Created mock resume data to simulate backend and AI-generated responses
- Defined global TypeScript interfaces for resumes and AI feedback structures
- Built reusable ResumeCard components to display resume previews and scores
- Implemented an SVG-based ScoreCircle component to visualize resume ratings
- Dynamically rendered resume cards using conditional rendering and mapping
- Established a scalable frontend structure in preparation for backend and AI integration

---

## v0.1.0 - Project Setup  
**Release Date**: January 3, 2026

- Initialized project using Vite with React and React Router v7
- Established core project structure and configuration files
- Configured Vite with Tailwind CSS, React Router, and TypeScript path aliases
- Reviewed and documented application architecture and file responsibilities
- Installed foundational dependencies for UI styling, state management, animations, and PDF parsing
- Planned initial UI/UX and imported base styling assets
- Prepared project for containerization and version control
- Completed initial GitHub commit, establishing a stable development baseline

---

<section align="center">
  <code>coderBri © 2026</code>
</section>