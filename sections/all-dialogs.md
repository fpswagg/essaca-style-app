# All Dialogs

## Overview

The application uses various dialog components for user interactions, confirmations, and form submissions. All dialogs follow consistent design patterns and provide modal interfaces for focused user actions.

---

## Table of Contents

1. [Base Dialog Component](#base-dialog-component)
2. [Confirm Dialog](#confirm-dialog)
3. [Registration Dialog](#registration-dialog)
4. [Payment Form Dialog](#payment-form-dialog)
5. [Test Result Form Dialog](#test-result-form-dialog)
6. [Dialog Patterns](#dialog-patterns)

---

## Base Dialog Component

**File:** `components/ui/dialog.tsx`

### Description
The base dialog component provides a reusable modal interface with consistent styling and behavior.

### Features
- Fixed overlay with backdrop
- Centered card layout
- Close button (×)
- Body scroll lock when open
- Responsive sizing

### Props
```typescript
interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}
```

### Structure
```tsx
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
  <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <button onClick={onClose}>×</button>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  </div>
</div>
```

### Behavior
- **Body Scroll Lock:** Prevents background scrolling when open
- **Backdrop Click:** Can be extended to close on backdrop click
- **Escape Key:** Can be extended to close on Escape
- **Z-Index:** High z-index to appear above all content

### Layout
- Overlay with backdrop
- Centered card
- Max width constraints
- Max height with scroll
- Responsive padding

---

## Confirm Dialog

**File:** `components/ui/confirm-dialog.tsx`

### Description
A specialized dialog for confirmation actions, particularly destructive actions like deletions.

### Features
- Confirmation message
- Cancel and Confirm buttons
- Danger variant for destructive actions
- Animated appearance
- Backdrop blur

### Props
```typescript
interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  confirmVariant?: 'default' | 'danger';
}
```

### Variants

#### Default Variant
- Confirm button: Primary button style
- Used for: General confirmations

#### Danger Variant
- Confirm button: Danger button style
- Used for: Destructive actions (delete, reject, etc.)

### Structure
```tsx
<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
  {/* Backdrop */}
  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
  
  {/* Dialog */}
  <div className="relative rounded-2xl shadow-xl max-w-md w-full p-4 sm:p-6">
    <h2>{title}</h2>
    <p>{message}</p>
    <div className="flex flex-col-reverse sm:flex-row gap-2 sm:gap-3">
      <button onClick={onClose}>{cancelText}</button>
      <button onClick={handleConfirm}>{confirmText}</button>
    </div>
  </div>
</div>
```

### Usage Examples

#### Delete Confirmation
```tsx
<ConfirmDialog
  isOpen={showDeleteDialog}
  onClose={() => setShowDeleteDialog(false)}
  onConfirm={handleDelete}
  title="Delete Payment"
  message="Are you sure you want to delete this payment? This action cannot be undone."
  confirmText="Delete"
  cancelText="Cancel"
  confirmVariant="danger"
/>
```

#### Approve Confirmation
```tsx
<ConfirmDialog
  isOpen={showApproveDialog}
  onClose={() => setShowApproveDialog(false)}
  onConfirm={handleApprove}
  title="Approve Application"
  message="Are you sure you want to approve this application?"
  confirmText="Approve"
  cancelText="Cancel"
/>
```

### Behavior
- **Backdrop Click:** Closes dialog
- **Confirm Action:** Calls `onConfirm` then closes
- **Cancel Action:** Just closes dialog
- **Body Scroll Lock:** Prevents background scrolling

---

## Registration Dialog

**File:** `components/auth/registration-dialog.tsx`

### Description
Modal dialog for user registration, triggered when a user tries to log in with a non-existent email.

### Features
- Pre-filled email (from login attempt)
- Full registration form
- Password validation
- Redirects to email verification on success

### Props
```typescript
interface RegistrationDialogProps {
  email: string;
  onClose: () => void;
  onSuccess: () => void;
}
```

### Form Fields
- First Name (optional)
- Last Name (optional)
- Email (pre-filled, displayed read-only)
- Password (required, min 8 characters)
- Confirm Password (required)

### Validation
- Password length (minimum 8 characters)
- Password match validation
- Real-time validation feedback

### Actions
- **Cancel:** Closes dialog, clears email
- **Submit:** Creates account, redirects to email verification

### Structure
- Fixed overlay
- Centered card
- Form with validation
- Error display
- Cancel and Submit buttons

### Integration
- Triggered from `TwoStepLoginForm`
- Pre-fills email from login attempt
- Handles registration flow

---

## Payment Form Dialog

**File:** `components/admin/payment-form-dialog.tsx`

### Description
Dialog for creating or editing payment records.

### Features
- Create new payments
- Edit existing payments
- Form validation
- Application selection

### Props
```typescript
interface PaymentFormDialogProps {
  payment?: Payment;  // If provided, edit mode
  applications: Application[];
  onClose: () => void;
  onSubmit: (data: PaymentData) => void;
}
```

### Form Fields

1. **Application ID** (required)
   - Dropdown select
   - Lists all applications
   - Disabled in edit mode

2. **Amount** (required)
   - Number input
   - Decimal support (step="0.01")

3. **Status** (required)
   - Dropdown select
   - Options: pending, completed, failed, refunded

4. **Transaction ID** (optional)
   - Text input
   - For external transaction references

5. **Proof URL** (optional)
   - URL input
   - Link to payment proof document

6. **Paid At** (optional)
   - Date input
   - Payment date

7. **Physical Proof** (optional)
   - Checkbox
   - Indicates physical proof provided

### Modes

#### Create Mode
- All fields editable
- Application selection enabled
- Empty form

#### Edit Mode
- Application ID disabled
- Pre-filled with existing data
- Update existing payment

### Validation
- Required fields validation
- Number format validation
- URL format validation (for proof URL)

### Actions
- **Cancel:** Closes dialog
- **Submit:** Calls `onSubmit` with form data

---

## Test Result Form Dialog

**File:** `components/admin/test-result-form-dialog.tsx`

### Description
Dialog for creating or editing test result records.

### Features
- Create new test results
- Edit existing test results
- Score tracking
- Pass/fail indication

### Props
```typescript
interface TestResultFormDialogProps {
  testResult?: TestResult;  // If provided, edit mode
  applications: Application[];
  onClose: () => void;
  onSubmit: (data: TestResultData) => void;
}
```

### Form Fields

1. **Application ID** (required)
   - Dropdown select
   - Lists all applications
   - Disabled in edit mode

2. **Score** (optional)
   - Number input
   - Decimal support

3. **Max Score** (optional)
   - Number input
   - Maximum possible score

4. **Passed** (optional)
   - Dropdown select
   - Options: Yes, No, (empty)

5. **Notes** (optional)
   - Textarea
   - Additional notes about test result

6. **Certificate URL** (optional)
   - URL input
   - Link to certificate document

### Modes

#### Create Mode
- All fields editable
- Application selection enabled
- Empty form

#### Edit Mode
- Application ID disabled
- Pre-filled with existing data
- Update existing test result

### Validation
- Required fields validation
- Number format validation
- URL format validation (for certificate URL)

### Actions
- **Cancel:** Closes dialog
- **Submit:** Calls `onSubmit` with form data

---

## Dialog Patterns

### Common Patterns

#### 1. Form Dialogs
- Use base `Dialog` component
- Include form with validation
- Cancel and Submit buttons
- Error display

#### 2. Confirmation Dialogs
- Use `ConfirmDialog` component
- Clear title and message
- Appropriate variant (default/danger)
- Confirm and Cancel actions

#### 3. Information Dialogs
- Use base `Dialog` component
- Display information
- Close button only

### Layout Patterns

#### Overlay
- Backdrop with opacity
- Backdrop blur (for confirm dialogs)
- Full screen coverage

#### Dialog Container
- Centered layout
- Rounded corners
- Shadow for depth
- Max width constraints
- Responsive padding

#### Buttons
- Primary action: Primary button style
- Secondary action: Secondary button style
- Danger action: Danger button style
- Responsive sizing

### Behavior Patterns

#### Opening
- Set `isOpen` to `true`
- Lock body scroll
- Focus management (can be added)

#### Closing
- Set `isOpen` to `false`
- Unlock body scroll
- Reset form (if applicable)

#### Submission
- Validate form
- Show loading state
- Call onSubmit callback
- Close on success
- Show error on failure

---

## Best Practices

1. **Always provide clear titles**
2. **Use appropriate variants for confirmations**
3. **Handle loading states**
4. **Validate forms before submission**
5. **Show clear error messages**
6. **Lock body scroll when open**
7. **Provide cancel option**
8. **Use responsive sizing**
9. **Handle edge cases gracefully**
10. **Test keyboard navigation**

---

## File Structure

```
components/ui/
  dialog.tsx                     # Base dialog component
  confirm-dialog.tsx             # Confirmation dialog

components/auth/
  registration-dialog.tsx         # Registration dialog

components/admin/
  payment-form-dialog.tsx         # Payment form dialog
  test-result-form-dialog.tsx    # Test result form dialog
```

---

## Summary

The dialog system provides:
- ✅ Consistent modal interfaces
- ✅ Reusable base components
- ✅ Specialized dialogs for specific use cases
- ✅ Form dialogs with validation
- ✅ Confirmation dialogs with variants
- ✅ Responsive design
- ✅ Accessibility considerations
- ✅ Clear user feedback
- ✅ Loading states
- ✅ Error handling

