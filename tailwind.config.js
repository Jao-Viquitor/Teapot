module.exports = {
  darkMode: 'class',
  content: [
    './client/**/*.html',
    './client/**/*.js',
    './client/**/*.jsx',
    './imports/**/*.js',
    './imports/**/*.jsx',
    './imports/**/*.html',
    './server/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          textPrimary: '#f2f8fd',
          textSecondary: '#cbd5e1',
          textAccent: '#38bdf8',
          bgPrimary: '#112A46',
          bgSecondary: '#1c3b57',
          bgAccent: '#334155',
          borderPrimary: '#64748b',
          borderSecondary: '#475569',
          linkDefault: '#38bdf8',
          linkHover: '#0ea5e9',
          buttonPrimary: '#3b82f6',
          buttonSecondary: '#2563eb',
          buttonHover: '#1d4ed8',
          buttonText: '#ffffff',
          iconDefault: '#e2e8f0',
          iconHover: '#38bdf8',
          inputBackground: '#1e293b',
          inputText: '#f1f5f9',
          inputBorder: '#475569',
          shadowPrimary: 'rgba(0, 0, 0, 0.75)',
          shadowSecondary: 'rgba(0, 0, 0, 0.5)',
        },
        light: {
          textPrimary: '#1f2937',
          textSecondary: '#4b5563',
          textAccent: '#2563eb',
          bgPrimary: '#f9fafb',
          bgSecondary: '#e5e7eb',
          bgAccent: '#e0e7ff',
          borderPrimary: '#d1d5db',
          borderSecondary: '#e5e7eb',
          linkDefault: '#2563eb',
          linkHover: '#1d4ed8',
          buttonPrimary: '#3b82f6',
          buttonSecondary: '#2563eb',
          buttonHover: '#1d4ed8',
          buttonText: '#ffffff',
          iconDefault: '#4b5563',
          iconHover: '#2563eb',
          inputBackground: '#ffffff',
          inputText: '#111827',
          inputBorder: '#d1d5db',
          shadowPrimary: 'rgba(0, 0, 0, 0.1)',
          shadowSecondary: 'rgba(0, 0, 0, 0.05)',
        }
      }
    },
    variants: {
      extend: {
        backgroundColor: ['dark'],
      },
    },
  },
  plugins: [

  ],
}
