# Staff Dashboard

## Overview

The Staff Dashboard provides staff members with access to view and manage applications, similar to the admin dashboard but with a focus on application review and management tasks.

**File:** `app/[locale]/dashboard/staff/page.tsx`

---

## Table of Contents

1. [Access Control](#access-control)
2. [Dashboard Layout](#dashboard-layout)
3. [Management Links](#management-links)
4. [Applications List](#applications-list)
5. [Features](#features)
6. [Comparison with Admin Dashboard](#comparison-with-admin-dashboard)

---

## Access Control

### Role Requirement
- **Required Roles:** `staff` or `admin`
- **Authorization:** Uses `requireRole(['staff', 'admin'], locale)`
- **Note:** Admins can also access staff dashboard
- **Redirect:** Unauthorized users are redirected

### User Information
- Displays welcome message with user's first name or email
- Shows personalized greeting

---

## Dashboard Layout

### Header Section
- **Title:** "Dashboard - Staff" (localized)
- **Welcome Message:** Personalized greeting

---

## Management Links

The dashboard provides quick access cards to management sections:

### Available Management Sections

1. **Applications Management** (`/dashboard/admin/applications`)
   - View all applications
   - Filter and search applications
   - Manage application statuses

2. **Files Management** (`/dashboard/admin/files`)
   - View all uploaded files
   - Manage file access
   - Filter files by type

3. **Payments Management** (`/dashboard/admin/payments`)
   - View all payments
   - Create/update/delete payments
   - Filter by status

4. **Test Results Management** (`/dashboard/admin/test-results`)
   - Manage test results
   - Create/update test results
   - Link to applications

5. **Search Approved Candidates** (`/dashboard/admin/search`)
   - Search for approved candidates
   - Advanced search filters

6. **Interviews Management** (`/dashboard/admin/interviews`)
   - Manage interview schedules
   - View interview history

### Link Card Layout
- Grid layout (1 column mobile, 2 columns tablet, 3 columns desktop)
- Hover effects for interactivity

**Note:** Staff dashboard does NOT include "Users Management" link (admin-only feature).

---

## Applications List

### Section Header
- **Title:** "All Applications" (localized)

### Applications Display

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

### Application Review Focus
- Primary focus on application management
- Quick access to review applications
- Status-based visibility

### Management Access
- Access to most management sections
- Excludes user management (admin-only)
- Full application management capabilities

### Quick Navigation
- One-click access to management sections
- Intuitive card-based navigation
- Clear section descriptions

### Application Overview
- See all applications at a glance
- Quick access to application details
- Status-based information

### Responsive Design
- Mobile-first approach
- Adaptive grid layouts
- Touch-friendly interactions

### Internationalization
- All text localized
- Status translations
- Role translations

---

## Comparison with Admin Dashboard

| Feature | Staff Dashboard | Admin Dashboard |
|---------|----------------|-----------------|
| **Statistics** | ❌ None | ✅ 6 statistics cards |
| **Management Links** | ✅ 6 links | ✅ 7 links (includes Users) |
| **Applications List** | ✅ Full list | ✅ Full list |
| **User Management** | ❌ No access | ✅ Full access |
| **Focus** | Application review | System management |

### Key Differences

1. **No Statistics Section**
   - Staff dashboard focuses on applications
   - No statistics overview cards

2. **No Users Management**
   - Staff cannot manage user accounts
   - Admin-only feature

3. **Same Application Access**
   - Both can view all applications
   - Both can manage application statuses

4. **Same Management Sections**
   - Applications, Files, Payments, Test Results, Search, Interviews
   - Shared management capabilities

---

## Data Flow

1. **Page Load**
   - Check user authentication and role
   - Fetch all applications from database
   - Render dashboard

2. **User Interaction**
   - Click management link → Navigate to management page
   - Click application card → Navigate to application detail
   - View applications → See current list

3. **Data Updates**
   - Application list reflects current state
   - Real-time data from database

---

## Related Components

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
4. **Show application information clearly**
5. **Use responsive layouts**
6. **Localize all user-facing text**
7. **Optimize data fetching**
8. **Respect role-based permissions**

---

## File Structure

```
app/[locale]/dashboard/staff/
  page.tsx                      # Staff dashboard page

lib/
  auth/
    require-role.ts             # Role checking
    dashboard-helper.ts         # Dashboard routing
  i18n/
    status-helper.ts            # Status translations
```

---

## Summary

The Staff Dashboard provides:
- ✅ Application review focus
- ✅ Quick access to management sections
- ✅ Full applications list
- ✅ Application management capabilities
- ✅ Role-based access control (staff/admin)
- ✅ Responsive design
- ✅ Internationalization support
- ✅ Clear navigation structure
- ✅ No user management (admin-only)
- ✅ No statistics (focused on applications)
