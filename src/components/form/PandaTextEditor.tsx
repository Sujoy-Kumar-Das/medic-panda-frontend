"use client";

import { SxProps } from "@mui/material";
import dynamic from "next/dynamic";
import { Controller, useFormContext } from "react-hook-form";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface ITextEditor {
  name: string;
  label?: string;
  required?: boolean;
  sx?: SxProps;
  placeholder?: string;
  readOnly?: boolean;
}

const PandaTextEditor = ({
  name,
  label,
  required,
  sx,
  placeholder = "Write something...",
  readOnly = false,
}: ITextEditor) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field: { onChange, value } }) => (
        <div style={{ width: "100%" }}>
          {label && (
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: 500,
              }}
            >
              {label}
              {required && <span style={{ color: "red" }}> *</span>}
            </label>
          )}

          <div style={{ ...(sx as object) }}>
            <ReactQuill
              theme="snow"
              value={value || ""}
              onChange={(content) => onChange(content)}
              placeholder={placeholder}
              readOnly={readOnly}
              modules={{
                toolbar: [
                  [{ header: [1, 2, 3, false] }],
                  ["bold", "italic", "underline", "strike"],
                  [{ list: "ordered" }, { list: "bullet" }],
                  ["link", "image"],
                  ["clean"],
                ],
              }}
            />
          </div>
        </div>
      )}
    />
  );
};

export default PandaTextEditor;
