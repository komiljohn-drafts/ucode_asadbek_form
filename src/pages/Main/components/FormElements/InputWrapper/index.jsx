import cls from "./styles.module.scss";

export default function InputWrapper({ children }) {
  return <div className={cls.input_wrapper}>{children}</div>;
}
