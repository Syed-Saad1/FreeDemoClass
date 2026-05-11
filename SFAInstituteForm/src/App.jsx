import React from "react";
import { useForm } from "react-hook-form";
import logo from "./accets/logo.png";

function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/sfainstitute01@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      if (response.ok) {
        alert("Form Submitted Successfully!");
        reset();
      } else {
        alert("Submission Failed. Try Again!");
      }
    } catch (error) {
      console.error(error);
      alert("Network Error!");
    }
  };

  return (
    <div className="min-h-screen w-full bg-blue-200 flex justify-center items-center px-4 py-6">
      <div className="w-full max-w-md sm:max-w-lg bg-white p-6 rounded-2xl shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          {" "}
          <div className="flex items-center gap-3 mb-6">
            <img src={logo} className="h-16 w-16" alt="SFA Institute" />
            <div>
              <h1 className="font-bold text-xl">SFA Institute</h1>
              <p className="text-sm">Free Demo Class Registration</p>
            </div>
          </div>
          <div className="mb-4">
            <label className="font-semibold text-blue-600">Student Name</label>
            <input
              className="w-full mt-1 px-3 py-2 border rounded-lg"
              type="text"
              placeholder="Enter Student Name"
              {...register("StdName", { required: "Student Name is Required" })}
            />
            {errors.StdName && (
              <p className="text-red-500 text-sm">{errors.StdName.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="font-semibold text-blue-600">Father Name</label>
            <input
              className="w-full mt-1 px-3 py-2 border rounded-lg"
              type="text"
              placeholder="Enter Father Name"
              {...register("FtrName", { required: "Father Name is Required" })}
            />
            {errors.FtrName && (
              <p className="text-red-500 text-sm">{errors.FtrName.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="font-semibold text-blue-600">Age</label>
            <input
              className="w-full mt-1 px-3 py-2 border rounded-lg"
              type="number"
              placeholder="Enter Age"
              {...register("Age", {
                required: "Age is Required",
                min: { value: 5, message: "Minimum age is 5" },
                max: { value: 60, message: "Maximum age is 60" },
              })}
            />
            {errors.Age && (
              <p className="text-red-500 text-sm">{errors.Age.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="font-semibold text-blue-600">Phone Number</label>
            <input
              className="w-full mt-1 px-3 py-2 border rounded-lg"
              type="text"
              placeholder="03XXXXXXXXX"
              {...register("PH", {
                required: "Phone Number is Required",
                pattern: {
                  value: /^03\d{9}$/,
                  message: "Enter valid 11-digit number",
                },
              })}
            />
            {errors.PH && (
              <p className="text-red-500 text-sm">{errors.PH.message}</p>
            )}
          </div>
          <div className="mb-6">
            <label className="font-semibold text-blue-600">Course Name</label>
            <input
              className="w-full mt-1 px-3 py-2 border rounded-lg"
              type="text"
              placeholder="Enter Course Name"
              {...register("DemoClass", {
                required: "Course Name is Required",
              })}
            />
            {errors.DemoClass && (
              <p className="text-red-500 text-sm">{errors.DemoClass.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 disabled:bg-blue-300"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
