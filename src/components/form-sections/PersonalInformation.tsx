import React from 'react';
import { User, Mail, Phone } from 'lucide-react';
import { AssignmentFormData } from '../../types';

interface Props {
  formData: AssignmentFormData;
  onChange: (data: Partial<AssignmentFormData>) => void;
}

export default function PersonalInformation({ formData, onChange }: Props) {
  return (
    <section className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Personal Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Full Name
            </div>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={e => onChange({ name: e.target.value })}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email
            </div>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={e => onChange({ email: e.target.value })}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Phone
            </div>
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={e => onChange({ phone: e.target.value })}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
          <input
            type="date"
            value={formData.dateOfBirth}
            onChange={e => onChange({ dateOfBirth: e.target.value })}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Nationality</label>
          <input
            type="text"
            value={formData.nationality}
            onChange={e => onChange({ nationality: e.target.value })}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Current Address</label>
          <textarea
            value={formData.currentAddress}
            onChange={e => onChange({ currentAddress: e.target.value })}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            rows={2}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Marital Status</label>
          <select
            value={formData.maritalStatus}
            onChange={e => onChange({ maritalStatus: e.target.value })}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select status</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Widowed">Widowed</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Number of Dependents</label>
          <input
            type="number"
            value={formData.numberOfDependents}
            onChange={e => onChange({ numberOfDependents: parseInt(e.target.value) })}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            min="0"
            required
          />
        </div>
      </div>
    </section>
  );
}