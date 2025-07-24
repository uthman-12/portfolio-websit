// Mock data for portfolio - this will be replaced with backend data later

const portfolioData = {
    personalInfo: {
        name: "Cyber Guardian",
        title: "Cybersecurity Student & Frontend Developer",
        university: "Ladoke Akintola University of Technology",
        experience: "1+ Years",
        email: "criconull@gmail.com",
        github: "github.com/uthman-12",
        linkedin: "linkedin.com/in/marie-curie",
        bio: "Securing digital frontiers with penetration testing expertise and crafting elegant web experiences with modern technologies."
    },

    skills: {
        security: [
            { name: "Penetration Testing", level: 85, description: "Vulnerability assessment and ethical hacking" },
            { name: "Linux Systems", level: 90, description: "System administration and security hardening" },
            { name: "Bash Scripting", level: 80, description: "Automation and system scripts" }
        ],
        frontend: [
            { name: "JavaScript", level: 88, description: "Modern ES6+ and frameworks" },
            { name: "HTML & CSS", level: 92, description: "Responsive design and animations" },
            { name: "Node.js", level: 80, description: "Backend development and APIs" }
        ],
        tools: [
            "Bash Scripting",
            "Git & GitHub", 
            "Linux Terminal",
            "Security Tools",
            "VS Code",
            "Docker"
        ]
    },

    projects: [
        {
            id: 1,
            title: "Security Scanner Tool",
            description: "Built a comprehensive security scanning tool that identifies common vulnerabilities in web applications.",
            technologies: ["Python", "Bash", "Linux"],
            category: "security",
            icon: "shield",
            github: "https://github.com/username/security-scanner",
            demo: "https://demo.security-scanner.com"
        },
        {
            id: 2,
            title: "Portfolio Dashboard",
            description: "Responsive dashboard application with modern UI/UX principles and smooth animations.",
            technologies: ["React", "JavaScript", "CSS"],
            category: "frontend",
            icon: "globe",
            github: "https://github.com/username/portfolio-dashboard",
            demo: "https://portfolio-dashboard.vercel.app"
        },
        {
            id: 3,
            title: "API Security Checker",
            description: "Automated tool that tests API endpoints for common security vulnerabilities and misconfigurations.",
            technologies: ["Node.js", "JavaScript", "Security"],
            category: "security",
            icon: "server",
            github: "https://github.com/username/api-security-checker",
            demo: "https://api-security-checker.herokuapp.com"
        },
        {
            id: 4,
            title: "Secure Chat App",
            description: "Real-time messaging app with end-to-end encryption and modern security features.",
            technologies: ["React", "Node.js", "WebSocket"],
            category: "frontend",
            icon: "message-circle",
            github: "https://github.com/username/secure-chat",
            demo: "https://secure-chat.netlify.app"
        },
        {
            id: 5,
            title: "Network Monitor",
            description: "Real-time network monitoring tool with intrusion detection capabilities.",
            technologies: ["Python", "Linux", "Bash"],
            category: "security",
            icon: "network",
            github: "https://github.com/username/network-monitor",
            demo: null
        },
        {
            id: 6,
            title: "Task Management PWA",
            description: "Full-featured task management app with offline capabilities and responsive design.",
            technologies: ["React", "PWA", "Node.js"],
            category: "frontend",
            icon: "check-square",
            github: "https://github.com/username/task-pwa",
            demo: "https://task-management-pwa.vercel.app"
        }
    ],

    experience: [
        {
            id: 1,
            title: "Cybersecurity Enthusiast & Developer",
            company: "Self-Directed Learning",
            duration: "1 Year",
            type: "experience",
            responsibilities: [
                "Developed penetration testing skills through hands-on practice and ethical hacking challenges",
                "Built multiple web applications using modern JavaScript frameworks and Node.js",
                "Automated security tasks using bash scripting and Linux command-line tools",
                "Contributed to open-source security projects and participated in CTF competitions"
            ]
        }
    ],

    socialLinks: [
        {
            name: "Email",
            url: "criconull@gmail.com",
            icon: "mail",
            color: "purple"
        },
        {
            name: "GitHub", 
            url: "https://github.com/uthman-12",
            icon: "github",
            color: "cyan"
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/marie-curie", 
            icon: "linkedin",
            color: "pink"
        }
    ]
};