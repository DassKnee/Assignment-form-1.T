import React, { useState } from 'react';
import { Calendar, Briefcase, MapPin, ClipboardList, User, Mail, Phone, Building, DollarSign, Users, Home, Plane } from 'lucide-react';
import { AssignmentFormData } from '../types';

interface Props {
  onSubmit: (data: AssignmentFormData) => void;
  onAutoFill: () => void;
}

export default function AssignmentForm({ onSubmit, onAutoFill }: Props) {
  const [formData, setFormData] = useState<AssignmentFormData>({
    name: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    nationality: '',
    currentAddress: '',
    maritalStatus: '',
    numberOfDependents: 0,
    jobRole: '',
    department: '',
    employeeId: '',
    yearsOfService: 0,
    currentSalary: '',
    reportingManager: '',
    destination: '',
    startDate: '',
    duration: '',
    preferredHousingType: '',
    budgetRange: '',
    schoolingRequired: false,
    numberOfSchoolAgeChildren: 0,
    petRelocation: false,
    vehicleRelocation: false,
    languageSupport: false,
    visaType: '',
    requirements: []
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleRequirementChange = (requirement: string) => {
    setFormData(prev => ({
      ...prev,
      requirements: prev.requirements.includes(requirement)
        ? prev.requirements.filter(r => r !== requirement)
        : [...prev.requirements, requirement]
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Relocation Assignment Form</h2>
        <button
          type="button"
          onClick={onAutoFill}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          Auto-fill Example Data
        </button>
      </div>

      {/* Personal Information Section */}
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
              onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
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
              onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
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
              onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input
              type="date"
              value={formData.dateOfBirth}
              onChange={e => setFormData(prev => ({ ...prev, dateOfBirth: e.target.value }))}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Nationality</label>
            <input
              type="text"
              value={formData.nationality}
              onChange={e => setFormData(prev => ({ ...prev, nationality: e.target.value }))}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Current Address</label>
            <textarea
              value={formData.currentAddress}
              onChange={e => setFormData(prev => ({ ...prev, currentAddress: e.target.value }))}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              rows={2}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Marital Status</label>
            <select
              value={formData.maritalStatus}
              onChange={e => setFormData(prev => ({ ...prev, maritalStatus: e.target.value }))}
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
              onChange={e => setFormData(prev => ({ ...prev, numberOfDependents: parseInt(e.target.value) }))}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              min="0"
              required
            />
          </div>
        </div>
      </section>

      {/* Professional Information Section */}
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
              onChange={e => setFormData(prev => ({ ...prev, jobRole: e.target.value }))}
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
              onChange={e => setFormData(prev => ({ ...prev, department: e.target.value }))}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Employee ID</label>
            <input
              type="text"
              value={formData.employeeId}
              onChange={e => setFormData(prev => ({ ...prev, employeeId: e.target.value }))}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Years of Service</label>
            <input
              type="number"
              value={formData.yearsOfService}
              onChange={e => setFormData(prev => ({ ...prev, yearsOfService: parseInt(e.target.value) }))}
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
              onChange={e => setFormData(prev => ({ ...prev, currentSalary: e.target.value }))}
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
              onChange={e => setFormData(prev => ({ ...prev, reportingManager: e.target.value }))}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>
      </section>

      {/* Relocation Details Section */}
      <section className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Relocation Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Destination State
              </div>
            </label>
            <select
              value={formData.destination}
              onChange={e => setFormData(prev => ({ ...prev, destination: e.target.value }))}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select a state</option>
              <option value="California">California</option>
              <option value="Texas">Texas</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Start Date
              </div>
            </label>
            <input
              type="date"
              value={formData.startDate}
              onChange={e => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Assignment Duration</label>
            <select
              value={formData.duration}
              onChange={e => setFormData(prev => ({ ...prev, duration: e.target.value }))}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select duration</option>
              <option value="6 months">6 months</option>
              <option value="1 year">1 year</option>
              <option value="2 years">2 years</option>
              <option value="Permanent">Permanent</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              <div className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Preferred Housing Type
              </div>
            </label>
            <select
              value={formData.preferredHousingType}
              onChange={e => setFormData(prev => ({ ...prev, preferredHousingType: e.target.value }))}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select housing type</option>
              <option value="Apartment">Apartment</option>
              <option value="House">House</option>
              <option value="Townhouse">Townhouse</option>
              <option value="Temporary Housing">Temporary Housing</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Monthly Budget Range</label>
            <select
              value={formData.budgetRange}
              onChange={e => setFormData(prev => ({ ...prev, budgetRange: e.target.value }))}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select budget range</option>
              <option value="$1,000-$2,000">$1,000-$2,000</option>
              <option value="$2,000-$3,000">$2,000-$3,000</option>
              <option value="$3,000-$4,000">$3,000-$4,000</option>
              <option value="$4,000+">$4,000+</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              <div className="flex items-center gap-2">
                <Plane className="w-4 h-4" />
                Visa Type
              </div>
            </label>
            <input
              type="text"
              value={formData.visaType}
              onChange={e => setFormData(prev => ({ ...prev, visaType: e.target.value }))}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="e.g., H1-B, L1, etc."
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.schoolingRequired}
                onChange={e => setFormData(prev => ({ ...prev, schoolingRequired: e.target.checked }))}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">School-age Children</span>
            </label>
            {formData.schoolingRequired && (
              <input
                type="number"
                value={formData.numberOfSchoolAgeChildren}
                onChange={e => setFormData(prev => ({ ...prev, numberOfSchoolAgeChildren: parseInt(e.target.value) }))}
                className="w-20 px-2 py-1 border border-gray-300 rounded-md"
                min="0"
                placeholder="#"
              />
            )}
          </div>

          <div className="flex flex-wrap gap-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.petRelocation}
                onChange={e => setFormData(prev => ({ ...prev, petRelocation: e.target.checked }))}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Pet Relocation</span>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.vehicleRelocation}
                onChange={e => setFormData(prev => ({ ...prev, vehicleRelocation: e.target.checked }))}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Vehicle Relocation</span>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.languageSupport}
                onChange={e => setFormData(prev => ({ ...prev, languageSupport: e.target.checked }))}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Language Support</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center gap-2">
              <ClipboardList className="w-4 h-4" />
              Additional Requirements
            </div>
          </label>
          <div className="space-y-2">
            {[
              'Temporary Housing',
              'Immigration Assistance',
              'Vehicle Registration',
              'School Search',
              'Spouse Employment Support',
              'Cultural Training',
              'Tax Consultation',
              'Banking Setup'
            ].map(requirement => (
              <label key={requirement} className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.requirements.includes(requirement)}
                  onChange={() => handleRequirementChange(requirement)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 h-4 w-4"
                />
                <span className="ml-2 text-sm text-gray-600">{requirement}</span>
              </label>
            ))}
          </div>
        </div>
      </section>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Create Assignment
      </button>
    </form>
  );
}