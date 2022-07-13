import {
	EventHandler,
	MouseEventHandler,
	ReactEventHandler,
	useState,
} from "react";
let linqqq: Array<string> = [
	"https://c.tenor.com/bK1qpWGyQKkAAAAd/kitty.gif",
	"https://c.tenor.com/2v1aDCelTJgAAAAC/cat-cats.gif",
	"https://c.tenor.com/e_cOg0wWyQUAAAAd/cat-finger.gif",
	"https://c.tenor.com/CAyevOYHOr8AAAAd/cat-watermelon.gif",
	"https://c.tenor.com/lASY8qJLPaAAAAAC/angry-black-cat-meme.gif",
	"https://c.tenor.com/YOT0bwNkr_0AAAAd/husshere-herehuss.gif",
	"https://c.tenor.com/ruxAFVJ03ogAAAAd/cat-berg-cat.gif",
];
let gifIndex = 0;
let linqq: Array<string> = [
	"https://cataas.com/cat?t=sq&time=16577012625000",
	"https://cataas.com/cat?t=sq&time=16577012615865",
	"https://cataas.com/cat?t=sq&time=16577012625000",
	"https://cataas.com/cat?t=sq&time=16577012625001",
	"https://cataas.com/cat?t=sq&time=16577012625002",
	"https://cataas.com/cat?t=sq&time=16577012625003",
	"https://cataas.com/cat?t=sq&time=16577012625004",
	"https://cataas.com/cat?t=sq&time=16577012625005",
	"https://cataas.com/cat?t=sq&time=16577012625006",
	"https://cataas.com/cat?t=sq&time=16577012625007",
	"https://cataas.com/cat?t=sq&time=16577012625008",
	"https://cataas.com/cat?t=sq&time=16577012625009",
];

let linkIndex = 0;

let w: string = "https://cataas.com/cat/says/";
let a: string = "";

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
			className="py-3 px-2 border border-green-500 bg-slate-300 text-black"
		>
			{text}
		</button>
	);
}
type CounterProps = {
	picLinkSetter: Function;
	picGifSetter: Function;
	picWsetter: Function;
};
export function Counter({
	picWsetter,
	picLinkSetter,
	picGifSetter,
}: CounterProps) {
	const [count, setCount] = useState(0);

	const reset = (event: any) => {
		setCount(0);
	};
	const newWlink = (event: any) => {
		a = prompt(
			"Whatever you type will be passed on the middle cat Picture"
		) as string;
		picWsetter(w + a);
		setCount(count + 1);
	};

	const newPicLink = (event: any) => {
		const newLinkk = linqq[linkIndex];

		picLinkSetter(newLinkk);
		linkIndex = (linkIndex + 1) % linqq.length;
		setCount(count + 1);
	};

	const newGifLink = (event: any) => {
		const newGif = linqqq[gifIndex];
		picGifSetter(newGif);
		gifIndex = (gifIndex + 1) % linqqq.length;
		setCount(count + 1);
	};

	return (
		<div className="w-[max]  justify-items-center  ml-[100vh]  text-cyan-400     bg-black bg-opacity-50">
			<p className="text-center font-serif  text-3xl">
				NUMBER OF CATS =&gt; {count}
			</p>
			<div className="flex">
				<CustomButton clickHandler={newPicLink} text="Another CAT pic" />
				<CustomButton clickHandler={newGifLink} text="Another CAT gif" />
				<CustomButton clickHandler={newWlink} text="Get a  speaking cat" />
				<CustomButton clickHandler={reset} text="Enough with the damn CAT's" />
			</div>
		</div>
	);
}
