export function getTime() {
  const date = new Date();

  const minutos = Number(date.getMinutes());
  const dateHour = Number(date.getHours());

  switch (true) {
    case dateHour >= 22 && minutos >= 15:
      return 110;

    case dateHour >= 21 && minutos >= 15:
      return 93;

    case dateHour >= 20 && minutos >= 15:
      return 86;

    case dateHour >= 20 && minutos >= 0:
      return 77;

    case dateHour >= 19 && minutos >= 0:
      return 65;

    case dateHour >= 18 && minutos >= 0:
      return 58;

    case dateHour >= 14 && minutos >= 15:
      return 47;

    case dateHour >= 13 && minutos >= 45:
      return 39;

    case dateHour >= 13 && minutos >= 30:
      return 30;

    case dateHour >= 12 && minutos >= 0:
      return 20;

    case dateHour >= 11 && minutos >= 30:
      return 11;

    default:
      return 2;
  }
}
