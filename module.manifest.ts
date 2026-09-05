export const moduleManifest = {
  schemaVersion: 1,
  id: 'tiny-weekly-review',
  version: '0.1.0-foundation',
  name: { fa: 'مرور هفتگی', en: 'Weekly Review' },
  description: {
    fa: 'مرور کوتاه موفقیت‌ها، موانع، تصمیم‌ها و اولویت‌های هفته بعد.',
    en: 'Review wins, blockers, decisions and next-week priorities.',
  },
  icon: 'ClipboardCheck',
  route: '/modules/weekly-review',
  category: 'planning',
  maturity: 'foundation',
  capabilities: {
    dashboardWidget: true,
    globalSearch: true,
    exportData: true,
    sharedPeople: true,
    sharedProjects: true,
    notifications: false,
    assistantActions: true,
  },
  plannedAssistantActions: [
    'tiny-weekly-review.prepare',
    'tiny-weekly-review.complete',
    'tiny-weekly-review.export',
  ],
} as const;
