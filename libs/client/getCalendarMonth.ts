export interface TodayDate {
	year: number;
	month: number;
	date: number;
}

export interface DateType {
	/**
	 * @param thisMonth: 이번 달인지 체크
	 * @param dateIndex: 현재 날짜가 몇 번째 요일인지(일요일 = 0 ~ 토요일 = 7) 체크
	 * @param today_date: 현재 날짜의 년, 월, 일을 숫자로 체크
	 * @param today: 오늘인지 체크
	 */
	thisMonth: boolean;
	dateIndex: number;
	today_date: TodayDate;
	today: boolean;
}

export type current_month = "prev" | "this" | "next"

export const datePush = (arr: DateType[], year: number, month: number) => {


	/**
	 * @function 해당 날짜가 현재 날짜(년, 월, 일 모두 체크)인지 확인
	 * @param iter 날짜들을 반복하는 이터러블의 수
	 * @return boolean
	 */
	const check_today = (iter: number) => {
		const date = new Date()
		return date.getDate() === iter && date.getFullYear() === year && date.getMonth() === month;
	}


	/**
	 * @function 해당 날짜들의 정보들이 들어 있는 객체를 누적해서 push 한다.
	 * @param type: 해당 날짜의 달(month)의 타입을 체크, 이전 달(prev), 현재 달(this), 다음 달(next) 3개의 타입이 있다.
	 * @param date: 해달 날짜의 Date 객체
	 */
	const get_date_info = (type: current_month, date: Date) => {
		const obj = {
			thisMonth : type === "this",
			today_date: {
				year : date.getFullYear(),
				month: date.getMonth(),
				date : date.getDate()
			},
			dateIndex : date.getDay(),
			today     : type === "this" && check_today(date.getDate()),
		}
		arr.push(obj)
	}

	const acc_date = (date: Date, type: current_month) => {
		/**
		 * @function accumulate date
		 * @description 달력을 렌더링하기 위해서는 현재 달을 포함하여 저번 달과 다음 달의 정보도 출력해야한다.
		 * 예를 들어. 현재 달의 1일이 월요일이라면, 일요일은 비어있기 때문에 저번 달의 마지막 날의 데이터를 출력해야하고
		 * 현재 달의 마지막 날이 금요일이라면, 다음 달의 첫쨰 날을 그 다음 날인 토요일에 출력이 되어야 한다.
		 *
		 * 저번 달의 마지막 날(prev)이 토요일이면 캘린더의 첫 줄이 전부 저번 달의 정보가 출력되기 때문에 가져오면 안 된다.
		 * getDay()는 해당 날의 요일 인덱스(0 ~ 6)를 나타내며 그 중 토요일은 6이기 때문에 토요일인지 체크한 후
		 * get_date_info로 날짜의 객체를 저장한다.
		 *
		 * 다음 달은 이번 달의 마지막 날이 토요일이면 다음 달의 정보를 캘린더에 렌더링할 필요가 없으므로
		 * 현재 달의 마지막 날의 요일 인덱스(getDay())가 6인지 체크 한 후 렌더링한다.
		 */

		if (type === "prev" && date.getDay() !== 6) {
			for (let i = date.getDay(); i >= 0; --i) {
				get_date_info("prev", new Date(year, month, -i));
			}
		} else if (type === "this") {
			for (let i = 1; i <= date.getDate(); i++) {
				get_date_info("this", new Date(year, month, i));
			}
		} else if (type === "next" && date.getDay() !== 6) {
			for (let i = 1; i <= 6 - date.getDay(); i++) {
				get_date_info("next", new Date(year, month + 1, i));
			}
		}
	}

	acc_date(new Date(year, month, 0), "prev");
	acc_date(new Date(year, month + 1, 0), "this");
	acc_date(new Date(year, month + 1, 0), "next");

	return arr
}