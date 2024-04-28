import { useForm } from "react-hook-form";
import Input from "../Input";
const SignUp = () => {
    const { register,handleSubmit,watch, } = useForm()
    

    return (
        <div>
            <div className="flex flex-col gap-10 pt-10">
            <Input label="First Name" watch={watch} watchName="firstName" {...register("firstName",{ required:true})}/>
            <Input label="Last Name" watch={watch} watchName="lastName" {...register("lastName",{ required:true})}/>
            <Input label="Email address" watch={watch} watchName="email" type="email" {...register("email",{ required:true})}/>
            <Input label="Password" watch={watch} watchName="password" type="password" {...register("password",{ required:true})}/>
            <Input label="Confirm your password" watch={watch}  watchName="confirmPassword" type="password" {...register("confirmPassword",{ required:true})}/>
            </div>
            <button>Create my account</button>
        </div>
    );
};

export default SignUp;