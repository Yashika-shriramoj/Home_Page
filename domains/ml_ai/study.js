/* =====================================================
   ACM-W BPHC — study.html / study.js content loader
   Reads ?topic=<slug> from the URL and fills in the
   template with that topic's title + study material.
   Topics with a `content` field render that HTML directly;
   topics without one fall back to the LOREM_SECTIONS
   placeholder until real material is written for them.
   ===================================================== */
const TOPICS = {
  "what-is-ml": {
    domainLabel: "Machine Learning & AI",
    domainHref: "ml_ai.html",
    title: "What is ML & Types of ML",
    intro: "A first look at what machine learning actually is, the prerequisites for this track, and the four broad categories ML problems fall into.",
    content: `
      <p>Machine learning is a branch of artificial intelligence that enables algorithms to uncover hidden patterns within datasets, allowing them to predict new, similar data without being explicitly programmed for each task. It shows up everywhere — image and speech recognition, natural language processing, recommendation systems, fraud detection, portfolio optimization, and general task automation.</p>
      <p><a class="text-link" href="https://www.geeksforgeeks.org/machine-learning/introduction-machine-learning/" target="_blank" rel="noopener">Read more on GeeksforGeeks →</a></p>

      <h3>Prerequisites</h3>
      <p>Before diving in, you should already be comfortable with Python, basic data preprocessing, and plotting from the induction task. Two reference sets to fill any gaps:</p>
      <ul>
        <li><a class="text-link" href="https://github.com/crux-bphc/dev-summer-group-2024/tree/main/Machine%20Learning/Week%201%20-%20Prerequisites" target="_blank" rel="noopener">Python, NumPy &amp; Pandas — Week 1</a></li>
        <li><a class="text-link" href="https://github.com/crux-bphc/dev-summer-group-2024/tree/main/Machine%20Learning/Week%202" target="_blank" rel="noopener">Data Processing &amp; Visualization — Week 2</a></li>
      </ul>

      <h3>Types of Machine Learning</h3>
      <p>Machine learning is broadly split into four categories, each suited to different kinds of problems:</p>
      <img src="ml-types.png" 
      style="max-width: 550px; width: 100%; height: auto; margin: 1.5rem auto; display: block; border-radius: 8px;"
      alt="Diagram showing the four types of machine learning — supervised, unsupervised, semi-supervised, and reinforcement learning — with example applications for each">

      <p>Some of the resources linked across topics may overlap with each other — if a resource repeats something you've already covered, feel free to skip ahead. We'd also recommend writing and running your code on Google Colab as you follow along. Expect regular quizzes and a small project at the end of this track, so keep pace with each topic as it's released.</p>
    `
  },
  "python-for-ml": {
    domainLabel: "Machine Learning & AI",
    domainHref: "ml_ai.html",
    title: "Python for ML",
    intro: "The core Python toolkit — NumPy, pandas and plotting — that every ML notebook in this domain builds on.",
  },
  "supervised-learning": {
    domainLabel: "Machine Learning & AI",
    domainHref: "ml_ai.html",
    title: "Supervised Learning",
    intro: "Regression and classification, and the math that underpins both.",
    content: `
      <p>Supervised learning is a type of machine learning where algorithms learn from labeled data — each training example has both an input and a correct output (label), like a teacher guiding a student. The model learns the mapping between inputs and outputs so it can make accurate predictions or classifications on new, unseen data.</p>
      <p><a class="text-link" href="https://www.geeksforgeeks.org/machine-learning/supervised-machine-learning/" target="_blank" rel="noopener">Read more on GeeksforGeeks →</a></p>
      <p>It's broadly divided into two types: <a class="text-link" href="#regression">Regression</a> and <a class="text-link" href="#classification">Classification</a>.</p>

      <h2 id="regression">Regression</h2>
      <p>Regression predicts continuous numerical values by learning the relationship between input variables (features) and an output variable (target). It's widely used in forecasting, risk analysis, decision-making, and trend estimation.</p>
      <p>The method we'll focus on is single-variable Linear Regression:</p>
      <p><a class="text-link" href="https://www.youtube.com/watch?v=8jazNUpO3lQ" target="_blank" rel="noopener">Linear Regression — video walkthrough →</a></p>
      <p>Other regression methods you may come across include multivariable linear regression and polynomial regression:</p>
      <ul>
        <li><a class="text-link" href="https://www.youtube.com/watch?v=J_LnPL3Qg70" target="_blank" rel="noopener">Multivariable Linear Regression</a></li>
        <li><a class="text-link" href="https://www.geeksforgeeks.org/machine-learning/regression-in-machine-learning/" target="_blank" rel="noopener">Regression in Machine Learning — GeeksforGeeks</a></li>
      </ul>

      <h3>Simple Linear Regression in Colab</h3>
      <p>Follow along and write your own simple linear regression code:</p>
      <p><a class="text-link" href="https://medium.com/@sarakarim/linear-regression-for-machine-learning-with-google-colab-7055563e5e82" target="_blank" rel="noopener">Linear Regression with Google Colab — Medium →</a></p>
      <p>For any values of <em>m</em> and <em>c</em>, there are infinitely many possible lines — so how do we find the best one?</p>

      <h3>Gradient Descent</h3>
      <p>Gradient descent is a core optimization algorithm in machine learning. It iteratively adjusts a model's parameters (weights and biases) to minimize a cost function (the error) — essentially finding the lowest point in a "valley" by taking steps in the steepest downhill direction until the model's predictions are as accurate as possible.</p>
      <ul>
        <li><a class="text-link" href="https://www.youtube.com/watch?v=sDv4f4s2SB8" target="_blank" rel="noopener">Gradient Descent — video walkthrough</a></li>
        <li><a class="text-link" href="https://www.geeksforgeeks.org/machine-learning/gradient-descent-in-linear-regression/" target="_blank" rel="noopener">Gradient Descent in Linear Regression — GeeksforGeeks</a></li>
      </ul>
      <p>In practice, gradient descent is handled for you by standard libraries like scikit-learn (the same library used in the Linear Regression video above), so you won't need to implement it yourself — but it's still an important concept to understand.</p>

      <h2 id="classification">Classification</h2>
      <img src="classification.png" alt="Scatter plot showing two categories of data points and a new data point being classified based on its nearest neighbors">

      <h3>Logistic Regression</h3>
      <p>Logistic Regression is used for classification tasks — predicting the probability of a categorical outcome by modeling the relationship between input variables and that outcome. It uses the sigmoid (S-shaped) function to squash predictions into a 0-to-1 probability range, which then gets classified based on a threshold (e.g. above 0.5 means "yes").</p>
      <img src="logistic-regression.png" alt="Graph of the sigmoid function, an S-shaped curve mapping any input to a value between 0 and 1">
      <p><a class="text-link" href="https://www.youtube.com/watch?v=zM4VZR0px8E" target="_blank" rel="noopener">Logistic Regression — video walkthrough →</a></p>
      <p><a class="text-link" href="https://github.com/crux-bphc/dev-summer-group-2024/blob/main/Machine%20Learning/Week%202/3_binary_classification.ipynb" target="_blank" rel="noopener">Code: Binary Classification →</a></p>

      <h3>K-Nearest Neighbors (KNN)</h3>
      <p>KNN is a simple, non-parametric supervised learning method used for both classification and regression. It works by finding the "k" closest data points (neighbors) to a given input, then predicting based on the majority class of those neighbors (for classification) or their average value (for regression).</p>
      <p><a class="text-link" href="https://www.youtube.com/watch?v=4HKqjENq9OU" target="_blank" rel="noopener">KNN — video walkthrough →</a></p>
      <p><a class="text-link" href="https://github.com/crux-bphc/dev-summer-group-2024/blob/main/Machine%20Learning/Week%203/1_KNN_classification.ipynb" target="_blank" rel="noopener">Code: KNN Classification →</a></p>

      <h3>Decision Trees</h3>
      <p>Decision Trees use a hierarchical, tree-like structure to model decisions and their possible outcomes. They work by recursively splitting a dataset into smaller, more homogeneous subsets based on specific features, eventually arriving at a final prediction or classification. The process of building one from data is called Decision Tree Learning.</p>
      <img src="decision-tree.png" alt="Simple decision tree flowchart asking whether a person is fit, branching on age, pizza consumption, and morning exercise">
      <ul>
        <li><a class="text-link" href="https://www.youtube.com/watch?v=_L39rN6gz7Y&t=18s" target="_blank" rel="noopener">Decision Trees — video walkthrough (part 1)</a></li>
        <li><a class="text-link" href="https://www.youtube.com/watch?v=PHxYNGo8NcI" target="_blank" rel="noopener">Decision Trees — video walkthrough (part 2)</a></li>
      </ul>
      <p><a class="text-link" href="https://github.com/crux-bphc/dev-summer-group-2024/blob/main/Machine%20Learning/Week%203/2_Decision_Trees.ipynb" target="_blank" rel="noopener">Code: Decision Trees →</a></p>
    `
  },
  "neural-networks": {
    domainLabel: "Machine Learning & AI",
    domainHref: "ml_ai.html",
    title: "Neural Networks & Deep Learning",
    intro: "Perceptrons, backpropagation, and building your first deep learning model.",
  },
  "nlp": {
    domainLabel: "Machine Learning & AI",
    domainHref: "ml_ai.html",
    title: "Natural Language Processing",
    intro: "Tokenization, embeddings, and how machines make sense of text.",
  },
  "mlops": {
    domainLabel: "Machine Learning & AI",
    domainHref: "ml_ai.html",
    title: "Model Deployment & MLOps",
    intro: "Taking a model from a notebook to a service other people can actually use.",
  },
};
const LOREM_SECTIONS = [
  {
    heading: "Overview",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    heading: "Key Concepts",
    body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    heading: "Worked Example",
    body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  },
  {
    heading: "Practice",
    body: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
  },
];
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
  if(topic.content){
    contentEl.innerHTML = topic.content;
  } else {
    contentEl.innerHTML = LOREM_SECTIONS.map(section =>
      `<h2>${section.heading}</h2><p>${section.body}</p>`
    ).join("");
  }
}
const params = new URLSearchParams(window.location.search);
renderTopic(params.get("topic"));
