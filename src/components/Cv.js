import React from "react";
import data from '../store/store';
import Avatar from "./Avatar";
import Contacts from "./Contacts";
import SoftSkills from "./SoftSkills";
import HardSkills from "./HardSkills";
import Languages from "./Languages";
import Projects from "./Projects/Projects";
import Education from "./Education";
import WorkExperience from "./WorkExperience/WorkExperience";

export const Cv = (props) => {
    let lang;
    let draw;

    switch (props.match.params.lang) {
        case 'pl':
            lang = {
                name: data.name.pl,
                city: data.city.pl,
                myPosition: data.myPosition.pl,
                softSkillsTitle: data.softSkillsTitle.pl,
                softSkillsText: data.softSkillsText.pl,
                hardSkillsTitle: data.hardSkillsTitle.pl,
                languagesTitle: data.languagesTitle.pl,
                projectsTitle: data.projectsTitle.pl,
                projectDescription: {
                    projectToDoList: data.projectDescription.projectToDoList.pl,
                    projectCV: data.projectDescription.projectCV.pl,
                    projectNordFrost: data.projectDescription.projectNordFrost.pl
                },
                educationTitle: data.educationTitle.pl,
                education: {
                    codersLab: data.education.codersLab.pl,
                    university: data.education.university.pl
                },
                workExperienceTitle: data.workExperienceTitle.pl,
                workExperience: data.workExperience.pl
            }
            break;
        case 'en':
            lang = {
                name: data.name.en,
                city: data.city.en,
                myPosition: data.myPosition.en,
                softSkillsTitle: data.softSkillsTitle.en,
                softSkillsText: data.softSkillsText.en,
                hardSkillsTitle: data.hardSkillsTitle.en,
                languagesTitle: data.languagesTitle.en,
                projectsTitle: data.projectsTitle.en,
                projectDescription: {
                    projectToDoList: data.projectDescription.projectToDoList.en,
                    projectCV: data.projectDescription.projectCV.en,
                    projectNordFrost: data.projectDescription.projectNordFrost.en
                },
                educationTitle: data.educationTitle.en,
                education: {
                    codersLab: data.education.codersLab.en,
                    university: data.education.university.en
                },
                workExperienceTitle: data.workExperienceTitle.en,
                workExperience: data.workExperience.en
            }
            break;
        case 'ua':
            lang = {
                name: data.name.ua,
                city: data.city.ua,
                myPosition: data.myPosition.ua,
                softSkillsTitle: data.softSkillsTitle.ua,
                softSkillsText: data.softSkillsText.ua,
                hardSkillsTitle: data.hardSkillsTitle.ua,
                languagesTitle: data.languagesTitle.ua,
                projectsTitle: data.projectsTitle.ua,
                projectDescription: {
                    projectToDoList: data.projectDescription.projectToDoList.ua,
                    projectCV: data.projectDescription.projectCV.ua,
                    projectNordFrost: data.projectDescription.projectNordFrost.ua
                },
                educationTitle: data.educationTitle.ua,
                education: {
                    codersLab: data.education.codersLab.ua,
                    university: data.education.university.ua
                },
                workExperienceTitle: data.workExperienceTitle.ua,
                workExperience: data.workExperience.ua
            }
            break;
        case 'ru':
            lang = {
                name: data.name.ru,
                city: data.city.ru,
                myPosition: data.myPosition.ru,
                softSkillsTitle: data.softSkillsTitle.ru,
                softSkillsText: data.softSkillsText.ru,
                hardSkillsTitle: data.hardSkillsTitle.ru,
                languagesTitle: data.languagesTitle.ru,
                projectsTitle: data.projectsTitle.ru,
                projectDescription: {
                    projectToDoList: data.projectDescription.projectToDoList.ru,
                    projectCV: data.projectDescription.projectCV.ru,
                    projectNordFrost: data.projectDescription.projectNordFrost.ru
                },
                educationTitle: data.educationTitle.ru,
                education: {
                    codersLab: data.education.codersLab.ru,
                    university: data.education.university.ru
                },
                workExperienceTitle: data.workExperienceTitle.ru,
                workExperience: data.workExperience.ru
            }
            break;
        default:
            lang = null
    }


    if (lang) {
        draw = (
            <div className='cvWrapper'>
                    <Avatar/>
                    <SoftSkills softSkillsTitle={lang.softSkillsTitle} softSkillsText={lang.softSkillsText}/>
                    <HardSkills hardSkillTitle={lang.hardSkillsTitle}/>
                    <Languages languagesTitle={lang.languagesTitle}/>
                    <Contacts name={lang.name} city={lang.city} myPosition={lang.myPosition}/>
                    <Projects
                        projectsTitle={lang.projectsTitle}
                        projectDescription={lang.projectDescription}
                        hardSkillTitle={lang.hardSkillsTitle}
                    />
                    <Education
                        educationTitle={lang.educationTitle}
                        education={lang.education}
                    />
                    <WorkExperience
                        workExpirienceTitle={lang.workExperienceTitle}
                        workExperience={lang.workExperience}
                    />
            </div>
        )
    } else {
        draw = null
    }

    return draw
}