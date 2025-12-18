# Authentication & Login Forms

## Overview

The ESSACA application implements a comprehensive authentication system with multiple login and registration flows. The system uses a two-step login process that checks email confirmation status before prompting for password.

---

## Table of Contents

1. [Login Page](#login-page)
2. [Two-Step Login Form](#two-step-login-form)
3. [Simple Login Form](#simple-login-form)
4. [Registration Forms](#registration-forms)
5. [Registration Dialog](#registration-dialog)
6. [Email Verification](#email-verification)

---

## Login Page

**File:** `app/[locale]/login/page.tsx`

### Description
The main login page that displays the ESSACA branding and hosts the two-step login form.

### Features
- Redirects authenticated users to their role-specific dashboard
- Displays ESSACA branding
- Language toggle in the top-right corner
- Responsive container layout

### Key Components
- `TwoStepLoginForm` - Main login component
- `LanguageToggle` - Language switcher

### Authentication Flow
1. Check if user is already authenticated
2. If authenticated, redirect to role-specific dashboard
3. If not, display login form

---

## Two-Step Login Form

**File:** `components/auth/two-step-login-form.tsx`

### Description
A sophisticated two-step authentication process that:
1. First checks if the email exists and is confirmed
2. If email doesn't exist, shows registration dialog
3. If email exists but not confirmed, shows error
4. If email is confirmed, proceeds to password step

### State Management
- `step`: `'email' | 'password' | 'register'` - Current step in the flow
- `email`: string - User's email address
- `error`: string | null - Error message
- `loading`: boolean - Loading state
- `showRegisterDialog`: boolean - Controls registration dialog visibility

### Step 1: Email Entry

**Features:**
- Email input with validation
- Auto-focus on email field
- Real-time email validation
- Error display for unconfirmed emails
- Registration dialog trigger for non-existent emails

**Form Fields:**
- Email (required, type="email")

**Actions:**
- `handleEmailSubmit`: Checks email confirmation status
  - Calls `checkEmailConfirmation(email)`
  - If email doesn't exist → shows registration dialog
  - If email not confirmed → shows error
  - If email confirmed → proceeds to password step

### Step 2: Password Entry

**Features:**
- Password input with show/hide toggle
- Displays entered email for confirmation
- Back button to return to email step
- Auto-focus on password field

**Form Fields:**
- Password (required, type="password")

**Actions:**
- `handlePasswordSubmit`: Authenticates user
  - Calls `signIn(email, password, locale)`
  - Handles errors and loading states
  - Redirects on success (handled by server action)

### Registration Integration
- Automatically shows `RegistrationDialog` when email doesn't exist
- Pre-fills email in registration dialog
- Handles registration success flow

### Error Handling
- Email not confirmed: Shows translation key `emailNotConfirmed`
- Invalid credentials: Shows error from server
- Network errors: Handled by server actions

### UI Components Used
- `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`
- `Input`
- `PasswordInput` (with show/hide toggle)
- `FormField` (with label and error display)
- `RegistrationDialog` (conditional)

---

## Simple Login Form

**File:** `components/auth/login-form.tsx`

### Description
A simpler, single-step login form that collects both email and password in one form. This is an alternative to the two-step form.

### Features
- Single form with email and password fields
- Direct authentication without email confirmation check
- Error handling and loading states

### Form Fields
- Email (required, type="email")
- Password (required, type="password")

### Actions
- `handleSubmit`: Authenticates user directly
  - Calls `signIn(email, password)`
  - Handles errors and loading states

### Usage
This form is available but the application primarily uses the two-step login form for better UX.

---

## Registration Forms

### Register Page

**File:** `app/[locale]/register/page.tsx`

### Description
Standalone registration page with full registration form.

### Features
- ESSACA branding
- Link to login page for existing users
- Full registration form with validation

### Components
- `RegisterForm` - Main registration component

### Register Form

**File:** `components/auth/register-form.tsx`

### Description
Complete registration form with comprehensive validation.

### Form Fields

1. **Personal Information**
   - First Name (optional)
   - Last Name (optional)
   - Email (required, validated)
   - Password (required, min 8 characters)
   - Confirm Password (required, must match)

2. **Email Validation**
   - Real-time email format validation
   - Visual feedback for valid email
   - Error messages for invalid format

3. **Password Validation**
   - Minimum 8 characters
   - Password match validation
   - Visual feedback

### Validation Rules

**Email:**
- Must match regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Real-time validation on change
- Shows error if invalid format

**Password:**
- Minimum 8 characters
- Must match confirm password field
- Shows error if requirements not met

### Actions
- `handleSubmit`: Creates new user account
  - Validates email format
  - Validates password length
  - Validates password match
  - Calls `signUp(email, password, firstName, lastName)`
  - Redirects to login on success

### Error Handling
- Email format errors
- Password length errors
- Password mismatch errors
- Server-side errors (duplicate email, etc.)

### Success Flow
- Redirects to login page with `?registered=true` query parameter
- User can then log in after email verification

---

## Registration Dialog

**File:** `components/auth/registration-dialog.tsx`

### Description
Modal dialog for registration that appears when a user tries to log in with a non-existent email.

### Features
- Pre-filled email (from login attempt)
- Full registration form in modal
- Closes on success and redirects to email verification

### Form Fields
- First Name (optional)
- Last Name (optional)
- Email (pre-filled, read-only display)
- Password (required, min 8 characters)
- Confirm Password (required)

### Actions
- `handleSubmit`: Creates account
  - Validates password length and match
  - Calls `signUp(email, password, firstName, lastName)`
  - Redirects to email verification page on success

### UI Structure
- Fixed overlay with backdrop
- Centered card with max-width
- Form with validation
- Error display
- Cancel and Submit buttons

### Integration
- Triggered from `TwoStepLoginForm` when email doesn't exist
- Pre-fills email from login attempt
- Closes and redirects on successful registration

---

## Email Verification

**File:** `app/[locale]/auth/verify-email/page.tsx`

### Description
Page displayed after registration to inform users they need to verify their email.

### Features
- Instructions for email verification
- Information about next steps
- Link back to login

### Flow
1. User registers (via form or dialog)
2. Redirected to verify-email page
3. User checks email and clicks verification link
4. Email verified via callback route
5. User can then log in

### Callback Route

**File:** `app/[locale]/auth/callback/route.ts`

### Description
Handles OAuth and email verification callbacks from Supabase.

### Features
- Processes email verification tokens
- Handles OAuth callbacks
- Redirects to appropriate pages

---

## Authentication Actions

**File:** `app/actions/auth.ts`

### Server Actions

1. **`signIn(email, password, locale?)`**
   - Authenticates user with email and password
   - Returns error or success
   - Handles redirects

2. **`signUp(email, password, firstName?, lastName?)`**
   - Creates new user account
   - Sends verification email
   - Returns error or success

3. **`signOut(locale)`**
   - Signs out current user
   - Redirects to login

4. **`checkEmailConfirmation(email)`**
   - Checks if email exists in system
   - Checks if email is confirmed
   - Returns: `{ exists: boolean, confirmed: boolean, error?: string }`

---

## Security Features

### Email Confirmation
- All new accounts require email verification
- Users cannot log in until email is confirmed
- Verification links sent automatically on registration

### Password Requirements
- Minimum 8 characters
- Stored securely (hashed by Supabase)

### Session Management
- Handled by Supabase Auth
- Secure session tokens
- Automatic session refresh

### Role-Based Access
- Users redirected to role-specific dashboards
- Unauthorized access prevented by middleware

---

## UI/UX Features

### Responsive Design
- Mobile-first approach
- Responsive text sizes
- Responsive padding and spacing
- Touch-friendly button sizes

### Loading States
- Disabled inputs during submission
- Loading text on buttons
- Prevents double submission

### Error Display
- Inline error messages
- Error containers
- Clear error messaging

### Accessibility
- Proper form labels
- ARIA labels where needed
- Keyboard navigation support
- Focus management

---

## Internationalization

All text is internationalized using `next-intl`:
- Translation keys in `messages/en.json` and `messages/fr.json`
- Locale-aware routing
- Language toggle available on login page

### Translation Keys Used
- `auth.signIn`
- `auth.createAccount`
- `auth.email`
- `auth.password`
- `auth.enterCredentials`
- `auth.emailNotConfirmed`
- `auth.passwordMinLength`
- `auth.passwordsDoNotMatch`
- And more...

---

## Error Messages

### Client-Side Validation
- Email format errors
- Password length errors
- Password mismatch errors

### Server-Side Errors
- Duplicate email
- Invalid credentials
- Network errors
- Server errors

All errors are displayed in user-friendly format.

---

## Best Practices

1. **Always validate on both client and server**
2. **Show clear error messages**
3. **Provide loading feedback**
4. **Handle edge cases (email not found, not confirmed)**
5. **Use secure password requirements**
6. **Implement proper session management**
7. **Follow accessibility guidelines**
8. **Provide clear user feedback**

---

## File Structure

```
app/[locale]/
  login/
    page.tsx                    # Login page
  register/
    page.tsx                    # Registration page
  auth/
    verify-email/
      page.tsx                  # Email verification page
    callback/
      route.ts                  # Auth callback handler

components/auth/
  two-step-login-form.tsx       # Two-step login component
  login-form.tsx                 # Simple login form
  register-form.tsx              # Registration form
  registration-dialog.tsx       # Registration modal
  sign-out-button.tsx            # Sign out button

app/actions/
  auth.ts                       # Authentication server actions
```

---

## Summary

The authentication system provides:
- ✅ Two-step login with email confirmation check
- ✅ Automatic registration flow for new users
- ✅ Email verification requirement
- ✅ Comprehensive form validation
- ✅ Responsive and accessible UI
- ✅ Internationalization support
- ✅ Secure password handling
- ✅ Role-based redirects
- ✅ Clear error messaging
- ✅ Loading states and feedback
