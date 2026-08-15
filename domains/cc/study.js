/* =====================================================
   ACM-W BPHC — study.html content loader
   Reads ?topic=<slug> from the URL and fills in the
   template with that topic's title + study material.
   Add new topics to TOPICS below as more resource cards
   are added across domain pages.
   ===================================================== */
const TOPICS = {
  "intro-to-cc": {
    domainLabel: "Competitive Coding",
    domainHref: "cc.html",
    title: "Intro to Competitive Coding",
    intro: "A beginner's guide to competitive coding — what it is, how to set up your environment, and the C++ basics you need before your first contest.",
    sections: [
      {
        heading: "Beginner's Guide to Competitive Coding",
        html: `
          <p>Competitive coding is a fun and practical way to improve your programming and problem-solving skills. You are given a problem, a set of constraints, and limited time to write a program that produces the correct output.</p>
          <p>You do not need to know advanced algorithms to begin. Start with the basics, practise regularly, and improve one topic at a time.</p>
        `
      },
      {
        heading: "1. Set Up Your Coding Environment",
        html: `
          <p>For this guide, we recommend using C++, Sublime Text, and the MinGW compiler on Windows.</p>
          <h3>Install Sublime Text</h3>
          <p><a href="https://www.sublimetext.com/" target="_blank" rel="noopener">Sublime Text</a> is a lightweight and beginner-friendly code editor. It starts quickly and can be configured to compile and run C++ programs.</p>
          <h3>Install MinGW</h3>
          <p>MinGW provides the <code>g++</code> compiler required to compile C++ programs on Windows. After installation, add the MinGW <code>bin</code> folder — for example, <code>C:\\MinGW\\bin</code> — to your system's PATH. You can check whether the installation worked by running <code>g++ --version</code> in Command Prompt.</p>
          <h3>Configure Sublime Text</h3>
          <p>After installing MinGW:</p>
          <ol>
            <li>Open Sublime Text.</li>
            <li>Go to Tools → Build System → New Build System.</li>
            <li>Add a C++ build configuration.</li>
            <li>Save it as <code>C++ (MinGW).sublime-build</code>.</li>
            <li>Select it from Tools → Build System.</li>
            <li>Open a <code>.cpp</code> file and press <code>Ctrl+B</code> to build and run it.</li>
          </ol>
          <p>This setup allows you to write, compile, and test C++ programs directly from Sublime Text.</p>
          <h3>Recommended setup videos</h3>
          <ul>
            <li><a href="https://youtu.be/Fql_b-xZYwQ" target="_blank" rel="noopener">Setup walkthrough video 1</a></li>
            <li><a href="https://youtu.be/JsO58opI3SQ" target="_blank" rel="noopener">Setup walkthrough video 2</a></li>
          </ul>
        `
      },
      {
        heading: "2. Learn the Basics of C++",
        html: `
          <p>Before solving contest problems, become comfortable with these concepts:</p>
          <ul>
            <li>Variables and data types.</li>
            <li>Input and output using <code>cin</code> and <code>cout</code>.</li>
            <li>Conditional statements such as <code>if</code>, <code>else if</code>, and <code>else</code>.</li>
            <li>Loops using <code>for</code> and <code>while</code>.</li>
            <li>Functions.</li>
            <li>Arrays and strings.</li>
            <li>Vectors.</li>
            <li>Pairs.</li>
            <li>Sorting.</li>
            <li>Basic use of the C++ Standard Template Library, or STL.</li>
          </ul>
          <p>C++ learning resources: <a href="https://www.w3schools.com/cpp/cpp_getstarted.asp" target="_blank" rel="noopener">w3schools — C++ Get Started</a></p>
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
