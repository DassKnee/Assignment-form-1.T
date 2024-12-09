import React, { useState } from 'react';
import AssignmentForm from './components/AssignmentForm';
import AssignmentSummary from './components/AssignmentSummary';
import { AssignmentFormData, Assignment } from './types';
import { generateStateInfo } from './utils/openai';

function App() {
  const [assignment, setAssignment] = useState<Assignment | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (formData: AssignmentFormData) => {
    setLoading(true);
    setError(null);
    
    try {
      const stateInfo = await generateStateInfo(formData.destination);
      
      const newAssignment: Assignment = {
        assignee: formData,
        stateInfo,
        createdAt: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
      };
      
      setAssignment(newAssignment);
    } catch (err) {
      setError('Failed to generate state information. Please try again.');
      console.error('Error creating assignment:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAutoFill = () => {
    const exampleData: AssignmentFormData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567',
      dateOfBirth: '1985-06-15',
      nationality: 'United States',
      currentAddress: '123 Main St, Boston, MA 02108',
      maritalStatus: 'Married',
      numberOfDependents: 2,
      jobRole: 'Software Engineer',
      department: 'Engineering',
      employeeId: 'EMP001',
      yearsOfService: 5,
      currentSalary: '$120,000',
      reportingManager: 'Jane Smith',
      destination: 'California',
      startDate: '2024-03-01',
      duration: '2 years',
      preferredHousingType: 'House',
      budgetRange: '$3,000-$4,000',
      schoolingRequired: true,
      numberOfSchoolAgeChildren: 2,
      petRelocation: true,
      vehicleRelocation: true,
      languageSupport: false,
      visaType: 'H1-B',
      requirements: ['Temporary Housing', 'School Search', 'Immigration Assistance']
    };
    handleSubmit(exampleData);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {error && (
        <div className="max-w-4xl mx-auto mb-6 bg-red-50 border border-red-200 text-red-800 rounded-lg p-4">
          {error}
        </div>
      )}
      
      {loading ? (
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Generating relocation information...</p>
        </div>
      ) : !assignment ? (
        <AssignmentForm onSubmit={handleSubmit} onAutoFill={handleAutoFill} />
      ) : (
        <div className="space-y-6">
          <AssignmentSummary assignment={assignment} />
          <div className="flex justify-center">
            <button
              onClick={() => setAssignment(null)}
              className="text-blue-600 hover:text-blue-800"
            >
              Create New Assignment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;