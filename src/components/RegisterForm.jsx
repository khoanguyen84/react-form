import React, { useState } from "react";

function RegisterForm() {
    const [form, setForm] = useState({
        values: {
            email: '',
            password: ''
        },
        errors: {
            email: 'email is require field',
            password: 'password is require field'
        },
        touch: {
            email: false,
            password: false
        }
    })

    const handleInputValue = (e) => {
        if (e.target.value == null || e.target.value == '') {
            setForm({
                ...form,
                values: {
                    ...form.values,
                    [e.target.name]: e.target.value
                },
                errors: {
                    ...form.errors,
                    [e.target.name]: `${e.target.name} is required field.`
                }
            })
        }
        else {
            setForm({
                ...form,
                values: {
                    ...form.values,
                    [e.target.name]: e.target.value
                },
                errors: {
                    ...form.errors,
                    [e.target.name]: ''
                }
            })
        }
    }

    const handleTouch = (e) => {
        setForm({
            ...form,
            touch: {
                ...form.touch,
                [e.target.name]: (document.activeElement == e.target)
            }
        })
    }
    const handleSumit = (e) => {
        e.preventDefault();
        if(form.errors.email || form.errors.password){
            return
        }
        console.log(form.values);
    }
    console.log(form);
    return (
        <div>
            <form onSubmit={handleSumit}>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" onInput={handleInputValue} onFocus={handleTouch}/>
                    <span>{form.touch.email && form.errors.email}</span>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" onInput={handleInputValue} onFocus={handleTouch}/>
                    <span>{form.touch.password && form.errors.password}</span>
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm