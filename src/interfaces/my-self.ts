import { BackendSkill, DatabaseSkill, DevOpsSkill, FrontendSkill, Language, SkillType, transversalToolSkill } from "../enums";
import { ISKill } from "./skill";


export interface IMySelf {
    fullName: string;
    birthDate: Date;
    skills: {
        [SkillType.FRONTEND]: ISKill<FrontendSkill>[];
        [SkillType.BACKEND]: ISKill<BackendSkill>[];
        [SkillType.DATABASE]: ISKill<DatabaseSkill>[];
        [SkillType.DEVOPS]: ISKill<DevOpsSkill>[];
        [SkillType.TRANSVERSAL_TOOLS]: ISKill<transversalToolSkill>[];
        [SkillType.LANGUAGES]: ISKill<Language>[];
    };
    professionalExperiences: any[];
    trainingCourses: any[];
    educationDegrees: any[];
    hobbies: string[]
}