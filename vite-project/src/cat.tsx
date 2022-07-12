type Cards = {
	resimLinki: string;
	gifLinki: string;
};

export function CatPic({ resimLinki }: Cards) {
	return (
		<div className="cat-pic basis-1/4 rounded-2xl">
			<img
				src={resimLinki}
				className="CatPPic h-[300px] w-[300px] basis-1/4 rounded-3xl "
			/>
		</div>
	);
}

export function Catgif({ gifLinki }: Cards) {
	return (
		<div className="catG h-[300px]   w-[300px]">
			<img src={gifLinki} alt="" className="rounded-xl basis-1/4" />
		</div>
	);
}
