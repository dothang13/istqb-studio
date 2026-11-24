/**
 * GOOGLE APPS SCRIPT TỰ ĐỘNG TẠO GOOGLE FORM TRẮC NGHIỆM ISTQB CTFL v4.0
 * Bộ đề: ASTQB Sample Exam #4 (40 câu chuẩn) (40 câu)
 * Hướng dẫn:
 * 1. Mở https://script.google.com -> Dự án mới (New Project)
 * 2. Dán toàn bộ nội dung file này vào -> Bấm Ctrl+S -> Bấm Run (Chạy) hàm createISTQBQuizForm
 * 3. Xem Nhật ký thực thi (Execution Log) ở dưới để lấy Link làm bài Google Form!
 */
function createISTQBQuizForm() {
  var formTitle = "ISTQB CTFL v4.0 — ASTQB Sample Exam #4 (40 câu chuẩn)";
  var form = FormApp.create(formTitle);
  form.setIsQuiz(true);
  form.setDescription("Đề luyện thi cuối kỳ KTPM / ISTQB Foundation Level v4.0 (40 câu). Tự động chấm điểm và hiển thị giải thích chi tiết sau khi nộp bài.");
  form.setCollectEmail(false);
  form.setAllowResponseEdits(true);
  form.setPublishingSummary(true);

  var questions = [
  {
    "n": 1,
    "ref": "Question 1 [FL-1.2.2]",
    "stem": "In what way does root cause analysis contribute to quality  assurance?",
    "opts": [
      {
        "k": "a",
        "t": "A) Helps to better identify and correct the root cause of defects"
      },
      {
        "k": "b",
        "t": "B) Outlines how development teams can code faster"
      },
      {
        "k": "c",
        "t": "C) Specifies the desired root causes to be achieved by other teams"
      },
      {
        "k": "d",
        "t": "D) Contributes to the justification of future project funding"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "A is correct. Root cause analysis can determine common causes of  issues. Addressing these common causes by process improvement can  increase quality. B is incorrect because root cause analysis will not  make the developers code faster, better maybe, not faster. C is incorrect  because root causes generally are not good things that should be  transferred between teams. D is not correct because it will not improve  funding.\n📌 Kiến thức: FL-1.2.2 (K1) Recall the relation between testing and quality  assurance"
  },
  {
    "n": 2,
    "ref": "Question 2 [FL-1.5.2]",
    "stem": "You are working in an Agile team where the testers are being  accused of slowing down the process because of the time  system testing is taking. Which of the following would be an  approach that would better spread the skills of the team to  complete the tasks?",
    "opts": [
      {
        "k": "a",
        "t": "A) Whole Team"
      },
      {
        "k": "b",
        "t": "B) Team Split"
      },
      {
        "k": "c",
        "t": "C) Behavior-Driven Development"
      },
      {
        "k": "d",
        "t": "D) Waterfall"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "A is correct. The whole team approach would support the developers  helping with the testing tasks rather than waiting for the testers to  complete all the testing.\n📌 Kiến thức: FL-1.5.2 (K1) Recall the advantages of the  whole team approach"
  },
  {
    "n": 3,
    "ref": "Question 3 [FL-1.1.2]",
    "stem": "Which of the following is an example of debugging?",
    "opts": [
      {
        "k": "a",
        "t": "A) A tester finds a defect and reports it"
      },
      {
        "k": "b",
        "t": "B) A tester retests a fix from the developer and finds a regression"
      },
      {
        "k": "c",
        "t": "C) A developer finds and fixes a defect"
      },
      {
        "k": "d",
        "t": "D) A developer performs unit testing"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "C is correct. Debugging is what the developer does to identify the cause  of the defect, analyze it and fix it. D may involve debugging, if the  developer finds a defect, but the act of unit testing is not the same as  debugging.\n📌 Kiến thức: FL-1.1.2 (K2) Differentiate testing from debugging"
  },
  {
    "n": 4,
    "ref": "Question 4 [FL-1.3.1]",
    "stem": "Which of the following is a true statement about exhaustive  testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) It is a form of stress testing"
      },
      {
        "k": "b",
        "t": "B) It is not feasible except in the case of trivial software"
      },
      {
        "k": "c",
        "t": "C) It is commonly done with test automation"
      },
      {
        "k": "d",
        "t": "D) It is normally the responsibility of the developer during unit testing"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "B is correct. Exhaustive testing, all combinations of inputs and  preconditions, is not feasible unless the software is trivially simple.  Otherwise, it would take too long and might not even be possible.\n📌 Kiến thức: FL-1.3.1 (K2) Explain the seven testing principles."
  },
  {
    "n": 5,
    "ref": "Question 5 [FL-1.4.4]",
    "stem": "If you need to provide a report showing test case execution  coverage of the requirements, what do you need to track?",
    "opts": [
      {
        "k": "a",
        "t": "A) Traceability between the test cases and the requirements"
      },
      {
        "k": "b",
        "t": "B) Coverage of the risk items by test case"
      },
      {
        "k": "c",
        "t": "C) Traceability between the requirements and the risk items"
      },
      {
        "k": "d",
        "t": "D) Coverage of the requirements by the test cases that have been designed"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "A is correct. In order to show the test execution coverage of the  requirements you will need traceability between the requirements and  the test cases. As the test cases are executed this traceability can be  used to record tests executed against the requirements. B is not correct  because it’s looking for requirements coverage, not risk coverage. C is  not correct because it’s looking for test execution, not risk items. D is  not correct because it’s looking for test cases that have been executed,  not just designed.\n📌 Kiến thức: FL-1.4.4 (K2) Explain the value of maintaining  traceability"
  },
  {
    "n": 6,
    "ref": "Question 6 [FL-1.4.5]",
    "stem": "Who normally writes the test plan for a project?",
    "opts": [
      {
        "k": "a",
        "t": "A) The project manager"
      },
      {
        "k": "b",
        "t": "B) The product owner"
      },
      {
        "k": "c",
        "t": "C) The test manager"
      },
      {
        "k": "d",
        "t": "D) The tester"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "C is correct. Writing and updating the test plan is normally the  responsibility of the test manager. A, B and D may contribute to the test  plan, but the overall responsibility belongs to the test manager.\n📌 Kiến thức: FL-1.4.5 (K2) Compare the different roles in testing"
  },
  {
    "n": 7,
    "ref": "Question 7 [FL-1.4.3]",
    "stem": "Your team has conducted a quality risk analysis and has  determined the likelihood, impact and mitigation plan for each  identified risk. This information should be captured in what  work product?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test strategy"
      },
      {
        "k": "b",
        "t": "B) Test plan"
      },
      {
        "k": "c",
        "t": "C) Risk register"
      },
      {
        "k": "d",
        "t": "D) Risk plan"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "C is correct, per the syllabus. This information should be recorded in the  risk register. The risk register should be referenced in the test plan for  the project.\n📌 Kiến thức: FL-1.4.3 (K2) Differentiate the testware that supports the  test activities"
  },
  {
    "n": 8,
    "ref": "Question 8 [FL-1.5.1]",
    "stem": "You are working with a junior tester who has been given a user  story to test. They have created only one positive path test for  the story. You know there are more areas that should be tested  for this story, including negative scenarios.\n\nWhich of the following generic skills do they appear to be  lacking?",
    "opts": [
      {
        "k": "a",
        "t": "A) Communication"
      },
      {
        "k": "b",
        "t": "B) Curiosity"
      },
      {
        "k": "c",
        "t": "C) Confidence"
      },
      {
        "k": "d",
        "t": "D) Creativity"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "D is correct. It appears they are lacking in creativity in designing test  scenarios. A is not correct because there is no indication that they are  not communicating effectively. B is not correct, although if they were  more curious, they might have done more investigation. C is not correct  because it doesn’t appear that confidence is a factor, rather that they  just aren’t approaching the test creation with much creativity.\n📌 Kiến thức: FL-1.5.1 (K2) Give examples of the generic skills required for testing"
  },
  {
    "n": 9,
    "ref": "Question 9 [FL-2.1.2]",
    "stem": "Which of the following is an example of a good testing practice?",
    "opts": [
      {
        "k": "a",
        "t": "A) Different test levels should have specific test objectives"
      },
      {
        "k": "b",
        "t": "B) Testers should have development experience"
      },
      {
        "k": "c",
        "t": "C) Developers should determine the order of test execution in the test procedures"
      },
      {
        "k": "d",
        "t": "D) Test design should begin when the code is complete to avoid changes"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "A is correct. This is a good testing practice. B is not a requirement for  many testers. C is not correct because this should be determined by the  testers based on priority, risk, availability, etc. D is not correct because  test design should start during code design and implementation.\n📌 Kiến thức: FL-2.1.2 (K1) Recall good testing practices that apply to all software  development lifecycles"
  },
  {
    "n": 10,
    "ref": "Question 10 [FL-2.1.3]",
    "stem": "Which development approach captures the requirements in a  simple test case format?",
    "opts": [
      {
        "k": "a",
        "t": "A) TDD"
      },
      {
        "k": "b",
        "t": "B) BDD"
      },
      {
        "k": "c",
        "t": "C) ATDD"
      },
      {
        "k": "d",
        "t": "D) TBD"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "B is correct. Behavior-driven development uses the given/when/then  format to define the test cases. Those are then used as the requirements  to develop the code.\n📌 Kiến thức: FL-2.1.3 (K1) Recall the examples of test-first  approaches to development"
  },
  {
    "n": 11,
    "ref": "Question 11 [FL-2.2.2]",
    "stem": "Usability testing is an example of which type of testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Functional"
      },
      {
        "k": "b",
        "t": "B) Non-functional"
      },
      {
        "k": "c",
        "t": "C) Structural"
      },
      {
        "k": "d",
        "t": "D) Change-related"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "B is correct. Usability is one of the non-functional test types according  to ISO 25010.\n📌 Kiến thức: FL-2.2.2 (K2) Distinguish the different test types"
  },
  {
    "n": 12,
    "ref": "Question 12 [FL-2.2.3]",
    "stem": "You have been receiving daily builds from the developers. Even  though they are documenting the fixes they are including in  each build, you are finding that the fixes either aren’t in the  build or are not working. What type of testing is best suited for  finding these issues?",
    "opts": [
      {
        "k": "a",
        "t": "A) Unit testing"
      },
      {
        "k": "b",
        "t": "B) System testing"
      },
      {
        "k": "c",
        "t": "C) Confirmation testing"
      },
      {
        "k": "d",
        "t": "D) Regression testing"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "C is correct. Confirmation testing will determine if a fix is present in  a build and if it actually fixes the defect it is supposed to fix. A is not  correct because this would be conducted by the developer as they fix  the issues. While it might catch a fix that doesn’t work, it’s not likely to  catch the check-in/build process that is excluding the fix from the build.  B is not correct because system testing will take longer to pinpoint  this problem and may result in more troubleshooting time when the  problem is discovered again. D is not correct because this is the testing  that is done to see if there have been any unintended changes in the  software’s behavior.\n📌 Kiến thức: FL-2.2.3 (K2) Distinguish confirmation testing from  regression test"
  },
  {
    "n": 13,
    "ref": "Question 13 [FL-2.1.6]",
    "stem": "Your team has just completed a retrospective. They have  discussed what was successful and should be retained,  and they discussed what improvements are needed. What  else do they need to discuss in order to recognize process  improvements?",
    "opts": [
      {
        "k": "a",
        "t": "A) When will the accepted changes be made"
      },
      {
        "k": "b",
        "t": "B) Who is to blame for the shortcomings of the project"
      },
      {
        "k": "c",
        "t": "C) How much money was spent that could have been saved"
      },
      {
        "k": "d",
        "t": "D) Why changes were not made earlier in the project"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "A is correct. It’s great to gather the information, but in order for change  to really be made, it has to be planned for implementation in future  sprints/releases/projects. B is not correct because retrospectives  are not about blaming. C is not part of a retrospective, although this  information may be gathered by the project manager. D is also tending  toward blaming but is something that should be considered as it  may impact the ability to implement future changes.\n📌 Kiến thức: FL-2.1.6 (K2) Explain how retrospectives can be used as a mechanism for process  improvement"
  },
  {
    "n": 14,
    "ref": "Question 14 [FL-2.1.4]",
    "stem": "Your organization has decided to implement DevOps. One of  the biggest concerns from the operations people is that there  have been ongoing performance issues in production. How will  implementing DevOps and CI/CD help with this problem?",
    "opts": [
      {
        "k": "a",
        "t": "A) It won’t - the problem needs to be addressed during design"
      },
      {
        "k": "b",
        "t": "B) Performance testing can be integrated into the CI/CD pipeline to test it incrementally and repeatedly throughout development"
      },
      {
        "k": "c",
        "t": "C) Performance testing will be the main focus of the system integration testing, after the code has been delivered to the test environment"
      },
      {
        "k": "d",
        "t": "D) Performance testing experts will be used to conduct the performance testing in an isolated environment which is developed using Infrastructure as Code"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "B is correct. With a CI/CD implementation, performance testing can be  implemented throughout the pipeline, starting with the unit testing  and continuing through to the fully developed product. CI/CD will also  help ensure that the delivery is into the proper environments that  can support the various types of testing. A is not correct. The problem  probably does need to be addressed during design, but it needs to  be tested throughout the pipeline. C is not correct because testing  performance only in SIT doesn’t leverage the capabilities of the testing  pipeline. D is not correct because performance testing can be conducted  early and often through the pipeline, although a final test in an isolated  environment may be needed as well.\n📌 Kiến thức: FL-2.1.4 (K2) Summarize how  DevOps might have an impact on testing"
  },
  {
    "n": 15,
    "ref": "Question 15 [FL-3.1.1]",
    "stem": "Which of the following techniques is a form of static testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Error guessing"
      },
      {
        "k": "b",
        "t": "B) Automated regression testing"
      },
      {
        "k": "c",
        "t": "C) Providing inputs and examining the resulting outputs"
      },
      {
        "k": "d",
        "t": "D) Code review"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "D is correct, per syllabus. A, B and C are all forms of dynamic testing.\n📌 Kiến thức: FL-3.1.1 (K1) Recognize types of work products that can be examined by  static testing techniques"
  },
  {
    "n": 16,
    "ref": "Question 16 [FL-3.2.5]",
    "stem": "You are frequently asked to participate in reviews of  requirements. Unfortunately, you usually receive the document  to be reviewed the night before the review meeting will be  held. This is resulting in your not doing a thorough review and  having to work significant overtime to get the review done.  What review success factor is missing from this process?",
    "opts": [
      {
        "k": "a",
        "t": "A) Management support for the overall review process"
      },
      {
        "k": "b",
        "t": "B) Reviewing only small chunks at a time"
      },
      {
        "k": "c",
        "t": "C) Training for the proper performance in the meetings"
      },
      {
        "k": "d",
        "t": "D) Allowing adequate time to conduct the review"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "D is correct. The reviewers are not being given adequate time to  conduct the review. A is not correct but might be an issue given that  this is a repeated problem and could indicate that the schedules are not  realistic. B is not correct because there’s no indication that the work  product is too big, just that it’s being delivered too late. C is not correct  because the problem is not with the meetings.\n📌 Kiến thức: FL-3.2.5 (K1) Recall the  factors that contribute to a successful review"
  },
  {
    "n": 17,
    "ref": "Question 17 [FL-3.1.3]",
    "stem": "What is the main difference between static and dynamic  testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Static testing is performed by developers; dynamic testing is performed by testers"
      },
      {
        "k": "b",
        "t": "B) Manual test cases are used for dynamic testing; automated tests are used for static testing"
      },
      {
        "k": "c",
        "t": "C) Static testing must be executed before dynamic testing"
      },
      {
        "k": "d",
        "t": "D) Dynamic testing requires executing the software; the software is not executed during static testing"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "D is correct. Dynamic testing is done while the software is actually  running whereas static testing depends on examining the software  while it is not running. A is not correct because both types of testing can  be done by both developers and testers. B is not correct because manual  and automated tests can be used for dynamic testing. C is not correct  because static testing can occur at any time although it is usually done  before dynamic testing.\n📌 Kiến thức: FL-3.1.3 (K2) Compare and contrast static  testing and dynamic testing"
  },
  {
    "n": 18,
    "ref": "Question 18 [FL-3.2.4]",
    "stem": "If a review session is led by the author of the work product,  what type of review is it?",
    "opts": [
      {
        "k": "a",
        "t": "A) Ad hoc"
      },
      {
        "k": "b",
        "t": "B) Walkthrough"
      },
      {
        "k": "c",
        "t": "C) Inspection"
      },
      {
        "k": "d",
        "t": "D) Audit"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "B is correct. In a walkthrough, the author normally leads the review  session. A is not correct as this is not normally an organized session. C  is not correct because an inspection is normally led by the facilitator  (moderator). D is not correct because an audit is usually led by a third  party.\n📌 Kiến thức: FL-3.2.4 (K2) Compare and contrast the different review types"
  },
  {
    "n": 19,
    "ref": "Question 19 [FL-4.1.1]",
    "stem": "If test cases are derived from looking at the code, what type of  test technique is being used?",
    "opts": [
      {
        "k": "a",
        "t": "A) Black-box"
      },
      {
        "k": "b",
        "t": "B) White-box"
      },
      {
        "k": "c",
        "t": "C) Specification-based"
      },
      {
        "k": "d",
        "t": "D) Behavior-based"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "B is correct. A, C and D are all black-box and use the specifications or  requirements for the test design.\n📌 Kiến thức: FL-4.1.1 (K2) Distinguish black-box,  white-box, and experience-based test techniques"
  },
  {
    "n": 20,
    "ref": "Question 20 [FL-4.3.1]",
    "stem": "How is statement coverage determined?",
    "opts": [
      {
        "k": "a",
        "t": "A) Number of test decision points divided by the number of test cases"
      },
      {
        "k": "b",
        "t": "B) Number of branches tested divided by the total number of executable statements"
      },
      {
        "k": "c",
        "t": "C) Number of possible test case outcomes divided by the total number of function points"
      },
      {
        "k": "d",
        "t": "D) Number of executable statements tested divided by the total number of executable statements"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "D is correct, per syllabus as each tested statement is considered to  be exercised. A, B and C are not valid measures.\n📌 Kiến thức: FL-4.3.1 (K2) Explain  statement testing"
  },
  {
    "n": 21,
    "ref": "Question 21 [FL-4.3.3]",
    "stem": "You are working on a project with very tight deadlines. The  code is being developed but is not yet executable. What type of  testing could you apply that would help find defects now?",
    "opts": [
      {
        "k": "a",
        "t": "A) Black-box"
      },
      {
        "k": "b",
        "t": "B) White-box"
      },
      {
        "k": "c",
        "t": "C) Experience-based"
      },
      {
        "k": "d",
        "t": "D) Factor-based"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "B is correct. You have code that can be structurally reviewed for items  such as the proper handling of branching. A and C are not correct  because nothing can be executed yet. D is not correct because it’s not a  type of testing.\n📌 Kiến thức: FL-4.3.3 (K2) Explain the value of white-box testing"
  },
  {
    "n": 22,
    "ref": "Question 22 [FL-4.4.1]",
    "stem": "If you are using error guessing to target your testing, which  type of testing are you doing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Specification-based"
      },
      {
        "k": "b",
        "t": "B) Structure-based"
      },
      {
        "k": "c",
        "t": "C) Experience-based"
      },
      {
        "k": "d",
        "t": "D) Reference-based"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "C is correct. This is an experience-based technique.\n📌 Kiến thức: FL-4.4.1 (K2) Explain  error guessing"
  },
  {
    "n": 23,
    "ref": "Question 23 [FL-4.4.2]",
    "stem": "When exploratory testing is conducted using time-boxing and  test charters, what is it called?",
    "opts": [
      {
        "k": "a",
        "t": "A) Schedule-based testing"
      },
      {
        "k": "b",
        "t": "B) Session-based testing"
      },
      {
        "k": "c",
        "t": "C) Risk-based testing"
      },
      {
        "k": "d",
        "t": "D) Formal chartering"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "B is correct. This is often called session-based testing and may use  session sheets. A is not correct. Exploratory doesn’t usually comply to  schedules but rather allows the tester to explore and learn about the  software. Coverage is difficult to assess which is one of the reasons it is  difficult to match the time spent to the amount accomplished. C is not  correct. This may be one of the forms of risk-based testing, but it is not  entirely RBT. D is not correct as this is not actually a testing term.\n📌 Kiến thức: FL-4.4.2 (K2) Explain exploratory testing"
  },
  {
    "n": 24,
    "ref": "Question 24 [FL-4.5.2]",
    "stem": "You are writing some acceptance criteria for a story. You have  decided to make a list of all the likely inputs to the code and the  expected outputs based on those inputs. What format are you  using?",
    "opts": [
      {
        "k": "a",
        "t": "A) IPO chart"
      },
      {
        "k": "b",
        "t": "B) Acceptance-based"
      },
      {
        "k": "c",
        "t": "C) Rules-oriented"
      },
      {
        "k": "d",
        "t": "D) Behavior-driven"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "C is correct per the syllabus. This is a rules-oriented format. A is not  correct because, although you are tracking the inputs and outputs, you  are not tracking the processing. B is not correct because this is not a  recognized format. D is not correct because the given/when/then format  is referred to as scenario-oriented.\n📌 Kiến thức: FL-4.5.2 (K2) Classify the different  options for writing acceptance criteria"
  },
  {
    "n": 25,
    "ref": "Question 25 [FL-4.2.1]",
    "stem": "You are testing a banking application that allows a customer  to withdraw 20, 100 or 500 dollars in a single transaction. The  values are chosen from a drop-down list and no other values  may be entered. How many equivalence partitions need to be  tested to achieve 100% equivalence partition coverage?",
    "opts": [
      {
        "k": "a",
        "t": "A) 1"
      },
      {
        "k": "b",
        "t": "B) 2"
      },
      {
        "k": "c",
        "t": "C) 3"
      },
      {
        "k": "d",
        "t": "D) 4"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "D is correct. The values to be tested are 20, 100, 500 and no selection.\n📌 Kiến thức: FL-4.2.1 (K3) Use equivalence partitioning to derive test cases"
  },
  {
    "n": 26,
    "ref": "Question 26 [FL-4.2.2]",
    "stem": "You are testing a scale system that determines shipping  rates for a regional web-based auto parts distributor. Due to  regulations, shipments cannot exceed 100 lbs. You want to  include boundary value analysis as part of your black-box  test design.\n\nHow many tests will you need to execute to achieve 100% two- value boundary value analysis?\n\nWeight 0 to 10 lbs. 11 to 25 lbs. 26 to 50 lbs. 51 lbs. to 100 Shipping Cost $5.00 $7.50 $12.00 $17.00",
    "opts": [
      {
        "k": "a",
        "t": "A) 4"
      },
      {
        "k": "b",
        "t": "B) 8"
      },
      {
        "k": "c",
        "t": "C) 10"
      },
      {
        "k": "d",
        "t": "D) 12"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "C is correct. 2 per valid weight range plus one for a negative weight and  one for a weight exceeding 100 lbs (-1, 0, 10, 11, 25, 26, 50, 51, 100, 101).\n📌 Kiến thức: FL-4.2.2 (K3) Use boundary value analysis to derive test cases"
  },
  {
    "n": 27,
    "ref": "Question 27 [FL-4.2.3]",
    "stem": "Which of the following is the correct decision table for the  following pseudocode for ordering a hamburger? Note: if you  add or delete items from the basic burger, you no longer get the  basic burger. \t Start Select basic burger If customer adds items \t While items to be added \t \t Ask customer which item \t \t Add item \t End while Endif If customer deletes items \t While items to be deleted \t \t Ask customer which item \t \t Delete item \t End while Endif If customer wants fries \t Add fries to order Endif Complete order End\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) Bảng quyết định phương án (A) — xem hình 1 bên dưới"
      },
      {
        "k": "b",
        "t": "B) Bảng quyết định phương án (B) — xem hình 2 bên dưới"
      },
      {
        "k": "c",
        "t": "C) Bảng quyết định phương án (C) — xem hình 3 bên dưới"
      },
      {
        "k": "d",
        "t": "D) Bảng quyết định phương án (D) — xem hình 4 bên dưới"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "B is correct. A is not correct because it assumes you can’t add and  delete items from a burger. C is not correct because it makes the same  assumption as A and has duplicate tests. D is not correct because the  Results are wrong for the first four tests.\n📌 Kiến thức: FL-4.2.3 (K3) Use decision  table testing to derive test cases"
  },
  {
    "n": 28,
    "ref": "Question 28 [FL-4.2.4]",
    "stem": "You are testing an e-commerce transaction that has the  following states and transitions:\n\n1. Login (invalid) > Login 2. Login > Search 3. Search > Search 4. Search > Shopping Cart 5. Shopping Cart > Search 6. Shopping Cart > Checkout 7. Checkout > Search 8. Checkout > Logout\n\nFor a state diagram, how many transitions should be shown?",
    "opts": [
      {
        "k": "a",
        "t": "A) 4"
      },
      {
        "k": "b",
        "t": "B) 6"
      },
      {
        "k": "c",
        "t": "C) 8"
      },
      {
        "k": "d",
        "t": "D) 16"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "C is correct. There are 8 transitions that should be shown in the state  diagram as explained in the question. A is not correct as this is only  checking one transition from each state. B is not correct because this  is probably excluding login > login and search > search. D is not correct  because it is checking the invalid transitions as well and those would be  included in a state table, not a state diagram. These are:  Login (invalid) > Login  Login > Search Login > Shopping Cart (invalid transition)  Login > Checkout (invalid transition)  Search > Login (invalid transition)  Search > Search  Search > Shopping Cart  Search > Checkout (invalid transition)  Shopping Cart > Login (invalid transition)  Shopping Cart > Search  Shopping Cart > Shopping Cart (invalid transition)  Shopping Cart > Checkout  Checkout > Login (invalid transition)  Checkout > Search  Checkout > Shopping Cart (invalid transition) Checkout > Logout\n📌 Kiến thức: FL-4.2.4 (K3) Use state transition testing to derive test cases"
  },
  {
    "n": 29,
    "ref": "Question 29 [FL-4.5.3]",
    "stem": "You are creating test cases for the following story, applying the  ATDD approach. \t\n\n\t \t As a hotel owner \t \t I want to reserve all the rooms on a floor before moving to the next floor \t \t So I can maximize the efficiency of the housekeeping staff\n\n\t You have decided to apply boundary value analysis to this \t \t \t requirement and have identified the following partitions for \t\t \t the occupancy of a floor: \t \t 0 | 1 - floor full | overbooked \t You also want to be sure that the software is usable by the staff  and that it performs quickly in determining which floors have  availability.\n\nYou have designed the following test cases: \t 1. Test with 1 occupant on the floor 2. Test with the floor full and ensure the next floor is made available for \t \t \t bookings 3. Test with 0 occupants on the floor and ensure that floor is only available when  lower floors are fully booked 4. Test the usability to ensure hotel staff will find the software usable 5. Test for response time when the system is at average load and the hotel is  80% occupied\n\nWhat are you missing?",
    "opts": [
      {
        "k": "a",
        "t": "A) A test with a floor partially occupied but not fully occupied"
      },
      {
        "k": "b",
        "t": "B) A test for performance"
      },
      {
        "k": "c",
        "t": "C) A test for trying to assign someone to a floor that is full"
      },
      {
        "k": "d",
        "t": "D) A test for usability"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "C is correct. The test that is missing is to try to see if you can allocate  someone to a floor that is already fully booked. This is a negative  test and should result in an error. A is covered by testing with one  occupant. B and D are covered.\n📌 Kiến thức: FL-4.5.3 (K3) Use acceptance test-driven  development (ATDD) to derive test cases"
  },
  {
    "n": 30,
    "ref": "Question 30 [FL-5.2.1]",
    "stem": "Level of risk is determined by which of the following?",
    "opts": [
      {
        "k": "a",
        "t": "A) Likelihood and impact"
      },
      {
        "k": "b",
        "t": "B) Priority and risk rating"
      },
      {
        "k": "c",
        "t": "C) Probability and practicality"
      },
      {
        "k": "d",
        "t": "D) Risk identification and mitigation"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "A is correct. The combination of likelihood and impact is normally used  to determine the overall risk level (sometimes called the risk priority  number).\n📌 Kiến thức: FL-5.2.1 (K1) Identify risk level by using risk likelihood and  risk impact"
  },
  {
    "n": 31,
    "ref": "Question 31 [FL-5.1.3]",
    "stem": "Which of the following is an example of a good exit criterion  from system testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) All tests should be completed"
      },
      {
        "k": "b",
        "t": "B) The project budget should be spent"
      },
      {
        "k": "c",
        "t": "C) All defects should be fixed"
      },
      {
        "k": "d",
        "t": "D) All severity 1 defects must be resolved"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "D is correct. This is measurable and clear. A is not correct because  completed is not a clear term and this might not be a reasonable goal  and “should” is not a clear goal. B is not correct because spending the  budget is generally not the goal and you wouldn’t expect the budget to  be spent when system testing is done because that leaves no money for  acceptance testing or roll out. C is not correct because this is a “should”  and also probably is not realistic.\n📌 Kiến thức: FL-5.1.3 (K2) Compare and contrast  entry criteria and exit criteria"
  },
  {
    "n": 32,
    "ref": "Question 32 [FL-5.1.7]",
    "stem": "You are working on a project and have determined that  exploratory testing is the best test technique to apply. Which  testing quadrant are you using?",
    "opts": [
      {
        "k": "a",
        "t": "A) Q1"
      },
      {
        "k": "b",
        "t": "B) Q2"
      },
      {
        "k": "c",
        "t": "C) Q3"
      },
      {
        "k": "d",
        "t": "D) Q4"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "C is correct. Exploratory testing belongs to quadrant 3.\n📌 Kiến thức: FL-5.1.7 (K2) Summarize the testing quadrants and their relationships with test  levels and test types"
  },
  {
    "n": 33,
    "ref": "Question 33 [FL-5.1.7]",
    "stem": "Which of the following is a project risk?",
    "opts": [
      {
        "k": "a",
        "t": "A) A defect that is causing a performance issue"
      },
      {
        "k": "b",
        "t": "B) A duplicate requirement"
      },
      {
        "k": "c",
        "t": "C) An issue with a data conversion procedure"
      },
      {
        "k": "d",
        "t": "D) A schedule that requires work during Christmas shutdown"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "D is correct, this is a risk to the entire project. A, B and C are product  risks.\n📌 Kiến thức: FL-5.1.7 (K2) Summarize the testing quadrants and their  relationships with test levels and test types"
  },
  {
    "n": 34,
    "ref": "Question 34 [FL-5.3.3]",
    "stem": "You have just completed testing on a major ERP  implementation. The project has taken two years and  is now ready for final approval before go-live. What test  documentation should be produced at this time?",
    "opts": [
      {
        "k": "a",
        "t": "A) Formal test completion"
      },
      {
        "k": "b",
        "t": "B) Testing team task board"
      },
      {
        "k": "c",
        "t": "C) Email to the team congratulating them on their success"
      },
      {
        "k": "d",
        "t": "D) Burn down chart"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "A is correct. At this point in the project, the formal test completion  report should be prepared. B and D are used for information  communication during the project work. C might be premature as final  approval has not yet been obtained and this is not test documentation\n📌 Kiến thức: FL-5.3.3 (K2) Exemplify how to communicate the status of testing"
  },
  {
    "n": 35,
    "ref": "Question 35 [FL-5.4.1]",
    "stem": "You are working on a project that is releasing software to the  test team in iterations. In iteration 3 you identified a failure.  The developer found and fixed the defect and released the fix in  iteration 4. You confirmed the fix and closed the defect report.  You are now testing iteration 7 and the failure has occurred  again. You have talked to the developer and he doesn’t know  how or when the failure came back and has asked you to  investigate.\n\nHow can configuration management help you gather more  information on this failure?",
    "opts": [
      {
        "k": "a",
        "t": "A) You can see what changed in iteration 4 to fix the problem"
      },
      {
        "k": "b",
        "t": "B) You can reload and retest iterations 5 and 6 to see where the problem was re-introduced"
      },
      {
        "k": "c",
        "t": "C) You can review all the code changes that have occurred since iteration 4 to see what might have broken it"
      },
      {
        "k": "d",
        "t": "D) You can improve the regression testing to ensure the failure is caught earlier"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "B is correct. Because you have configuration management, you  should be able to obtain and reinstall the code from iterations 5 and  6 and see where the problem was re-introduced. A is not correct as  that would have helped with the initial confirmation test and maybe  regression testing, but it doesn’t help with the current problem. C is  the responsibility of the developer. D is a good idea but won’t help  with the current situation.\n📌 Kiến thức: FL-5.4.1 (K2) Summarize how configuration  management supports testing"
  },
  {
    "n": 36,
    "ref": "Question 36 [FL-5.1.4]",
    "stem": "You are estimating the testing time required for a new project.  You have gathered information from three experts and they  have given you the following numbers in days:\n\n\n\n\nUsing the average numbers from the table above and applying  the three-point estimation technique, what is the estimate?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) 325 ± 45"
      },
      {
        "k": "b",
        "t": "B) 81.25 ± 8"
      },
      {
        "k": "c",
        "t": "C) 54.17 ± 7.5"
      },
      {
        "k": "d",
        "t": "D) 40 ± 2"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "C is correct. The formula is (Optimistic + 4(Likely) + Pessimistic)/6 so the  answer is (30+220+75)/6 = 54.17 and the standard deviation is (75-30)/6  which is 7.5.\n📌 Kiến thức: FL-5.1.4 (K3) Use estimation techniques to calculate the  required test effort"
  },
  {
    "n": 37,
    "ref": "Question 37 [FL-5.1.5]",
    "stem": "Consider the following test cases that are used to test an  accounting system:\n\n\t Given this information, what is the proper order in which to  execute these test cases?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) 5, 1, 3, 2, 4"
      },
      {
        "k": "b",
        "t": "B) 1, 2, 4, 5, 3"
      },
      {
        "k": "c",
        "t": "C) 1, 3, 2, 4, 5"
      },
      {
        "k": "d",
        "t": "D) 3, 4, 5, 1, 2"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "B is correct. The goal is to run the highest priority tests as soon as  possible. Dependency has to be considered in order for the tests to  actually be executed. In order to get the highest priority test run as  soon as possible, the correct order is as follows: test 1 has to go first  since everything else is dependent on it. Then we need to do 2 so we can  do 4 and 5 (the highest priority test) and then 3 is last because 5 is not  dependent on it. A is not correct because 5 cannot be run first. C is not  correct because it does not run 5 as soon as possible; it defers it until  after 3 is run. D is not correct because 3 can’t be run first as it requires 1  and 2.\n📌 Kiến thức: FL-5.1.5 (K3) Apply test case prioritization"
  },
  {
    "n": 38,
    "ref": "Question 38 [FL-5.1.5]",
    "stem": "You have received the following description section in a defect  report:\n\nThe report executed per the attached steps, but the data was incorrect.  For example, the information in column 1 was wrong. See the attached  screenshot. This report is critical to the users and they will be unable to  do their jobs without this information.\n\nWhat is the biggest problem with this defect report?",
    "opts": [
      {
        "k": "a",
        "t": "A) The developer won’t know how important the problem is"
      },
      {
        "k": "b",
        "t": "B) The developer won’t know how to repeat the test"
      },
      {
        "k": "c",
        "t": "C) The developer won’t be able to see what the tester is saying is wrong"
      },
      {
        "k": "d",
        "t": "D) The developer won’t know what the tester expected to see"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "D is correct. From this information, the developer only knows the tester  thinks the information is wrong, but it’s not clear what was expected.  A is incorrect because, although vague, the incident report seems to  indicate this is an important problem. B is incorrect because the steps  are attached (or so it says). C is incorrect because the screen shot  should indicate column 1 that is wrong.\n📌 Kiến thức: FL-5.1.5 (K3) Apply test case  prioritization"
  },
  {
    "n": 39,
    "ref": "Question 39 [FL-6.1.1]",
    "stem": "What is the primary purpose of a test execution tool?",
    "opts": [
      {
        "k": "a",
        "t": "A) It runs automated test scripts to test the test object"
      },
      {
        "k": "b",
        "t": "B) It automatically records defects in the defect tracking system"
      },
      {
        "k": "c",
        "t": "C) It analyzes code to determine if there are any coding standard violations"
      },
      {
        "k": "d",
        "t": "D) It tracks test cases, defects and requirements traceability"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "A is correct. This is the primary purpose of the test execution tools. B  may be something the tool can do, but this is not the primary purpose.  C is a static analysis tool and D is a test management tool.\n📌 Kiến thức: FL-6.1.1 (K2) Explain how different types of test tools support testing"
  },
  {
    "n": 40,
    "ref": "Question 40 [FL-6.2.1]",
    "stem": "Which of the following is a risk with test automation?",
    "opts": [
      {
        "k": "a",
        "t": "A) Using an automation tool that will not be supported in the future"
      },
      {
        "k": "b",
        "t": "B) Developing test automation for particularly tedious manual testing areas"
      },
      {
        "k": "c",
        "t": "C) Using technical testers to implement the automation"
      },
      {
        "k": "d",
        "t": "D) Developing automated reporting"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "A is correct. That is a known risk with test automation because it will  be dependent upon the tool used for implementation and that tool  might fall out of support by the vendor or the community. B, C and D are  expected results from automation and are not risks.\n📌 Kiến thức: FL-6.2.1 (K1) Recall  the benefits and risks of test automation"
  }
];

  for (var i = 0; i < questions.length; i++) {
    var q = questions[i];
    var itemTitle = "Câu " + q.n + " (" + q.ref + "):\n" + q.stem;
    var item = q.multi ? form.addCheckboxItem() : form.addMultipleChoiceItem();
    item.setTitle(itemTitle);
    item.setPoints(1);
    item.setRequired(false);

    var choices = [];
    for (var j = 0; j < q.opts.length; j++) {
      var opt = q.opts[j];
      var isCorrect = q.ans.indexOf(opt.k) !== -1;
      choices.push(item.createChoice(opt.t, isCorrect));
    }
    item.setChoices(choices);

    if (q.exp) {
      var feedback = FormApp.createFeedback()
        .setText("ĐÁP ÁN ĐÚNG: " + q.ans.join(", ").toUpperCase() + "\n\n" + q.exp)
        .build();
      item.setFeedbackForCorrect(feedback);
      item.setFeedbackForIncorrect(feedback);
    }
  }

  Logger.log("==========================================");
  Logger.log("✅ ĐÃ TẠO GOOGLE FORM THÀNH CÔNG: " + formTitle);
  Logger.log("👉 Link làm bài (Published URL): " + form.getPublishedUrl());
  Logger.log("👉 Link chỉnh sửa (Edit URL): " + form.getEditUrl());
  Logger.log("==========================================");
}
