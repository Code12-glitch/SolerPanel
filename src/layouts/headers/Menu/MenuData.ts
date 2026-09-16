


interface DataType {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menus?: {
      link: string;
      title: string;
  }[];
}


// menu data
const menu_data: DataType[] = [
	{
		id: 1,
		title: "Home",
		link: "/",
		has_dropdown: true,
		sub_menus: [
			{ link: "/", title: "Home" },
			{ link: "/home-2", title: "Home Two" },
		],
	},
	{
		id: 2,
		title: "About",
		link: "/about",
		has_dropdown: false,
	},
	{
		id: 3,
		title: "Service",
		link: "/service",
		has_dropdown: true,
		sub_menus: [
			{ link: "/service-details/residential-solar-pv-system", title: "Residential Solar PV System" },
			{ link: "/service-details/commercial-solar-pv-system", title: "Commercial Solar PV System" },
			{ link: "/service-details/hybrid-battery-backup-solar-pv-system", title: "Hybrid Battery Backup Solar PV System" },
		],
	},
	{
		id: 4,
		title: "Products",
		link: "/products",
		has_dropdown: true,
		sub_menus: [
			{ link: "/product-details/panels", title: "Panels" },
			{ link: "/product-details/inverters", title: "Inverters" },
		],
	},
	{
		id: 5,
		title: "Battery",
		link: "/battery",
		has_dropdown: false,
	},
	{
		id: 6,
		title: "Projects",
		link: "#",
		has_dropdown: true,
		sub_menus: [
			{ link: "/grid-connected-system", title: "Grid Connected Systems" },
			{ link: "/battery-systems", title: "Battery Systems" },
		],
	},

	/* {
		id: 6,
		title: "Pages",
		link: "#",
		has_dropdown: true,
		sub_menus: [
			{ link: "/blog", title: "Blog" },
			{ link: "/blog-details", title: "Blog Details " },
			{ link: "/team", title: "Team " },
			{ link: "/team-details", title: "Team Details" },
			{ link: "/faq", title: "FAQ" },
			{ link: "/erorr", title: "Erorr" },
		],
	}, */
	{
		id: 7,
		title: "Blog",
		link: "/blog",
		has_dropdown: false,
	},
	{
		id: 8,
		title: "Contact",
		link: "/contact",
		has_dropdown: false,
	},
];
export default menu_data;
