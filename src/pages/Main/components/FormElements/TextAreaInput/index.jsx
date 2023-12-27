import { useFormContext } from "react-hook-form";

import cls from "./styles.module.scss";

const TextAreaInput = ({ type = "text", name }) => {
  const { register } = useFormContext();

  return <textarea className={cls.input} type={type} {...register(name)} />;
};

export default TextAreaInput;
