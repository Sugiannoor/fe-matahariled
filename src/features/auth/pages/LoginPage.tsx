import { LoginForm } from "../components/LoginForm";

  export function LoginPage() {
    return (
      <div className="grid col-1 place-self-center lg:grid-cols-2">
        <img
        className="h-[100vh] rounded-md hidden lg:block object-cover" 
        src="/loginImage.jpg" alt="image" />
       <LoginForm/>
      </div>
    );
  }