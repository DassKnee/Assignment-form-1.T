import { StateInfo } from '../types';

export const stateInfoData: Record<string, StateInfo> = {
  'California': {
    housingCost: 'Average housing cost in major cities is $3,500/month',
    regulations: [
      'Housing permit required for new residents',
      'Strict vehicle registration laws',
      'State tax registration needed within 30 days'
    ],
    climate: 'Mediterranean climate with mild winters and warm summers',
    livingCost: 'High cost of living compared to national average'
  },
  'Texas': {
    housingCost: 'Average housing cost in major cities is $1,800/month',
    regulations: [
      'No state income tax',
      'Vehicle registration required within 30 days',
      'Property tax considerations'
    ],
    climate: 'Hot summers and mild winters, varies by region',
    livingCost: 'Lower cost of living compared to coastal states'
  }
};