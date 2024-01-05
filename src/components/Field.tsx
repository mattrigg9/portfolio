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
  const internalOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    // Fire a convenience function to parent, if present
    onTextChange?.(event.target.value);
    // Proxy the normal onChange event
    onChange?.(event);
  }, []);

  // `as` can't be destructured in the function props above because Typescript won't narrow the type
  const { as, ...nativeProps } = props;
  const inputProps = {
    onChange: internalOnChange,
    className: INPUT_CLASS_NAMES,
    ...nativeProps,
  };

  return (
    <fieldset>
      <label className="block text-sm font-semibold leading-6 text-gray-900" htmlFor={props.name}>
        {label}
      </label>
      <div className="mt-2.5">
        {props.as === "input" && <input {...inputProps} />}
        {props.as === "textarea" && <textarea {...inputProps} />}
      </div>
    </fieldset>
  );
}
