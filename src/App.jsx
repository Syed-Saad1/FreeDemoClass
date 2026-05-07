import React from "react";
import { useForm } from "react-hook-form";
import logo from "./accets/logo.png";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const dealy = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };
  const onSubmit = async (data) => {
    await dealy(2);
    let r = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    let res = await r.text();

    alert(res);
    reset();
  };
  return (
    <>
      <div className="min-h-screen w-full bg-blue-200 flex justify-center items-start sm:items-center px-4">
        <div className="w-full max-w-md sm:max-w-lg bg-white sm:p-6 md:p-8 p-5  rounded-2xl shadow-lg h-fit ">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col sm:flex-row items-center gap-2  mb-6 text-center sm:text-left">
              <img className="h-20 w-20 sm:h-16 sm:w-16" src={logo} alt="" />
              <div className="">
                {" "}
                <h1 className="font-extrabold  text-lg sm:text-xl md:text-2xl">
                  SFA Institute
                </h1>
                <h2 className="font-semibold text-sm sm:text-base md:text-lg">
                  Free Demo Class Registration Form
                </h2>
              </div>
            </div>
            <div className="mb-4">
              <label
                className="font-semibold text-blue-600 text-sm sm:text-base"
                htmlFor="Std"
              >
                Student Name:
              </label>
              <br />
              <input
                className="w-full mt-1 px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                {...register("StdName", {
                  required: { value: true, message: "StudentName is Required" },
                  minLength: {
                    value: 3,
                    message: "StudentName Min Length is 3",
                  },
                  maxLength: {
                    value: 8,
                    message: "StudentName Max Length is 8",
                  },
                })}
                type="text"
                id="Std"
              />
              {errors.StdName && (
                <div className="text-red-400 mt-1 text-[14px]">
                  {errors.StdName.message}
                </div>
              )}
            </div>
            <div className="mb-4">
              <label
                className="font-semibold text-blue-600 text-sm sm:text-base"
                htmlFor="Fat"
              >
                Father Name:
              </label>
              <br />
              <input
                className="w-full mt-1 px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                {...register("FtrName", {
                  required: { value: true, message: "FatherName is Required" },
                  minLength: {
                    value: 3,
                    message: "FatherName Min Length is 3",
                  },
                  maxLength: {
                    value: 8,
                    message: "FatherName Max Length is 8",
                  },
                })}
                type="text"
                id="Fat"
              />{" "}
              {errors.FtrName && (
                <div className="text-red-400 mt-1 text-[14px]">
                  {errors.FtrName.message}
                </div>
              )}
            </div>
            <div className="mb-4">
              <label
                className="font-semibold text-blue-600 text-sm sm:text-base"
                htmlFor="Age"
              >
                Age:
              </label>
              <br />
              <input
                className="w-full mt-1 px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                type="number"
                id="Age"
                {...register("Age", {
                  required: { value: true, message: "Age is Required" },
                  minLength: {
                    value: 1,
                    message: "Age Min Length is 1",
                  },
                  maxLength: {
                    value: 2,
                    message: "Age Max Length is 2",
                  },
                })}
              />
              {errors.Age && (
                <div className="text-red-400 mt-1 text-[14px]">
                  {errors.Age.message}
                </div>
              )}
            </div>
            <div className="mb-4">
              <label
                className="font-semibold text-blue-600 text-sm sm:text-base"
                htmlFor="PH"
              >
                Phone Number:
              </label>
              <br />
              <input
                className="w-full mt-1 px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                type="number"
                id="PH"
                {...register("PH", {
                  required: { value: true, message: "PhoneNumber is Required" },
                  minLength: {
                    value: 11,
                    message: "PH Min Length is 11",
                  },
                })}
              />
              {errors.PH && (
                <div className="text-red-400 mt-1 text-[14px]">
                  {errors.PH.message}
                </div>
              )}
            </div>
            <div className="mb-4">
              <label
                className="font-semibold text-blue-600 text-sm sm:text-base"
                htmlFor="DC"
              >
                Which Course Attend Demo Class:
              </label>
              <br />
              <input
                className="w-full mt-1 px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                {...register("DemoClass", {
                  required: {
                    value: true,
                    message: "FullCourse Name is Required",
                  },
                  minLength: {
                    value: 3,
                    message: "Course Min Length is 3",
                  },
                  maxLength: {
                    value: 20,
                    message: "Course Max Length is 20",
                  },
                })}
                type="text"
                id="DC"
              />
              {errors.DemoClass && (
                <div className="text-red-400 mt-1 text-[14px]">
                  {errors.DemoClass.message}
                </div>
              )}
            </div>
            <button
              disabled={isSubmitting}
              className="w-full py-2 sm:py-3 rounded-full text-white text-base sm:text-lg font-semibold bg-blue-600 hover:bg-blue-700 transition"
              type="submit"
              value="Submit"
            >
              {isSubmitting ? "Saving..." : "Submit"}
            </button>{" "}
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
