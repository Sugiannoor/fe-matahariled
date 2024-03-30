import { ContractUser } from "@/features/contract/pages/ContractUser";
import { ComplaintForm } from "../components/ComplaintForm";
import { ProfileForm } from "../components/ProfileForm";
import { EditProfileForm } from "../components/EditProfileForm";

export const Profile = () => {
  return (
    <>
    <ProfileForm/>
    <ComplaintForm/>
    <ContractUser/>
    <EditProfileForm/>
    </>
  );
};
