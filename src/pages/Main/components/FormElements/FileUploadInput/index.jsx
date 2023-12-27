import request from "../../../../../service/httpClient";
import cls from "./styles.module.scss";

const FileUploadInput = ({ name = "file_upload" }) => {
  const inputChangeHandler = (e) => {
    const file = e.target.files[0];

    const data = new FormData();
    data.append("file", file);

    request.post("/v1/files/folder_upload", data).then(() => {});
  };

  return <input name={name} className={cls.input} type="file" onChange={inputChangeHandler} />;
};

export default FileUploadInput;
