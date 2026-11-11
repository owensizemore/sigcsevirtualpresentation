---
theme: ./slidev-theme-cs390
title: SIGCSE Virtual The Problem with Problem Solving
---

# The Problem with<br/>Problem Solving
## How can Intro-Sequence CS Students Develop Problem-Solving Skills in the Age of AI?
<h3 style="text-align: center">Kristin Stephens-Martinez and Owen Sizemore</h3>

---
class: flex flex-col
---

<div class="flex-1 flex flex-col justify-center">

# Welcome
## The goal of this BoF is to discuss how GenAI is reshaping programming problem-solving, with an emphasis on introductory-sequence computer science at the postsecondary level

</div>

---

# Key terms and context setting

- <span v-mark="{ type: 'highlight', color: 'yellow', at: 1, delay: 300 }">Programming problem-solving (PPS)</span>: Applying a problem-solving process (understanding problem statement, breaking down problem into steps, solving each step, combining sub-problems, evaluating solution correctness) to solving a problem with code
- <span v-mark="{ type: 'highlight', color: 'yellow', at: 2, delay: 300 }">Learning objective</span>: A statement outlining what a student should be able to achieve at the end of a course
  - Example: “Decomposition: Translate problem descriptions into steps that can be coded.”
- <span v-mark="{ type: 'highlight', color: 'yellow', at: 3, delay: 300 }">Activity</span>: Work for a course that is completed with access to lots of different resources (internet, AI, peers, etc.)
- <span v-mark="{ type: 'highlight', color: 'yellow', at: 4, delay: 300 }">Assessment</span>: Evaluates what a student has learned in a course, such as through a test or quiz (possibly proctored during class time with restricted access to learning resources)

---

## What does the research say?

- Students' ability to engage in effective PPS involves applying metacognition and self-regulated learning skills[^1]
  - Novices struggle to apply metacognitive strategies to programming errors, often failing to reconsider the problem or their goals[^2]
  - Practicing self-regulation to reflect on current problem state and when to make adjustments helps avoid programming errors[^3][^4]
- GenAI may negatively impact PPS skills: "shepherding" students toward a predetermined solution or "drifting" from one AI-generated solution to the next without critical evaluation[^5]
- GenAI can lead novices to over-estimate their own programming abilities or fail to recognize when AI-generated solutions are incorrect[^6]

<v-click>

Instructors must identify ways that students can develop PPS skills by using GenAI to <span v-mark="{ type: 'underline', color: 'blue', at: 4, delay: 300 }">support</span> their learning, rather than <span v-mark="{ type: 'underline', color: 'red', at: 4, delay: 300 }">hinder</span> it

</v-click>

[^1]: Bergin, Reilly, and Traynor. Examining the role of self-regulated learning on introductory programming performance. ACM ICER, 2005.
[^2]: Parham, Gugerty, Stevenson. Empirical evidence for the existence and uses of metacognition in computer science problem solving. ACM SIGCSE TS, 2010.
[^3]: Li, Ko, and Zhu. What makes a great software engineer? IEEE/ACM ICSE, 2015.
[^4]: Loksa et al. Programming, problem solving, and self-awareness: Effects of explicit guidance. ACM CHI, 2016.
[^5]: Prather et al. “It’s weird that it knows what I want”: Usability and interactions with copilot for novice programmers. ACM Transactions on Computer-Human Interaction, 2023.
[^6]: Prather et al. The robots are here: Navigating the generative ai revolution in computing education. ACM ITiCSE WGR, 2023.

<style>
.footnotes-sep {
  margin: 0.25rem 0 !important;
  opacity: 0.1;
}
.footnotes {
  font-size: 0.5rem;
  opacity: 0.75;
  margin: -0.5rem 0 0 !important;
}
.footnotes-list {
  margin: 0 !important;
  padding-left: 1.25em;
}
.footnote-item {
  margin: 0 !important;
  padding: 0 !important;
  line-height: 1.2 !important;
}
.footnote-item p {
  margin: 0 !important;
  line-height: 1.2 !important;
}
.footnote-backref {
  display: none;
}
</style>

---

## Emerging learning objectives for PPS with GenAI

- Before GenAI: Students should be able to apply a problem-solving process to programming problems, and apply the knowledge and skills needed to execute this process
  - McCracken group: 5 problem-solving steps[^1]
  - Lister et al.: Prerequisite knowledge required before engaging in PPS[^2]
- Now: Some skills are less important and new skills are emerging
  - Being able to write code might be less important than knowing how to read and scrutinize existing code[^3]
  - Effective prompting for GenAI tools and validating whether GenAI-produced code is correct[^4]
  - Emphasis on high level design and problem-solving skills first, and developing fine-grained syntax and programming construct skills later[^5]

[^1]: McCracken et al. A multinational, multi-institutional study of assessment of programming skills of first-year cs students. In ITiCSE-WGR, 2001.
[^2]: Lister et al. A multi-national study of reading and tracing skills in novice programmers. SIGCSE Bull., 2004.
[^3]: Kendon, Leanne Wu, and Aycock. AI-Generated code not considered harmful. In ACM WCCCE, 2023.
[^4]: Albluwi et al. Computing education when writing code is no longer the challenge. Commun. ACM, 2026.
[^5]: Kumar et al. Computer Science Curricula 2023. Association for Computing Machinery, 2024.

<style>
.footnotes-sep {
  margin: 0.25rem 0 !important;
  opacity: 0.1;
}
.footnotes {
  font-size: 0.5rem;
  opacity: 0.75;
  margin: -0.5rem 0 0 !important;
}
.footnotes-list {
  margin: 0 !important;
  padding-left: 1.25em;
}
.footnote-item {
  margin: 0 !important;
  padding: 0 !important;
  line-height: 1.2 !important;
}
.footnote-item p {
  margin: 0 !important;
  line-height: 1.2 !important;
}
.footnote-backref {
  display: none;
}
</style>

---
autoClicks: false
---

# Session Plan

1. Create posts in Padlet
2. Comment and react to others' posts
3. Break out rooms for each column
   - If there are a lot of us, we'll have multiple rooms for some columns
4. Discuss in break out rooms and designate a note taker
5. Whole group discussion

---
autoClicks: false
---

# Padlet

<div class="text-center text-3xl pb-8">

[https://duke.is/problem-solving-padlet](https://duke.is/problem-solving-padlet)

</div>

- Pick a question and respond by creating a post in that question’s column
  - Problem-solving steps
  - Learning objectives
  - Activity design
  - Assessment design
  - Create your own question
- No one can see your responses until we release them all
- Take 5 minutes to write your response

---
autoClicks: false
---

# Padlet discussion (5 minutes)

- Take 5 minutes to read and respond to others' posts
- We will create breakout rooms based on the most popular columns/discussion topics, with 4-6 people in each room
- At the end of the 5 minutes, join the room that is most interesting to you

---
autoClicks: false
---

# Small group discussion (20 minutes)

1. Introduce yourselves to others in the group (name and institution)
2. Designate a note taker to write a summary of the group discussion (to be put in new post under "Breakout Room Notes" column)
3. At the end of the 20 minutes, we will reconvene for a whole-group discussion

---
class: flex flex-col
---

<div class="flex-1 flex flex-col justify-center">

# Whole-group discussion
## At least one volunteer from each small group should share what their group discussed, and answer follow-up questions/comments from the larger group

</div>

---
class: flex flex-col
autoClicks: false
---

# Thank you for coming!
<h3 style="text-align: center">The Problem with Problem Solving: How can Intro-Sequence CS Students Develop Problem-Solving Skills in the Age of AI?</h3>

<div class="flex-1 flex flex-col items-center justify-center gap-6 text-3xl text-center">
  <p>Slides: <a href="https://duke.is/problem-solving-sigcsev2026">https://duke.is/problem-solving-sigcsev2026</a></p>
  <p>Padlet: <a href="https://duke.is/problem-solving-padlet">https://duke.is/problem-solving-padlet</a></p>
</div>

<div class="text-center">
  <a href="mailto:ksm@cs.duke.edu">ksm@cs.duke.edu</a><br>
  <a href="mailto:owen.sizemore@duke.edu">owen.sizemore@duke.edu</a>
</div>

