import React from 'react'

interface FormTextAreaProps {
    label: string;
    name: "message";
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    rows?: number;
    required?: boolean;
}

const FormTextArea = ({label, name, value, onChange, rows = 4, required = false}: FormTextAreaProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-xs font-medium text-slate-700 dark:text-slate-200 ">
        {label}
      </label>
      
      <div className="relative group w-full">
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          rows={rows}
          required={required}
          className="w-full ring-1 ring-indigo-600/50 dark:ring-indigo-400/50 focus:ring-0 focus:ring-transparent transition-all duration-1000 ease-in-out rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none dark:bg-slate-950 dark:text-slate-100 resize-none"
        />
        
        <span className="
          absolute bottom-0 left-0 h-0.5 w-full bg-indigo-600 dark:bg-indigo-400
          scale-x-0 
          transition-transform duration-1000 ease-in-out 
          origin-left 
          group-focus-within:scale-x-100
        " />
      </div>
    </div>
  )
}

export default FormTextArea