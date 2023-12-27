import cls from "./styles.module.scss";

export const SectionTile = ({ title }) => {
  return <p className={cls.section_title}>{title}</p>;
};

export const InputLabel = ({ label }) => {
  return <p className={cls.input_label}>{label}</p>;
};
