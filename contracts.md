# API Contracts & Integration

## Overview
Current implementation is a focused Landing Page for "Prem Om Properties".
Primary interaction is direct communication via WhatsApp and Phone (Client-side routing).

## Frontend Structure
- **Framework**: React 18
- **Styling**: Tailwind CSS + Custom "Warm-AI" Design System
- **Animation**: Framer Motion
- **Icons**: Lucide React

## Backend Integration
### Current Status
- No active database interactions required for the landing page view.
- `GET /api/` - Health check (implemented).

### Future Roadmap (If form is added)
- `POST /api/leads`
    - Payload: `{ name: string, phone: string, requirements: string }`
    - Response: `{ success: true, id: string }`

## Mock Data
- **Testimonials/Features**: Hardcoded in `Features.jsx` and `About.jsx` for the MVP presentation.
