import React from "react";
import { Input } from "react-daisyui";

type propTypes = {
    name:string,
    type: string,
    label: string,
    placeholder: string,
    required: boolean,
    handleChange:  ({ target: { name, value }, }: React.ChangeEvent<HTMLInputElement>) => void
}

const FormInput: React.FC<propTypes> = ({name,type,label,placeholder,required,handleChange}) => {


  return (
    <>
      <div className="flex w-full component-preview p-2 items-center justify-center gap-2 font-sans">
        <div className="form-control w-full max-w-xs">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <span className="label-text-alt">*&nbsp;</span>
            {label}:
          </label>
          <Input name={name} type={type} size="md" placeholder={placeholder} required={required} color="accent" onChange={handleChange} />
          {/* <strong className="text-red-500 text-xs italic">
            {label} is require*
          </strong> */}
        </div>
      </div>
    </>
  );
};

export default FormInput;
