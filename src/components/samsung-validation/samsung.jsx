import { useState } from "react";
import FormComponent1 from "./form-component";
import {
  EmailValidation,
  modelName,
  NumberValidation,
} from "./Regular-Expression";
import TableComponentFill from "./datatable";

const SamsungComponent = () => {
  const [formData, setFormData] = useState({
    text: "",
    number: "",
    email: "",
  });

  const [onSubmit, setOnsubmit] = useState([]);

  const [FormError, setForError] = useState({});

  const OnChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    let Error = { ...FormError };

    switch (name) {
      case "text":
        if (!modelName.test(value)) {
          Error.text = "Invalid model name.";
        } else {
          Error.text = "";
        }
        break;
      case "number":
        if (!NumberValidation.test(value)) {
          Error.number = "Invalid model number";
        } else {
          Error.number = "";
        }
        break;
      case "email":
        if (!EmailValidation.test(value)) {
          Error.email = "Invalid model email";
        } else {
          Error.email = "";
        }
        break;
      default:
        break;
    }
    setForError(Error);
  };

  const OnSubmitHandler = (event) => {
    event.preventDefault();

    if (!FormError.text && !FormError.number && !FormError.email) {
      setOnsubmit([...onSubmit, formData]);
      setFormData({
        text: "",
        number: "",
        email: "",
      });
    } else {
      alert("fill the details");
    }
  };

  return (
    <div>
      <h1>Samsung Mobile </h1>
      <FormComponent1
        OnChangeHandler={OnChangeHandler}
        MobileName={formData.text}
        number={formData.number}
        email={formData.email}
        onSubmit={OnSubmitHandler}
        errorText={FormError.text}
        errorNumber={FormError.number}
        errorEmail={FormError.email}
      />
      <TableComponentFill Data={onSubmit} />
    </div>
  );
};

export default SamsungComponent;
