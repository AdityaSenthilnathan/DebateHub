import { jsx as _jsx } from "react/jsx-runtime";
// textarea.tsx
import * as React from "react";
import { cn } from "../utils";
const TextArea2 = React.forwardRef(({ className, ...props }, ref) => {
    return (_jsx("textarea", { className: cn("flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className), ref: ref, ...props }));
});
TextArea2.displayName = "Textarea";
export { TextArea2 };
