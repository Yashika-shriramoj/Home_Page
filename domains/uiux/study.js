/* =====================================================
   ACM-W BPHC — study.html content loader
   Reads ?topic=<slug> from the URL and fills in the
   template with that topic's title + study material.
   Add new topics to TOPICS below as more resource cards
   are added across domain pages.
   ===================================================== */
const TOPICS = {
  "ui-ux-basics-1": {
    domainLabel: "UI/UX",
    domainHref: "uiux.html",
    title: "Basics of UI/UX and Designs - I",
    intro: "An introduction to UI/UX design, the tools the domain uses, and the first three principles: understanding the user, visual hierarchy, and balance & symmetry.",
    sections: [
      {
        heading: "Introduction",
        html: `
          <p>UI/UX design is the process of creating digital products that are useful, understandable, efficient, accessible, and visually coherent.</p>
          <ul>
            <li><strong>UI, or User Interface,</strong> focuses on the visible and interactive parts of a product: screens, buttons, colors, icons, layouts, forms, and animations.</li>
            <li><strong>UX, or User Experience,</strong> focuses on how users understand, navigate, and feel while using the product.</li>
          </ul>
          <p>A beautiful interface can still provide a poor experience if users cannot find information, understand actions, recover from errors, or complete tasks easily. Good design therefore combines visual quality with usability, accessibility, consistency, and empathy for the user.</p>
          <p>A useful principle for beginners is: <em>Design should make the user's task easier, not make the designer's creativity more visible.</em></p>
          <p>Material Design similarly treats typography, grids, space, scale, color, and imagery as tools for creating hierarchy and focus.</p>
        `
      },
      {
        heading: "Tools of the Trade",
        html: `
          <h3>Figma</h3>
          <p>Figma is one of the most widely used tools for UI design, prototyping, design systems, and collaboration. It runs in a browser and supports real-time collaboration, making it useful for club projects where multiple members work on the same design.</p>
          <p>Figma can be used to create wireframes, high-fidelity screens, reusable components, responsive layouts, interactive prototypes, color styles, typography styles, and developer handoff specifications.</p>
          <h3>FigJam</h3>
          <p>FigJam is a collaborative whiteboard used for brainstorming, user flows, affinity diagrams, journey maps, mind maps, and workshop activities. It is useful before detailed screen design begins.</p>
          <h3>Canva</h3>
          <p>Canva is useful for posters, event announcements, presentations, social-media graphics, certificates, and simple visual assets. It is not a replacement for a full UI design tool, but it can be valuable for ACM-W event communication.</p>
        `
      },
      {
        heading: "1. Start With the User",
        html: `
          <p>Before choosing colors, fonts, or illustrations, understand the people who will use the product.</p>
          <h3>Ask basic questions</h3>
          <ul>
            <li>Who are the users?</li>
            <li>What are they trying to accomplish?</li>
            <li>What problem are they facing?</li>
            <li>What information do they already know?</li>
            <li>What device and environment will they use?</li>
            <li>What could confuse or frustrate them?</li>
            <li>What accessibility needs might they have?</li>
          </ul>
          <p>For example, an event-registration application may be used by students on mobile phones while they are walking between classes. This means the design should prioritize short forms, large touch targets, clear event details, fast loading, obvious confirmation messages, and minimal typing.</p>
        `
      },
      {
        heading: "2. Visual Hierarchy",
        html: `
          <p>Visual hierarchy determines the order in which users notice and understand information.</p>
          <p>A screen without hierarchy makes every element appear equally important. Users then have to work harder to identify what matters.</p>
          <h3>Ways to create hierarchy</h3>
          <p>You can create hierarchy using: size, weight, colour, contrast, position, spacing, alignment, shape, imagery, and motion.</p>
          <p>For example, on a workshop page:</p>
          <ol>
            <li>Workshop title: largest and most prominent.</li>
            <li>Date, time, and venue: secondary information.</li>
            <li>Description: readable but less dominant.</li>
            <li>Registration button: visually emphasized as the primary action.</li>
            <li>Additional links: quieter and less prominent.</li>
          </ol>
          <h3>The F-pattern and scanning</h3>
          <p>Users commonly scan interfaces instead of reading every word. Important information should therefore appear in predictable locations:</p>
          <ul>
            <li>Main heading near the top.</li>
            <li>Primary action near the relevant content.</li>
            <li>Labels close to the controls they describe.</li>
            <li>Supporting explanations below the main information.</li>
          </ul>
          <p>Do not rely only on large font sizes. A huge heading, bright button, and colorful image may compete for attention. Hierarchy is effective only when the levels are clearly differentiated.</p>
        `
      },
      {
        heading: "3. Balance and Symmetry",
        html: `
          <p>Balance refers to how visual weight is distributed across a screen.</p>
          <p>Visual weight can come from: large objects, dark colors, bright colors, dense text, images, strong borders, and high-contrast elements.</p>
          <h3>Symmetry</h3>
          <p>Symmetry places similar visual elements on either side of an axis. It creates a feeling of stability, order, calmness, formality, and predictability.</p>
          <p>Examples include:</p>
          <ul>
            <li>A centered login form.</li>
            <li>Two equally sized cards.</li>
            <li>A navigation bar with balanced spacing.</li>
            <li>A dashboard with evenly distributed sections.</li>
          </ul>
          <p>Symmetry is useful for interfaces that should feel reliable and structured, such as banking, registration, or administrative systems.</p>
          <h3>Asymmetry</h3>
          <p>Asymmetry uses unequal visual weights while maintaining overall balance. It can create energy, movement, emphasis, creativity, and a more editorial or modern appearance.</p>
          <p>For example, a landing page might use a large illustration on the right and a text block on the left. The layout is not identical on both sides, but the visual weight remains balanced.</p>
          <p>Symmetry is generally quiet and static, while asymmetry can create energy and movement.</p>
          <h3>Practical advice</h3>
          <p>Use symmetry when users need confidence and predictability. Use asymmetry when you need to guide attention or create visual interest. Avoid asymmetry that makes the layout feel accidental or unstable.</p>
        `
      },
    ],
  },
  "ui-ux-basics-2": {
    domainLabel: "UI/UX",
    domainHref: "uiux.html",
    title: "Basics of UI/UX and Designs - II",
    intro: "Continuing the fundamentals: whitespace and spacing systems, alignment and grids, contrast, and building a color palette.",
    sections: [
      {
        heading: "4. Whitespace and Spacing",
        html: `
          <p>Whitespace, also called negative space, is the empty space between elements. It does not have to be white; it can be any background color.</p>
          <p>Whitespace helps users:</p>
          <ul>
            <li>Separate unrelated content.</li>
            <li>Understand relationships.</li>
            <li>Focus on important actions.</li>
            <li>Read text more comfortably.</li>
            <li>Scan a page quickly.</li>
            <li>Avoid feeling overwhelmed.</li>
          </ul>
          <p>Whitespace is not wasted space. It is an active part of the design.</p>
          <h3>Proximity</h3>
          <p>The proximity principle states that objects placed close together are perceived as related. For example:</p>
          <ul>
            <li>A form label should be closer to its input than to the next field.</li>
            <li>A card heading should be closer to its description than to another card.</li>
            <li>A button should be placed near the content or action it controls.</li>
          </ul>
          <p>Poor spacing can make users misunderstand relationships. If the heading of one section is closer to the previous paragraph than to its own content, the structure becomes unclear.</p>
          <h3>Use a spacing system</h3>
          <p>Instead of choosing random values such as 13px, 19px, and 27px, define a spacing scale such as 4px, 8px, 12px, 16px, 24px, 32px, 48px, and 64px.</p>
          <p>A consistent spacing system creates rhythm and makes interfaces easier to maintain. Material Design commonly uses an 8dp layout rhythm, with smaller elements and typography sometimes aligning to 4dp increments.</p>
          <h3>Common spacing relationships</h3>
          <p>A useful starting point is: small spacing within a component, medium spacing between related components, and large spacing between separate sections. For example:</p>
          <ul>
            <li>Icon and label: 8px.</li>
            <li>Label and input: 8–12px.</li>
            <li>Two related fields: 16px.</li>
            <li>Two separate sections: 32–48px.</li>
          </ul>
          <p>These are starting points, not unbreakable rules. The important goal is consistency.</p>
          <h3>Avoid two extremes</h3>
          <p>Too little whitespace creates visual clutter. Too much whitespace can make related information appear disconnected or force unnecessary scrolling. The right amount depends on hierarchy, content density, device size, and user context.</p>
        `
      },
      {
        heading: "5. Alignment and Grids",
        html: `
          <p>Alignment creates order by giving elements invisible lines to follow.</p>
          <p>Common alignment types include left alignment, center alignment, right alignment, edge alignment, and baseline alignment.</p>
          <h3>Why alignment matters</h3>
          <p>When elements share an alignment edge, users can scan them more easily. Misaligned elements make a design feel unintentional, even when users cannot explain why.</p>
          <p>For most interfaces:</p>
          <ul>
            <li>Long text is usually easier to read when left-aligned.</li>
            <li>Center alignment works well for short headings, empty states, and focused actions.</li>
            <li>Right alignment is useful for numbers, prices, and certain data tables.</li>
            <li>Form labels and inputs should usually share a clear alignment structure.</li>
          </ul>
          <h3>Grid systems</h3>
          <p>A grid divides the screen into columns, rows, margins, and spacing units. It helps designers:</p>
          <ul>
            <li>Keep content aligned.</li>
            <li>Create responsive layouts.</li>
            <li>Maintain consistency across screens.</li>
            <li>Coordinate work between designers and developers.</li>
          </ul>
          <p>A grid does not mean every element must look identical. It provides structure while still allowing variation.</p>
          <p>A useful principle is: <em>Design the structure first, then decorate the structure.</em></p>
        `
      },
      {
        heading: "6. Contrast",
        html: `
          <p>Contrast means creating noticeable differences between elements. It helps users distinguish important information and understand relationships.</p>
          <p>Contrast can be created through:</p>
          <ul>
            <li>Light versus dark colors.</li>
            <li>Large versus small text.</li>
            <li>Bold versus regular weight.</li>
            <li>Filled versus outlined buttons.</li>
            <li>Dense versus spacious areas.</li>
            <li>Different shapes.</li>
            <li>Different positions.</li>
          </ul>
          <h3>Functional contrast</h3>
          <p>Contrast should communicate meaning, not merely make a screen look attractive. For example:</p>
          <ul>
            <li>A primary button can have stronger contrast than a secondary button.</li>
            <li>Error messages can use a distinct visual treatment.</li>
            <li>Disabled controls should look inactive, but still remain understandable.</li>
            <li>A selected navigation item should be distinguishable from unselected items.</li>
          </ul>
          <h3>Avoid excessive contrast</h3>
          <p>If every item is bold, colorful, large, or animated, no item appears important. Good design uses contrast selectively.</p>
        `
      },
      {
        heading: "7. Color Palettes",
        html: `
          <p>Color influences hierarchy, emotion, brand recognition, and feedback. It should be chosen deliberately rather than added at the end.</p>
          <p>A UI color system may include a primary color, secondary color, accent color, background color, surface color, primary text, secondary text, disabled text, border colors, semantic colors for success, warning, error, and information, and interaction colors for hover, pressed, selected, and focus states.</p>
          <p>Semantic color names are more useful than names such as "blue 500" because they describe purpose. Material Design, for example, defines roles such as primary, secondary, surface, background, and error.</p>
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
