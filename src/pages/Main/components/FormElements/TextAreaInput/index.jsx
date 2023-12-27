import { Controller, useFormContext } from "react-hook-form";

import cls from "./styles.module.scss";

const TextAreaInput = ({ name }) => {
  const { control } = useFormContext();

  const onChangeHandler = (val) => {
    return val ? val.replace("<p>", "").replace("</p>", "") : "";
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <textarea
          className={cls.input}
          value={onChangeHandler(value)}
          onChange={({ target: { value } }) => onChange(value ? `<p>${value}</p>` : "")}
        />
      )}
    />
  );
};

export default TextAreaInput;
