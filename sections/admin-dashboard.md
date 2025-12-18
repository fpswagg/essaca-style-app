# Admin Dashboard

## Overview

The Admin Dashboard is the central hub for administrators to manage all aspects of the ESSACA application system. It provides comprehensive statistics, quick access to management pages, and an overview of all applications.

**File:** `app/[locale]/dashboard/admin/page.tsx`

---

## Table of Contents

1. [Access Control](#access-control)
2. [Dashboard Layout](#dashboard-layout)
3. [Management Links](#management-links)
4. [Statistics Section](#statistics-section)
5. [Applications Overview](#applications-overview)
6. [Features](#features)

---

## Access Control

### Role Requirement
- **Required Role:** `admin`
- **Authorization:** Uses `requireRole(['admin'], locale)`
- **Redirect:** Unauthorized users are redirected to appropriate pages

### User Information
- Displays welcome message with user's first name or email
- Shows current user context

---

## Dashboard Layout

### Header Section
- **Title:** "Dashboard - Admin" (localized)
- **Welcome Message:** Personalized greeting

---

## Management Links

The dashboard provides quick access cards to all management sections:

### Available Management Sections

1. **Users Management** (`/dashboard/admin/users`)
   - Manage all user accounts
   - Update user roles
   - Delete users

2. **Applications Management** (`/dashboard/admin/applications`)
   - View all applications
   - Filter and search applications
   - Manage application statuses

3. **Files Management** (`/dashboard/admin/files`)
   - View all uploaded files
   - Manage file access
   - Filter files by type

4. **Payments Management** (`/dashboard/admin/payments`)
   - View all payments
   - Create/update/delete payments
   - Filter by status

5. **Test Results Management** (`/dashboard/admin/test-results`)
   - Manage test results
   - Create/update test results
   - Link to applications

6. **Search Approved Candidates** (`/dashboard/admin/search`)
   - Search for approved candidates
   - Advanced search filters

7. **Interviews Management** (`/dashboard/admin/interviews`)
   - Manage interview schedules
   - View interview history

### Link Card Layout
- Grid layout (1 column mobile, 2 columns tablet, 3 columns desktop)
- Hover effects for interactivity

---

## Statistics Section

### Overview Cards
Displays 6 key statistics in a responsive grid:

1. **Total Applications**
   - Count of all applications
   - Label: "Total" (localized)

2. **Draft Applications**
   - Applications in draft status
   - Label: "Draft" (localized)

3. **Submitted Applications**
   - Applications that have been submitted
   - Label: "Submitted" (localized)

4. **Under Review Applications**
   - Applications currently being reviewed
   - Label: "Under Review" (localized)

5. **Approved Applications**
   - Successfully approved applications
   - Label: "Approved" (localized)

6. **Rejected Applications**
   - Applications that were rejected
   - Label: "Rejected" (localized)

### Statistics Calculation
```typescript
const stats = {
  total: applications.length,
  draft: applications.filter((a) => a.status === 'draft').length,
  submitted: applications.filter((a) => a.status === 'submitted').length,
  underReview: applications.filter((a) => a.status === 'under_review').length,
  approved: applications.filter((a) => a.status === 'approved').length,
  rejected: applications.filter((a) => a.status === 'rejected').length,
};
```

### Card Layout
- Responsive grid (2 columns mobile, 3 columns tablet, 6 columns desktop)
- Content: Large number + descriptive label

---

## Applications Overview

### Applications List

Displays all applications in a card grid layout.

### Empty State
When no applications exist:
- Shows message: "No Applications"
- Description: "No applications to review"

### Application Cards

Each application card displays:

1. **Application Number**
   - First 8 characters of application ID
   - Format: "Application #XXXXXXXX"

2. **Status**
   - Current application status
   - Localized status text

3. **Applicant Information**
   - Full name (firstName + lastName)
   - Email address
   - Displayed in smaller text

4. **Application Details**
   - First Year status (Yes/No)
   - Submission date (if submitted)
   - "Not Submitted" if not yet submitted

5. **Action Button**
   - "View Details" button
   - Links to application detail page

### Card Layout
- Grid: 1 column mobile, 2 columns tablet, 3 columns desktop
- Hover effect for interactivity

### Data Fetching
```typescript
const applications = await prisma.application.findMany({
  include: {
    profile: {
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
      },
    },
    files: true,
  },
  orderBy: {
    createdAt: 'desc',
  },
});
```

---

## Features

### Real-Time Statistics
- Statistics calculated from current database state
- Updates on page refresh
- Accurate counts for each status

### Quick Navigation
- One-click access to all management sections
- Intuitive card-based navigation
- Clear section descriptions

### Application Overview
- See all applications at a glance
- Quick access to application details
- Status-based filtering (via statistics)

### Responsive Design
- Mobile-first approach
- Adaptive grid layouts
- Touch-friendly interactions

### Internationalization
- All text localized
- Status translations
- Role translations

---

## Data Flow

1. **Page Load**
   - Check user authentication and role
   - Fetch all applications from database
   - Calculate statistics
   - Render dashboard

2. **User Interaction**
   - Click management link → Navigate to management page
   - Click application card → Navigate to application detail
   - View statistics → See current counts

3. **Data Updates**
   - Statistics update on page refresh
   - Application list reflects current state
   - Real-time data from database

---

## Related Components

### Back Navigation
- Uses `BackButton` component (if needed)
- Links back to dashboard

### Status Translation
- Uses `getApplicationStatusTranslationKey()` helper
- Localized status display

### Dashboard Helper
- Uses `getDashboardHref()` for role-based navigation
- Consistent routing logic

---

## Best Practices

1. **Always check role before rendering**
2. **Handle empty states gracefully**
3. **Provide clear navigation paths**
4. **Show accurate statistics**
5. **Use responsive layouts**
6. **Localize all user-facing text**
7. **Optimize data fetching**
8. **Handle loading states**

---

## File Structure

```
app/[locale]/dashboard/admin/
  page.tsx                      # Admin dashboard page

components/
  (various management components)

lib/
  auth/
    require-role.ts             # Role checking
    dashboard-helper.ts         # Dashboard routing
  i18n/
    status-helper.ts            # Status translations
```

---

## Summary

The Admin Dashboard provides:
- ✅ Comprehensive system overview
- ✅ Quick access to all management sections
- ✅ Real-time statistics
- ✅ Application overview with quick access
- ✅ Role-based access control
- ✅ Responsive design
- ✅ Internationalization support
- ✅ Clear navigation structure
