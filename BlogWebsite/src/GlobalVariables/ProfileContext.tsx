import {
  createContext,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { Perfil } from "../Models/PerfilModel";

interface currentSession {
  profile: Perfil | undefined;
  setProfile: React.Dispatch<SetStateAction<Perfil | undefined>>;
}

export const ProfileContext = createContext<currentSession | undefined>(
  undefined
);

export const useProfileContext = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error(
      "useProfileContext debe usarse dentro de un ProfileProvider"
    );
    console.log("error");
  }
  return context;
};

interface propsProfileProvider {
  children: React.ReactNode;
}

export const ProfileProvider = ({ children }: propsProfileProvider) => {
  const [profile, setProfile] = useState<Perfil | undefined>(() => {
    const storedProfile = sessionStorage.getItem("profile");
    return storedProfile ? JSON.parse(storedProfile) : undefined;
  });
  useEffect(() => {
    if (profile) {
      sessionStorage.setItem("profile", JSON.stringify(profile));
    } else {
      sessionStorage.removeItem("profile");
    }
    console.log(JSON.stringify(profile));
  }, [profile]);

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};
