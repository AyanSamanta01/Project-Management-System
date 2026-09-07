import React, { forwardRef, useId } from "react";

const Textarea = forwardRef(function Textarea(
  { label, className = "", ...props },
  ref
) {
  const id = useId();

  return (
    <div>
      {label && <label htmlFor={id} className="mb-2 block text-sm font-medium text-gray-700">{label}</label>}

      <textarea
        id={id}
        ref={ref}
        className={className}
        {...props}
      />
    </div>
  );
});

export default Textarea;