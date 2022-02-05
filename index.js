function div(parent) {
	const d = document.createElement("div");
	parent.appendChild(d);
	return d;
}

function anchor(parent, text, href) {
	const a = document.createElement("a");
	a.textContent = text;
	a.href = href;
	parent.appendChild(a);
	return a;
}

function heading(parent, text) {
	const h = div(parent);
	Object.assign(h.style, {
		fontSize: "2em",
		fontWeight: "bold",
		marginTop: "15px",
	})
	h.textContent = text;
	return h;
}

function heading2(parent, text) {
	const h = heading(parent, text);
	Object.assign(h.style, {
		fontSize: "1.5em",
		marginTop: "5px",
	});
	return h;
}

function text(parent, text) {
	const h = div(parent);
	Object.assign(h.style, {
	})
	h.textContent = text;
	return h;
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
			fontWeight: "bold",
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
			// width and height should be double the "dimensions" ouptut from the "generate-qr-code" script.
			width: "50px",
			height: "50px",
		})
		header.appendChild(QRCode);
	}

	// summary
	heading(container, "Summary");
	text(container, `
Software Engineer with experience in all aspects of building software including design, implementation, and deployment.
Most of my experience has been building REST APIs, microservices and frontends in JS, Go and C# using both SQL and No-SQL DBs.
I also have experience with a wide range of other technologies as listed in the section below.
I think that it's important to follow best practices in order to promote and retain readability, maintainablilty and reliability.
	`);

	// skills and technology
	// items are stored in an array to for easier reordering
	heading(container, "Skills and Technology");
	const groups = [
		["Software Engineering", [
			"Golang",
			"JavaScript",
			"Nodejs",
			"NPM",
			"C#",
			".Net",
			"Entity",
			"Framework",
			"MSSQL",
			"C++",
			"Git",
			"GCP",
			"firebase",
			"AWS",
			"MongoDB",
			"Mercurial",
			"TDD",
			"Regexp",
			"Magick++",
			"Mocha",
			"Express",
			"Gulp",
			"Pug",
			"HTML",
			"CSS",
			"Websockets",
			"JSON",
			"REST",
		]],
		["Linux", [
			"Arch",
			"Debian",
			"CentOS",
			"Systemd",
			"Fish",
			"Bash",
			"SSH",
			"ACLs",
			"xattrs",
			"Haproxy",
			"Nginx",
			"Plesk",
			"dm-crypt",
			"Xinetd",
			"Rsync",
			"Cage",
			"FFmpeg",
			"ImageMagick",
			"LTO",
			"Raspberry pi",
		]],
		["Networking", [
			"DNS",
			"TLS/SSL",
			"HTTP",
			"Let's Encrypt",
			"Certbot",
			"Opnsense",
			"Unifi",
			"PoE",
			"Fibre Channel",
		]],
		["IT Support", [
			"Microsoft 365",
			"MailEnable",
			"Desktop/Server Hardware",
			"Dell iDrac",
		]],
		["Non-IT", [
			"SolidWorks",
			"Fusion360",
			"OpenScad",
			"Blender",
			"Cura",
			"Chitubox",
			"Kdenlive",
			"Adobe Premier Pro",
			"Gimp",
			"Paint.net",
		]]
	]
	for (let group of groups) {
		heading2(container, group[0]);
		text(container, group[1].join(", "))
	}
}