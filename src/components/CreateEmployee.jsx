import React from "react";
import { useFormik } from "formik";
import * as yup from 'yup'

const employeeSchema = yup.object({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().required(),
    dob: yup.string().required(),
    gender: yup.string().required()
})
const CreateEmployee = () => {
    const { values, handleChange, errors, touched, handleSubmit, resetForm } = useFormik({
        initialValues: {
            'firstname': '',
            'lastname': '',
            'email': '',
            'dob': '',
            'gender': ''
        },
        validationSchema: employeeSchema,
        onSubmit: (values) => {
            console.log(values);
        }
    })
    return (
        <div className="container">
            <h1 className="display-6 fw-bolder text-success mb-4">
                <i className="fa fa-user-plus me-3" />
                Create Employee
            </h1>
            <form onSubmit={handleSubmit} className="needs-validation">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="form-group col-md-6 mb-2 has-validation">
                                <label className="form-label">Firstname</label>
                                <input type="text"
                                    className={`form-control ${touched.firstname && errors.firstname ? "is-invalid" : ""}`} 
                                    placeholder="Firstname"
                                    name="firstname"
                                    value={values.firstname}
                                    onChange={handleChange}
                                />
                                <span className='invalid-feedback'>{touched.firstname && errors?.firstname}</span>
                            </div>
                            <div className="form-group col-md-6 mb-2">
                                <label className="form-label">Lastname</label>
                                <input type="text" 
                                        className={`form-control ${touched?.lastname && errors?.lastname ? 'is-invalid' : ''}`} 
                                        placeholder="Lastname" 
                                        name="lastname"
                                        value={values.lastname}
                                        onChange={handleChange}
                                />
                                <span className="invalid-feedback">{ touched?.lastname && errors?.lastname}</span>
                            </div>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">Gender</label>
                            <div className="form-group">
                                <div className="form-check form-check-inline">
                                    <input type="radio" 
                                        className={`form-check-input ${touched?.gender && errors?.gender ? 'is-invalid' : ''}`} 
                                        name="gender"
                                        value={values.gender || 'male'} 
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label">Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input type="radio" 
                                        className={`form-check-input ${touched?.gender && errors?.gender ? 'is-invalid' : ''}`} 
                                        name="gender"
                                        value={values.gender || 'female'} 
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label">Female</label>
                                </div>
                                <span className="invalid-feedback d-block">{ touched?.gender && errors?.gender}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group mb-2">
                            <label className="form-label">Email</label>
                            <input type="email" 
                                name="email"
                                className={`form-control ${touched?.email && errors?.email ? 'is-invalid' : ''}`} 
                                placeholder="Email" 
                                value={values.email}
                                onChange={handleChange}
                            />
                            <span className="invalid-feedback">{ touched?.email && errors?.email}</span>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">Dob</label>
                            <input type="date" 
                                className={`form-control ${touched?.dob && errors?.dob ? 'is-invalid' : ''}`} 
                                name="dob"
                                value={values.dob}
                                onChange={handleChange}
                            />
                            <span className="invalid-feedback">{ touched?.dob && errors?.dob}</span>
                        </div>
                    </div>
                </div>
                <div className="row col-md-12">
                    <div className="form-group">
                        <button type="submit" className="btn btn-sm btn-primary me-3">
                            <i className="fa fa-plus me-2" />
                            Create
                        </button>
                        <button type="button" className="btn btn-sm btn-dark"
                            onClick={() => resetForm()}
                        >
                            <i className="fa fa-times me-2" />
                            Cancel
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateEmployee;