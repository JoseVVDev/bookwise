import dayjs from "dayjs";
import duration from "dayjs/plugin/duration"

export default function calcDate(date: Date) {

  dayjs.extend(duration)

  let now = dayjs()
  let dateOfCreation = dayjs(date)
  let difference = now.diff(dateOfCreation, "m")

  switch (true) {
  case difference === 0 :
    return "Agora"
    break;

  case difference < 1:
    return `Há ${difference} minuto`
    break;

  case difference <= 59:
    return `Há ${difference} minutos`
    break;

  case difference < 180:
    difference = dayjs.duration(difference, "minutes").hours()
    return `Há ${difference} hora`
    break

  case difference <= 1439:
    difference = dayjs.duration(difference, "minutes").hours()
    return `Há ${difference} horas`
    break

  case difference < 2880:
    difference = dayjs.duration(difference, "minutes").days()
    return `Há ${difference} dia`
    break

  case difference <= 10079:
    difference = dayjs.duration(difference, "minutes").days()
    return `Há ${difference} dias`
    break

  case difference < 20160:
    difference = dayjs.duration(difference, "minutes").weeks()
    return `Há ${difference} semana`
    break

  case difference <= 40319:
    difference = dayjs.duration(difference, "minutes").weeks()
    return `Há ${difference} semanas`
    break

  case difference < 80640:
    difference = dayjs.duration(difference, "minutes").months()
    return `Há ${difference} mês`
    break

  case difference <= 483839:
    difference = dayjs.duration(difference, "minutes").months()
    return `Há ${difference} meses`
    break

  case difference < 1051200:
    difference = dayjs.duration(difference, "minutes").years()
    return `Há ${difference} ano`
    break

  case difference > 1051200:
    difference = dayjs.duration(difference, "minutes").years()
    return `Há ${difference} anos`
    break

  default:
    return difference
    break;
  }

}