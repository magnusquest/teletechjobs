import { useState, useEffect } from "react";

interface FormProps {
  showModal: boolean;
  onClose: () => void;
  initialJob: string;
}

const Form: React.FC<FormProps> = ({ showModal, onClose, initialJob }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    job: initialJob,
  });

  useEffect(() => {
    setFormData((prevData) => ({ ...prevData, job: initialJob }));
  }, [initialJob]);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    job: "",
  });

  const validate = () => {
    let valid = true;
    let newErrors = { name: "", email: "", phone: "", age: "", job: "" };

    if (!formData.name) {
      newErrors.name = "Name is required";
      valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      newErrors.email = "Valid email is required";
      valid = false;
    }

    const phonePattern = /^\d{10}$/;
    if (!formData.phone || !phonePattern.test(formData.phone)) {
      newErrors.phone = "Valid 10-digit phone number is required";
      valid = false;
    }

    if (!formData.age || isNaN(Number(formData.age)) || Number(formData.age) <= 0) {
      newErrors.age = "Valid age is required";
      valid = false;
    }

    if (!formData.job) {
      newErrors.job = "Job selection is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission
      console.log("Form submitted", formData);
    }
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          &times;
        </button>
        <h2 className="text-2xl mb-4">Contact Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Age</label>
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Job</label>
            <select
              name="job"
              value={formData.job}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1">
              <option value="">Select a job</option>
              <option value="Fiber Optic Installer">Fiber Optic Installer</option>
              <option value="Fiber Optic Splicer">Fiber Optic Splicer</option>
              <option value="Generator & HVAC Technician">Generator & HVAC Technician</option>
              <option value="Fiber Optic Installer Assistant">Fiber Optic Installer Assistant</option>
              <option value="Driver">Driver</option>
              <option value="Cell Tower Technician">Cell Tower Technician</option>
            </select>
            {errors.job && <p className="text-red-500 text-sm">{errors.job}</p>}
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-lg hover:from-blue-900 hover:to-blue-700 transition-colors">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
