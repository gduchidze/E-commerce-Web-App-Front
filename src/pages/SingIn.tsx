import { useNavigate } from "react-router-dom";
import frozenSvg from "../svg/frozenSvg.svg";
// form hook
import { SubmitHandler, useForm } from "react-hook-form";

type FormField = {
  email: string;
  password: string;
};
const SignIn = () => {
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
       <img
        src={frozenSvg}
        alt="Frozen figure"
        className="w-40 ml-8 hidden lg:block"
      />
      <div className="text-center relative z-[1] bg-gray-50 p-3 rounded-lg ml-2 sm:ml-6 sm:p-5 w-96">
        <h1 className=" text-[1.2rem]">Log In </h1>
        <p className="text-gray-600 text-[.8rem] sm:text-[1rem] ">
          to enjoy all the services!
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
         
          <button disabled={isSubmitting} className="bg-black rounded text-white py-2 ">
            {isSubmitting ? 'Loading' : 'Log In'}
          </button>
        </form>
        <p className="">
        Don't have an account?
          <span
            onClick={() => {
              navigate("/signup");
            }}
            className="underline cursor-pointer"
          >
            Sign In
          </span>
        </p>
      </div>
      <div className="w-7 md:w-64">
        <div className="w-[914px] h-[914px] bg-[#303030] dark:bg-[#4044ED] rounded-full translate-x-[-50%]"></div>
        <div className="w-[76px] h-[76px] bg-[#626278] dark:bg-[#93DFFF] rounded-full translate-x-[-390px] translate-y-[-800px]"></div>
      </div>
    </main>
  );
};

export default SignIn;
