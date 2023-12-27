import { useFormContext } from "react-hook-form";

import cls from "./styles.module.scss";

const TextInput = ({ type = "text", name }) => {
  const { register } = useFormContext();

  return <input className={cls.input} type={type} {...register(name)} />;
};

export default TextInput;
