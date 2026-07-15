export function isBirthdayToday(
  date: string | null
) {

  if (!date) {
    return false;
  }


  const today =
    new Date();


  const birthday =
    new Date(date);



  return (
    today.getDate() === birthday.getDate()
    &&
    today.getMonth() === birthday.getMonth()
  );

}