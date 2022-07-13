type Cards = {
	resimLinki: string;
	gifLinki: string;
	setWlink: string;
	wLink: string;
};
let resimLinki: string =
	"https://yesofcorsa.com/wp-content/uploads/2016/12/4K-Fire-Picture.jpg";
export function CatPic({ resimLinki }: Cards) {

	return (
		<div className="cat-pic basis-1/4 rounded-2xl">
			<img
				src={resimLinki}
				className=" h-[50vh] w-max basis-1/4 rounded-3xl "
			/>
		</div>
	);
}

export function Catgif({ gifLinki }: Cards) {
	return (
		<div className="h-[300px] w-[min] basis-1/4 rounded-3xl">
			<img src={gifLinki} alt="" className="rounded-xl basis-1/4" />
		</div>
	);
}
export function CatWgif({ wLink }: Cards) {
	return (
		<div className="h-[300px] w-[min] basis-1/4 rounded-3xl">
			<img src={wLink} alt="" className="rounded-xl basis-1/4" />
		</div>
	);
}
