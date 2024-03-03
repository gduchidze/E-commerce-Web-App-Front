import { useNavigate } from "react-router-dom";
import frozenSvg from "../svg/frozenSvg.svg";
// form hook
import { SubmitHandler, useForm } from "react-hook-form";

type FormField = {
  email: string;
  password: string;
  repeatPassword: string;
};
const SignUp = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, setError,formState:{errors,isSubmitting} } = useForm<FormField>();

  const onSubmit: SubmitHandler<FormField> = async (data) => {
    try {
      await new Promise((resolve)=> setTimeout(resolve,1000))
      // I need API here
      throw new Error('HEy')
      console.log(data);
    } catch (error) {
      
      setError('email',{
        message:'This email is already taken'
      })
    }
    
  };

  return (
    <main className="overflow-hidden flex items-center justify-between ">
      <div className="w-7 md:w-64">
        <div className="w-[914px] h-[914px] bg-[#303030] dark:bg-[#4044ED] rounded-full translate-x-[-50%]"></div>
        <div className="w-[76px] h-[76px] bg-[#626278] dark:bg-[#93DFFF] rounded-full translate-x-[300px] translate-y-[-800px]"></div>
      </div>
      <div className="relative bg-gray-50 p-3 rounded-lg mr-16 w-60 sm:mr-6 sm:p-5 sm:w-fit">
        <h1 className="text-center text-[1.2rem]">Create An Account</h1>
        <p className="text-gray-600 text-[.8rem] sm:text-[1rem]">
          Create an account to enjoy all the services!
        </p>
        <form
          className="flex flex-col gap-3 my-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register("email", {
              required: 'Email is required',
              validate: (value)=>{
                if(!value.includes('@')){
                  return "Email must include @";
                }
                return true;
              }

            })}
            type="email"
            placeholder="Email Address"
            className="duration-300 py-2 px-5 rounded outline-none border-solid border-2 border-gray-300 focus:border-gray-500 hover:border-gray-400"
          />
          {
            errors.email && <div className="text-red-600">{errors.email.message}</div>
          }
          <input
            {...register("password", {
              required: 'Password is required',
              minLength: {
                value: 8,
                message:'Password must have at least 8 characters'
              }
            })}
            type="password"
            placeholder="Password"
            className="duration-300 py-2 px-5 rounded outline-none border-solid border-2 border-gray-300 focus:border-gray-500 hover:border-gray-400"
          />
           {
            errors.password && <div className="text-red-600">{errors.password.message}</div>
          }
          <input
           {...register("repeatPassword", {
            required: 'Password is required',
            minLength: {
              value: 8,
              message:'Password must have at least 8 characters'
            }
          })}
            type="password"
            placeholder="Repeat Password"
            className="duration-300 py-2 px-5 rounded outline-none border-solid border-2 border-gray-300 focus:border-gray-500 hover:border-gray-400"
          />
          {
            errors.repeatPassword && <div className="text-red-600">{errors.repeatPassword.message}</div>
          }
          <button disabled={isSubmitting} className="bg-black rounded text-white py-2 ">
            {isSubmitting ? 'Loading' : 'Create Account'}
          </button>
        </form>
        <p className="text-center">
          Already Have An Account?{" "}
          <span
            onClick={() => {
              navigate("/signin");
            }}
            className="underline cursor-pointer"
          >
            Sign In
          </span>
        </p>
      </div>
      <img
        src={frozenSvg}
        alt="Frozen figure"
        className="w-40 mr-8 hidden md:block"
      />
    </main>
  );
};

export default SignUp;
