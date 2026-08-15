/* =====================================================
   ACM-W BPHC — study_web_dev.html content loader
   Reads ?topic=<slug> from the URL and fills in the
   template with that topic's title + study material.
   Add new topics to TOPICS below as more resource cards
   are added to the Web Dev page.
   ===================================================== */
const TOPICS = {
  "intro-web-dev": {
    domainLabel: "Web Dev",
    domainHref: "web_dev.html",
    title: "Intro Web Dev",
    intro: "A guide to what web development actually involves — the frontend/backend/database mental model, how the web works under the hood, and the fundamentals of HTML structure.",
    sections: [
      {
        heading: "1. What is Web Development?",
        html: `
          <p>Web development is the process of designing, building, testing, deploying, and maintaining websites and web applications.</p>
          <p>A useful mental model is:</p>
          <ul>
            <li><strong>Frontend:</strong> Code that runs in the browser and creates the user interface.</li>
            <li><strong>Backend:</strong> Code that runs on a server and handles business logic, authentication, and data.</li>
            <li><strong>Database:</strong> Persistent storage for users, content, and application state.</li>
            <li><strong>Network:</strong> The communication layer connecting browser, server, APIs, and third-party services.</li>
            <li><strong>DevOps and tooling:</strong> Version control, testing, deployment, monitoring, and collaboration practices.</li>
          </ul>
          <p>A static portfolio page may need only HTML, CSS, and JavaScript. A club-management platform may additionally need a backend, database, authentication, file storage, and an administrator dashboard.</p>
          <p>The MDN curriculum describes HTML, CSS, JavaScript, accessibility, version control, and deployment as core grounding for web developers.</p>
        `
      },
      {
        heading: "2. How the Web Works",
        html: `
          <p>When a user opens a website, several steps occur:</p>
          <ol>
            <li>The browser resolves the domain name through DNS.</li>
            <li>It establishes a secure connection using HTTPS when available.</li>
            <li>It sends an HTTP request to a server.</li>
            <li>The server returns a response containing HTML, CSS, JavaScript, images, or data.</li>
            <li>The browser parses the response, constructs the page, downloads required resources, and renders the interface.</li>
            <li>JavaScript may make additional requests to APIs without reloading the whole page.</li>
          </ol>
          <h3>Important terms</h3>
          <ul>
            <li><strong>URL:</strong> Address of a resource, such as <code>https://example.com/events</code>.</li>
            <li><strong>HTTP method:</strong> The intended operation. Common methods are GET, POST, PUT/PATCH, and DELETE.</li>
            <li><strong>Status code:</strong> A response result. Examples include 200 for success, 201 for creation, 400 for a bad request, 401 for unauthenticated access, 403 for forbidden access, 404 for not found, and 500 for a server error.</li>
            <li><strong>Header:</strong> Metadata sent with a request or response.</li>
            <li><strong>Body:</strong> The main payload, often HTML or JSON.</li>
            <li><strong>API:</strong> A defined interface through which software components communicate.</li>
            <li><strong>JSON:</strong> A common text format for structured data.</li>
          </ul>
          <p>Example API response:</p>
          <pre><code>{
  "id": 12,
  "title": "Intro to Web Development",
  "date": "2026-09-10",
  "registered": true
}</code></pre>
        `
      },
      {
        heading: "3. HTML: Structure and Meaning",
        html: `
          <p>HTML describes the structure and meaning of a page. It is not primarily a programming language and should not be used as a styling system.</p>
          <p>A basic document:</p>
          <pre><code>&lt;!doctype html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
    &lt;title&gt;ACM-W Events&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;header&gt;
      &lt;h1&gt;ACM-W Events&lt;/h1&gt;
      &lt;nav aria-label="Primary navigation"&gt;
        &lt;a href="/events"&gt;Events&lt;/a&gt;
        &lt;a href="/about"&gt;About&lt;/a&gt;
      &lt;/nav&gt;
    &lt;/header&gt;

    &lt;main&gt;
      &lt;section aria-labelledby="upcoming-heading"&gt;
        &lt;h2 id="upcoming-heading"&gt;Upcoming events&lt;/h2&gt;
        &lt;article&gt;
          &lt;h3&gt;Web Development Workshop&lt;/h3&gt;
          &lt;p&gt;Learn the foundations of the modern web.&lt;/p&gt;
          &lt;a href="/events/web-workshop"&gt;View details&lt;/a&gt;
        &lt;/article&gt;
      &lt;/section&gt;
    &lt;/main&gt;

    &lt;footer&gt;ACM-W Student Chapter&lt;/footer&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
          <h3>Core HTML topics</h3>
          <ul>
            <li><strong>Document structure:</strong> <code>html</code>, <code>head</code>, <code>body</code>, metadata, and the viewport setting.</li>
            <li><strong>Text hierarchy:</strong> headings from <code>h1</code> to <code>h6</code>, paragraphs, lists, quotations, and emphasis.</li>
            <li><strong>Links:</strong> use <code>a</code> with meaningful link text and a valid destination.</li>
            <li><strong>Images:</strong> use <code>img</code> with useful <code>alt</code> text; use an empty <code>alt</code> for decorative images.</li>
            <li><strong>Forms:</strong> use <code>form</code>, <code>label</code>, <code>input</code>, <code>select</code>, <code>textarea</code>, and <code>button</code> correctly.</li>
            <li><strong>Tables:</strong> reserve tables for tabular data, not page layout.</li>
            <li><strong>Semantic layout:</strong> prefer <code>header</code>, <code>nav</code>, <code>main</code>, <code>section</code>, <code>article</code>, <code>aside</code>, and <code>footer</code> over generic <code>div</code> elements when they express meaning.</li>
            <li><strong>Metadata:</strong> title, description, language, favicon, social sharing metadata, and structured data when appropriate.</li>
          </ul>
        `
      },
    ],
  },
};

function renderTopic(slug){
  const topic = TOPICS[slug];
  const titleEl = document.getElementById("topicTitle");
  const introEl = document.getElementById("topicIntro");
  const contentEl = document.getElementById("topicContent");
  const backEl = document.getElementById("backToDomain");
  if(!topic){
    document.title = "Topic not found · ACM-W BPHC";
    titleEl.textContent = "Topic not found";
    introEl.textContent = "We couldn't find study material for this topic. Head back and pick one from the Resources section.";
    contentEl.innerHTML = "";
    backEl.textContent = "← Back to home";
    backEl.href = "../../index.html#home";
    return;
  }
  document.title = topic.title + " · ACM-W BPHC";
  titleEl.textContent = topic.title;
  introEl.textContent = topic.intro;
  backEl.textContent = "← Back to " + topic.domainLabel;
  backEl.href = topic.domainHref;
  contentEl.innerHTML = topic.sections.map(section =>
    `<h2>${section.heading}</h2>${section.html}`
  ).join("");
}

const params = new URLSearchParams(window.location.search);
renderTopic(params.get("topic"));
