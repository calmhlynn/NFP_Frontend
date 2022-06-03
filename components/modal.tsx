import React, {useState} from "react";
import {TodayDate} from "../libs/client/getCalendarMonth";

interface ModalProps {
	showModal: boolean;
	setShowModal: Function
	date: TodayDate
}

export default function Modal({ showModal, setShowModal, date }: ModalProps) {

	return (
		<>
			{showModal ? (
				<>
					<div className="flex justify-center items-center fixed inset-0 overflow-x-hidden overflow-y-auto z-20 outline-none focus:outline-none">
						<div className="relative my-6 mx-auto max-w-3xl min-w-[50%]">
							<div className="flex flex-col w-full bg-neutral-500 border-0 rounded-lg shadow-lg outline-none focus:outline-none">
								<div className="relative p-6 flex-auto h-56">
									<p className="my-4 text-lg leading-relaxed">
										{date.year}년 {date.month + 1}월 {date.date}일
									</p>
								</div>
								<div className="flex justify-end items-end border-slate-200 gap-5 py-3 px-3">
									<button
										className="bg-red-500 px-6 py-2 outline-none rounded-md focus:outline-none transition-all duration-150"
										type="button"
										onClick={() => setShowModal(false)}
									>
										취소
									</button>
									<button
										className="bg-green-400 px-6 py-2 outline-none rounded-md focus:outline-none transition-all duration-150"
										type="button"
										onClick={() => setShowModal(false)}
									>
										등록
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-75 fixed inset-0 z-10 bg-black"/>
				</>
			) : null}
		</>
	)
}