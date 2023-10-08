import { PropsWithChildren } from "react";
import { FC } from "react";
import { createContext } from "react";
import { IMySelf } from "../interfaces";
import {
  BackendSkill,
  DatabaseSkill,
  DevOpsSkill,
  FrontendSkill,
  Hobby,
  Language,
  transversalToolSkill,
} from "../enums";

const profile: IMySelf = {
  fullName: "Julien METRAL",
  birthDate: new Date("24/08/1995"),
  professionalExperiences: [],
  educationDegrees: [],
  skills: {
    frontend: [
      {
        name: FrontendSkill.REACT,
        related: [{ name: FrontendSkill.REDUX }],
      },
      { name: FrontendSkill.REACT_NATIVE },
      {
        name: FrontendSkill.ANGULAR,
        related: [{ name: FrontendSkill.NGRX }, { name: FrontendSkill.IONIC }],
      },
      {
        name: FrontendSkill.VUE_JS,
        related: [{ name: FrontendSkill.VUE_X }],
      },
      {
        name: FrontendSkill.CSS,
        related: [
          { name: FrontendSkill.SASS },
          { name: FrontendSkill.MUI },
          { name: FrontendSkill.BOOTSTRAP },
        ],
      },
    ],
    backend: [
      {
        name: BackendSkill.NEST_JS,
      },
      {
        name: BackendSkill.NODE_JS,
      },
      {
        name: BackendSkill.NEXT_JS,
      },
    ],
    database: [
      {
        name: DatabaseSkill.POSTGRESQL,
      },
      {
        name: DatabaseSkill.MONGO_DB,
      },
      {
        name: DatabaseSkill.REDIS,
      },
      {
        name: DatabaseSkill.MYSQL,
      },
    ],
    devOps: [
      {
        name: DevOpsSkill.DOCKER,
      },
      {
        name: DevOpsSkill.BITBUCKET,
      },
      {
        name: DevOpsSkill.GITLAB,
      },
      {
        name: DevOpsSkill.JENKINS,
      },
    ],
    transversalTools: [
      {
        name: transversalToolSkill.LINUX,
      },
      {
        name: transversalToolSkill.OSX,
      },
      {
        name: transversalToolSkill.WINDOWS,
      },
      {
        name: transversalToolSkill.VSCODE,
      },
      {
        name: transversalToolSkill.GIT,
      },
      {
        name: transversalToolSkill.GITFLOW,
      },
      {
        name: transversalToolSkill.WEBSTORM,
      },
      {
        name: transversalToolSkill.JEST,
      },
    ],
    languages: [
      {
        name: Language.FRENCH,
      },
      {
        name: Language.ENGLISH,
      },
    ],
  },
  trainingCourses: [],
  hobbies: [
    Hobby.BASS_GUITAR,
    Hobby.WORKOUT,
    Hobby.HIKING,
    Hobby.READING_BOOKS,
    Hobby.CODING,
  ],
};

export const ProfileContext = createContext<IMySelf>(profile);

export const ProfileContextProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ProfileContext.Provider value={profile}>
      {children}
    </ProfileContext.Provider>
  );
};
