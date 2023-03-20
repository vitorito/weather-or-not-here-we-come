const getWindDirectionName = (direction: number) => {
  const direction360 = direction % 360;

  if (direction360 === 0) return 'Leste';

  if (direction360 > 0 && direction360 < 90) return 'Nordeste';

  if (direction360 === 90) return 'Norte';

  if (direction360 > 90 && direction360 < 180) return 'Noroeste';

  if (direction360 === 180) return 'Oeste';

  if (direction360 > 180 && direction360 < 270) return 'Sudoeste';

  if (direction360 === 270) return 'Sul';

  if (direction360 > 270 && direction360 < 360) return 'Sudeste';

  return null;
};

export default getWindDirectionName;
