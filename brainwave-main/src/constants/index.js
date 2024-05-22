import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Our Services",
    url: "#features",
  },
  {
    id: "1",
    title: "Our Policy",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Who We Are",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "How we do",
    url: "#roadmap",
  },
  // {
  //   id: "4",
  //   title: "New account",
  //   url: "#signup",
  //   onlyMobile: true,
  // },
  // {
  //   id: "5",
  //   title: "Sign in",
  //   url: "#login",
  //   onlyMobile: true,
  // },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "More then Expectation",
  "Proving The Best",
  "Inclusive Environment",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice ChatBot",
    text: "Chatbot to understand and respond to voice commands, making it easier for our clients to interact with web app easily.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Dive into a world where technology meets fun. We gamify your user experience.Making it more exiting.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Customization",
    text: "We ensure your digital presence is as unique as you. Tailor your experience, make your mark, and stand out in the digital crowd with us.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "API integration has never been this simple. We streamline the process, making it easy for you to connect, interact, and unlock the full potential of your applications.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Data Protection",
    description: "The company implements robust security measures to protect user data.",
    price: "0",
    features: [
      "Security Measures",
      "Data Breach Protocol",
      "Third-Party Services",
    ],
  },
  {
    id: "1",
    title: "Policy Updates",
    description: "The company will notify regularly if any changes to the privacy policy via Email.",
    price: "9.99",
    features: [
      "Review Period",
      "Acceptance",
      "Archives",
    ],
  },
  {
    id: "2",
    title: "Data Sharing",
    description: "The policy will specify if and when the company might share user data.",
    price: null,
    features: [
      "Third-Party Sharing",
      "Consent",
      "Legal Requirements",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Offrings",
    text: "We offer Software Develpoment, Web Application Development, Cloud Integration, World class Security All this We Deliver in Time.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Trending Services",
    text: "Backup solutions, Firewalling, Cloud services, cybersecurity, DevOps automation, IT maintenance and support, AR and VR development, and IT consulting.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Industries",
    text: "We Build for Finance, InsuranceRetail, eCommerce Real Estate, Construction Travel, Hospitality.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Experience lightning-fast solutions with us. We’re here to address your IT needs in the blink of an eye.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Got a question? We’ve got answers. No query is too big or small for our dedicated team of IT experts.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "Every day brings new opportunities for growth. With our daily enhancements, your IT infrastructure will never be left behind.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
