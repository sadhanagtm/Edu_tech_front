import "react-quill/dist/quill.snow.css";
import React from "react";
import dynamic from "next/dynamic";
const formats = [
  "header",
  "fonts",
  "size",
  "bold",
  "italic",
  "underline",
  "list",
  "bullet",
  "link",
  "image",
  "video",
];
const modules = {
  toolbar: [
    [
      { header: "1" },
      { header: "2" },
      { header: [3, 4, 5] },
      {
        font: [],
      },
    ],
    [{ size: [] }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["image", "video"],
    ["clear"],
  ],
};
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
function Inputs({
  errors,
  id,
  type,
  value,
  setValue,
  placeholder,
  usename,
  options,
  register,
}) {
  let Inputed = 1;
  let className = `${errors ? "ring-2 ring-red-600" : "ring-0"}
  ${type === "select" ? "cursor-pointer bg-blue-50" : null}
  ${type === "text" ? "bg-blue-50" : null}
  ${type === "file" ? "border border-gray-500" : null}
  ${type === "date" ? "bg-blue-50" : null}

  ${
    id === "login"
      ? "text-gray-800  w-full bg-transparent outline-none text-sm flex-1 ring-0"
      : "py-2 px-2 w-full bg-transparent  capitalize  text-gray-600  rounded-lg resize-none outline-none"
  }`;

  switch (type) {
    case "text":
      Inputed = (
        <input
          type={type}
          placeholder={placeholder}
          name={usename}
          id={id}
          // {...reset}
          {...register}
          className={className}
          defaultValue={value}
        />
      );
      break;
    case "date":
      Inputed = (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          name={usename}
          {...register}
          className={className}
          defaultValue={value}
        />
      );
      break;
    case "password":
      Inputed = (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          name={usename}
          {...register}
          className={className}
        />
      );
      break;
    case "file":
      Inputed = (
        <input
          id={id}
          type={type}
          name={usename}
          {...register}
          className={className}
          // value={value}
          // defaultValue={value}
        />
      );
      break;
    case "select":
      Inputed = (
        <select id={id} name={usename} {...register} className={className}>
          {value ? <option value={value.id}>{value.category}</option> : null}
          {options?.map((val, i) => {
            return (
              <option
                key={i}
                value={
                  i === 0
                    ? ""
                    : usename === "project_Category"
                    ? val.id
                    : val.id
                }
              >
                {usename === "project_Category" ? val.type : val.category}
              </option>
            );
          })}
        </select>
      );
      break;
    case "textarea":
      Inputed = (
        <textarea
          rows={5}
          id={id}
          cols={10}
          name={usename}
          {...register}
          defaultValue={value}
          className={`${className} md:h-32`}
        ></textarea>
      );
      break;
    case "quile":
      Inputed = (
        <ReactQuill
          id={id}
          className="bg-blue-50"
          placeholder="write description here........."
          modules={modules}
          formats={formats}
          {...register}
        />
      );
      break;
    default:
      Inputed = (
        <h1>something went wrong see your render method and code again</h1>
      );
      break;
  }
  return Inputed;
}
export default Inputs;
