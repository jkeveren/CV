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
		fontSize: "1.7em",
		fontWeight: "bold",
		marginTop: "15px",
		borderTop: "#777 1px", // TODO: FIx
	})
	h.textContent = text;
	return h;
}

function heading2(parent, text) {
	const h = heading(parent, text);
	Object.assign(h.style, {
		fontSize: "1.2em",
		marginTop: "5px",
	});
	return h;
}

function text(parent, text) {
	const h = div(parent);
	h.textContent = text;
	return h;
}

function list(parent) {
	const ul = document.createElement("ul");
	ul.style.margin = 0;
	parent.appendChild(ul);
	return ul;
}

function listItem(parent, text) {
	const li = document.createElement("li");
	li.textContent = text;
	parent.appendChild(li);
	return li;
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
	})

	{ // header
		const header = div(container);
		Object.assign(header.style, {
			display: "flex",
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
			// const printLink = anchor(linksContainer, "Print this CV", "Print: this cv")
			// printLink.classList.add("noprint"); // only show when not printitng
			// printLink.addEventListener("click", e => {
			// 	e.preventDefault();
			// 	print();
			// });
			// printLink.target = "_self";

			// download link
			const downloadLink = anchor(linksContainer, "Download PDF", document.title + ".pdf")
			downloadLink.classList.add("noprint"); // only show when not printitng
			downloadLink.download = "";
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
	text(container,
		`Software Engineer with experience in all aspects of building software including architecture, implementation, and deployment.
		Most of my experience has been building REST APIs, microservices and frontends in JS, Go and C# using both SQL and No-SQL DBs.
		I also have experience with a wide range of other technologies as listed in the section below.
		I think that it's important to follow best practices in order to promote and retain readability, maintainablilty and reliability.`
	);

	// skills and technology
	// items are stored in an array to for easier reordering
	heading(container, "Skills and Technology");
	const skillSets = [
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
			"Google Cloud",
			"firebase",
			"AWS",
			"Plesk",
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
			"WebSockets",
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
		["IT Support and Other IT", [
			"Microsoft 365",
			"MailEnable",
			"Desktop/Server Hardware",
			"Dell iDrac",
			"Google Ads",
			"Plesk"
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
	];
	for (let set of skillSets) {
		heading2(container, set[0]);
		text(container, set[1].join(", "));
	}

	// Employment
	heading(container, "Employment");
	const companies = [
		[
			"IFL Management",
			"Mar 2017 - Present",
			[
				"Rewrote the financial statement importer to significatly optimised the processing and deduplication using in memory indexing.",
				"Worked in a team to build an online quote and sales lead system.",
				// "IT support for Microsoft 365, Outlook, Windows etc.",
				// "Assisted in management of Google Ads."
			]
		],
		[
			"Pro-Quest Resourcing",
			"Dec 2018 - Jun 2020",
			[
				`Worked in a team to design, build and deploy a system comprising APIs, microservices and web apps to acquire vacancy data from various sources including scraping.
				The vacancies were then normalized, filtered, candidate matched and matches emailed to prospective employers - up to 20,000 per day processed.
				This included a data entry system for staff to populate incomplete vacancy data.`,
				"Built a job listing web app to attract candidates to match with the vacancies of the system above. This was an SPA with background loading for a fast UX.",
				"Built a caching proxy for a slow third party recruitment API (JobAdder). Stored responses in Google's Firebase Firestore.",
			]
		]
	];
	for (let c of companies) {
		const [name, date, items] = c;
		
		const row = div(container);
		Object.assign(row.style, {
			display: "flex",
			justifyContent: "space-between",
			alignItems: "flex-end",
		});
		heading2(row, name);
		text(row, date);
		const l = list(container);
		for (let item of items) {
			listItem(l, item);
		}
	}

	// personal projects
	heading(container, "Personal Projects");
	const personalProjects = [
		[
			"Crop Collage",
			"github.com/jkeveren/crop-collage",
			"Nov 2021",
			["C++", "Magick++"],
			`Linux tool that recursively finds images with an xattr that specifies an ImageMagic geometry.
			Crops to that geometry and builds a collage from those cropped images.
			Allows the archival of original images and use of cropped image in collage without the necessity to store a cropped version.
			Optimized to reduce memory usage.`,
		],
		[
			"Personal Website",
			"github.com/jkeveren/personal-website",
			// "Mar 2015 - present",
			"continuous",
			["Go", "REST", "TDD"],
			`Manipulates HTTP connections to "trickle" the home page.
			Includes a gallery feature that is optimised for serving images over a connection with limited bandwidth using compression and caching.`,
		],
		[
			"Crossout Market Scoring Tool",
			"github.com/jkeveren/crossout-market-scoring-tool",
			"Aug 2020",
			["JavaScript", "Node.js"],
			`Tool that analyses the market in the game Crossout in order to find the best items to buy and sell for profit.
			Takes into account supply and demand, market activity and ROI.`,
		],
		[
			"Doogle",
			"github.com/jkeveren/doogle",
			"Jun 2020 and Jan 2021",
			["Go", "Regexp", "Node.js", "Firebase"],
			`Proxy to Google.com which replaces every instance of the word "Google" with the word "Doogle" including logos.
			Any search is replaced by an image search for "beagle" with all instances of "beagle" replaces by "doogle".`,
		],
		[
			"File Drop",
			"github.com/jkeveren/file-drop",
			"Dec 2021",
			["Go", "JavaScript", "HTML", "CSS"],
			`Simple website for uploading files.
			Useful when someone wants to send me a large file without an FTP client.`,
		],
		[
			"Whitelisted File Server",
			"github.com/jkeveren/whitelisted-file-server",
			"Nov 2017 - Jun 2020",
			["JavaScript", "Node.js"],
			`Simple fileserver which only allows access if the clients IP is whitelisted.
			Useful when sending a large files to friends with relative security and simple authentication.`,
		],
		[
			"Home Controller",
			"github.com/jkeveren/home",
			"Sept 2019 - Jul 2020",
			["Node.js"],
			`Used to control various lights and appliances around my home using Sonoff smart switches via their HTTP API.`,
		],
		[
			"MassDraw",
			"github.com/jkeveren/massdraw",
			"Aug - Oct 2017",
			["JavaScript", "Node.js", "Socket.io"],
			`Allows multiple people to draw on a shared whiteboard in realtime using Socket.io and JavaScript's canvas API.`,
		],
		[
			"CV",
			"github.com/jkeveren/cv",
			"continuous",
			["JavaScript", "HTML", "CSS"],
			`This CV is a component-based JavaScript app that builds a HTML page which I print to PDF.
			When printing, some styles are changed which allows the web version (at cv.keve.ren) to have visible links while keeping the PDF clean.`,
		],
		[
			"Find by Extended Attribute",
			"github.com/jkeveren/find-by-extended-attribute",
			"Jan 2022",
			["Go", "Linux", "xattrs", "TDD"],
			`Simple Linux tool to find files based on extended attribute criteria.
			Similar to \"getfattr -R\" but with much more readable output`,
		],
		[
			"Forza Map",
			"github.com/jkeveren/forza-map",
			"Jun, Sept 2020",
			["Go", "WebSockets", "UDP"],
			`Map for the game Forza Horizon 4 that displays the realtime location of all configured players.`,
		],
		[
			"Workbench Parts Calculator",
			"github.com/jkeveren/workbench-parts-helper",
			"Sept 2019",
			["JavaScript"],
			`When designing a steel workbench I used this script to calculate quantities of materials and components to purchase from multiple suppliers.`,
		],
		[
			"Require Object",
			"npmjs.com/package/require-object",
			"Dec 2017",
			["Node.js", "NPM", "JavaScript"],
			`NPM package that allows files to be accessd via an object that replicates the directory structure of the project.
			Imports modules and reads file using getters for memory efficiency.`
		]
	];
	for (let p of personalProjects) {
		const [name, link, date, skills, description] = p;
		
		const row = div(container);
		Object.assign(row.style, {
			display: "flex",
			gap: "10px",
			alignItems: "flex-end",
		});

		heading2(row, name).style.flexGrow = 1;

		const skillsContainer = div(row);
		Object.assign(skillsContainer.style, {
			display: "flex",
			gap: "4px"
		});
		for (let s of skills) {
			const e = text(skillsContainer, s);
			Object.assign(e.style, {
				background: "#ccc",
				borderRadius: "4px",
				padding: "0 2px",
			});
		}

		anchor(row, link, "https://" + link);
		// text(row, date);
		text(container, description);
	}
}