type Settings = {
  groom_name: string | null;
  bride_name: string | null;

  birthday_groom: string | null;
  birthday_bride: string | null;
};

export function getBirthdayToday(
  settings: Settings
) {
  const today = new Date();

  const month =
    today.getMonth() + 1;

  const day =
    today.getDate();

  const checkBirthday = (
    date: string | null
  ) => {
    if (!date) return false;

    const birthday =
      new Date(date);

    return (
      birthday.getMonth() + 1 ===
        month &&
      birthday.getDate() ===
        day
    );
  };

  const groom =
    checkBirthday(
      settings.birthday_groom
    );

  const bride =
    checkBirthday(
      settings.birthday_bride
    );

  return {
    groom,
    bride,
  };
}