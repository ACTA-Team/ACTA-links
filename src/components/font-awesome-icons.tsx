"use client";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileLines,
  faCode,
  faPlay,
  faMoon,
  faSun,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faDiscord,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false;

export const FileTextIcon = (props: any) => <FontAwesomeIcon icon={faFileLines} {...props} />;
export const CodeIcon = (props: any) => <FontAwesomeIcon icon={faCode} {...props} />;
export const PlayIcon = (props: any) => <FontAwesomeIcon icon={faPlay} {...props} />;
export const MoonIcon = (props: any) => <FontAwesomeIcon icon={faMoon} {...props} />;
export const SunIcon = (props: any) => <FontAwesomeIcon icon={faSun} {...props} />;
export const GlobeIcon = (props: any) => <FontAwesomeIcon icon={faGlobe} {...props} />;
export const GithubIcon = (props: any) => <FontAwesomeIcon icon={faGithub} {...props} />;
export const TwitterIcon = (props: any) => <FontAwesomeIcon icon={faTwitter} {...props} />;
export const LinkedinIcon = (props: any) => <FontAwesomeIcon icon={faLinkedin} {...props} />;
export const DiscordIcon = (props: any) => <FontAwesomeIcon icon={faDiscord} {...props} />;
export const InstagramIcon = (props: any) => <FontAwesomeIcon icon={faInstagram} {...props} />;
