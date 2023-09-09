export const isIOSHelper = (): boolean => {
  return (
    ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPod', 'iPhone'].includes(
      navigator.platform,
    ) ||
    (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
  );
};
