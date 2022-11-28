/**
 * Project: damirifa
 * File: TextField
 * Created by Pennycodes on 4/27/2022.
 * Copyright damirifa
 */
import cn from "classnames";
import React, { InputHTMLAttributes, JSXElementConstructor } from "react";

import s from "./index.module.css";
export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  Component?: string | JSXElementConstructor<any>;
  disabled?: boolean;
  name?: string;
  disableCopyAndPaste?: boolean;
  placeholder?: string;
  label?: String;
  required?: boolean;
  error?: boolean;
}

const TextField: React.FC<TextFieldProps> = (props) => {
  const {
    className,
    disabled = false,
    error = false,
    placeholder,
    label,
    Component = "input",
    name = "default",
    disableCopyAndPaste = false,
    required = false,
    type,
    ...rest
  } = props;

  const rootClassName = cn(s.root, className);
  return (
    <fieldset className={cn(rootClassName)}>
      {label && (
        <label className={cn(s.label)}>
          <span>{label}</span>
          {required && <span>*</span>}
        </label>
      )}
      <Component
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        className={s.input}
      />
    </fieldset>
  );
};

export default TextField;
