export function getTime() {
  const date = new Date();
  let minutos;

  if (Number(date.getMinutes()) > 45) {
    minutos = 8;
  }

  if (Number(date.getMinutes()) > 30) {
    minutos = 5;
  }

  if (Number(date.getMinutes()) > 15) {
    minutos = 3;
  }

  if (Number(date.getMinutes()) > 0) {
    minutos = 0;
  }

  const dateHour = Number(date.getHours());

  if (dateHour >= 22 && minutos >= 3) return 100;
  if (dateHour >= 21 && minutos >= 3) return 93;
  if (dateHour >= 20 && minutos >= 3) return 86;
  if (dateHour >= 20 && minutos >= 0) return 77;
  if (dateHour >= 19 && minutos >= 0) return 72;
  if (dateHour >= 18 && minutos >= 0) return 63;
  if (dateHour >= 14 && minutos >= 5) return 54;
  if (dateHour >= 14 && minutos >= 0) return 45;
  if (dateHour >= 13 && minutos >= 8) return 36;
  if (dateHour >= 13 && minutos >= 0) return 27;
  if (dateHour >= 12 && minutos >= 0) return 18;
  if (dateHour >= 11 && minutos >= 5) return 9;
  if (dateHour > 0) return 2;

  return dateHour;
}
