import { useFormData } from '../hooks/useFormData';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import Loader from './Loader';

const ContactForm = () => {

    const {formData, status, handleInputChange, emailHandler} = useFormData();

    const isSubmitting = status.type === "loading";
  return (
    <form onSubmit={emailHandler} className="animate-fade-left shadow-md shadow-slate-700/50 dark:shadow-indigo-600/20 rounded-2xl p-10 bg-slate-200/60 dark:bg-slate-400/10">
      <FormInput 
        label = "Your name goes here..."
        type = {"text" as "text" | "email"}
        name = "name"
        value = {formData.name}
        onChange = {handleInputChange}
        required
        
      />
      <FormInput 
        label = "Your email..."
        type = {"email" as "email" | "text"}
        name = "email"
        value = {formData.email}
        onChange = {handleInputChange}
        required
      />

      <FormTextArea 
        label = "What would you like to talk about?"
        name = "message"
        value = {formData.message}
        onChange = {handleInputChange}
        required
      />

      <button type="submit" className="w-full inline-flex items-center justify-center py-4 my-4 cursor-pointer font-medium text-slate-100 btn-fill-top-down"
      disabled={isSubmitting}>
        {isSubmitting ? <Loader /> : "Send Message"}
      </button>
      
      </form>
  )
}

export default ContactForm
