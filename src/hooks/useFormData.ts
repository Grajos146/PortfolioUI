import { useState } from "react";
import type { ContactFormData } from "../types/contact";
import api from "../api/axios";
import Swal from "sweetalert2";
import type { SweetAlertOptions } from "sweetalert2";
import axios from "axios";

export const useFormData = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState<{
        type: "idle" | "loading" | "success" | "error";
        message: string;
    }>({ type: "idle", message: "" });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    const emailHandler = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus({ type: "loading", message: "Sending..." });

        try{
            const res = await api.post("/contact", formData)

            const successMessage = res.data.message || "Message sent successfully!";
            setStatus({ type: "success", message: successMessage });
            setFormData({ name: "", email: "", message: "" });
            
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: successMessage,
                confirmButtonText: 'OK',
                confirmButtonColor: 'indigo-600',
                background: 'dark:bg-slate-900 bg-slate-100',
                color: 'dark:text-slate-100 text-slate-900',
                customClass:{
                    popup: 'rounded-lg shadow-lg',
                    title: 'text-lg font-semibold',
                    content: 'text-base',
                    confirmButton: 'px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300',
                }
            } as SweetAlertOptions);

        } catch (error) {
            console.log(error);

            let errorMessage = "A network error occurred.";

            if(axios.isAxiosError(error) && error.response){
                errorMessage = error.response.data.message || "An error occurred while sending the message.";
            }

            if (axios.isAxiosError(error) && error.response && error.response.status === 429) {
                errorMessage = "You are sending messages too quickly. Please try again later.";
            }

            setStatus({ type: "error", message: errorMessage });

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: errorMessage,
                confirmButtonText: 'OK',
                confirmButtonColor: 'red-600',
                background: 'dark:bg-slate-900 bg-slate-100',
                color: 'dark:text-slate-100 text-slate-900',
                customClass:{
                    popup: 'rounded-lg shadow-lg',
                    title: 'text-lg font-semibold',
                    content: 'text-base',
                    confirmButton: 'px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors duration-300',
                }
            } as SweetAlertOptions);
        }
    };

    return { formData, status, handleInputChange, emailHandler };
};