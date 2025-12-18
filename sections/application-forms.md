# Application Forms

## Overview

The application forms system allows clients to create and manage their applications to ESSACA. The system includes multiple form variants with different levels of detail and complexity.

---

## Table of Contents

1. [New Application Page](#new-application-page)
2. [Application Form (Basic)](#application-form-basic)
3. [Comprehensive Application Form](#comprehensive-application-form)
4. [Form Sections](#form-sections)
5. [Validation](#validation)
6. [Form Flow](#form-flow)

---

## New Application Page

**File:** `app/[locale]/application/new/page.tsx`

### Description
Entry point for creating a new application. Handles authentication, role checking, and existing application detection.

### Access Control
- **Required Role:** `client`
- **Redirect:** Non-clients redirected to their dashboard
- **Existing Application:** Redirects to existing application if one exists (non-rejected)

### Features
- Checks for existing applications
- Prevents duplicate applications
- Redirects to existing application if found
- Only allows one active application per user

### Components Used
- `ComprehensiveApplicationForm` - Main form component

---

## Application Form (Basic)

**File:** `components/application/application-form.tsx`

### Description
A simpler, two-step application form with basic information collection.

### Form Flow

#### Step 1: Application Type Selection
- **Question:** "Are you applying for first year?"
- **Options:**
  - "Yes, First Year" → Proceeds to form
  - "No, Not First Year" → Redirects to instructions page

#### Step 2: Application Information

**Personal Information Section:**
- First Name (required)
- Last Name (required)
- Phone (optional)
- Address (optional)

**Academic Information Section:**
- Previous School (optional)
- Previous Degree (optional)

### Form Submission
- Creates application with `isFirstYear: true`
- Redirects to application detail page on success
- Shows error messages on failure

### Features
- Two-step process
- Basic information collection
- Simple validation
- Error handling

---

## Comprehensive Application Form

**File:** `components/application/comprehensive-application-form.tsx`

### Description
A comprehensive, multi-section application form with extensive information collection.

### Form Flow

#### Step 1: Application Type Selection
- **Question:** "Are you applying for first year?"
- **Options:**
  - "Yes, First Year" → Proceeds to comprehensive form
  - "No, Not First Year" → Redirects to instructions page

#### Step 2: Comprehensive Form

### Form Sections

#### 1. CANDIDAT Section (Candidate Information)

**Required Fields:**
- Last Name (`*`)
- First Name (`*`)
- Address (`*`)
- Email (`*`)
- Mobile Phone (`*`)
- Date of Birth (`*`)
- Gender (`*`) - M/F dropdown
- Birth City (`*`)
- Nationality (`*`)

**Optional Fields:**
- Landline Phone
- Postal Code
- Recruitment Source (dropdown):
  - Word of Mouth
  - Internet
  - Advertising
  - Fairs
  - Other

**Field Layout:**
- Grid: 2 columns on desktop, 1 column on mobile
- Responsive spacing

#### 2. CURSUS SCOLAIRE Section (Academic History)

**Required Fields:**
- Last Class Attended (`*`)
- Last School Attended (`*`)
- Previous Diplomas (`*`) - Textarea

**Field Layout:**
- Single column layout
- Textarea for diplomas (3 rows)

#### 3. RENSEIGNEMENTS COMPLEMENTAIRES (Additional Information)

**Note:** This section is currently hidden/commented out in the code. It includes:

**Father/Guardian Information:**
- Full Name
- Address
- Email
- Personal Phone
- Work Phone
- Profession
- Marital Status

**Mother Information:**
- Full Name
- Address
- Email
- Personal Phone
- Work Phone
- Profession
- Marital Status

**Emergency Contact:**
- Contact Name
- Contact Phone

**Status:** These fields are defined in the form submission but the UI is commented out. They will be added in a future page when the application is validated.

### Form Features

#### Navigation
- Back button to return to step 1
- Save button to submit form
- Loading states during submission

#### Validation
- Required field validation
- Email format validation
- Date validation
- Phone number validation

#### Error Handling
- Error messages displayed in containers
- Field-level error display
- Form-level error messages

#### Responsive Design
- Mobile-first approach
- Adaptive grid layouts
- Responsive input sizes
- Touch-friendly controls

### Form Submission

**Data Collected:**
```typescript
{
  isFirstYear: true,
  // Candidate Information
  firstName: string,
  lastName: string,
  address: string,
  email: string,
  landlinePhone?: string,
  mobilePhone: string,
  dateOfBirth: string,
  gender: 'M' | 'F',
  birthCity: string,
  postalCode?: string,
  nationality: string,
  recruitmentSource?: string,
  // Academic Information
  lastClassAttended: string,
  lastSchoolAttended: string,
  previousDiplomas: string,
  // Parent/Guardian Information (included but UI hidden)
  fatherFullName?: string,
  fatherAddress?: string,
  fatherEmail?: string,
  fatherPersonalPhone?: string,
  fatherWorkPhone?: string,
  fatherProfession?: string,
  fatherMaritalStatus?: string,
  motherFullName?: string,
  motherAddress?: string,
  motherEmail?: string,
  motherPersonalPhone?: string,
  motherWorkPhone?: string,
  motherProfession?: string,
  motherMaritalStatus?: string,
  // Emergency Contact
  emergencyContactName?: string,
  emergencyContactPhone?: string,
}
```

**Submission Process:**
1. Validates required fields
2. Calls `createApplication()` server action
3. Shows loading state
4. Handles errors
5. Redirects to application detail page on success

---

## Form Sections Details

### Section Structure
- Section headers with borders
- Section containers
- Field spacing
- Responsive layout

### Input Types
- Text inputs for text fields
- Date inputs for dates
- Select dropdowns for options
- Textareas for multi-line text

### Select Dropdowns
- Options: Localized options
- Placeholder: "Please Select" (localized)

### Date Inputs
- Component: `DateInput` component
- Type: Date picker
- Format: ISO date format
- Validation: Date format validation

### Textareas
- Resize: Vertical resize allowed
- Rows: Configurable (3 for diplomas)

---

## Validation

### Client-Side Validation
- Required field checking
- Email format validation
- Date format validation
- Real-time validation feedback

### Server-Side Validation
- Additional validation on server
- Database constraints
- Business rule validation

### Error Display
- Inline error messages
- Error containers
- Clear error messaging
- Field-level errors

---

## Form Flow

### Complete User Journey

1. **User Navigates to `/application/new`**
   - System checks authentication
   - Checks for existing application
   - Redirects if needed

2. **Step 1: Application Type**
   - User selects "First Year" or "Not First Year"
   - If "Not First Year" → Redirects to instructions
   - If "First Year" → Proceeds to form

3. **Step 2: Fill Form**
   - User fills comprehensive form
   - Real-time validation
   - Error feedback

4. **Submit Form**
   - Validates all required fields
   - Submits to server
   - Shows loading state

5. **Success**
   - Application created
   - Redirects to application detail page
   - User can view/edit application

6. **Error**
   - Error message displayed
   - User can correct and resubmit

---

## UI Components Used

### Form Components
- `Input` - Text inputs
- `DateInput` - Date picker
- `Textarea` - Multi-line text
- `Select` - Dropdowns
- `FormField` - Field wrapper with label/error

### Layout Components
- `Card` - Form container
- `CardHeader` - Form header
- `CardTitle` - Form title
- `CardDescription` - Form description
- `CardContent` - Form content

### Buttons
- Primary action button
- Secondary action button

---

## Internationalization

All form text is internationalized:
- Section titles
- Field labels
- Placeholders
- Error messages
- Button text
- Options (gender, recruitment source)

### Translation Keys
- `application.applicationType`
- `application.areYouApplyingFirstYear`
- `application.yesFirstYear`
- `application.noNotFirstYear`
- `application.candidatSection`
- `application.lastName`
- `application.firstName`
- And many more...

---

## Best Practices

1. **Always validate on both client and server**
2. **Provide clear error messages**
3. **Show loading states during submission**
4. **Handle edge cases gracefully**
5. **Use responsive layouts**
6. **Localize all text**
7. **Provide clear field labels**
8. **Use appropriate input types**
9. **Group related fields**
10. **Provide helpful placeholders**

---

## File Structure

```
app/[locale]/application/
  new/
    page.tsx                    # New application page

components/application/
  application-form.tsx           # Basic application form
  comprehensive-application-form.tsx  # Comprehensive form

components/ui/
  input.tsx                     # Input component
  date-input.tsx                # Date input component
  textarea.tsx                  # Textarea component
  select.tsx                    # Select component
  form.tsx                      # Form field wrapper
  card.tsx                      # Card components

app/actions/
  application.ts                # Application server actions
```

---

## Summary

The Application Forms system provides:
- ✅ Multiple form variants (basic and comprehensive)
- ✅ Two-step application type selection
- ✅ Comprehensive information collection
- ✅ Client-side and server-side validation
- ✅ Error handling and feedback
- ✅ Responsive design
- ✅ Internationalization support
- ✅ Clear form flow
- ✅ Loading states
- ✅ Success/error handling
