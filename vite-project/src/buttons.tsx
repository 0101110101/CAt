import {
	EventHandler,
	MouseEventHandler,
	ReactEventHandler,
	useState,
} from "react";

type CustomButtonProps = {
	text: string;
	clickHandler: any;
};
import { CatPic } from "./cat";
import { Catgif } from "./cat";



export function CustomButton({ text, clickHandler }: CustomButtonProps) {
	return (
		<button
			onClick={clickHandler}
			className="py-3 px-2 border border-blue-500 bg-slate-300 text-black"
		>
			{text}
		</button>
	);
}

export function Counter() {
{/* @ts-ignore */}
let a= CatPic.resimLinki
{/* @ts-ignore */}
let b= Catgif.gifLinki
	const [count, setCount] = useState(0);

	const reset = (event: any) => {
		setCount(count+1);


	};

	const increment = (event: any) => {
		setCount(count + 1);
	};

	return (
		<div className="w-[250px]  justify-items-center  ml-[100vh]      bg-black bg-opacity-50">
			<p className="text-center font-serif text-3xl">
				NUMBER OF CATS => {count}
			</p>
			<div className="grid  col-span-3    ">
				<CustomButton clickHandler={increment} text="Another CAT pic" />
				<CustomButton clickHandler={increment} text="Another CAT gif" />	<CustomButton clickHandler={reset} text="Enough with the damn CATs" />
			</div>
		</div>
	);
}
