import React from 'react';
import { Briefcase, Building, DollarSign, Users } from 'lucide-react';
import { AssignmentFormData } from '../../types';

interface Props {
  formData: AssignmentFormData;
  onChange: (data: Partial<AssignmentFormData>) => void;
}

export default function ProfessionalInformation({ formData, onChange }: Props) {
  return (
    <section className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Professional Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Job Role
            </div>
          </label>
          <input
            type="text"
            value={formData.jobRole}
            onChange={e => onChange({ jobRole: e.target.value })}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center gap-2">
              <Building className="w-4 h-4" />
              Department
            </div>
          </label>
          <input
            type="text"
            value={formData.department}
            onChange={e => onChange({ department: e.target.value })}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Employee ID</label>
          <input
            type="text"
            value={formData.employeeId}
            onChange={e => onChange({ employeeId: e.target.value })}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Years of Service</label>
          <input
            type="number"
            value={formData.yearsOfService}
            onChange={e => onChange({ yearsOfService: parseInt(e.target.value) })}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            min="0"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Current Salary
            </div>
          </label>
          <input
            type="text"
            value={formData.currentSalary}
            onChange={e => onChange({ currentSalary: e.target.value })}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Reporting Manager
            </div>
          </label>
          <input
            type="text"
            value={formData.reportingManager}
            onChange={e => onChange({ reportingManager: e.target.value })}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
      </div>
    </section>
  );
}