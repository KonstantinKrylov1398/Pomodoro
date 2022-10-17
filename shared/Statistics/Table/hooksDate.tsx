export function hookDate() {
  const date = new Date();
  const day = date.getDay();
  console.log(day);
  switch (day) {
    case 0: {
      return "Вс";
    }
    case 1: {
      return "Пн";
    }
    case 2: {
      return "Вт";
    }
    case 3: {
      return "Ср";
    }
    case 4: {
      return "Чт";
    }
    case 5: {
      return "Пт";
    }
    case 5: {
      return "Сб";
    }
  }
}
