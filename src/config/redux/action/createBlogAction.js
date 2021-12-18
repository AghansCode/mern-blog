import Axios from "axios";
import { useHistory } from "react-router-dom";

export const setForm = (formType, formValue) => {
  return { type: "SET_FORM_DATA", formType, formValue };
};

export const setImgPreview = (payload) => {
  return { type: "SET_IMAGE_PREVIEW", payload };
};

export const postToAPI = (form) => {
  const data = new FormData();
  data.append("title", form.title);
  data.append("body", form.body);
  data.append("image", form.image);

  Axios.post("http://localhost:4000/v1/blog/post", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    validateStatus: (status) => (status >= 200 && status < 300) || status === 422,
  })
    .then((res) => {
      console.log("post success:  ", res);
    })
    .catch((err) => {
      console.log("err: ", err);
    });
};

export const updateToAPI = (form, id) => {
  const data = new FormData();
  data.append("title", form.title);
  data.append("body", form.body);
  data.append("image", form.image);

  Axios.put(`http://localhost:4000/v1/blog/post/${id}`, data, {
    headers: {
      "content-type": "multipart/form-data",
    },
  })
    .then((res) => {
      console.log("update success:  ", res);
    })
    .catch((err) => {
      console.log("err: ", err);
    });
};
