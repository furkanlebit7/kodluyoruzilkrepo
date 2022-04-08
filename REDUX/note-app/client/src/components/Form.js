import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNoteAsync } from "../redux/todos/notesServices";
import "../styles/form.css";

function Forms() {
  const [form, setForm] = useState({
    id: "",
    color: "",
    title: "",
    content: "",
  });

  const dispatch = useDispatch();

  const handleTitle = (e) => {
    setForm({ ...form, title: e.target.value });
  };
  const handleText = (e) => {
    setForm({ ...form, content: e.target.value });
  };
  const handleColor = (e) => {
    setForm({ ...form, color: e.target.value, id: 5 });
  };
  const handleForm = async (e) => {
    e.preventDefault();
    if (checkValues(form)) {
      await dispatch(addNoteAsync({ ...form }));
    }
  };

  const checkValues = (form) => {
    return form.title !== "" && form.content !== "" && form.color !== ""
      ? true
      : false;
  };

  return (
    <form onSubmit={handleForm} className="col-12 align-self-center">
      <div className="form-group">
        <input
          onChange={handleTitle}
          type="text"
          value={form.title}
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Note Title"
        />
      </div>
      <div className="form-group my-4">
        <textarea
          onChange={handleText}
          value={form.content}
          maxLength={200}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Enter note here"
        ></textarea>
      </div>
      <div className="d-flex justify-content-between align-item-center">
        <div className="radios d-flex justify-content-start align-item-center">
          <div className="form-check">
            <input
              onChange={handleColor}
              className="form-check-input"
              type="radio"
              name="colorRadio"
              id="color_1"
              value="#233d4d"
            />
            <label
              className="color-check-label"
              id="color-label-1"
              htmlFor="color_1"
            >
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                alt="radioBox"
              />
            </label>
          </div>
          <div className="form-check">
            <input
              onChange={handleColor}
              className="form-check-input"
              type="radio"
              name="colorRadio"
              id="color_2"
              value="#fe7f2d"
            />
            <label
              className="color-check-label"
              id="color-label-2"
              htmlFor="color_2"
            >
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                alt="radioBox"
              />
            </label>
          </div>
          <div className="form-check">
            <input
              onChange={handleColor}
              className="form-check-input"
              type="radio"
              name="colorRadio"
              id="color_3"
              value="#fcca46"
            />
            <label
              className="color-check-label"
              id="color-label-3"
              htmlFor="color_3"
            >
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                alt="radioBox"
              />
            </label>
          </div>
          <div className="form-check">
            <input
              onChange={handleColor}
              className="form-check-input"
              type="radio"
              name="colorRadio"
              id="color_4"
              value="#a1c181"
            />
            <label
              className="color-check-label"
              id="color-label-4"
              htmlFor="color_4"
            >
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                alt="radioBox"
              />
            </label>
          </div>
          <div className="form-check">
            <input
              onChange={handleColor}
              className="form-check-input"
              type="radio"
              name="colorRadio"
              id="color_5"
              value="#619b8a"
            />
            <label
              className="color-check-label"
              id="color-label-5"
              htmlFor="color_5"
            >
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                alt="radioBox"
              />
            </label>
          </div>
        </div>
        <div>
          <button type="submit" className="btn btn-outline-danger px-3">
            Push
          </button>
        </div>
      </div>
    </form>
  );
}

export default Forms;
