import { useFormContext } from "react-hook-form";

import cls from "./styles.module.scss";

const SelectInput = ({ options = [], name }) => {
  const { register } = useFormContext();

  return (
    <select className={cls.input} {...register(name)}>
      {options.map((i) => (
        <option key={i.value} value={i.value}>
          {i.label}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
