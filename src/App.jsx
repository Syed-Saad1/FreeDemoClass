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

  const onSubmit = () => {
    setTimeout(() => {
      reset();
    }, 1000);
  };

  return (
    <>
      <div className="min-h-screen w-full bg-blue-200 flex justify-center items-start sm:items-center px-4 py-6">
        <div className="w-full max-w-md sm:max-w-lg bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-lg">
          <form
            action="https://formsubmit.co/sfainstitute01@gmail.com"
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Hidden Inputs */}
            <input type="hidden" name="_captcha" value="false" />

            <input
              type="hidden"
              name="_subject"
              value="SFA Institute Demo Class Registration"
            />

            <input
              type="hidden"
              name="_next"
              value="https://freedemoclass-sigma.vercel.app"
            />

            {/* Header */}
            <div className="flex flex-col sm:flex-row items-center gap-2 mb-6 text-center sm:text-left">
              <img
                className="h-20 w-20 sm:h-16 sm:w-16"
                src={logo}
                alt="SFA Institute"
              />

              <div>
                <h1 className="font-extrabold text-lg sm:text-xl md:text-2xl">
                  SFA Institute
                </h1>

                <h2 className="font-semibold text-sm sm:text-base md:text-lg">
                  Free Demo Class Registration Form
                </h2>
              </div>
            </div>

            {/* Student Name */}
            <div className="mb-4">
              <label className="font-semibold text-blue-600">
                Student Name:
              </label>

              <input
                className="w-full mt-1 px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                type="text"
                name="Student Name"
                placeholder="Enter Student Name"
                {...register("StdName", {
                  required: "Student Name is Required",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 characters required",
                  },
                  maxLength: {
                    value: 30,
                    message: "Maximum 30 characters allowed",
                  },
                })}
              />

              {errors.StdName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.StdName.message}
                </p>
              )}
            </div>

            {/* Father Name */}
            <div className="mb-4">
              <label className="font-semibold text-blue-600">
                Father Name:
              </label>

              <input
                className="w-full mt-1 px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                type="text"
                name="Father Name"
                placeholder="Enter Father Name"
                {...register("FtrName", {
                  required: "Father Name is Required",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 characters required",
                  },
                  maxLength: {
                    value: 30,
                    message: "Maximum 30 characters allowed",
                  },
                })}
              />

              {errors.FtrName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.FtrName.message}
                </p>
              )}
            </div>

            {/* Age */}
            <div className="mb-4">
              <label className="font-semibold text-blue-600">Age:</label>

              <input
                className="w-full mt-1 px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                type="number"
                name="Age"
                placeholder="Enter Age"
                {...register("Age", {
                  required: "Age is Required",
                  min: {
                    value: 5,
                    message: "Minimum age is 5",
                  },
                  max: {
                    value: 60,
                    message: "Maximum age is 60",
                  },
                })}
              />

              {errors.Age && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.Age.message}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <label className="font-semibold text-blue-600">
                Phone Number:
              </label>

              <input
                className="w-full mt-1 px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                type="text"
                name="Phone Number"
                placeholder="03XXXXXXXXX"
                {...register("PH", {
                  required: "Phone Number is Required",
                  pattern: {
                    value: /^03\d{9}$/,
                    message: "Enter valid 11-digit phone number",
                  },
                })}
              />

              {errors.PH && (
                <p className="text-red-500 text-sm mt-1">{errors.PH.message}</p>
              )}
            </div>

            {/* Course */}
            <div className="mb-6">
              <label className="font-semibold text-blue-600">
                Which Course Attend Demo Class:
              </label>

              <input
                className="w-full mt-1 px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                type="text"
                name="Demo Class Course"
                placeholder="Enter Course Name"
                {...register("DemoClass", {
                  required: "Course Name is Required",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 characters required",
                  },
                })}
              />

              {errors.DemoClass && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.DemoClass.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              disabled={isSubmitting}
              className="w-full py-3 rounded-full text-white text-base sm:text-lg font-semibold bg-blue-600 hover:bg-blue-700 transition disabled:bg-blue-300"
              type="submit"
            >
              {isSubmitting ? "Saving..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
