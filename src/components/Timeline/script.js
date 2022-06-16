export function getTime() {
  const date = new Date();

  const minutos = Number(date.getMinutes());
  const dateHour = Number(date.getHours());

  const totalMinutes = dateHour * 60 + minutos;
  console.log(totalMinutes);

  switch (true) {
    case totalMinutes < 690:
      return 2;

    case totalMinutes >= 1335:
      return 100;

    case totalMinutes >= 1275:
      return 93;

    case totalMinutes >= 1215:
      return 86;

    case totalMinutes >= 1200:
      return 77;

    case totalMinutes >= 1140:
      return 65;

    case totalMinutes >= 1080:
      return 58;

    case totalMinutes >= 855:
      return 47;

    case totalMinutes >= 825:
      return 39;

    case totalMinutes >= 810:
      return 30;

    case totalMinutes >= 720:
      return 20;

    case totalMinutes >= 690:
      return 11;

    default:
      return 0;
  }
}
