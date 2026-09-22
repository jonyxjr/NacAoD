export const environment = {
  apiUrl: import.meta.env.VITE_API_URL ?? 'http://localhost:3000',
  githubOwner: import.meta.env.VITE_GITHUB_OWNER ?? '',
  githubRepo: import.meta.env.VITE_GITHUB_REPO ?? '',
};
