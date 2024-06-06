import React from 'react'
import { Outlet, createBrowserRouter } from 'react-router-dom'
import App from '../../App'
import Dashboard from '../../scenes/dashboard';
import Team from '../../scenes/team';
import Contact from '../../scenes/contacts';
import User_Reg_Form from '../../scenes/form';
import Calendar from '../../scenes/calendar';
import Community_Unit from '../../scenes/community_unit';
import CommunityUnitRegistration from "../../scenes/community_unit/form"
import ClinicalManagement from '../../scenes/clinical';
import PatientVisit from '../../scenes/clinical/patient_visits';
import Diagnosis from '../../scenes/clinical/Diagnosis';
import Medical_Records from '../../scenes/clinical/Diagnosis/Records';
import Consultation from '../../scenes/clinical/Diagnosis/consultation';
import Current_Medication from '../../scenes/clinical/Diagnosis/consultation/consultation_elements/Current_medication';
import Presenting_Complaint from '../../scenes/clinical/Diagnosis/consultation/consultation_elements/presenting_complaint';
import History_and_Examination from '../../scenes/clinical/Diagnosis/consultation/consultation_elements/History_and_examination';
import Diagnosis_Structure from '../../scenes/clinical/Diagnosis/consultation/consultation_elements/diagnosis';
import Nurse_assessment from '../../scenes/clinical/Diagnosis/consultation/consultation_elements/nurse_assessment';
import Allergies from '../../scenes/clinical/Diagnosis/Records/Records_elements/allergies';
import Immunization from '../../scenes/clinical/Diagnosis/Records/Records_elements/immunization';
import Hospital_Management from '../../scenes/hospital';
import HospitaTable from '../../scenes/hospital/table';
import FacilityRegister from '../../scenes/hospital/form';

const accessLevel = "Admin V";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Outlet />,
        children: [
            {
                path: "info",
                element: <App accessLevel={accessLevel} />,
                children: [
                    {
                        path: "dashboard",
                        element: <Dashboard accessLevel={accessLevel} />
                    },
                    {
                        path: "team",
                        element: <Team />
                    },
                    {
                        path: "contacts",
                        element: <Contact />
                    },
                    {
                        path: "form",
                        element: <User_Reg_Form />
                    },
                    {
                        path: "patient_reg",
                        element: <Outlet />
                    },
                    {
                        path: "doc/nurse",
                        element: <Outlet />
                    },
                    {
                        path: "discharge",
                        element: <Outlet />
                    },
                    {
                        path: "community_unit",
                        element: <Community_Unit />
                    },
                    {
                        path: "community_unit/register",
                        element: <CommunityUnitRegistration />

                    },
                    {
                        path: "invoices",
                        element: <Outlet />
                    },
                    {
                        path: "calendar",
                        element: <Calendar />
                    },
                    {
                        path: "clinical_management",
                        element: <ClinicalManagement />
                        
                    },
                    {
                        path: "hospital",
                        element: <Hospital_Management />,
                        children:[
                            {
                                path: "",
                                element:<HospitaTable/>
                            },
                            {
                                path: "register",
                                element:<FacilityRegister/>
                            }
                        ]
                        
                    },
                    {
                        path: "patient_visits",
                        element: <PatientVisit />

                    },
                    {
                        path: "diagnosis",
                        element: <Diagnosis />,
                        children:[
                            {
                                path: "medical_records",
                                element: <Medical_Records />,
                                children: [
                                    {
                                        path: "allergies",
                                        element:<Allergies/>
                                    },
                                    {
                                        path: "immunization",
                                        element:<Immunization/>
                                    },
                                ]
                                
                            },
                            {
                                path: "consultation",
                                element: <Consultation />,
                                children: [
                                    {
                                        path: 'nurse_assessment',
                                        element:<Nurse_assessment/>
                                    },
                                    {
                                        path: 'current_medication',
                                        element:<Current_Medication/>
                                    },
                                    {
                                        path: 'complaint',
                                        element:<Presenting_Complaint/>
                                    },
                                    {
                                        path: 'history_examination',
                                        element:<History_and_Examination/>
                                    },
                                    {
                                        path: 'diagnosis',
                                        element:<Diagnosis_Structure/>
                                    },
                                    
                                ]
                            }
                        ]
                    },

                ]
            }
        ]
    }
])


export default Router;