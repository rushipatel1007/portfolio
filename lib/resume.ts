export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
};

export type Project = {
  name: string;
  stack: string[];
  summary: string[];
};

export type Education = {
  school: string;
  location: string;
  program: string;
  period: string;
};

export type Resume = {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  summary: string[];
  skills: Record<string, string[]>;
  experience: Experience[];
  projects: Project[];
  education: Education[];
};

export const resume: Resume = {
  name: "Rushi Patel",
  title: "Full Stack Developer",
  location: "Toronto, ON, Canada",
  phone: "+1 (647) 309 3951",
  email: "rushipatel100720@gmail.com",
  linkedin: "https://www.linkedin.com/in/rushipatel10700/",
  summary: [
    "Full Stack Developer with 4+ years building microservices and event-driven systems using Java, Spring Boot, Kafka, React, and TypeScript.",
    "Delivered greenfield products and third‑party integrations on AWS (EC2, API Gateway, Lambda, S3) with data stores including MS SQL Server and MongoDB using JPA, Hibernate, and selective MyBatis.",
    "Built streaming analytics pipelines on Kafka with Databricks and Delta Lake and improved reliability with Resilience4j patterns.",
    "Implemented CI/CD with Jenkins and Docker and strengthened quality with JUnit, Mockito, Testcontainers, and OpenAPI-first APIs secured by OAuth2 OIDC and JWT."
  ],
  skills: {
    "Languages": ["Java", "JavaScript", "TypeScript", "SQL"],
    "Frontend": ["React.js", "Redux", "HTML5", "CSS3", "Bootstrap", "Tailwind", "React Native"],
    "Backend": ["Spring Boot", "Spring Cloud", "REST APIs", "GraphQL", "Hibernate", "MyBatis"],
    "Database": ["MS SQL Server", "MySQL", "PostgreSQL", "MongoDB"],
    "Messaging & Streaming": ["Apache Kafka", "RabbitMQ"],
    "DevOps & Tools": ["Docker", "Kubernetes", "Jenkins", "Git", "Maven"],
    "Cloud": ["AWS (EC2, S3, Lambda, API Gateway, RDS)", "Azure"],
    "Big Data & Analytics": ["Databricks (Delta Lake, Unity Catalog, Spark SQL)"],
    "AI & Automation": ["GitHub Copilot", "AI‑assisted code generation"],
    "Testing": ["JUnit", "Mockito", "Postman", "Testcontainers", "RestAssured"],
    "Security & Monitoring": ["OAuth2", "JWT", "Swagger", "OpenAPI", "ELK", "Prometheus", "Grafana"]
  },
  experience: [
    {
      company: "Reactivestax Technologies",
      role: "Full Stack Developer",
      location: "Mississauga, ON",
      period: "Aug 2024 – Present",
      bullets: [
        "Led Agile delivery with two‑week sprints and full Jira workflows including planning, standups, reviews, retrospectives, and velocity tracking.",
        "Designed Spring Boot microservices with Kafka backed by MongoDB and MS SQL Server using JPA/Hibernate and selective MyBatis for complex mappings.",
        "Defined REST standards with an OpenAPI‑first design (versioning, idempotency, consistent error contracts) and added Resilience4j (retries, timeouts, circuit breaker, bulkhead).",
        "Built internal admin and analytics UIs with React + TypeScript (Redux Toolkit, reusable components) improving accessibility and performance.",
        "Implemented CI/CD using Jenkins multibranch pipelines and Docker with automated unit/integration tests (JUnit 5, Mockito, Testcontainers, RestAssured) and leveraged GitHub Copilot.",
        "Deployed on AWS (EC2, API Gateway, Lambda, S3, IAM) with centralized secrets and observability via logs and metrics.",
        "Secured services with Spring Security, OAuth2/OIDC, JWT; produced Swagger docs; hardened connectors with retries, backoff, DLQs, idempotent requests."
      ]
    },
    {
      company: "Shift Transit",
      role: "Full Stack Developer",
      location: "Toronto, ON",
      period: "Apr 2023 – Aug 2024",
      bullets: [
        "Delivered features in Agile sprints using Jira and collaborated across product and QA.",
        "Built Spring Boot REST services with Eureka discovery and Feign; implemented event‑driven workflows using Kafka topics and consumer groups.",
        "Modeled transactional data on MS SQL Server and Postgres and implemented repositories with JPA/Hibernate while tuning queries and indexes.",
        "Developed reusable React + TypeScript components integrated with Axios; improved state management and error handling across dashboards.",
        "Set up CI/CD with Jenkins and GitHub Actions with Docker images, cache‑aware builds, environment config, and automated smoke/integration tests.",
        "Improved reliability and visibility using Resilience4j, Spring Boot Actuator, centralized logging (ELK) and metrics (Prometheus, Grafana).",
        "Secured APIs with Spring Security and OAuth2/JWT; delivered third‑party integrations for telematics, notifications, CRM with pagination, rate limiting, idempotent upserts."
      ]
    },
    {
      company: "Aditya Birla Group",
      role: "Full Stack Developer",
      location: "Vadodara, India",
      period: "Jun 2021 – Aug 2022",
      bullets: [
        "Built Spring Boot services and migrated legacy Angular frontends to React to improve performance and maintainability.",
        "Implemented a Kafka‑based logging and alerting pipeline to centralize telemetry and reduce incident diagnosis time.",
        "Modeled relational data and optimized high‑volume SQL queries and indexes using JPA/Hibernate repositories.",
        "Achieved 85%+ unit/integration test coverage with JUnit/Mockito and enforced code quality via peer reviews.",
        "Introduced API documentation with Swagger and strengthened input validation and baseline security using Spring Security.",
        "Supported production releases with runbooks, dashboards, and actionable monitoring alerts."
      ]
    }
  ],
  projects: [
    {
      name: "Trading Platform — Real‑Time Market Data Microservices",
      stack: ["React", "TypeScript", "Spring Boot", "Kafka", "Databricks", "Delta Lake", "Jenkins", "Docker", "AWS"],
      summary: [
        "Event‑driven microservices (Kafka Streams) for tick ingestion, order handling, portfolio updates with OpenAPI‑first design and Resilience4j.",
        "React + Redux Toolkit dashboard for live charts, trade tickets, historical analytics with improved state management and error handling.",
        "Streaming analytics on Databricks with Delta Lake and Spark SQL; scheduled notebooks for KPIs and anomaly detection; AWS deployment."
      ]
    },
    {
      name: "Active Life Canada — Enterprise Microservices Ecosystem",
      stack: ["Angular 17", "TypeScript", "Spring Boot", "Spring Cloud", "Kafka", "MongoDB", "Databricks", "Jenkins", "Docker", "OAuth2", "Okta", "AWS"],
      summary: [
        "Spring Cloud microservices with Eureka discovery, Feign clients, Kafka workflows for appointment booking, notifications, results delivery.",
        "TypeScript SPA with reusable components and RxJS; improved UX, accessibility, and performance across complex dashboards.",
        "Persisted streams to Delta Lake and exposed analytics via APIs; CI/CD with Jenkins/Docker; secured APIs with OAuth2/OIDC and standardized OpenAPI."
      ]
    }
  ],
  education: [
    {
      school: "Humber College",
      location: "Etobicoke, ON, Canada",
      program: "Major in Backend Development",
      period: "Sept 2022 – Apr 2024"
    },
    {
      school: "Gujarat Technological University",
      location: "Gujarat, India",
      program: "Frontend, Backend, Networking, Systems Engineering coursework",
      period: "Aug 2017 – May 2021"
    }
  ]
};
