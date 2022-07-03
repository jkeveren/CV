function div(parent) {
	const d = document.createElement("div");
	if (parent != null) {
		parent.appendChild(d);
	}
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

function grower(parent) {
	const d = div(parent);
	d.style.flexGrow = 1;
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
	fontSize: "13px",
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
			alignSelf: "flex-end",
		})

		grower(header)

		{ // links
			const linksContainer = div(header);
			Object.assign(linksContainer.style, {
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-end"
			})

			// simple links
			const links = [
				["james@keve.ren", "mailto:james@keve.ren"],
				["+44 7975 905 038", "tel:+447975905038"],
				["https://james.keve.ren", "https://james.keve.ren"],
			];
			for (let l of links) {
				anchor(linksContainer, ...l).style.whiteSpace = "nowrap"
			}

			// view online link
			const viewOnline = anchor(linksContainer, "View online at https://cv.keve.ren", "https://cv.keve.ren");
			viewOnline.classList.add("print"); // only show when printing

			// download link
			const downloadLink = anchor(linksContainer, "Download PDF", document.title + ".pdf")
			downloadLink.classList.add("noprint"); // only show when not printitng
			downloadLink.download = "";
		}

		// QRCode
		const QRCodeAnchor = anchor(header, "", "https://cv.keve.ren");
		Object.assign(QRCodeAnchor.style, {
			marginBottom: "-3px", // negate the mystery 3px padding.
		});
		const QRCode = document.createElement("img");
		QRCode.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAQMAAAAk8RryAAAABlBMVEUAAAD///+l2Z/dAAAAAnRSTlP//8i138cAAAAJcEhZcwAACxIAAAsSAdLdfvwAAACPSURBVBiVVc0xCsQwDETRAbUGX0Wg1jBXN6gN+CoBtQbtQojtVK/6fECK3yBeGSMit2pWTU67fw2LQ0b1p3+EmCm2mXMyc2m3SwsuK3H1a5ueM3yLxmEjlx4o+H9e+7CmcytSQd9GdtWayxLW0baZtZNcQpB2yPCLbat2F3yMNjQPTUrhktFNmUtIdQ6+/gBAlJdLmc6UkQAAAABJRU5ErkJggg==";
		// Object.assign(QRCode.style, {
		// 	imageRendering: "pixelated",
		// 	width: "50px",
		// 	height: "50px",
		// })
		QRCodeAnchor.appendChild(QRCode);
	}

	// summary
	heading(container, "Summary");
	text(container,
		`A personable, passionate and creative person with knowledge of many engineering disciplines and manufacturing techniques.
		I've gained most of my commercial experience during my Software Engineering career but Mechanical, Electrical, Electronic Engineering and Physics have been a huge passion of mine for my entire life as is reflected by my personal projects below.
		During my experience as a Software Engineer I gained many transferable skills around teamwork, project planning and project management.
		From this experience I have become very familiar with the design, implementation, and iteration process.`
	);

	// skills and technology
	// items are stored in an array to for easier reordering
	heading(container, "Skills and Technology");
	const skillSets = [
		["CAD/CAM", [
			"SolidWorks",
			"Fusion 360",
			"OpenScad",
			"Cura",
			"Chitubox",
			"PrusaSlicer",
			"Keyshot",
			"Blender",
		]],
		["Mechanical, Electrical, and Electronic Engineering", [
			"Welding (TIG, MIG)",
			"3D Printing (FDM, MSLA)",
			"Solar",
			"HVAC",
			"Classical Mechanics",
			"General metalworking",
		]],
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
			"Firebase",
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
			"Haproxy",
			"Nginx",
			"Plesk",
			"dm-crypt",
			"Xinetd",
			"Rsync",
			"Cage",
			"FFmpeg",
			"ImageMagick",
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
		["Other", [
			"Dell iDrac",
			"LTO",
			"Desktop/Server Hardware",
			"MailEnable",
			"Microsoft 365",
			"Google Ads",
			"Plesk",
		]]
	];
	for (let set of skillSets) {
		heading2(container, set[0]);
		text(container, set[1].join(", "));
	}

	// Experience
	heading(container, "Experience");
	const companies = [
		// TODO: add links
		[
			"Komi",
			"Celebrity fan intelligence platform",
			"Software Engineer & Scrum Master",
			"Mar 2022 - Jun 2022",
			[
				"Joined with four other engineers to form the new UK based engineering team.",
				`Became Scrum Master, after just one month, alongside being a Software Engineer.
					Responsibilities included:
						ensuring the teams capacity is best utilised towards the sprint goal;
						running each sprint and all scrum meetings;
						and cultivating good teamwork and communication.
				This role was new to me and involved a lot of intuition and learning but I received many compliments on my work.`,
				"Worked extensively on the complex, business critical, and client facing \"pre-saves\" feature.",
			]
		],
		[
			"Pharmagraph",
			"Manufacturer of environmental monitoring systems",
			"CAD Consultant",
			"Jan 2020",
			[
				"Created models and technical drawings in Fusion 360 for manufacture.",
				"This was a small piece of work but was well received.",
			]
		],
		[
			"IFL Management",
			"Umbrella company provider",
			"Software Engineer",
			"Mar 2017 - Feb 2022",
			[
				"Rewrote a QuickBooks data importer to significantly optimise processing and deduplication of financial data using in memory indexing in JavaScript.",
				"Worked in a small team to build an online quote and sales lead system using .Net and SendGrid.",
				"Managed servers, hosting of various web apps, DNS, and email.",
				"Built a tool for backing up office machines to OneDrive using Golang.",
			],
		],
		[
			"Pro-Quest Resourcing",
			"Recruitment company",
			"Software Engineer",
			"Jun 2018 - Jun 2021",
			[
				`Worked in a two person team responsible for automating recruitment lead generation.
				We built a complex data pipeline to regularly import vacancies from various sources.
				Built with Node.js, .Net, SendGrid and microservices hosted on Google Cloud.
				This provided Pro-Quest with all of it's vacancy leads.
				Vacancies were normalised, filtered and deduplicated (around 20,000 - 30,000 per day).
				Relevant email addresses were found using a number of methods including bing searching, scraping, third party email providers and a data entry web app.
				Emails were then sent out automatically to prospective employers.
				We accrued a database of hundreds of thousands of vacancies, companies and contacts in order to manage email unsubscriptions and to access previously found email addresses.`,
				`Built a job listing web app, using vanilla JavaScript, to attract candidates to match with the vacancies of the system above.
				This was an SPA with background loading for a fast UX.`,
				"Built a caching proxy for a slow third party recruitment API (JobAdder). Stored responses in Google's Firestore.",
				"This company is partnered with IFL Management"
			],
		],
	];
	for (let c of companies) {
		const [name, description, title, date, items] = c;

		const row = div(container);
		Object.assign(row.style, {
			display: "flex",
			justifyContent: "space-between",
			alignItems: "flex-end",
			gap: "5px",
		});
		heading2(row, name);
		text(row, description);
		grower(row);
		text(row, date);
		text(container, title)
		const l = list(container);
		for (let item of items) {
			listItem(l, item);
		}
	}

	// personal projects
	heading(container, "Personal Projects");
	text(container, "I love talking about these projects and the challenges involved so ask me in the interview if you feel it's relevant.");
	const personalProjects = [
		// TODO: get projects from links on personal website.
		// TODO: convert to objects for conditionl links etc.
		[
			"Solar Powered Mobility Scooter",
			"james.keve.ren/gallery/IMG_20220701_141113.jpg",
			"Jun 2022",
			["Electrical", "Solar"],
			`Re-implemented the electrical system of a mobility scooter to include a solar charge system.
			Modifications also included increasing top speed by a factor of 2.5.
			The project had unique challenges yet was completed solely using off the shelf components for swift execution.`,
			// Challenges:
			// Small panel space requires 12V for efficient use of space
			// To increase speed without replacing drivetrain requires a voltage higher that 24V
			// 99% of solar charge controllers are not able to boost voltage
			// Solution was to connect supercapacitor bank to battery connection and boost converter to load output
			// Boost converters are not battery chargers so upgrade to LiFePO4 batteries with built in bms
			// Lithium for simple charge curve for boost converter, LiFePO4 for saftey.
		],
		[
			"210kg Steel Workbench",
			"youtu.be/0LhPWrXGbMg",
			"Jul - Aug 2021",
			["Metalworking"],
			`210kg workbench made entirely from steel for heat resistance, durability, and to provide a surface to weld on.
			This was designed and built to be constructed with my limited tools and without the use of welding.
			As a result this was assembled using rivnuts, bolts and folding the ends of steel box section.`,
			// Challenges:
			// A lot of manual labour. Heating steel in small garage in Aug.
			// Leg triangles required some compound pythagoras that got a bit complex but not too bad.
		],
		[
			"650A Power Supply",
			"youtu.be/G3t07j_KhL4",
			"Dec 2021",
			["Electrical", "TIG Welding", "Metalworking"],
			`Power supply capable of providing 8kW of power for short bursts or 3kW continuous at 12-96VDC.
			Created by aggregating the output of eight, 1kW server power supplies is series or parallel to achieve a range of voltages and current ratings.
			All powered from a custom, TIG welded, PDU and modified to have floating outputs.`,
			// Challenges:
			// Measuring 1000A on a budget (hard to find 1000A shunt and ammeter with same mV spec. 2 500A shunts in parallel instead)
			// Replacing PSU screws with nylon screws. Very fiddly.
		],
		[
			"Holonomic Wheel",
			"https://grabcad.com/library/holonomic-wheel-1",
			"Oct 2014",
			["SolidWorks"],
			`Similar to a mecanum wheel, this is designed to allow a vehicle to move in any direction with as few as three wheels.
			This was designed to be manufactured using only only basic metalworking equipment and 3D printing.`
			// Challenges:
			// Geometry has some complexity but not that bad.
			// Figuring out the best number of rollers.
				// To many: roller radius becomes to small
				// To few: larger rollers require deeper wheel
			// Drawbacks:
			// Must be assembled on shaft
			// Heavy
		],
		[
			"Road Bike Frameset",
			"https://grabcad.com/library/road-bike-5",
			"Oct 2015",
			["SolidWorks"],
			`Frame and forks for a road bike, optimised to resist structural torsion forces created by pedaling at high torque.
			This project was limited by my ability to manufacture at the time.`,
		],
		[
			"Other CAD Projects",
			"grabcad.com/james.keveren-1/models",
			"ongoing",
			["SolidWorks", "Fusion 360"],
			`A series of smaller projects that I created for fun.
			My models are usually somewhat parametric and are made with feature stability in mind.
			Many of these models involve assemblies with medium complexity.`,
		],
		[
			"3D Printing Projects",
			"thingiverse.com/jkeveren/designs",
			"ongoing",
			["3D Printing", "CAD Software", "CAM Software"],
			`I have many small 3D printing projects that involved, design, printing and iteration.
			Many projects were objects designed to work with existing objects for example my Samsung Galaxy S4 Case.
			This required carful metrology and iteration to perfect.`
		],
		[
			"Home Controller",
			"github.com/jkeveren/home",
			"Sept 2019 - Jul 2020",
			["Node.js"],
			`Used to control various lights and appliances around my home using Sonoff smart switches via their HTTP API.`,
		],
		[
			// TODO: combine with workbnech project
			"Workbench Parts Calculator",
			"github.com/jkeveren/workbench-parts-helper",
			"Sept 2019",
			["JavaScript"],
			`When designing a steel workbench I used this script to calculate quantities of materials and components to purchase from multiple suppliers.`,
		],
		// [
		// 	"Forza Map",
		// 	"github.com/jkeveren/forza-map",
		// 	"Jun, Sept 2020",
		// 	["Go", "WebSockets", "UDP"],
		// 	`Map for the game Forza Horizon 4 that displays the realtime location of all configured players.`,
		// ],
		// [
		// 	"Personal Website",
		// 	"github.com/jkeveren/personal-website",
		// 	"ongoing",
		// 	["Go", "REST", "TDD"],
		// 	`Manipulates HTTP connections to "trickle" the home page.
		// 	Includes a gallery feature that is optimised for serving images over a slow connection by using compression and caching.`,
		// ],
		[
			"MassDraw",
			"github.com/jkeveren/massdraw",
			"Aug - Oct 2017",
			["JavaScript", "Node.js", "Socket.io"],
			`Allows multiple people to draw on a shared whiteboard in realtime using Socket.io and JavaScript's canvas API.`,
		],
		// [
		// 	"Find by Extended Attribute",
		// 	"github.com/jkeveren/find-by-extended-attribute",
		// 	"Jan 2022",
		// 	["Go", "Linux", "xattrs", "TDD"],
		// 	`Simple Linux tool to find files based on extended attribute criteria.
		// 	Similar to \"getfattr -R\" but with much more sensible output.`,
		// ],
		// [
		// 	"CV",
		// 	"github.com/jkeveren/cv",
		// 	"ongoing",
		// 	["JavaScript", "HTML", "CSS"],
		// 	`This CV is a HTML page that is built using JavaScript which I print to PDF.
		// 	When printing, some styles change allowing the web version (at cv.keve.ren) to have visible links while keeping the PDF clean.`,
		// ],
		// [
		// 	"Doogle",
		// 	"github.com/jkeveren/doogle",
		// 	"Jun 2020 and Jan 2021",
		// 	["Go", "Regexp", "Node.js", "Firebase"],
		// 	`Proxy to Google.com which replaces every instance of the word "Google" with the word "Doogle" including logos.
		// 	Any search is replaced by an image search for "beagle" with all instances of "beagle" replaces by "doogle".`,
		// ],
		// [
		// 	"Require Object",
		// 	"npmjs.com/package/require-object",
		// 	"Apr 2018",
		// 	["Node.js", "NPM", "JavaScript"],
		// 	`NPM package that allows files to be accessed via an object that replicates the directory structure of the project.
		// 	Imports modules and reads file using getters for memory efficiency.
		// 	Removes the need for fragile relative paths.`
		// ],
		// [
		// 	"Crop Collage",
		// 	"github.com/jkeveren/crop-collage",
		// 	"Nov 2021",
		// 	["C++", "Magick++"],
		// 	`Linux tool that recursively finds images with an xattr that specifies an ImageMagic geometry.
		// 	Crops to that geometry and builds a collage from those cropped images.
		// 	Allows the archival of original images and use of cropped image in collage without the necessity to store a cropped version.
		// 	Optimized to reduce memory usage.`,
		// ],
		// [
		// 	"File Drop",
		// 	"github.com/jkeveren/file-drop",
		// 	"Dec 2021",
		// 	["Go", "JavaScript", "HTML", "CSS"],
		// 	`Simple website for uploading files.
		// 	Useful when someone wants to send me a large file without an FTP client.`,
		// ],
		// [
		// 	"Crossout Market Scoring Tool",
		// 	"github.com/jkeveren/crossout-market-scoring-tool",
		// 	"Aug 2020",
		// 	["JavaScript", "Node.js"],
		// 	`Tool that analyses the market in the game Crossout in order to find the best items to buy and sell for profit.
		// 	Takes into account supply and demand, market activity and ROI.`,
		// ],
		// [
		// 	"Whitelisted File Server",
		// 	"github.com/jkeveren/whitelisted-file-server",
		// 	"Nov 2017 - Jun 2020",
		// 	["JavaScript", "Node.js"],
		// 	`Simple file server which only allows access if the clients IP is whitelisted.
		// 	Useful when sending a large files to friends with relative security and simple authentication.`,
		// ],
	];
	const printCount = Infinity;
	const noPrint = div(null);
	noPrint.classList.add("noprint");
	for (let i = 0; i < personalProjects.length; i++) {
		const [name, link, date, skills, description] = personalProjects[i];

		let parent = container;
		if (i >= printCount) {
			parent = noPrint;
		}

		const row = div(parent);
		Object.assign(row.style, {
			display: "flex",
			gap: "10px",
			alignItems: "flex-end",
		});

		heading2(row, name);

		grower(row);

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
		text(parent, description);
	}
	// append after adding non-nopriont projects so they appear first
	container.appendChild(noPrint);

	const spacer = div(container);
	spacer.style.height = "10px";

	text(container, "For more projects check out these links:");
	const l = list(container);
	anchor(listItem(l), "grabcad.com/james.keveren-1", "https://grabcad.com/james.keveren-1/models");
	anchor(listItem(l), "thingiverse.com/jkeveren", "https://www.thingiverse.com/jkeveren/designs");
	anchor(listItem(l), "github.com/jkeveren", "https://github.com/jkeveren");
}
