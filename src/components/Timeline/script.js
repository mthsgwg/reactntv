export function getTime() {
  const date = new Date();
  const dateHour = date.getHours() + ':' + date.getMinutes();

  if (dateHour > '22:15') return 100;
  if (dateHour > '21:15') return 93;
  if (dateHour > '20:15') return 83;
  if (dateHour > '20:00') return 73;
  if (dateHour > '19:00') return 64;
  if (dateHour > '18:00') return 57;
  if (dateHour > '14:30') return 47;
  if (dateHour > '13:45') return 37;
  if (dateHour > '13:30') return 28;
  if (dateHour > '12:00') return 20;
  if (dateHour > '11:29') return 10;
  if (dateHour > '00:00' && dateHour < '23:59') return 2;

  return dateHour;
}
