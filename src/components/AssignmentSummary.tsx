import React from 'react';
import { Assignment } from '../types';
import { FileText, MapPin, Calendar, Briefcase, ClipboardList } from 'lucide-react';

interface Props {
  assignment: Assignment;
}

export default function AssignmentSummary({ assignment }: Props) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
      <div className="border-b pb-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Relocation Assignment Summary</h2>
        <p className="text-sm text-gray-500">Created on {assignment.createdAt}</p>
      </div>

      <div className="space-y-6">
        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Assignee Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-medium">{assignment.assignee.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Job Role</p>
                <p className="font-medium">{assignment.assignee.jobRole}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Destination</p>
                <p className="font-medium">{assignment.assignee.destination}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Start Date</p>
                <p className="font-medium">{assignment.assignee.startDate}</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h3>
          <div className="flex flex-wrap gap-2">
            {assignment.assignee.requirements.map((requirement) => (
              <span
                key={requirement}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {requirement}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">State Information</h3>
          {assignment.stateInfo.error ? (
            <p className="text-red-600">{assignment.stateInfo.error}</p>
          ) : (
            <ul className="space-y-3">
              {assignment.stateInfo.keyPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200"
        >
          <FileText className="w-4 h-4" />
          Print Summary
        </button>
      </div>
    </div>
  );
}