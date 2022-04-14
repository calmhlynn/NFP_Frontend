import LeftTopBar from "./leftTopBar";

export default function LeftBar(){

    return (
			<div className="fixed flex flex-col pl-2 left-0 w-[400px]">
		    <LeftTopBar/>
				<div className="px-2 bg-yellow-200 hover:ring-yellow-400 hover:ring-2 hover:ring-offset-2 overflow-y-auto min-h-full">
					메뉴바
				</div>
			</div>
    )
}