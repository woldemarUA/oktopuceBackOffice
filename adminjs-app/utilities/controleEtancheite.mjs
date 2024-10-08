const controleEtancheite = (poids, potentiel, detection) => {
  if (!poids) return `s'il vous plait tapez le poids / choissez type de gaz `;
  const charge = (poids * potentiel) / 1000;
  // console.log(charge);

  if (isNaN(charge)) return `Pas assez d'information`;
  if (charge < 5) {
    return detection
      ? `pas
        d’obligation` // Avec système de détection
      : 'Une fois par an'; // Sans système de détection
  }

  if (charge >= 5 && charge <= 50) {
    return detection
      ? 'Tous les 2 ans' // Avec système de détection
      : 'Tous les 6 mois'; // Sans système de détection
  }

  if (charge > 50 && charge <= 500) {
    return detection
      ? 'Tous les ans' // Avec système de détection
      : 'Tous les 6 mois'; // Sans système de détection
  }

  // En supposant des charges supérieures à 500 t Eq. CO2
  return detection
    ? 'Tous les 6 mois' // Avec système de détection
    : 'Tous les 3 mois'; // Sans système de détection
};

export default controleEtancheite;

export const temperatureOptions = (start, end, step = 1) => {
  const range = [];
  if (step > 0) {
    for (let i = start; i < end; i += step) {
      range.push(i);
    }
  } else if (step < 0) {
    for (let i = start; i > end; i += step) {
      range.push(i);
    }
  }
  const options = [];
  range.forEach((r) => options.push({ value: r, label: r }));
  return options;
};
