# Management Pages Overview

## Overview

The management pages provide administrative interfaces for managing various aspects of the ESSACA application system. These pages are accessible to staff and admin users.

---

## Available Management Pages

1. [Users Management](#users-management)
2. [Applications Management](#applications-management)
3. [Files Management](#files-management)
4. [Payments Management](#payments-management)
5. [Test Results Management](#test-results-management)
6. [Interviews Management](#interviews-management)
7. [Search Candidates](#search-candidates)

---

## Common Features

All management pages share common features:

### Access Control
- **Required Roles:** `admin` or `staff`
- **Authorization:** Uses `requireRole(['admin', 'staff'], locale)`
- **Exception:** Users Management is admin-only

### Page Structure
- Back button to dashboard
- Page header with title and description
- Main content area
- Error handling

### Layout
- Consistent layout
- Responsive design
- Internationalization
- Error display

---

## Users Management

**File:** `app/[locale]/dashboard/admin/users/page.tsx`

### Access
- **Admin Only:** Requires `admin` role
- **Staff:** Cannot access

### Features
- View all user profiles
- Update user roles
- Delete users
- User management table

### Components
- `UserManagementTable` - Main table component

---

## Applications Management

**File:** `app/[locale]/dashboard/admin/applications/page.tsx`

### Access
- **Admin:** Full access
- **Staff:** Full access

### Features
- View all applications
- Filter applications
- Search applications
- View application details

### Components
- `FilteredApplicationsList` - Filtered list component

---

## Files Management

**File:** `app/[locale]/dashboard/admin/files/page.tsx`

### Access
- **Admin:** Full access
- **Staff:** Full access

### Features
- View all uploaded files
- Filter files by type
- View file details
- Show user information

### Components
- `FilteredFilesList` - Filtered list component

---

## Payments Management

**File:** `app/[locale]/dashboard/admin/payments/page.tsx`

### Access
- **Admin:** Full access
- **Staff:** Full access

### Features
- View all payments
- Create new payments
- Update payments
- Delete payments
- Filter by status

### Components
- `PaymentsTable` - Payment management table
- `PaymentFormDialog` - Create/Edit dialog

---

## Test Results Management

**File:** `app/[locale]/dashboard/admin/test-results/page.tsx`

### Access
- **Admin:** Full access
- **Staff:** Full access

### Features
- View all test results
- Create new test results
- Update test results
- Delete test results
- Link to applications

### Components
- `TestResultsTable` - Test results table
- `TestResultFormDialog` - Create/Edit dialog

---

## Interviews Management

**File:** `app/[locale]/dashboard/admin/interviews/page.tsx`

### Access
- **Admin:** Full access
- **Staff:** Full access

### Features
- View all interviews
- Filter interviews
- Manage interview schedules

### Components
- `FilteredInterviewsList` - Filtered list component

---

## Search Candidates

**File:** `app/[locale]/dashboard/admin/search/page.tsx`

### Access
- **Admin:** Full access
- **Staff:** Full access

### Features
- Search approved candidates
- Advanced search filters
- View candidate details

### Components
- `SearchCandidatesForm` - Search form component

---

## Common Patterns

### Page Layout
- Container with max-width
- Back button navigation
- Page header with title and description
- Main content area

### Error Handling
- Displays error in card
- Shows error message
- Allows user to retry

### Data Fetching
- Server-side data fetching
- Error handling
- Loading states

---

## File Structure

```
app/[locale]/dashboard/admin/
  users/
    page.tsx                    # Users management
  applications/
    page.tsx                    # Applications management
  files/
    page.tsx                    # Files management
  payments/
    page.tsx                    # Payments management
  test-results/
    page.tsx                    # Test results management
  interviews/
    page.tsx                    # Interviews management
  search/
    page.tsx                    # Search candidates

components/admin/
  user-management-table.tsx     # Users table
  filtered-applications-list.tsx  # Applications list
  filtered-files-list.tsx       # Files list
  payments-table.tsx            # Payments table
  test-results-table.tsx        # Test results table
  filtered-interviews-list.tsx  # Interviews list
  search-candidates-form.tsx    # Search form
```

---

## Summary

Management pages provide:
- ✅ Comprehensive administrative interfaces
- ✅ Role-based access control
- ✅ CRUD operations where applicable
- ✅ Filtering and search capabilities
- ✅ Consistent UI/UX
- ✅ Error handling
- ✅ Responsive design
- ✅ Internationalization support
