import Link from "next/link";


interface social_links_type {
  link: string;
  target?: string;
  color?: string;
  icon: string;
}


const social_links: social_links_type[] = [
  {
    link: "https://www.facebook.com/people/Solpower-Australia/61561254433771/",
    target: "_blank",
    icon: "fab fa-facebook-f",
  },
  {
    link: "http://twitter.com",
    target: "_blank",
    icon: "fab fa-twitter",
  },
  {
    link: "https://www.linkedin.com",
    target: "_blank",
    icon: "fab fa-linkedin-in",
  },
  {
    link: "https://www.instagram.com/solpoweraustralia",
    color: "footer-insta",
    icon: "fa-brands fa-instagram",
  },
];

const SocialLinks = () => {
  return (
    <>
      {social_links.map((l, i) => (
        <Link
          key={i}
          href={l.link}
          target={l.target ? l.target : ""} style={{color: 'black'}}>
          <i className={l.icon} ></i> {' '}
        </Link>
      ))}
    </>
  );
};

export default SocialLinks;




interface social_links_type_2 {
  link: string;
  color: string;
  icon: string;
}

const social_links_2: social_links_type_2[] = [
  {
    link: "https://www.facebook.com/people/Solpower-Australia/61561254433771/",
    color: "footer-facebook",
    icon: "fa-brands fa-facebook-f",
  },
  {
    link: "http://twitter.com",
    color: "",
    icon: "fa-brands fa-twitter",
  },
  {
    link: "http://www.linkedin.com",
    color: "footer-linkedin",
    icon: "fa-brands fa-linkedin-in",
  },
  {
    link: "https://www.instagram.com/solpoweraustralia",
    color: "footer-insta",
    icon: "fa-brands fa-instagram",
  },
];

export const SocialLinksTwo = () => {
  return (
    <>
      {social_links_2.map((link, index) => (
        <Link
          key={index}
          href={link.link}
          className={link.color}
          target="_blank">
          <i className={link.icon}></i>{" "}
        </Link>
      ))}
    </>
  );
};




// team social links
interface DataType {
  id: number;
  link: string;
  icon: string;
}
const team_social_data: DataType[] = [
  {
    id: 1,
    link: "https://www.facebook.com/people/Solpower-Australia/61561254433771/",
    icon: "fab fa-facebook-f",
  },
  {
    id: 2,
    link: "http://twitter.com",
    icon: "fab fa-twitter",
  },
  {
    id: 3,
    link: "http://www.linkedin.com",
    icon: "fa-brands fa-linkedin-in",
  },
  {
    id: 4,
    link: "https://www.instagram.com/solpoweraustralia",
    icon: "fab fa-instagram",
  },
]

export const TeamSocialLinks = () => {
  return (
    <>
      {team_social_data.map((t_item, t_index) => (
        <li key={t_index}>
          <Link 
            href={t_item.link}
            target="_blank">
            <i className={t_item.icon}></i>{" "}
          </Link>

        </li>
      ))}
    </>
  )
}


// copy right text 
type copy_right_text_type = {
  copy_right: JSX.Element;
}

const copy_right_text: copy_right_text_type = {
  copy_right: <>
     ©{new Date().getFullYear()} | Solpower Australia | Website Designed & Managed by <a href="https://oz-digital.com.au/" target="_blank">Ozy Digital Pty Ltd</a>, Glenfield.
  </>
}

const { copy_right } = copy_right_text
export const CopyRight = () => {
  return (
    <> {copy_right}</>
  )
}


