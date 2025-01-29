import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

const CommonForm = ({
  action,
  formControls,
  buttonText,
  isButtonDisabled,
  btnType,
  formData,
  setFormData,
  
}) => {
  function handleChange(e, name) {
    setFormData({ ...formData, [name]: e.target.value });
  }
  function renderInputByComponentType(getCurrentControl) {
    console.log(getCurrentControl, "getCurrentControl");
    let content = null;
    switch (getCurrentControl.componentType) {
      case "input":
        content = (
          <div className="relative flex items-center mt-8">
            <Input
              type={getCurrentControl.type}
              name={getCurrentControl.name}
              placeholder={getCurrentControl.placeholder}
              disabled={getCurrentControl.disabled}
              id={getCurrentControl.name}
              value={formData[getCurrentControl.name]}
              onChange={(e) => handleChange(e, getCurrentControl.name)}
              className="w-full rounded-md h-[60px] px-4 border bg-gray-100
              outline-none text-lg drop-shadow-sm transition-all duration-300 ease-in-out
              focus:drop-shadow-md focus:border-blue-500 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        );
        break;
      case "file":
        content = (
          <Label className="flex bg-gray-100 px-3 py-3 mt-6 text-center mx-auto border-2 border-dashed border-gray-300 rounded-lg cursor-pointer ">
            <h2>{getCurrentControl.label}</h2>
            <Input
              onChange={handleFileChange}
              type="file"
              id={getCurrentControl.name}
              name={getCurrentControl.name}
            />
          </Label>
        );
        break;
      default:
        content = (
          <div className="relative flex items-center mt-8">
            <Input
              type={getCurrentControl.type}
              name={getCurrentControl.name}
              placeholder={getCurrentControl.placeholder}
              disabled={getCurrentControl.disabled}
              id={getCurrentControl.name}
              value={formData[getCurrentControl.name]}
              onChange={(e) => handleChange(e, getCurrentControl.name)}
              className="w-full rounded-md h-[60px] px-4 border bg-gray-100
          outline-none text-lg drop-shadow-sm transition-all duration-300 ease-in-out
          focus:drop-shadow-md focus:border-blue-500 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div> 
        );
    }
    return content;
  }
  return (
    <form action={action}>
      {formControls.map((control) => renderInputByComponentType(control))}
      <div className="mt-6 w-full">
        <Button
          className="disabled:opacity-60 flex h-11 items-center justify-center"
          disabled={isButtonDisabled}
          type={btnType || "submit"}
        >
          {buttonText}
        </Button>
      </div>
    </form>
  );
};

export default CommonForm;
