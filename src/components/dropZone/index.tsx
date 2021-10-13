import React, { useState } from "react";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone, { ILayoutProps } from "react-dropzone-uploader";
import { BsCloudUpload } from "react-icons/bs";
import axios from "axios";
import Loader from "../loader";

import { LayoutContainer, InputContainer, SpinnerCover } from "./styles";

interface uploadProps {
  buttonColor: string;
}

export default function Upload(props: uploadProps) {
  const { buttonColor } = props;
  const [base64, setBase64] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const baseURL = "https://jsonplaceholder.typicode.com/posts";

  // Payload data and url to upload progress
  const getUploadParams = ({ meta }: any) => {
    return { url: "https://httpbin.org/post" };
  };

  // Return the current status of files being uploaded and convert to base 64
  const handleChangeStatus = ({ meta, file }: any, status: any) => {
    let reader = new FileReader();
    reader.onload = (event) => {
      setBase64(event?.target?.result);
    };
    reader.readAsDataURL(file);
  };

  // upload file to server and remove file
  const handleSubmit = (files: any, allFiles: any) => {
    setLoading(true);
    try {
      axios
        .post(baseURL, {
          file: base64,
          fileName: files[0].meta.name,
        })
        .then((response: any) => {
          if (response.data) {
            setLoading(false);
            allFiles.forEach((f: any) => f.remove());
          }
        });
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  // add type defs to custom LayoutComponent prop to easily inspect props passed to injected components
  const Layout = ({
    input,
    previews,
    submitButton,
    dropzoneProps,
    files,
    extra: { maxFiles },
  }: ILayoutProps) => {
    console.log("fileslen", files);
    return (
      <LayoutContainer>
        {previews}
        {files.length > 0 ? null : (
          <InputContainer {...dropzoneProps}>
            <BsCloudUpload
              size={30}
              color="rgba(57, 57, 81, 0.4)"
              style={{ position: "relative" }}
            />
            {files.length < maxFiles && input}
          </InputContainer>
        )}
        {files.length > 0 && !loading ? (
          submitButton
        ) : loading ? (
          <SpinnerCover>
            <Loader spinnerSize={25} />
          </SpinnerCover>
        ) : null}
      </LayoutContainer>
    );
  };

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      maxFiles={1}
      accept="image/*,audio/*,video/*,.doc,.docx,.xml,.pdf"
      inputContent={(files, extra) =>
        extra.reject
          ? "Only Image, audio, video, .doc, and .pdf files allowed!"
          : "Drag Files or Click to Browse"
      }
      LayoutComponent={Layout}
      styles={{
        preview: {
          marginTop: 0,
          padding: 10,
          border: "none",
          boxShadow: "0px 0px 29px 4px rgba(0,0,0,0.28)",
          borderRadius: 5,
        },
        submitButton: {
          backgroundColor: buttonColor,
        },
      }}
    />
  );
}
