<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Data Engineer Portfolio - PySpark & Microsoft Fabric projects showcasing medallion architecture, Delta Lake, and production-grade data pipelines.">
  <title>Data Engineer Portfolio | PySpark & Microsoft Fabric</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <!-- Navigation -->
  <nav class="nav" id="nav" role="navigation" aria-label="Main navigation">
    <div class="nav__container">
      <a href="#hero" class="nav__logo" aria-label="Home">
        <span class="nav__logo-icon">&lt;/&gt;</span>
        <span class="nav__logo-text">Portfolio</span>
      </a>
      <button class="nav__mobile-toggle" id="navToggle" aria-label="Toggle navigation menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav__links" id="navLinks" role="menubar">
        <li role="none"><a href="#about" class="nav__link" role="menuitem">About</a></li>
        <li role="none"><a href="#projects" class="nav__link" role="menuitem">Projects</a></li>
        <li role="none"><a href="#tech-stack" class="nav__link" role="menuitem">Tech Stack</a></li>
        <li role="none"><a href="#contact" class="nav__link" role="menuitem">Contact</a></li>
        <li role="none">
          <button class="theme-toggle" id="themeToggle" aria-label="Toggle dark/light theme">
            <svg class="theme-toggle__icon theme-toggle__icon--sun" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            <svg class="theme-toggle__icon theme-toggle__icon--moon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>
        </li>
      </ul>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero" id="hero">
    <div class="hero__container">
      <div class="hero__content">
        <p class="hero__greeting">Hello, I'm</p>
        <h1 class="hero__title">
          <span class="hero__title-line">Data Engineer</span>
          <span class="hero__title-accent">PySpark | Microsoft Fabric</span>
        </h1>
        <p class="hero__tagline">Building scalable data pipelines and analytics solutions with medallion architecture, Delta Lake, and modern lakehouse patterns.</p>
        <div class="hero__actions">
          <a href="#projects" class="btn btn--primary">View Projects</a>
          <a href="#contact" class="btn btn--outline">Get in Touch</a>
        </div>
      </div>
      <div class="hero__visual" aria-hidden="true">
        <div class="hero__code-block">
          <div class="hero__code-header">
            <span class="hero__code-dot hero__code-dot--red"></span>
            <span class="hero__code-dot hero__code-dot--yellow"></span>
            <span class="hero__code-dot hero__code-dot--green"></span>
            <span class="hero__code-filename">pipeline.py</span>
          </div>
          <pre class="hero__code"><code><span class="code-keyword">from</span> pyspark.sql <span class="code-keyword">import</span> SparkSession
<span class="code-keyword">from</span> delta.tables <span class="code-keyword">import</span> DeltaTable

spark = SparkSession.builder \
    .appName(<span class="code-string">"Medallion Pipeline"</span>) \
    .getOrCreate()

<span class="code-comment"># Bronze -> Silver -> Gold</span>
df_bronze = spark.read.format(<span class="code-string">"delta"</span>) \
    .load(<span class="code-string">"Tables/bronze"</span>)

df_silver = transform(df_bronze)
df_silver.write.format(<span class="code-string">"delta"</span>) \
    .mode(<span class="code-string">"overwrite"</span>) \
    .save(<span class="code-string">"Tables/silver"</span>)</code></pre>
        </div>
      </div>
    </div>
    <div class="hero__scroll-indicator" aria-hidden="true">
      <span>Scroll</span>
      <div class="hero__scroll-line"></div>
    </div>
  </section>

  <!-- About Section -->
  <section class="section about" id="about">
    <div class="container">
      <div class="section__header animate-on-scroll">
        <h2 class="section__title">About Me</h2>
        <div class="section__divider"></div>
      </div>
      <div class="about__grid">
        <div class="about__bio animate-on-scroll">
          <p class="about__text">
            I am a data engineer passionate about designing and building robust, scalable data platforms.
            My expertise lies in PySpark and the Microsoft Fabric ecosystem, where I architect end-to-end
            data pipelines using the medallion architecture pattern. I specialize in transforming raw,
            messy data into clean, analytics-ready datasets that drive business decisions.
          </p>
          <p class="about__text">
            From supply chain analytics processing data across 50 warehouses, to healthcare claims
            pipelines handling millions of records, to real-time IoT streaming from manufacturing
            floors -- I build solutions that are production-grade, well-tested, and designed for scale.
            Every project in this portfolio demonstrates real-world patterns you would find in enterprise
            data engineering teams.
          </p>
        </div>
        <div class="about__skills animate-on-scroll">
          <h3 class="about__skills-title">Core Skills</h3>
          <div class="skill" data-skill="PySpark" data-level="92">
            <div class="skill__header">
              <span class="skill__name">PySpark</span>
              <span class="skill__percent">92%</span>
            </div>
            <div class="skill__bar">
              <div class="skill__fill" style="--skill-level: 92%"></div>
            </div>
          </div>
          <div class="skill" data-skill="Delta Lake" data-level="88">
            <div class="skill__header">
              <span class="skill__name">Delta Lake</span>
              <span class="skill__percent">88%</span>
            </div>
            <div class="skill__bar">
              <div class="skill__fill" style="--skill-level: 88%"></div>
            </div>
          </div>
          <div class="skill" data-skill="Python" data-level="90">
            <div class="skill__header">
              <span class="skill__name">Python</span>
              <span class="skill__percent">90%</span>
            </div>
            <div class="skill__bar">
              <div class="skill__fill" style="--skill-level: 90%"></div>
            </div>
          </div>
          <div class="skill" data-skill="SQL" data-level="85">
            <div class="skill__header">
              <span class="skill__name">SQL</span>
              <span class="skill__percent">85%</span>
            </div>
            <div class="skill__bar">
              <div class="skill__fill" style="--skill-level: 85%"></div>
            </div>
          </div>
          <div class="skill" data-skill="Power BI" data-level="78">
            <div class="skill__header">
              <span class="skill__name">Power BI</span>
              <span class="skill__percent">78%</span>
            </div>
            <div class="skill__bar">
              <div class="skill__fill" style="--skill-level: 78%"></div>
            </div>
          </div>
          <div class="skill" data-skill="Microsoft Fabric" data-level="85">
            <div class="skill__header">
              <span class="skill__name">Microsoft Fabric</span>
              <span class="skill__percent">85%</span>
            </div>
            <div class="skill__bar">
              <div class="skill__fill" style="--skill-level: 85%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section class="section projects" id="projects">
    <div class="container">
      <div class="section__header animate-on-scroll">
        <h2 class="section__title">Projects</h2>
        <div class="section__divider"></div>
        <p class="section__subtitle">Production-grade PySpark pipelines built with medallion architecture on Microsoft Fabric</p>
      </div>

      <!-- Project 1: Inventory & Supply Chain -->
      <article class="project-card animate-on-scroll" id="project-inventory">
        <div class="project-card__content">
          <div class="project-card__number" aria-hidden="true">01</div>
          <h3 class="project-card__title">Inventory & Supply Chain Analytics</h3>
          <p class="project-card__description">
            End-to-end supply chain analytics pipeline processing inventory data across
            <strong>50 warehouses</strong> and <strong>15,000+ SKUs</strong>. Implements the full
            medallion architecture with advanced join strategies, slowly changing dimensions, and
            inventory classification systems used by Fortune 500 companies.
          </p>
          <div class="project-card__tech">
            <span class="pill">PySpark</span>
            <span class="pill">Delta Lake</span>
            <span class="pill">Medallion Architecture</span>
            <span class="pill">SCD Type 2</span>
            <span class="pill">Faker</span>
          </div>
          <ul class="project-card__concepts">
            <li>Medallion Architecture (Bronze / Silver / Gold)</li>
            <li>7 Join Types (inner, left, right, full, cross, semi, anti)</li>
            <li>SCD Type 2 with effective date tracking</li>
            <li>ABC/XYZ inventory classification</li>
            <li>Window functions for rolling analytics</li>
            <li>Data quality validation at each layer</li>
          </ul>
          <a href="https://github.com/yourusername/pyspark-fabric-portfolio/tree/main/project-01-inventory"
             class="btn btn--outline btn--sm"
             target="_blank"
             rel="noopener noreferrer">
            View on GitHub
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        </div>
        <div class="project-card__diagram">
          <h4 class="project-card__diagram-title">Architecture</h4>
          <div class="mermaid">
graph LR
    A["Raw CSV/JSON<br/>50 Warehouses<br/>15K SKUs"] -->|Ingest| B["Bronze<br/>Raw Delta Tables"]
    B -->|Clean & Validate| C["Silver<br/>Cleaned Facts &<br/>Dimensions"]
    C -->|Aggregate &<br/>Classify| D["Gold<br/>ABC/XYZ Analysis<br/>KPI Metrics"]
    D -->|Serve| E["Power BI<br/>Dashboards"]

    style A fill:#6e7681,stroke:#30363d,color:#e6edf3
    style B fill:#7c4a1e,stroke:#e3872d,color:#e6edf3
    style C fill:#1a4731,stroke:#3fb950,color:#e6edf3
    style D fill:#634a0e,stroke:#d29922,color:#e6edf3
    style E fill:#1b3a5c,stroke:#58a6ff,color:#e6edf3
          </div>
        </div>
      </article>

      <!-- Project 2: Healthcare Claims -->
      <article class="project-card animate-on-scroll" id="project-healthcare">
        <div class="project-card__content">
          <div class="project-card__number" aria-hidden="true">02</div>
          <h3 class="project-card__title">Healthcare Claims Analytics</h3>
          <p class="project-card__description">
            Large-scale healthcare claims processing pipeline handling <strong>3M+ claims records</strong>
            with advanced PySpark patterns. Demonstrates RDD-level operations, complex nested data types,
            custom UDFs, schema evolution strategies, and comprehensive error handling for
            production reliability.
          </p>
          <div class="project-card__tech">
            <span class="pill">PySpark</span>
            <span class="pill">Delta Lake</span>
            <span class="pill">RDD API</span>
            <span class="pill">UDFs</span>
            <span class="pill">Schema Evolution</span>
          </div>
          <ul class="project-card__concepts">
            <li>RDD demo with low-level transformations</li>
            <li>Complex types: arrays, maps, structs</li>
            <li>Custom UDFs for claims validation</li>
            <li>Schema evolution and merge strategies</li>
            <li>Comprehensive error handling patterns</li>
            <li>Data profiling and quality metrics</li>
          </ul>
          <a href="https://github.com/yourusername/pyspark-fabric-portfolio/tree/main/project-02-healthcare"
             class="btn btn--outline btn--sm"
             target="_blank"
             rel="noopener noreferrer">
            View on GitHub
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        </div>
        <div class="project-card__diagram">
          <h4 class="project-card__diagram-title">Architecture</h4>
          <div class="mermaid">
graph LR
    A["Claims Data<br/>3M+ Records<br/>Nested JSON"] -->|Ingest &<br/>Validate| B["Bronze<br/>Raw Claims<br/>Error Quarantine"]
    B -->|UDFs &<br/>Complex Types| C["Silver<br/>Validated Claims<br/>Normalized Schema"]
    C -->|Aggregate &<br/>Profile| D["Gold<br/>Claims Analytics<br/>Provider Metrics"]
    D -->|Serve| E["Power BI<br/>Reports"]

    style A fill:#6e7681,stroke:#30363d,color:#e6edf3
    style B fill:#7c4a1e,stroke:#e3872d,color:#e6edf3
    style C fill:#1a4731,stroke:#3fb950,color:#e6edf3
    style D fill:#634a0e,stroke:#d29922,color:#e6edf3
    style E fill:#1b3a5c,stroke:#58a6ff,color:#e6edf3
          </div>
        </div>
      </article>

      <!-- Project 3: IoT Smart Manufacturing -->
      <article class="project-card animate-on-scroll" id="project-iot">
        <div class="project-card__content">
          <div class="project-card__number" aria-hidden="true">03</div>
          <h3 class="project-card__title">IoT Smart Manufacturing</h3>
          <p class="project-card__description">
            Real-time IoT data processing pipeline for a smart factory with <strong>200 machines</strong>
            generating continuous telemetry streams. Features Structured Streaming, Delta Lake MERGE
            for upserts, OEE (Overall Equipment Effectiveness) calculations, and detailed
            performance benchmarks comparing processing strategies.
          </p>
          <div class="project-card__tech">
            <span class="pill">PySpark</span>
            <span class="pill">Structured Streaming</span>
            <span class="pill">Delta MERGE</span>
            <span class="pill">OEE Metrics</span>
            <span class="pill">Performance Tuning</span>
          </div>
          <ul class="project-card__concepts">
            <li>Structured Streaming with watermarks</li>
            <li>Delta Lake MERGE for streaming upserts</li>
            <li>OEE calculation (Availability x Performance x Quality)</li>
            <li>Performance benchmarks and optimization</li>
            <li>Predictive maintenance feature engineering</li>
            <li>Real-time alerting and anomaly detection</li>
          </ul>
          <a href="https://github.com/yourusername/pyspark-fabric-portfolio/tree/main/project-03-iot-manufacturing"
             class="btn btn--outline btn--sm"
             target="_blank"
             rel="noopener noreferrer">
            View on GitHub
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        </div>
        <div class="project-card__diagram">
          <h4 class="project-card__diagram-title">Architecture</h4>
          <div class="mermaid">
graph LR
    A["IoT Sensors<br/>200 Machines<br/>Telemetry Stream"] -->|Structured<br/>Streaming| B["Bronze<br/>Raw Telemetry<br/>Delta Append"]
    B -->|Clean &<br/>Delta MERGE| C["Silver<br/>Validated Readings<br/>Machine State"]
    C -->|OEE Calc &<br/>Benchmarks| D["Gold<br/>OEE Dashboards<br/>Predictive Maint."]
    D -->|Serve| E["Power BI<br/>Real-time Alerts"]

    style A fill:#6e7681,stroke:#30363d,color:#e6edf3
    style B fill:#7c4a1e,stroke:#e3872d,color:#e6edf3
    style C fill:#1a4731,stroke:#3fb950,color:#e6edf3
    style D fill:#634a0e,stroke:#d29922,color:#e6edf3
    style E fill:#1b3a5c,stroke:#58a6ff,color:#e6edf3
          </div>
        </div>
      </article>
    </div>
  </section>

  <!-- Tech Stack Section -->
  <section class="section tech-stack" id="tech-stack">
    <div class="container">
      <div class="section__header animate-on-scroll">
        <h2 class="section__title">Tech Stack</h2>
        <div class="section__divider"></div>
        <p class="section__subtitle">Technologies and tools I use to build data solutions</p>
      </div>
      <div class="tech-grid animate-on-scroll">
        <div class="tech-card" data-tech="pyspark">
          <div class="tech-card__icon">
            <span class="tech-card__emoji" aria-hidden="true">&#9889;</span>
          </div>
          <h3 class="tech-card__name">PySpark</h3>
          <p class="tech-card__desc">Distributed data processing</p>
        </div>
        <div class="tech-card" data-tech="delta-lake">
          <div class="tech-card__icon">
            <span class="tech-card__emoji" aria-hidden="true">&#9651;</span>
          </div>
          <h3 class="tech-card__name">Delta Lake</h3>
          <p class="tech-card__desc">ACID transactions on data lakes</p>
        </div>
        <div class="tech-card" data-tech="python">
          <div class="tech-card__icon">
            <span class="tech-card__emoji" aria-hidden="true">&#128013;</span>
          </div>
          <h3 class="tech-card__name">Python</h3>
          <p class="tech-card__desc">Core programming language</p>
        </div>
        <div class="tech-card" data-tech="sql">
          <div class="tech-card__icon">
            <span class="tech-card__emoji" aria-hidden="true">&#128451;</span>
          </div>
          <h3 class="tech-card__name">SQL</h3>
          <p class="tech-card__desc">Data querying and analytics</p>
        </div>
        <div class="tech-card" data-tech="power-bi">
          <div class="tech-card__icon">
            <span class="tech-card__emoji" aria-hidden="true">&#128202;</span>
          </div>
          <h3 class="tech-card__name">Power BI</h3>
          <p class="tech-card__desc">Business intelligence dashboards</p>
        </div>
        <div class="tech-card" data-tech="fabric">
          <div class="tech-card__icon">
            <span class="tech-card__emoji" aria-hidden="true">&#9881;</span>
          </div>
          <h3 class="tech-card__name">Microsoft Fabric</h3>
          <p class="tech-card__desc">Unified analytics platform</p>
        </div>
        <div class="tech-card" data-tech="faker">
          <div class="tech-card__icon">
            <span class="tech-card__emoji" aria-hidden="true">&#127922;</span>
          </div>
          <h3 class="tech-card__name">Faker</h3>
          <p class="tech-card__desc">Realistic synthetic data generation</p>
        </div>
        <div class="tech-card" data-tech="pandas">
          <div class="tech-card__icon">
            <span class="tech-card__emoji" aria-hidden="true">&#128059;</span>
          </div>
          <h3 class="tech-card__name">Pandas</h3>
          <p class="tech-card__desc">Data analysis and manipulation</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section class="section contact" id="contact">
    <div class="container">
      <div class="section__header animate-on-scroll">
        <h2 class="section__title">Get in Touch</h2>
        <div class="section__divider"></div>
        <p class="section__subtitle">Interested in working together or have questions about my projects?</p>
      </div>
      <div class="contact__grid animate-on-scroll">
        <a href="mailto:your.email@example.com" class="contact-card" aria-label="Send email">
          <div class="contact-card__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <h3 class="contact-card__title">Email</h3>
          <p class="contact-card__value">your.email@example.com</p>
        </a>
        <a href="https://linkedin.com/in/yourprofile" class="contact-card" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
          <div class="contact-card__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </div>
          <h3 class="contact-card__title">LinkedIn</h3>
          <p class="contact-card__value">linkedin.com/in/yourprofile</p>
        </a>
        <a href="https://github.com/Chacuitame" class="contact-card" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
          <div class="contact-card__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </div>
          <h3 class="contact-card__title">GitHub</h3>
          <p class="contact-card__value">github.com/Chacuitame</p>
        </a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <p class="footer__text">Built with PySpark knowledge and a passion for data engineering.</p>
    </div>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
