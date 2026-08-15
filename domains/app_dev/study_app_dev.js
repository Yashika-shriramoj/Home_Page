/* =====================================================
   ACM-W BPHC — study_app_dev.html content loader
   Reads ?topic=<slug> from the URL and fills in the
   template with that topic's title + study material.
   Add new topics to TOPICS below as more resource cards
   are added to the App Dev page.
   ===================================================== */
const TOPICS = {
  "intro-to-app-dev": {
    domainLabel: "App Dev",
    domainHref: "app_dev.html",
    title: "Intro to App Development",
    intro: "What an app actually is, the vocabulary you'll hear constantly, and how the frontend, backend, and database fit together.",
    sections: [
      {
        heading: "1. What is an App?",
        html: `
          <p>An application is a program designed to help a user perform a task. A mobile app might display information, accept input, communicate with a server, use a camera or sensor, and save data.</p>
          <p>An app is not just a collection of screens. It includes:</p>
          <ul>
            <li><strong>User interface:</strong> What the user sees and touches.</li>
            <li><strong>Behavior:</strong> What happens after a tap, swipe, or form submission.</li>
            <li><strong>Data:</strong> Information displayed or entered by users.</li>
            <li><strong>Storage:</strong> Where data is kept between sessions.</li>
            <li><strong>Networking:</strong> Communication with online services.</li>
            <li><strong>Platform integration:</strong> Features such as notifications, camera, location, or Bluetooth.</li>
            <li><strong>Quality:</strong> Accessibility, security, performance, reliability, and testing.</li>
          </ul>
        `
      },
      {
        heading: "1.1 A Simple App-Development Vocabulary",
        html: `
          <table>
            <thead>
              <tr><th>Term</th><th>Meaning</th><th>Example</th></tr>
            </thead>
            <tbody>
              <tr><td>Screen/page</td><td>One destination in an app</td><td>Event details page</td></tr>
              <tr><td>UI</td><td>Visual interface</td><td>Button, text, image</td></tr>
              <tr><td>Widget/component</td><td>Reusable UI building block</td><td>A card showing an event</td></tr>
              <tr><td>State</td><td>Information that can change</td><td>Whether a user is registered</td></tr>
              <tr><td>Backend</td><td>Server-side part of an app</td><td>Service storing registrations</td></tr>
              <tr><td>API</td><td>Communication interface</td><td>Endpoint returning event data</td></tr>
              <tr><td>Database</td><td>Persistent data storage</td><td>Events and member records</td></tr>
              <tr><td>Framework</td><td>Tools and structure for building software</td><td>Flutter</td></tr>
              <tr><td>Programming language</td><td>Language used to write instructions</td><td>Dart</td></tr>
            </tbody>
          </table>
        `
      },
      {
        heading: "1.2 The Frontend and Backend",
        html: `
          <p>Imagine ordering food through an app:</p>
          <ul>
            <li>The frontend displays the menu and order button.</li>
            <li>The backend checks availability and creates the order.</li>
            <li>The database stores the restaurant, user, and order information.</li>
            <li>The API carries requests and responses between the app and backend.</li>
          </ul>
          <p>At the beginning, you can build apps using local, fake data. This lets you learn UI and interaction before adding the complexity of servers and authentication.</p>
        `
      },
    ],
  },
  "intro-to-flutter-dart": {
    domainLabel: "App Dev",
    domainHref: "app_dev.html",
    title: "Intro to Flutter and Dart",
    intro: "What Dart and Flutter are (and aren't), what happens when a Flutter app runs, and how to get your environment set up for your first project.",
    sections: [
      {
        heading: "2. What are Dart and Flutter?",
        html: `
          <h3>2.1 Dart</h3>
          <p>Dart is the programming language used to write Flutter applications. It provides the basic instructions and data structures your app needs:</p>
          <ul>
            <li>Variables store values.</li>
            <li>Functions perform actions.</li>
            <li>Classes describe objects.</li>
            <li>Conditions make decisions.</li>
            <li>Loops repeat work.</li>
            <li><code>Future</code> and <code>Stream</code> support asynchronous operations.</li>
            <li>Null safety helps distinguish values that exist from values that may be absent.</li>
          </ul>
          <p>Dart's official documentation describes it as an approachable language and provides beginner tutorials, a language tour, and a cheatsheet.</p>
          <h3>2.2 Flutter</h3>
          <p>Flutter is a software development toolkit for creating user interfaces and applications. You write Flutter code in Dart. Flutter provides:</p>
          <ul>
            <li>UI building blocks called widgets.</li>
            <li>Layout and styling tools.</li>
            <li>Touch and keyboard input handling.</li>
            <li>Navigation between screens.</li>
            <li>Animation support.</li>
            <li>Debugging and testing tools.</li>
            <li>Connections to platform features.</li>
            <li>Build tools for mobile, web, and desktop targets.</li>
          </ul>
          <p>In simple terms:</p>
          <pre><code>Dart = the language you write
Flutter = the toolkit that turns Dart code into an app</code></pre>
          <p>Flutter is designed to build applications for multiple platforms from a shared codebase. Its hot reload lets you quickly see many code changes during development.</p>
          <h3>2.3 Flutter is not Dart</h3>
          <p>These terms are related but different:</p>
          <ul>
            <li>You can learn Dart without Flutter by writing command-line programs.</li>
            <li>You use Dart to write Flutter applications.</li>
            <li>Flutter adds widgets, rendering, app lifecycle, input, navigation, and platform support.</li>
          </ul>
          <p>A useful analogy is:</p>
          <ul>
            <li>Dart is like the vocabulary and grammar.</li>
            <li>Flutter is like a set of building materials and construction tools.</li>
            <li>Your app is the building you create.</li>
          </ul>
          <h3>2.4 What Happens When a Flutter App Runs?</h3>
          <p>At a high level:</p>
          <ol>
            <li>You write Dart code.</li>
            <li>Flutter starts the application.</li>
            <li>Your code describes a tree of widgets.</li>
            <li>Flutter lays out and renders those widgets.</li>
            <li>The user interacts with the interface.</li>
            <li>Your code changes state.</li>
            <li>Flutter rebuilds the relevant UI.</li>
          </ol>
          <p>The word "rebuild" does not mean the entire application is restarted. It means Flutter asks affected widgets to describe their current appearance again.</p>
        `
      },
      {
        heading: "1. Setting Up Flutter",
        html: `
          <p>Some resources for learning Flutter and Dart:</p>
          <ul>
            <li><a href="https://docs.flutter.dev/learn" target="_blank" rel="noopener">docs.flutter.dev/learn</a></li>
            <li><a href="https://docs.flutter.dev/learn/pathway" target="_blank" rel="noopener">docs.flutter.dev/learn/pathway</a></li>
            <li><a href="https://docs.flutter.dev/reference/learning-resources" target="_blank" rel="noopener">docs.flutter.dev/reference/learning-resources</a></li>
          </ul>
          <h3>1.1 What You Need</h3>
          <p>You need:</p>
          <ul>
            <li>A computer supported by Flutter.</li>
            <li>Git.</li>
            <li>The Flutter SDK.</li>
            <li>An editor such as VS Code or Android Studio.</li>
            <li>A target device: Android emulator, physical Android phone, browser, desktop simulator, or another supported target.</li>
          </ul>
          <p>Installing Flutter also installs the Dart SDK.</p>
          <h3>1.2 Recommended Setup for Beginners</h3>
          <p>For a student club, VS Code is a lightweight choice. Android Studio is useful when you need Android emulators and Android platform tools.</p>
          <p>General process:</p>
          <ol>
            <li>Install Git.</li>
            <li>Install the Flutter SDK using the official installation instructions.</li>
            <li>Add Flutter to your system PATH if the installer does not do so.</li>
            <li>Install VS Code or Android Studio.</li>
            <li>Install the Flutter and Dart extensions or plugins.</li>
            <li>Open a new terminal.</li>
            <li>Run <code>flutter doctor</code>.</li>
            <li>Resolve the issues listed by the command.</li>
          </ol>
          <p>The official quick-install instructions describe installing Flutter through VS Code and note that the Flutter SDK includes Dart.</p>
          <h3>1.3 Checking the Installation</h3>
          <p>Open a terminal and run:</p>
          <pre><code>flutter doctor</code></pre>
          <p>This checks parts of your development environment. A warning is not always a blocker; read what it says. For example, you may be able to develop for web even if Android tooling is not yet configured.</p>
          <p>Useful commands:</p>
          <pre><code>flutter --version
flutter devices
flutter doctor -v</code></pre>
          <h3>1.4 Create Your First Project</h3>
          <p>From a terminal:</p>
          <pre><code>flutter create acm_w_first_app
cd acm_w_first_app
flutter run</code></pre>
          <p>The official beginner tutorial uses <code>flutter create</code> to create a project and then explains that a Flutter app is a composition of widgets arranged as a widget tree.</p>
          <p>You can also create a project through your editor's command palette.</p>
          <p>To run in a browser when web support is available:</p>
          <pre><code>flutter run -d chrome</code></pre>
          <h3>1.5 Project Structure</h3>
          <p>A new project contains many files. Focus first on these:</p>
          <pre><code>acm_w_first_app/
  lib/
    main.dart
  test/
  android/
  ios/
  web/
  pubspec.yaml
  README.md</code></pre>
          <ul>
            <li><code>lib/</code>: Main Dart application code.</li>
            <li><code>lib/main.dart</code>: Common starting point.</li>
            <li><code>test/</code>: Automated tests.</li>
            <li><code>android/</code>, <code>ios/</code>, <code>web/</code>: Platform-specific project files.</li>
            <li><code>pubspec.yaml</code>: Project metadata, dependencies, assets, and fonts.</li>
            <li><code>README.md</code>: Instructions and project information.</li>
          </ul>
          <p>At first, do not edit platform folders unless a feature requires it.</p>
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
    backEl.href = "../../index.html#domains";
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
