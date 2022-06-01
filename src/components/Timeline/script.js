export function getTime() {
  const date = new Date();

  const minutos = Number(date.getMinutes());
  const dateHour = Number(date.getHours());

  switch (true) {
    case dateHour >= 22 && minutos >= 15:
      return 100;

    case dateHour >= 21 && minutos >= 15:
      return 93;

    case dateHour >= 20 && minutos >= 15:
      return 86;

    case dateHour >= 20 && minutos >= 0:
      return 77;

    case dateHour >= 19 && minutos >= 0:
      return 72;

    case dateHour >= 18 && minutos >= 0:
      return 63;

    case dateHour >= 15 && minutos >= 0:
      return 54;

    case dateHour >= 14 && minutos >= 15:
      return 45;

    case dateHour >= 13 && minutos >= 45:
      return 36;

    case dateHour >= 13 && minutos >= 30:
      return 27;

    case dateHour >= 12 && minutos >= 0:
      return 18;

    case dateHour >= 11 && minutos >= 30:
      return 9;

    default:
      return 2;
  }
}
