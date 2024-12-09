export interface AssignmentFormData {
  // Personal Information
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  nationality: string;
  currentAddress: string;
  maritalStatus: string;
  numberOfDependents: number;
  
  // Professional Information
  jobRole: string;
  department: string;
  employeeId: string;
  yearsOfService: number;
  currentSalary: string;
  reportingManager: string;
  
  // Relocation Details
  destination: string;
  startDate: string;
  duration: string;
  preferredHousingType: string;
  budgetRange: string;
  schoolingRequired: boolean;
  numberOfSchoolAgeChildren: number;
  petRelocation: boolean;
  vehicleRelocation: boolean;
  languageSupport: boolean;
  visaType: string;
  requirements: string[];
}

export interface StateInfo {
  keyPoints: string[];
  error?: string;
}

export interface Assignment {
  assignee: AssignmentFormData;
  stateInfo: StateInfo;
  createdAt: string;
}