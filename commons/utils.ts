import { Constants } from '../commons/constants';

export class Utils {
    public static getParsedDate(extra_minutes: number) {
        let date = new Date();
        if (extra_minutes > 0) {
            date = new Date(date.getTime() + extra_minutes * 60 * 1000); // Add minutes
        }
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let is_pm = false;

        if (minutes >= 55) {
            date = new Date(date.getTime() + 5 * 60 * 1000); // Add 5 minutes
            hours = date.getHours();
            minutes = date.getMinutes();
        }
        if (minutes !== 0) {
            let index = 0;
            for (let i = 0; i < Constants.MINUTES_DATEPICKER.length; i++) {
                if (Constants.MINUTES_DATEPICKER[i] > date.getMinutes()) {
                    index = i;
                    break;
                }
            }
            minutes = Constants.MINUTES_DATEPICKER[index];
        }

        is_pm = (hours >= 12);
        hours = (hours > 12) ? hours - 12 : hours;

        return {
            day: date.getDay().toString().padStart(2, '0'),
            hours: hours.toString(),
            is_pm,
            minutes: minutes.toString(),
            month: date.getMonth() + 1,
            string_month: Constants.MONTHS_NAMES[date.getMonth()],
            year: date.getFullYear().toString(),
        };
    }
}
