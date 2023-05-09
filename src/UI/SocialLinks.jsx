import styles from "./SocialLinks.module.scss";
import { RiFacebookFill, RiInstagramFill, RiTwitterFill } from "react-icons/ri";

const socialLinks = [
  { url: "#", component: <RiFacebookFill /> },
  { url: "#", component: <RiInstagramFill /> },
  { url: "#", component: <RiTwitterFill /> },
];

const SocialLinks = () => {
  const renderLinks = socialLinks.map((links, i) => (
    <li key={i}>
      <a href={links.url}>{links.component}</a>
    </li>
  ));
  return <ul className={styles.media}>{renderLinks}</ul>;
};

export default SocialLinks;
