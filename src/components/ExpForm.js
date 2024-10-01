import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the CSS for Quill
import "./ExpForm.css";
import { modules, formats } from "react-quill";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import {Button, Modal } from "react-bootstrap";

function ExpForm() {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      startDate: null,
      endDate: null,
      companyName: "",
      companySector: "",
      jobTitle: "",
      jobLocation: "",
      position: "",
      jobFunction: "",
      salary: "",
      checkBox: false,
      description: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const watchCheckBox = watch("checkBox");

  const [showModal, setShowModal] = useState(false);

  // Remove or rename this function to avoid redeclaration error
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   setShowModal(false); // Close the modal after form submission
  // };

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{ marginLeft: "20px", marginTop: "10px" }}
      >
        Add new experience
      </Button>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Experience Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>

    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-row">
        <div className="row">
          <div className="col-md-6">
            <div className="floating-label form-group">
              <input
                type="text"
                id="companyName"
                {...register("companyName", { required: true })}
                placeholder=" "
                aria-label="Company Name"
                className={`form-control ${
                  errors.companyName ? "is-invalid" : ""
                }`}
              />
              <label htmlFor="companyName">Company Name*</label>
              {errors.companyName && (
                <div className="invalid-feedback">This field is required</div>
              )}
            </div>
          </div>

          <div className="col-md-6">
            <div className="floating-label form-group">
              <input
                type="text"
                id="companySector"
                {...register("companySector", { required: true })}
                placeholder=" "
                aria-label="Company Sector"
                className={`form-control ${
                  errors.companySector ? "is-invalid" : ""
                }`}
              />
              <label htmlFor="companySector">Company Sector*</label>
              {errors.companySector && (
                <div className="invalid-feedback">This field is required</div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="form-row">
        <div className="row">
          <div className="col-md-6">
            <div className="floating-label form-group">
              <input
                type="text"
                id="jobTitle"
                {...register("jobTitle", { required: true })}
                placeholder=" "
                aria-label="Job Title"
                className={`form-control ${
                  errors.jobTitle ? "is-invalid" : ""
                }`}
              />
              <label htmlFor="jobTitle">Job Title*</label>
              {errors.jobTitle && (
                <div className="invalid-feedback">This field is required</div>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="floating-label form-group">
              <input
                type="text"
                id="jobLocation"
                {...register("jobLocation", { required: true })}
                placeholder=" "
                aria-label="Job Location"
                className={`form-control ${
                  errors.jobLocation ? "is-invalid" : ""
                }`}
              />
              <label htmlFor="jobLocation">Job Location*</label>
              {errors.jobLocation && (
                <div className="invalid-feedback">This field is required</div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="form-row">
        <div className="row">
          <div className="col-md-6">
            <div className="floating-label form-group">
              <input
                type="text"
                id="position"
                {...register("position", { required: true })}
                placeholder=" "
                aria-label="Position Type"
                className={`form-control ${
                  errors.position ? "is-invalid" : ""
                }`}
              />
              <label htmlFor="position">Position*</label>
              {errors.position && (
                <div className="invalid-feedback">This field is required</div>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="floating-label form-group">
              <input
                type="text"
                id="jobFunction"
                {...register("jobFunction", { required: true })}
                placeholder=" "
                aria-label="Job Function"
                className={`form-control ${
                  errors.jobFunction ? "is-invalid" : ""
                }`}
              />
              <label htmlFor="jobFunction">Job Function*</label>
              {errors.jobFunction && (
                <div className="invalid-feedback">This field is required</div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="form-row">
        <div className="row">
          <div className="col-md-6">
            <div className="floating-label form-group">
              <Controller
                name="startDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    selected={field.value}
                    onChange={(date) => field.onChange(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText=" "
                    maxDate={new Date()}
                    className="datepicker-input"
                    renderCustomHeader={({ date, changeYear, changeMonth }) => (
                      <div>
                        <select
                          value={date.getFullYear()}
                          onChange={({ target: { value } }) =>
                            changeYear(parseInt(value))
                          }
                        >
                          {Array.from({ length: 20 }, (_, i) => {
                            const year = new Date().getFullYear() - i;
                            return (
                              <option key={year} value={year}>
                                {year}
                              </option>
                            );
                          })}
                        </select>
                        <select
                          value={date.getMonth()}
                          onChange={({ target: { value } }) =>
                            changeMonth(parseInt(value))
                          }
                        >
                          {Array.from({ length: 12 }, (_, i) => (
                            <option key={i} value={i}>
                              {new Date(0, i).toLocaleString("default", {
                                month: "long",
                              })}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  />
                )}
              />
              <label className={watch("startDate") ? "active" : ""}>
                Start Date
              </label>
            </div>
          </div>

          <div className="col-md-6">
            <div className="floating-label form-group">
              <Controller
                name="endDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    selected={field.value}
                    onChange={(date) => field.onChange(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText=" "
                    minDate={watch("startDate")}
                    disabled={watchCheckBox} // Disable if currently employed
                    className="datepicker-input"
                    renderCustomHeader={({ date, changeYear, changeMonth }) => (
                      <div>
                        <select
                          value={date.getFullYear()}
                          onChange={({ target: { value } }) =>
                            changeYear(parseInt(value))
                          }
                        >
                          {Array.from({ length: 20 }, (_, i) => {
                            const year = new Date().getFullYear() - i;
                            return (
                              <option key={year} value={year}>
                                {year}
                              </option>
                            );
                          })}
                        </select>
                        <select
                          value={date.getMonth()}
                          onChange={({ target: { value } }) =>
                            changeMonth(parseInt(value))
                          }
                        >
                          {Array.from({ length: 12 }, (_, i) => (
                            <option key={i} value={i}>
                              {new Date(0, i).toLocaleString("default", {
                                month: "long",
                              })}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  />
                )}
              />
              <label
                className={watch("endDate") && !watchCheckBox ? "active" : ""}
              >
                End Date
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="form-row">
        <div className="row">
          <div className="col-md-6">
            <div className="floating-label form-group">
              <input
                type="text"
                id="salary"
                {...register("salary", { required: true })}
                placeholder=" "
                aria-label="Salary/Stipend"
                className={`form-control ${errors.salary ? "is-invalid" : ""}`}
              />
              <label htmlFor="salary">Salary/Stipend</label>
              {errors.salary && (
                <div className="invalid-feedback">This field is required</div>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="checkbox-label form-check">
              <input type="checkbox" id="checkBox" {...register("checkBox")} />
              <label htmlFor="checkBox">I currently work here</label>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="floating-label form-group">
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <ReactQuill
                value={field.value}
                onChange={(value) => field.onChange(value)}
                modules={modules}
                formats={formats}
                placeholder="Describe your Role and responsibilites..."
              />
            )}
          />
          {/* <label className={watch("description") ? "active" : ""}>
      
          </label> */}
        </div>
      </div>

      <button type="submit" className="submit-button">
        Save
      </button>
    </form>
    </Modal.Body>
      </Modal>
    </>

  );
}
export default ExpForm;