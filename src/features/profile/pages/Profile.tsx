import { ComplaintForm } from "../components/ComplaintForm";
import { ProfileForm } from "../components/ProfileForm";
import { EditProfileForm } from "../components/EditProfileForm";

export const Profile = () => {
  return (
    <>
      <ProfileForm />
      <ComplaintForm />
      <EditProfileForm />
    </>
  );
};
