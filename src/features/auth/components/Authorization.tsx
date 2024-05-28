import { UserRole } from "@/types/general";
import { useCreds } from "../api/creds";



type Props =
  | { role: Array<UserRole>; children: React.ReactNode }
  | { role: Array<`-${UserRole}`>; children: React.ReactNode };

export const Authorization: React.FC<Props> = ({ role, children }) => {
  const {data} = useCreds();

  function isPermitted(roles: Array<UserRole | `-${UserRole}`>) {
    const exceptedRoles = roles.filter((role) => role.startsWith('-')).map((role) => role.slice(1));
    const isExcepted = exceptedRoles.some((role) => data?.role === role);

    if (exceptedRoles.length > 0) {
      return !isExcepted;
    }

    const acceptedRoles = roles.filter((role) => !role.startsWith('-'));

    const isAccepted = acceptedRoles.some((role) => data?.role === role);

    return isAccepted;
  }

  if (!isPermitted(role)) return null;

  return <>{children}</>;
};
