export function getTime() {
  const date = new Date();
  const dateHour = date.getHours() + ':' + date.getMinutes();

  if (dateHour >= '22:15') return 100;
  if (dateHour >= '21:15') return 93;
  if (dateHour >= '20:15') return 86;
  if (dateHour >= '20:00') return 77;
  if (dateHour >= '19:00') return 72;
  if (dateHour >= '18:00') return 63;
  if (dateHour >= '14:30') return 54;
  if (dateHour >= '14:00') return 45;
  if (dateHour >= '13:45') return 36;
  if (dateHour >= '13:30') return 27;
  if (dateHour >= '12:00') return 18;
  if (dateHour >= '11:29') return 9;
  if (dateHour > '00:00') return 2;

  return dateHour;
}
