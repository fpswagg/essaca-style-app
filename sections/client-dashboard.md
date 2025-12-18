# Client Dashboard

## Overview

The Client Dashboard is the main interface for applicants (clients) to view and manage their application. It provides a simplified view focused on the user's own application status and actions.

**File:** `app/[locale]/dashboard/client/page.tsx`

---

## Table of Contents

1. [Access Control](#access-control)
2. [Dashboard Layout](#dashboard-layout)
3. [Application Display](#application-display)
4. [Features](#features)
5. [Redirect Logic](#redirect-logic)

---

## Access Control

### Role Requirement
- **Required Role:** `client`
- **Authorization:** Uses `requireRole(['client'], locale)`
- **Redirect:** Unauthorized users are redirected to appropriate pages

### User Information
- Displays welcome message with user's first name or email
- Shows personalized greeting

---

## Dashboard Layout

### Header Section
- **Title:** "Dashboard" (localized)
- **Welcome Message:** Personalized greeting

---

## Application Display

### Application Card

The dashboard displays the user's application in a single card with:

1. **Application Number**
   - First 8 characters of application ID
   - Format: "Application #XXXXXXXX"
   - Displayed as card title

2. **Status Display**
   - Current application status
   - Localized status text
   - Format: "Status: [Status Name]"

3. **Application Details**
   - **First Year Status:** Yes/No (localized)
   - **Submission Date:** Formatted date or "Not Submitted"
   - Displayed in muted text

4. **Action Button**
   - "View Details" button
   - Links to application detail page (`/application/[id]`)
   - Full-width button

### Card Structure
```tsx
<Card>
  <CardHeader>
    <CardTitle>Application Number</CardTitle>
    <CardDescription>Status</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Details and Actions */}
  </CardContent>
</Card>
```

---

## Redirect Logic

### No Application Found

If the user doesn't have an application:
- **Action:** Redirects to `/application/new`
- **Purpose:** Guides user to create their first application
- **Prevents:** Empty dashboard state

### Application Exists

If application is found:
- **Action:** Displays application card
- **Shows:** Current status and details
- **Provides:** Link to full application view

### Data Fetching
```typescript
const application = await prisma.application.findFirst({
  where: {
    profileId: user.profile.id,
  },
  include: {
    files: true,
    payments: true,
    testResults: true,
  },
  orderBy: {
    createdAt: 'desc',
  },
});
```

**Note:** Fetches the most recent application if multiple exist.

---

## Features

### Simplified Interface
- Focus on user's own application
- No overwhelming statistics
- Clear status visibility

### Quick Access
- One-click access to application details
- Direct link to application management

### Status Awareness
- Clear status display
- Status indicators
- Localized status text

### Application Information
- Shows key application details
- Submission status
- First year application indicator

### Responsive Design
- Mobile-first approach
- Adaptive container width
- Touch-friendly buttons

---

## Status Display

### Status Types
1. **Draft** - Application not yet submitted
2. **Submitted** - Application submitted, awaiting review
3. **Under Review** - Application being reviewed
4. **Approved** - Application approved
5. **Rejected** - Application rejected

### Status Translation
- Uses `getApplicationStatusTranslationKey()` helper
- Localized status names
- Consistent with other pages

---

## User Flow

1. **User Logs In**
   - Authenticated as client
   - Redirected to client dashboard

2. **Application Check**
   - System checks for existing application
   - If none → Redirect to create application
   - If exists → Display application card

3. **View Details**
   - User clicks "View Details"
   - Navigates to application detail page
   - Can view/edit application

4. **Status Updates**
   - Status changes reflected on refresh
   - Real-time status display

---

## Related Components

### Status Helper
- `getApplicationStatusTranslationKey()` - Status translation
- Consistent status display across app

### Dashboard Helper
- `getDashboardHref()` - Role-based routing
- Consistent navigation logic

### Application Detail Page
- Linked from dashboard
- Full application management

---

## Best Practices

1. **Always check for application existence**
2. **Redirect to creation if no application**
3. **Show clear status information**
4. **Provide easy navigation**
5. **Handle edge cases (multiple applications)**
6. **Use responsive layouts**
7. **Localize all text**
8. **Optimize data fetching**

---

## File Structure

```
app/[locale]/dashboard/client/
  page.tsx                      # Client dashboard page

lib/
  auth/
    require-role.ts             # Role checking
    dashboard-helper.ts          # Dashboard routing
  i18n/
    status-helper.ts             # Status translations
```

---

## Comparison with Admin Dashboard

| Feature | Client Dashboard | Admin Dashboard |
|---------|-----------------|-----------------|
| **Focus** | Single application | All applications |
| **Statistics** | None | 6 statistics cards |
| **Management Links** | None | 7 management links |
| **Application List** | Single card | Grid of cards |
| **Container Width** | Smaller | Larger |
| **Complexity** | Simple | Comprehensive |

---

## Summary

The Client Dashboard provides:
- ✅ Focused view of user's application
- ✅ Clear status display
- ✅ Quick access to application details
- ✅ Automatic redirect to creation if needed
- ✅ Role-based access control
- ✅ Responsive design
- ✅ Internationalization support
- ✅ Simplified user experience
