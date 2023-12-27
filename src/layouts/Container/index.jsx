import cls from "./styles.module.scss";

export default function Container({ children }) {
  return <div className={cls.container}>{children}</div>;
}
