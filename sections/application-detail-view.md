# Application Detail View

## Overview

The Application Detail View provides a comprehensive interface for viewing and editing application information. It supports different views and editing capabilities based on user roles and application status.

**File:** `app/[locale]/application/[id]/page.tsx`

---

## Table of Contents

1. [Access Control](#access-control)
2. [Page Layout](#page-layout)
3. [Application Information Display](#application-information-display)
4. [File Management](#file-management)
5. [Role-Based Actions](#role-based-actions)
6. [Edit Mode](#edit-mode)
7. [Status-Based UI](#status-based-ui)

---

## Access Control

### Authorization Rules

**Clients:**
- Can only view their own applications
- Redirected if trying to access another user's application

**Staff/Admin:**
- Can view all applications
- Full access to all features

### Edit Permissions

**Clients:**
- Can edit only when status is `'draft'`
- Cannot edit after submission

**Staff/Admin:**
- Can edit when status is NOT `'approved'`
- Can edit: draft, submitted, under_review, rejected
- Cannot edit approved applications

---

## Page Layout

### Layout Grid
- **Main Content:** 2/3 width
- **Sidebar:** 1/3 width
- **Responsive:** Stacks on mobile

---

## Application Information Display

### Comprehensive Application Detail View

**File:** `components/application/comprehensive-application-detail-view.tsx`

### Display Mode

Shows application information in organized sections:

#### 1. CANDIDAT Section (Candidate Information)
- Last Name
- First Name
- Address
- Email
- Landline Phone
- Mobile Phone
- Date of Birth
- Gender
- Birth City
- Postal Code
- Nationality
- Recruitment Source

#### 2. CURSUS SCOLAIRE Section (Academic History)
- Last Class Attended
- Last School Attended
- Previous Diplomas

#### 3. Additional Sections (if data exists)
- Father/Guardian Information (hidden in UI, data exists)
- Mother Information (hidden in UI, data exists)
- Emergency Contact (hidden in UI, data exists)
- Motivation (if exists)

### Section Display
- **Empty State:** Shows "Section Empty" message if no data
- **Field Display:** Label + Value format
- **Responsive:** Grid layout adapts to screen size

---

## File Management

### File Manager Component

**File:** `components/application/file-manager.tsx`

### Features

1. **File List Display**
   - Shows all uploaded files
   - File type, name, size, upload date
   - Download links
   - Delete functionality (if not read-only)

2. **Required Documents List**
   - BACC or GCE
   - Birth Certificate
   - Motivation Letter
   - Exam Fee Receipt
   - Additional Documents

3. **File Upload** (if not read-only)
   - File type selection dropdown
   - File input with accept types
   - File size validation (10MB max)
   - Upload progress

4. **Read-Only Mode**
   - No upload capability
   - View-only file list
   - Message explaining read-only status

### File Types
- Identity Document
- Diploma
- Transcript
- Photo
- Medical Certificate
- Other

### File Operations
- **Upload:** Upload new files
- **Download:** Download existing files
- **Delete:** Delete files (if editable)

---

## Role-Based Actions

### Author Info Card (Staff/Admin Only)

Displays applicant information:
- Author Name (firstName + lastName or email)
- Author Email
- Author Phone (if available)

### Actions Card

Contains role-specific action buttons and status displays.

---

## Client Actions

### Draft Status
- **Submit Application Form** - Allows submission
- **Delete Button** - Delete application

### Submitted Status
- **Status Message:** Info box
- **Submission Date:** Displayed
- **Message:** "Your application has been submitted"

### Under Review Status
- **Status Message:** Info box
- **Message:** "Your application is under review"

### Approved Status
- **Status Message:** Info box
- **Message:** "Your application has been approved"
- **Read-Only:** Application becomes read-only

### Rejected Status
- **Status Message:** Info box
- **Rejection Reason:** Displayed
- **Message:** Shows why application was rejected

---

## Staff/Admin Actions

### Submitted/Under Review Status
- **Staff Actions Component** - Approve/Reject buttons
- **Rejection Message Input** - Required for rejection

### Approved Status
- **Status Message:** Info box
- **Review Date:** Displayed
- **Read-Only:** Application is read-only

### Rejected Status
- **Status Message:** Info box
- **Rejection Reason:** Displayed
- **Review Date:** Displayed

### Draft Status
- **Status Message:** Info box
- **Message:** "Waiting for submission"

---

## Edit Mode

### Edit Button
- Appears when application is editable
- Located at top-right of form
- Triggers edit mode

### Edit Form

When in edit mode, all fields become editable:

1. **Input Fields**
   - Text inputs for all text fields
   - Date inputs for dates
   - Select dropdowns for options

2. **Form Layout**
   - Same section structure as display
   - Editable inputs instead of text
   - Save/Cancel buttons

3. **Save Functionality**
   - Calls `updateApplication()` server action
   - Shows toast notification
   - Refreshes page on success
   - Handles errors

4. **Cancel Functionality**
   - Exits edit mode
   - Discards changes
   - Returns to display mode

### Edit Restrictions
- Only editable when status allows
- Validation on save
- Server-side validation

---

## Status-Based UI

### Status Display
- **Location:** Page header
- **Format:** "Status: [Status Name]"
- **Localized:** Translated status names

### Status Types
- **Draft:** Default styling
- **Submitted:** Info styling
- **Under Review:** Info styling
- **Approved:** Success styling
- **Rejected:** Error styling

### Status Messages
Each status has appropriate UI:
- Info boxes with status-specific styling
- Action buttons when applicable
- Read-only indicators when needed

---

## Staff Actions Component

**File:** `components/application/staff-actions.tsx`

### Features

1. **Approve Button**
   - Confirmation dialog
   - Updates status to 'approved'
   - Refreshes page

2. **Reject Button**
   - Two-step process:
     - First: Shows rejection message input
     - Second: Confirms rejection
   - Requires rejection message
   - Updates status to 'rejected'

3. **Confirmation Dialogs**
   - Uses `ConfirmDialog` component
   - Clear confirmation messages
   - Cancel option

### Rejection Flow
1. Click "Reject" button
2. Enter rejection message (required)
3. Click "Confirm Reject"
4. Application status updated
5. Page refreshed

---

## Submit Application Form

**File:** `components/application/submit-application-form.tsx`

### Features
- Simple submit button
- Confirmation on click
- Updates status to 'submitted'
- Sets submission date
- Refreshes page

### Validation
- Checks if application is complete
- Validates required fields
- Server-side validation

---

## Delete Application Button

**File:** `components/application/delete-application-button.tsx`

### Features
- Confirmation dialog
- Deletes application
- Redirects to dashboard
- Only available when editable

---

## Comprehensive Application Detail View Component

### Display Mode Features
- **Section Wrappers:** Organized sections with headers
- **Detail Items:** Label + Value display
- **Empty States:** Handles missing data gracefully
- **Responsive:** Adapts to screen size

### Edit Mode Features
- **Form Inputs:** All fields editable
- **Validation:** Real-time validation
- **Save/Cancel:** Clear action buttons
- **Loading States:** Shows during save

### State Management
- `editMode`: Boolean - Controls edit/display mode
- `loading`: Boolean - Loading state
- `formData`: Object - Form data state

---

## Data Flow

1. **Page Load**
   - Fetch application data
   - Check permissions
   - Determine editability
   - Render appropriate view

2. **User Actions**
   - View: Display mode
   - Edit: Enter edit mode
   - Save: Update application
   - Submit: Submit application
   - Approve/Reject: Update status

3. **Status Changes**
   - UI updates based on status
   - Actions change based on status
   - Read-only mode when needed

---

## Best Practices

1. **Always check permissions**
2. **Handle empty states gracefully**
3. **Provide clear action buttons**
4. **Show appropriate status messages**
5. **Validate before submission**
6. **Handle errors gracefully**
7. **Use responsive layouts**
8. **Localize all text**
9. **Provide loading feedback**
10. **Confirm destructive actions**

---

## File Structure

```
app/[locale]/application/[id]/
  page.tsx                      # Application detail page

components/application/
  comprehensive-application-detail-view.tsx  # Main detail component
  file-manager.tsx              # File management
  staff-actions.tsx              # Staff action buttons
  submit-application-form.tsx    # Submit form
  delete-application-button.tsx  # Delete button

components/ui/
  confirm-dialog.tsx             # Confirmation dialogs
  toast.tsx                     # Toast notifications
```

---

## Summary

The Application Detail View provides:
- ✅ Comprehensive application display
- ✅ Role-based editing permissions
- ✅ Status-based UI changes
- ✅ File management integration
- ✅ Staff action capabilities
- ✅ Client submission flow
- ✅ Edit mode with validation
- ✅ Responsive design
- ✅ Internationalization support
- ✅ Clear status indicators
