export function deployEnv() {
  return process.env.DEPLOY_ENV || 'dev';
}

export function envSpecific(logicalName: string | Function) {
  const suffix =
    typeof logicalName === 'function' ? logicalName.name : logicalName;

  return `${deployEnv()}-${suffix}`;
}
