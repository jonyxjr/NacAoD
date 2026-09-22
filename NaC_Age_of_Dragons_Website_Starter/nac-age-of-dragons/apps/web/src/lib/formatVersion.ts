export function formatVersion(version: string) {
  return version.startsWith('v') ? version : `v${version}`;
}
