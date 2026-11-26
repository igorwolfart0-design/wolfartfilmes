import type {
  InputHTMLAttributes,
  LabelHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes
} from "react";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  label: string;
};

function FieldLabel({ label, children, className = "", ...props }: LabelProps) {
  return (
    <label className={`block ${className}`} {...props}>
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-fog/70">
        {label}
      </span>
      {children}
    </label>
  );
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Input({ label, ...props }: InputProps) {
  return (
    <FieldLabel label={label}>
      <input className="field" {...props} />
    </FieldLabel>
  );
}

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: string[];
};

export function Select({ label, options, ...props }: SelectProps) {
  return (
    <FieldLabel label={label}>
      <select className="field" {...props}>
        <option value="">Selecione</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </FieldLabel>
  );
}

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
};

export function Textarea({ label, ...props }: TextareaProps) {
  return (
    <FieldLabel label={label}>
      <textarea className="field min-h-36 resize-y" {...props} />
    </FieldLabel>
  );
}
