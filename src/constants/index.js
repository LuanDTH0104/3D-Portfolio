import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  php,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Giới thiệu",
  },
  {
    id: "work",
    title: "Kinh nghiệm",
  },
  {
    id: "contact",
    title: "Liên hệ",
  },
];

const services = [
  {
    title: "Nhà phát triển Website",
    icon: web,
  },
  {
    title: "Nhà phát triển ứng dụng điện thoại",
    icon: mobile,
  },
  {
    title: "Lập trình viên Backend",
    icon: backend,
  },
  {
    title: "Freelancer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "php",
    icon: php,
  },
];

const experiences = [
  {
    title: "Lập trình viên mảng ERP",
    company_name: "Công ty TNHH I2Solution Viet Nam",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Tháng 6 năm 2023 - Tháng 9 năm 2024",
    points: [
      "Phát triển các mô-đun phần mềm ERP và MES của công ty phục vụ cho các nhà máy sản xuất của Hàn Quóc.",
      "Phát triển các tài liệu phần mềm, tính năng theo yêu cầu của khách hàng",
      "Phát triển nền tảng ứng dụng MES cho thiết bị máy quét của nhà máy.",
      "Tham gia các buổi training về cách viết code và những khóa học liên quan của công ty.",
    ],
  },
  {
    title: "Lập trình viên Java",
    company_name: "Công ty TNHH Phần mềm FPT - FPT Software",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Tháng 9 năm 2022 - Tháng 5 năm 2023",
    points: [
      "Phát triển nền tảng website quản lý nội bộ dựa trên ngôn ngữ Java",
      "Đào tạo các công nghệ Java Spring, Java Sercurity, Hibernate ORM",
      "Tham gia các buổi training và khóa học của công ty.",
    ],
  },
  {
    title: "Lập trình viên Freelancer",
    company_name: "Công ty TNHH Pandora",
    icon: shopify,
    iconBg: "#383E56",
    date: "Tháng 4 năm 2024 - Hiện tại",
    points: [
      "Phát triển website điều kiển các thiết bị IOT của công ty phát triển",
      "Thực hiện việc viết tài liệu phần mềm, tài liệu thiết kế hệ thống.",
      "Tạo giao diện trực quan 3D với ThreeJs giúp tạo giao diện thân thiện.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Toyota Long Biên",
    description:
      "Dự án được thực hiện cho khách hàng trên mã nguồn mở Wordpress. Website giúp thu hút khách hàng và giới thiệu những sản phẩm của xe oto của hãng.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Wordpress",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://toyotalongbienn.com.vn",
  },
  {
    name: "InSync - Nền tảng tự động hóa thiết bị di động",
    description:
      "Team của mình đã phát triển InSync như một nền tảng hỗ trợ tạo các kịch bản tự động mô phỏng hành vi của con người.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: ".Net",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Best CV - Nền tảng tìm việc trực tuyến",
    description:
      "Một nền tảng kết nối ứng viên tiềm năng với nhà tuyển dụng, sử dụng trí tuệ nhân tạo như một công cụ giúp nhà tuyển dụng lọc tự động những ứng viên tiềm năng",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
