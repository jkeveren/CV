function div(parent) {
	const div = document.createElement("div");
	parent.appendChild(div);
	return div;
}

function anchor(parent, text, href) {
	const a = document.createElement("a");
	a.textContent = text;
	a.href = href;
	parent.appendChild(a);
	return a;
}

function SVGElement(parent, tagName) {
	const element = document.createElementNS("http://www.w3.org/2000/svg", tagName);
	parent.appendChild(element);
	return element;
}

document.title = "James Keveren CV";

console.info("https://github.com/jkeveren/cv");

// make links open in new tab by default
const base = document.createElement("base");
base.target = "_blank";
document.head.appendChild(base);

// html
Object.assign(document.documentElement.style, {
	fontFamily: "arial, sans-serif",
	fontSize: "12px",
});

// body
Object.assign(document.body.style, {
	display: "flex",
	justifyContent: "center",
});

{ // container
	const container = div(document.body);
	Object.assign(container.style, {
		maxWidth: "680px",
		width: "100vw",
	})

	{ // header
		const header = div(container);
		Object.assign(header.style, {
			display: "flex",
			flexDirection: "row",
			gap: "10px",
			alignItems: "center",
			paddingBottom: "5px",
			borderBottom: "1px solid #777",
		})

		// title
		const title = div(header);
		title.textContent = "James Keveren";
		Object.assign(title.style, {
			fontSize: "2.5em",
			whiteSpace: "nowrap",
			flexGrow: 1,
			alignSelf: "flex-end",
		})

		{ // links
			const linksContainer = div(header);
			Object.assign(linksContainer.style, {
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-end"
			})

			// simple links
			const links = [
				["james.keve.ren", "https://james.keve.ren"],
				["james@keve.ren", "mailto:james@keve.ren"],
				["+44 7975 905 038", "tel:+447975905038"]
			];
			for (let l of links) {
				anchor(linksContainer, ...l).style.whiteSpace = "nowrap"
			}

			// view online text
			const viewOnline = div(linksContainer);
			viewOnline.classList.add("print"); // only show when printing
			viewOnline.textContent = "View online at cv.keve.ren";

			// print link
			const printLink = anchor(linksContainer, "Print this CV", "Print: this cv")
			printLink.classList.add("noprint"); // only show when not printitng
			printLink.addEventListener("click", e => {
				e.preventDefault();
				print();
			});
			printLink.target = "_self";
		}

		// QRCode
		const QRCode = document.createElement("img");
		QRCode.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAQMAAAD+JxcgAAAABlBMVEUAAAD///+l2Z/dAAAAAnRSTlP//8i138cAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAB8SURBVAiZY2DUPFDPULv3fj2Da3AgkOgEEVcvAsUsgWKMoQ71DP/f1f9niJmYW89gztVVz/Dz3816Brbq6P8Mc5n46xm6w/zqGQQNKusZ7rc4/2fQjWD7z/Dfohyolz8caMqsMqB5h9iAxLUt/xlcA5WAYq3u/xkYLavrAaQMLsKjKAuKAAAAAElFTkSuQmCC";
		Object.assign(QRCode.style, {
			imageRendering: "pixelated",
			width: "50px",
			height: "50px",
		})
		header.appendChild(QRCode);
	}
}