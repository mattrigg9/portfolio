"use client";

import { ChangeEvent, HTMLProps, useCallback } from "react";

const INPUT_CLASS_NAMES =
  "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6";

type FieldProps<T> = HTMLProps<T> & {
  onTextChange?: (text: string) => void;
  name: string;
  errorMessage?: string;
};

interface InputFieldProps extends FieldProps<HTMLInputElement> {
  as: "input";
}

interface TextareaFieldProps extends FieldProps<HTMLTextAreaElement> {
  as: "textarea";
}

export default function Field({
  label,
  onChange,
  onTextChange,
  errorMessage,
  required,
  ...props
}: TextareaFieldProps | InputFieldProps) {
  const internalOnChangeInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onTextChange?.(event.target.value);
      onChange?.(event as any);
    },
    [onChange, onTextChange],
  );

  const internalOnChangeTextarea = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      onTextChange?.(event.target.value);
      onChange?.(event as any);
    },
    [onChange, onTextChange],
  );

  const { as, ...nativeProps } = props;
  const errorId = errorMessage ? `${props.name}-error` : undefined;

  return (
    <div>
      <label className="block text-sm font-semibold leading-6 text-gray-900" htmlFor={props.name}>
        {label}
        {required && <span className="text-red-600 ml-1" aria-label="required">*</span>}
      </label>
      <div className="mt-2.5">
        {props.as === "input" && (
          <input
            {...(nativeProps as any)}
            id={props.name}
            required={required}
            onChange={internalOnChangeInput}
            className={INPUT_CLASS_NAMES}
            aria-invalid={errorMessage ? "true" : "false"}
            aria-describedby={errorId}
          />
        )}
        {props.as === "textarea" && (
          <textarea
            {...(nativeProps as any)}
            id={props.name}
            required={required}
            onChange={internalOnChangeTextarea}
            className={INPUT_CLASS_NAMES}
            aria-invalid={errorMessage ? "true" : "false"}
            aria-describedby={errorId}
          />
        )}
      </div>
      {errorMessage && (
        <p id={errorId} className="mt-2 text-sm text-red-600" role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
