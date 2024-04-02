import { RegisterForm } from "../components/RegisterForm";

  export function RegisterPage() {
    return (
      <div className="grid col-1 place-self-center lg:grid-cols-2">
        <img
        className="h-[100vh] rounded-md hidden lg:block object-cover" 
        src="/loginImage.jpg" alt="image" />
       <RegisterForm/>
      </div>
    );
  }