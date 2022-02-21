import React, {useState} from "react";
import "./Form.css";
import {usePage} from "@inertiajs/inertia-react";
import {Inertia} from '@inertiajs/inertia'


const Form = () => {
    const {errors} = usePage().props

    const sharedData = usePage().props.localizations;


    function __(key, replace = {}) {
        let translation = sharedData[key] || key;

        Object.keys(replace).forEach(function (key) {
            translation = translation.replace(':' + key, replace[key])
        });

        return translation;
    }

    const [values, setValues] = useState({
        name: "",
        phone: "",
        mail: "",
        message: "",
    })

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        Inertia.post(route('client.contact.mail'), values)
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <p>{__("have_any_questions")}</p>
            <div className="playfair">{__("write_to_us")}</div>
            <div className="grid">
                {errors.name && <div>{__(errors.name.split(".")[1])}</div>}
                {errors.phone && <div>{errors.phone}</div>}
            </div>
            <div className="grid">
                <input id="name" value={values.name} onChange={handleChange} type="text" placeholder={__("name_surname")}/>
                <input id="phone" value={values.phone} onChange={handleChange} type="tel" placeholder={__("phone_number")}/>
            </div>
            {errors.mail && <div>{errors.mail}</div>}
            <input id="mail" value={values.mail} onChange={handleChange} type="text" placeholder={__("email_address")}/>
            {errors.message && <div>{errors.message}</div>}
            <textarea id="message" value={values.message} onChange={handleChange} placeholder={__("message_here")}></textarea>
            <button type="submit" className="main_button dark">
                {__("send")}
            </button>
        </form>
    );
};

export default Form;
