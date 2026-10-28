export interface EngineeringBranch {
  id: string;
  code: string;
  name: string;
  shortName: string;
  tagline: string;
  overview: string;
  degree: string;
  intakeNote: string;
  focusAreas: string[];
  keyLabs: string[];
  careerPathways: string[];
  strengthsAtAIT: string[];
  officialUrl: string;
  questionsForAstra: string[];
}

export const ENGINEERING_BRANCHES: EngineeringBranch[] = [
  {
    id: 'computer-engineering',
    code: 'COMP',
    name: 'Computer Engineering',
    shortName: 'Computer Engg',
    tagline: 'Software Architecture, Machine Intelligence & Scalable Cloud Systems',
    degree: 'Bachelor of Engineering (B.E. Autonomous)',
    intakeNote: 'Historical intake: 120 seats (Ref: 2025 Prospectus · Confirm latest)',
    overview:
      'Computer Engineering at AIT Pune equips future tech leaders with rigorous fundamentals in computing, advanced algorithms, machine intelligence, distributed systems, and cyber defense. Backed by active student tech communities and high competitive programming participation.',
    focusAreas: [
      'Algorithms & Data Structures',
      'Artificial Intelligence & Machine Learning',
      'Cloud & Distributed Systems',
      'Database Engineering & Big Data',
      'Cybersecurity & Cryptography',
      'Full-Stack Software Architecture',
    ],
    keyLabs: [
      'Advanced Software Engineering Lab',
      'AI & High Performance Computing Lab',
      'Cloud Virtualization & Network Security Lab',
      'Database Systems & Data Analytics Facility',
    ],
    careerPathways: [
      'Software Development Engineer (SDE)',
      'Machine Learning Engineer / Data Scientist',
      'Cloud Solutions Architect',
      'Information Security & Cyber Analyst',
      'Defense Technology & Systems Specialist',
    ],
    strengthsAtAIT: [
      'Highly competitive coding culture with student clubs like Open Source Club & ACM Chapter',
      'Consistent participation and national recognition in Smart India Hackathon (SIH)',
      'Industry-standard continuous integration & modern software development environment',
    ],
    officialUrl: 'https://www.aitpune.com/Computer-Engg.aspx',
    questionsForAstra: [
      'What is the focus of Computer Engineering at AIT?',
      'What are the typical JEE Main rank ranges for Computer Engineering?',
      'How does Computer Engineering differ from Information Technology at AIT?',
    ],
  },
  {
    id: 'information-technology',
    code: 'IT',
    name: 'Information Technology',
    shortName: 'Info Tech',
    tagline: 'Enterprise Software, Cloud Infrastructure, Data Engineering & Cyber Security',
    degree: 'Bachelor of Engineering (B.E. Autonomous)',
    intakeNote: 'Historical intake: 120 seats (Ref: 2025 Prospectus · Confirm latest)',
    overview:
      'Information Technology bridges the gap between software engineering, scalable cloud infrastructure, and enterprise data ecosystems. It focuses on building reliable, secure, distributed applications and managing massive modern data pipelines.',
    focusAreas: [
      'Enterprise Software Development',
      'Web Technologies & Cloud DevOps',
      'Big Data Analytics & Pipeline Engineering',
      'Information & Network Security',
      'Mobile Application Ecosystems',
      'Applied Data Science & Deep Learning',
    ],
    keyLabs: [
      'Cloud Computing & DevOps Lab',
      'Cyber Security & Forensic Lab',
      'Web Technologies & Mobile App Lab',
      'Data Science & Analytics Workstation',
    ],
    careerPathways: [
      'Full-Stack Cloud Developer',
      'Data Engineer & Big Data Architect',
      'DevOps & Site Reliability Engineer (SRE)',
      'Enterprise Systems Consultant',
      'Cyber Risk & Security Specialist',
    ],
    strengthsAtAIT: [
      'Practical project-driven curriculum updated under autonomous status',
      'Strong peer mentorship through technical societies and open hackathons',
      'Active industry collaboration for capstone enterprise projects',
    ],
    officialUrl: 'https://www.aitpune.com/Information-Technology.aspx',
    questionsForAstra: [
      'What is the difference between IT and Computer Engineering at AIT Pune?',
      'What career opportunities exist for IT graduates from AIT?',
      'What programming languages are taught in the IT department?',
    ],
  },
  {
    id: 'electronics-telecommunication',
    code: 'E&TC',
    name: 'Electronics & Telecommunication Engineering',
    shortName: 'E&TC Engg',
    tagline: 'VLSI Silicon Design, Embedded Systems, IoT, Signal Processing & 5G',
    degree: 'Bachelor of Engineering (B.E. Autonomous)',
    intakeNote: 'Historical intake: 120 seats (Ref: 2025 Prospectus · Confirm latest)',
    overview:
      'Electronics & Telecommunication Engineering powers the hardware and communication fabric of modern civilization. From microchip design and IoT sensor networks to 5G telecommunications and defense radar systems, students master both silicon and firmware.',
    focusAreas: [
      'VLSI & Semiconductor Chip Design',
      'Embedded Systems & Microcontrollers',
      'Internet of Things (IoT) & Smart Sensors',
      'Digital Signal & Image Processing',
      '5G / Next-Gen Wireless Communications',
      'Defense Electronics, Radar & RF Systems',
    ],
    keyLabs: [
      'Advanced VLSI Design & Cadence Tool Suite Lab',
      'Embedded Systems & Microcontroller Lab',
      'Microwave, Antenna & RF Engineering Lab',
      'Digital Communication & Signal Processing Center',
    ],
    careerPathways: [
      'VLSI Physical Design & Verification Engineer',
      'Embedded Firmware / RTOS Developer',
      'IoT Solutions & Hardware Engineer',
      'Telecom & RF Systems Engineer',
      'Defense & Aerospace Electronics Specialist',
    ],
    strengthsAtAIT: [
      'Offers MTech in VLSI & Embedded Systems, elevating department research depth',
      'Industry-grade EDA tools for ASIC and FPGA prototyping',
      'Close alignment with aerospace and defense electronics innovation',
    ],
    officialUrl: 'https://www.aitpune.com/Electronics-and-Telecommunication.aspx',
    questionsForAstra: [
      'Can E&TC students prepare for software careers as well as core hardware?',
      'What VLSI and embedded systems facilities exist at AIT Pune?',
      'How does the E&TC branch align with defense electronics and R&D?',
    ],
  },
  {
    id: 'mechanical-engineering',
    code: 'MECH',
    name: 'Mechanical Engineering',
    shortName: 'Mechanical Engg',
    tagline: 'Advanced Thermal Sciences, CAD/CAM Design, EV Mobility & Smart Manufacturing',
    degree: 'Bachelor of Engineering (B.E. Autonomous)',
    intakeNote: 'Historical intake: 60 seats (Ref: 2025 Prospectus · Confirm latest)',
    overview:
      'Mechanical Engineering remains the backbone of physical engineering innovation. AIT Pune combines classical mechanics and thermal dynamics with modern CAD/CAE simulations, electric vehicle powertrain engineering, and advanced additive manufacturing.',
    focusAreas: [
      'Computer-Aided Design & Simulation (CAD/CAE)',
      'Thermodynamics & Heat Transfer',
      'Electric Vehicle (EV) Engineering & Powertrains',
      'Fluid Mechanics & Aerodynamics',
      'Manufacturing Processes & CNC Machining',
      'Materials Science & Computational Mechanics',
    ],
    keyLabs: [
      'Advanced CAD/CAM & Finite Element Analysis Lab',
      'Automotive & IC Engines Testing Lab',
      'Fluid Dynamics & Hydraulic Machinery Lab',
      'CNC Machining & Central Mechanical Workshop',
    ],
    careerPathways: [
      'Design & Simulation Engineer (FEA/CFD)',
      'Automotive & EV Powertrain Specialist',
      'Manufacturing & Production Manager',
      'Defense Equipment Design & Heavy Mobility Specialist',
      'Aerospace Systems Engineer',
    ],
    strengthsAtAIT: [
      'Renowned student motorsport teams: SAE BAJA and Formula Student racing teams',
      'Hands-on workshop culture emphasizing real vehicle fabrication and testing',
      'State-of-the-art simulation software suites and industrial testing rigs',
    ],
    officialUrl: 'https://www.aitpune.com/Mechanical-Engg.aspx',
    questionsForAstra: [
      'Does AIT have student teams for Formula Student or SAE BAJA?',
      'What modern technologies are integrated into Mechanical Engineering at AIT?',
      'What are the core career avenues for Mechanical graduates?',
    ],
  },
  {
    id: 'automation-robotics',
    code: 'A&R',
    name: 'Automation & Robotics Engineering',
    shortName: 'Automation & Robotics',
    tagline: 'Autonomous Systems, Industrial Robotics, Mechatronics & Computer Vision',
    degree: 'Bachelor of Engineering (B.E. Autonomous)',
    intakeNote: 'Historical intake: 60 seats (Ref: 2025 Prospectus · Confirm latest)',
    overview:
      'A multi-disciplinary future-focused discipline blending mechanical kinematics, electronics hardware, sensor fusion, and intelligent computer vision algorithms to create autonomous robots, unmanned vehicles, and smart factory automation.',
    focusAreas: [
      'Robotics Kinematics, Dynamics & Control',
      'Robot Operating System (ROS / ROS2)',
      'Industrial Automation & PLC / SCADA',
      'Computer Vision & Sensor Fusion',
      'Unmanned Aerial / Ground Vehicles (UAV/UGV)',
      'Mechatronic Actuation & Smart Factory Industry 4.0',
    ],
    keyLabs: [
      'Robotics & Motion Control System Lab',
      'PLC, SCADA & Industrial Automation Cell',
      'Computer Vision & Drone Navigation Testbed',
      'Mechatronics & Sensor Interfacing Lab',
    ],
    careerPathways: [
      'Robotics Software / Control Systems Engineer',
      'Automation & Industry 4.0 Solution Architect',
      'Drone & Autonomous Navigation Specialist',
      'Mechatronics Product Designer',
      'Defense Unmanned Systems Engineer',
    ],
    strengthsAtAIT: [
      'Direct relevance to modern defense applications including autonomous reconnaissance',
      'Cross-departmental collaboration between computer science and mechanical design',
      'Hands-on projects with industrial robotic arms, ROS simulation, and smart sensors',
    ],
    officialUrl: 'https://www.aitpune.com/Automation-Robotics-Engg.aspx',
    questionsForAstra: [
      'What kind of robotics projects do students build at AIT Pune?',
      'How does Automation & Robotics differ from pure Mechanical Engineering?',
      'What are the career options in defense robotics and industrial automation?',
    ],
  },
];
