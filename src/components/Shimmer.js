const Shimmer = () => {
	return (
		<div className="restaurant-list">
			{Array(10)
				.fill("")
				.map((e, index) => {
					return (
						<div
							key={index}
							className="p-3 m-3 w-56 h-60 bg-slate-400 inline-block bg-gradient-to-tr from-white to-slate-400 bg-no-repeat animate-pulse"
						></div>
					);
				})}
		</div>
	);
};
export default Shimmer;
