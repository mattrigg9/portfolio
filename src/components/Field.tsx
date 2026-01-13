"use client";

import React, { ChangeEvent, HTMLProps, useCallback } from "react";

const INPUT_CLASS_NAMES =
  "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6";

type FieldProps<T> = HTMLProps<T> & {
  onTextChange?: (text: string) => void;
  name: string;
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
  ...props
}: TextareaFieldProps | InputFieldProps) {
  const internalOnChangeInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      // Fire a convenience function to parent, if present
      onTextChange?.(event.target.value);
      // Proxy the normal onChange event
      onChange?.(event as any);
    },
    [onChange, onTextChange],
  );

  const internalOnChangeTextarea = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      // Fire a convenience function to parent, if present
      onTextChange?.(event.target.value);
      // Proxy the normal onChange event
      onChange?.(event as any);
    },
    [onChange, onTextChange],
  );

  // `as` can't be destructured in the function props above because Typescript won't narrow the type
  const { as, ...nativeProps } = props;

  return (
    <fieldset>
      <label className="block text-sm font-semibold leading-6 text-gray-900" htmlFor={props.name}>
        {label}
      </label>
      <div className="mt-2.5">
        {props.as === "input" && (
          <input
            {...(nativeProps as any)}
            onChange={internalOnChangeInput}
            className={INPUT_CLASS_NAMES}
          />
        )}
        {props.as === "textarea" && (
          <textarea
            {...(nativeProps as any)}
            onChange={internalOnChangeTextarea}
            className={INPUT_CLASS_NAMES}
          />
        )}
      </div>
    </fieldset>
  );
}
