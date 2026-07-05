import React from 'react'

interface FormInputProps {
    label: string;
    type: "text" | "email"; 
    name: "name" | "email";
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    required?: boolean;
}

const FormInput = ({label, type, name, value, onChange, required = false}: FormInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-xs font-medium text-slate-700 dark:text-slate-200">
        {label}
      </label>
      
      {/* 1. Relative wrapper to contain the absolute growing line */}
      <div className="relative group w-full">
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full ring-1 ring-indigo-600/50 dark:ring-indigo-400/50 focus:ring-0 focus:ring-transparent transition-all duration-1000 ease-in-out rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none dark:bg-slate-950 dark:text-slate-100"
        />

        <span className="absolute bottom-0 left-0 h-0.5 w-full bg-indigo-600 dark:bg-indigo-400 scale-x-0 transition-transform duration-1000 ease-out origin-left peer-focus:scale-x-100 group-focus-within:scale-x-100">

        </span>
        
      </div>
    </div>
  )
}

export default FormInput