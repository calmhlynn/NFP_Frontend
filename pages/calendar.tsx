import React, {SyntheticEvent, useEffect, useState} from "react";
import {datePush, DateType, TodayDate} from "../libs/client/getCalendarMonth";
import Modal from "../components/modal";

export default function Calendar() {

	const week = ['일', '월', '화', '수', '목', '금', '토']
	const date = new Date();

	const [showModal, setShowModal] = useState<boolean>(false);

	const [today, setToday] = useState<TodayDate>({
		year : date.getFullYear(),
		month: date.getMonth(),
		date : date.getDate(),
	})


	let viewDateArr: DateType[] = [];

	const [viewDate, setViewDate] = useState<DateType[]>([]);

	useEffect(() => {
		setViewDate(datePush(viewDateArr, today.year, today.month));
	}, [today.month])


	const mChoiceClick = (e: SyntheticEvent<HTMLButtonElement>) => {
		if (e.currentTarget.value === "prev") {
			setToday((prev: TodayDate) => ({
				...prev,
				year : today.month === 0 ? today.year - 1 : today.year,
				month: today.month === 0 ? today.month + 11 : today.month - 1
			}));
		} else {
			setToday((prev: TodayDate) => ({
				...prev,
				year : today.month === 11 ? today.year + 1 : today.year,
				month: today.month === 11 ? today.month - 11 : today.month + 1
			}));
		}
		setViewDate([]);
	}


	const onClickDate = (today: TodayDate) => {
		setToday(today);
		setShowModal(true);
	}


	return (
		<>
			<div className="flex justify-around">
				<button
					className="text-8xl hover:text-gray-600 transition-colors duration-300"
					value="prev"
					onClick={mChoiceClick}>«
				</button>
				<div className="flex justify-center items-center h-28 text-4xl py-10 select-none">{today.year}년 {today.month + 1}월</div>
				<button
					className="text-8xl hover:text-gray-600 transition-colors duration-300"
					value="next"
					onClick={mChoiceClick}>»
				</button>
			</div>
			<div className="grid grid-cols-7">
				{week.map((value, index) => (
					<div
						className={`px-2 py-2 w-full border border-white text-center select-none transition-colors ${index === 0 ? 'text-red-500' : null} duration-300`}
						key={`${value}+${index}`}>
						{value}
					</div>
				))}
				{viewDate.map((value, index) => (
					<button
						className={`px-2 py-8 w-full border border-white text-center transition-colors duration-300 ${value.today ? 'bg-slate-800' : null} ${value.dateIndex === 0 ? 'text-red-600' : null} ${value.thisMonth ? null : 'text-gray-800'} hover:text-green-500`}
						key={`${value}+${index}`}
						onClick={() => onClickDate(value.today_date)}
					>
						{value.today_date.date}
					</button>
				))}
			</div>
			<Modal
				showModal={showModal}
				setShowModal={setShowModal}
				date={today}/>
		</>
	);
};