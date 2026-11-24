/**
 * GOOGLE APPS SCRIPT TỰ ĐỘNG TẠO GOOGLE FORM TRẮC NGHIỆM ISTQB CTFL v4.0
 * Bộ đề: ASTQB Sample Exam #3 (40 câu chuẩn) (40 câu)
 * Hướng dẫn:
 * 1. Mở https://script.google.com -> Dự án mới (New Project)
 * 2. Dán toàn bộ nội dung file này vào -> Bấm Ctrl+S -> Bấm Run (Chạy) hàm createISTQBQuizForm
 * 3. Xem Nhật ký thực thi (Execution Log) ở dưới để lấy Link làm bài Google Form!
 */
function createISTQBQuizForm() {
  var formTitle = "ISTQB CTFL v4.0 — ASTQB Sample Exam #3 (40 câu chuẩn)";
  var form = FormApp.create(formTitle);
  form.setIsQuiz(true);
  form.setDescription("Đề luyện thi cuối kỳ KTPM / ISTQB Foundation Level v4.0 (40 câu). Tự động chấm điểm và hiển thị giải thích chi tiết sau khi nộp bài.");
  form.setCollectEmail(false);
  form.setAllowResponseEdits(true);
  form.setPublishingSummary(true);

  var questions = [
  {
    "n": 1,
    "ref": "Question 1 [FL-1.1.1]",
    "stem": "When the tester verifies the test basis while designing tests  early in the lifecycle, which test objective is being achieved?",
    "opts": [
      {
        "k": "a",
        "t": "A) Gaining confidence"
      },
      {
        "k": "b",
        "t": "B) Finding defects"
      },
      {
        "k": "c",
        "t": "C) Evaluating work products"
      },
      {
        "k": "d",
        "t": "D) Providing information for decision making"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "C is correct per the syllabus. The other three are achieved primarily by  doing dynamic testing. This is a bit tricky because you are very likely  to find defects while doing this analysis and this may lead to either  gaining or destroying confidence and needing to supply information to  the decision makers. What is occurring here is an evaluation of the work  product, in this case the requirements.\n📌 Kiến thức: FL-1.1.1 (K1) Identify typical test  objectives"
  },
  {
    "n": 2,
    "ref": "Question 2 [FL-1.5.2]",
    "stem": "In some Agile teams, people are encouraged to use their skills  to help the team, regardless of their role. This could mean that  testers help the developers write code and developers help  testers test. What is this approach called?",
    "opts": [
      {
        "k": "a",
        "t": "A) Team Aid"
      },
      {
        "k": "b",
        "t": "B) Whole Team"
      },
      {
        "k": "c",
        "t": "C) Skills First"
      },
      {
        "k": "d",
        "t": "D) First Aid"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "B is correct. This is an example of the Whole Team approach where the  team members leverage their skills, regardless of roles, to accomplish  the goals of the team.\n📌 Kiến thức: FL-1.5.2 (K1) Recall the advantages of the whole  team approach"
  },
  {
    "n": 3,
    "ref": "Question 3 [FL-1.2.3]",
    "stem": "Which of the following is a correct statement?",
    "opts": [
      {
        "k": "a",
        "t": "A) A developer makes a mistake which causes a defect that may be seen as a failure during dynamic testing"
      },
      {
        "k": "b",
        "t": "B) A developer makes an error which results in a failure that may be seen as a fault when the software is executed"
      },
      {
        "k": "c",
        "t": "C) A developer has introduced a failure which results in a defect that may be seen as a mistake during dynamic testing"
      },
      {
        "k": "d",
        "t": "D) A developer makes a mistake which causes a bug that may be seen as a defect when the software is executed"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "A is correct. The developer makes a mistake/error which causes  a defect/fault/bug which may cause a failure when the code is  dynamically tested or executed. B is incorrect because fault and failure are reversed. C is incorrect because failure and mistake are reversed. D is incorrect because it’s a failure that’s seen during execution, not the  defect itself. The failure is a symptom of the defect.\n📌 Kiến thức: FL-1.2.3 (K2) Distinguish between root cause, error, defect, and failure"
  },
  {
    "n": 4,
    "ref": "Question 4 [FL-1.3.1]",
    "stem": "Why is it important to avoid the principle of tests wearing out?",
    "opts": [
      {
        "k": "a",
        "t": "A) Dynamic testing is less reliable in finding bugs"
      },
      {
        "k": "b",
        "t": "B) Running the same tests repeatedly will consistently find new failures"
      },
      {
        "k": "c",
        "t": "C) Tests should not be context dependent"
      },
      {
        "k": "d",
        "t": "D) Running the same tests repeatedly will reduce the chance of finding new failures"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "D is correct. As tests are run repeatedly, the tests become less effective. A is not correct because dynamic testing should be used and helps to  alleviate tests wearing out.\n\nB is not correct. The same tests do wear out. C is not correct because testing should be context dependent.\n📌 Kiến thức: FL-1.3.1 (K2) Explain the seven testing principles."
  },
  {
    "n": 5,
    "ref": "Question 5 [FL-1.4.1]",
    "stem": "When following a standard test process, when should the test  control activity take place?",
    "opts": [
      {
        "k": "a",
        "t": "A) During the planning activities"
      },
      {
        "k": "b",
        "t": "B) During the implementation and execution activities"
      },
      {
        "k": "c",
        "t": "C) During the monitoring activities"
      },
      {
        "k": "d",
        "t": "D) During all the activities"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "D is correct. Control occurs throughout the project to ensure that it is  staying on track based on the plan and to take any corrective steps that  may be necessary. The monitoring information is used to determine if  control actions are needed.\n📌 Kiến thức: FL-1.4.1 (K2) Explain the different test activities and related tasks"
  },
  {
    "n": 6,
    "ref": "Question 6 [FL-1.4.1]",
    "stem": "Which of the following is the activity that compares the  planned test progress to the actual test progress?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test monitoring"
      },
      {
        "k": "b",
        "t": "B) Test planning"
      },
      {
        "k": "c",
        "t": "C) Test closure"
      },
      {
        "k": "d",
        "t": "D) Test control"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "A is correct. Test monitoring involves the on-going comparison of actual  progress against the test plan. B is incorrect because it defines testing objectives.\n\nC is incorrect because the activities have already completed and the  project is closing down. D is incorrect because test control is when you take actions to correct  any issues observed during monitoring.\n📌 Kiến thức: FL-1.4.1 (K2) Explain the different test activities and related tasks"
  },
  {
    "n": 7,
    "ref": "Question 7 [FL-1.4.2]",
    "stem": "You are working on a project that is constrained by time and  budget, which is pressuring testing to be done quickly. How  should the test approach be adjusted?",
    "opts": [
      {
        "k": "a",
        "t": "A) Develop detailed test cases to reduce the test automation effort"
      },
      {
        "k": "b",
        "t": "B) Use techniques such as exploratory and checklist testing to spend less time on test case development"
      },
      {
        "k": "c",
        "t": "C) Ensure that your testing starts only after the developers have completed integration tests"
      },
      {
        "k": "d",
        "t": "D) Develop end-to-end test automation before performing manual testing so the automation can be used sooner"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "B is correct. These techniques will help adjust to the project context  where there is pressure to test quickly. These are lightweight  approaches that require less time preparing documentation and allow  test execution to start sooner. A is not correct because developing detailed test cases will take  significant time. C is not correct because starting testing earlier would be helpful, not  later. D is not correct because this will be problematic automation and the  automators will be slowed down by the failures that would have been  found in manual testing.\n📌 Kiến thức: FL-1.4.2 (K2) Explain the impact of context on the test process"
  },
  {
    "n": 8,
    "ref": "Question 8 [FL-1.5.3]",
    "stem": "What is the biggest problem with a developer testing his own  code?",
    "opts": [
      {
        "k": "a",
        "t": "A) Developers are not good testers"
      },
      {
        "k": "b",
        "t": "B) Developers are not quality focused"
      },
      {
        "k": "c",
        "t": "C) Developers are not objective about their own code"
      },
      {
        "k": "d",
        "t": "D) Developers do not have time to test their own code"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "C is correct. This is the biggest problem because developers have biases  toward the accuracy and implementation of their own code. Testers and  developers think differently and testers can be more objective as they  are not invested in the code. A and B are not necessarily true – some developers are good testers and  have a good quality focus. D is not correct because unit testing is part of their job and time should  be made in the schedule for at least unit testing.\n📌 Kiến thức: FL-1.5.3 (K2) Distinguish the benefits and drawbacks of independence  of testing"
  },
  {
    "n": 9,
    "ref": "Question 9 [FL-2.1.2]",
    "stem": "Which of the following is an example of a good testing practice?",
    "opts": [
      {
        "k": "a",
        "t": "A) Testers should have development experience"
      },
      {
        "k": "b",
        "t": "B) Developers should determine the order of test execution in the test procedures"
      },
      {
        "k": "c",
        "t": "C) Test design should begin when the code is complete to avoid changes"
      },
      {
        "k": "d",
        "t": "D) Testers should review requirements documents as soon as a readable draft is available"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "D is correct. This is a good testing practice. A is not a requirement for many testers. B is not correct because this should be determined by the testers based  on priority, risk, availability, etc. C is not correct because test design should start during code design and  implementation.\n📌 Kiến thức: FL-2.1.2 (K1) Recall good testing practices that apply to all software  development lifecycles"
  },
  {
    "n": 10,
    "ref": "Question 10 [FL-2.1.3]",
    "stem": "When coding is directed by the test cases, what development  approach is being used?",
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
      "a"
    ],
    "multi": false,
    "exp": "A is correct. This is an example of test-driven development.\n📌 Kiến thức: FL-2.1.3 (K1) Recall the examples of test-first approaches to  development"
  },
  {
    "n": 11,
    "ref": "Question 11 [FL-2.2.1]",
    "stem": "During which level(s) of testing should non-functional tests be  executed?",
    "opts": [
      {
        "k": "a",
        "t": "A) Unit and integration only"
      },
      {
        "k": "b",
        "t": "B) System testing only"
      },
      {
        "k": "c",
        "t": "C) Integration, system and acceptance only"
      },
      {
        "k": "d",
        "t": "D) Unit, integration, system and acceptance only"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "D is correct. Non-functional tests can and should be executed at all  levels of testing.\n📌 Kiến thức: FL-2.2.1 (K2) Distinguish the different test levels"
  },
  {
    "n": 12,
    "ref": "Question 12 [FL-2.3.1]",
    "stem": "When a system is targeted for decommissioning, what type of  maintenance testing may be required?",
    "opts": [
      {
        "k": "a",
        "t": "A) Retirement testing"
      },
      {
        "k": "b",
        "t": "B) Regression testing"
      },
      {
        "k": "c",
        "t": "C) Data migration testing"
      },
      {
        "k": "d",
        "t": "D) Patch testing"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "C is correct, per syllabus. Data migration to another system or data  migration to an archival system may be needed. A is incorrect.  This can be a trigger for maintenance testing, but it is not  an actual type of testing. B is incorrect because this is more appropriate for current systems, not  the system being retired. D is incorrect because this is of no use for a  system being retired.\n📌 Kiến thức: FL-2.3.1 (K2) Summarize maintenance testing and its triggers"
  },
  {
    "n": 13,
    "ref": "Question 13 [FL-2.1.1]",
    "stem": "In an iterative lifecycle model, which of the following is an  accurate statement about testing activities?",
    "opts": [
      {
        "k": "a",
        "t": "A) For every development activity, there should be a corresponding testing activity"
      },
      {
        "k": "b",
        "t": "B) For every testing activity, appropriate documentation should be produced, versioned and stored"
      },
      {
        "k": "c",
        "t": "C) For every development activity resulting in code, there should be a testing activity to document test cases"
      },
      {
        "k": "d",
        "t": "D) For every testing activity, metrics should be recorded and posted to a metrics dashboard for all stakeholders"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "A is correct. For any lifecycle model, this is a correct statement. B is not correct because some testing activities may not produce  documentation, such as reviews. C is not correct because test cases are not always written, particularly in  an Agile lifecycle (which is an iterative lifecycle) where only exploratory  testing might be used. D is not correct because not all testing activities produce metrics  (such as test case creation, reviews, etc.) and, even if they did, not all  stakeholders would be interested in those metrics.\n📌 Kiến thức: FL-2.1.1 (K2) Explain the impact of the chosen software development  lifecycle on testing"
  },
  {
    "n": 14,
    "ref": "Question 14 [FL-2.1.5]",
    "stem": "In what way is CI/CD an example of the concept of shift-left?",
    "opts": [
      {
        "k": "a",
        "t": "A) It gets the code to production faster"
      },
      {
        "k": "b",
        "t": "B) It allows the developers to continuously integrate their code"
      },
      {
        "k": "c",
        "t": "C) It requires continuous testing throughout the pipeline"
      },
      {
        "k": "d",
        "t": "D) It elevates the testers as the owners of quality"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "C is correct. CI/CD requires continuous testing, including test  automation, to be implemented for the entire pipeline. This starts  testing as early as possible and shifts it to the left in the timeline. A is not correct as this is not a shift-left concept. B is true of CI/CD implementations but does not shift-left the testing. D is not correct because in a good CI/CD implementation, everyone owns  quality.\n📌 Kiến thức: FL-2.1.5 (K2) EExplain shift-left"
  },
  {
    "n": 15,
    "ref": "Question 15 [FL-3.2.3]",
    "stem": "In a formal review, which role is normally responsible for  documenting all the open issues?",
    "opts": [
      {
        "k": "a",
        "t": "A) The facilitator"
      },
      {
        "k": "b",
        "t": "B) The author"
      },
      {
        "k": "c",
        "t": "C) The scribe"
      },
      {
        "k": "d",
        "t": "D) The manager"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "C is correct. The scribe is normally responsible for documenting all  issues, problems and open points. The author may take notes as  well, but that is not their primary role.\n📌 Kiến thức: FL-3.2.3 (K1) Recall which  responsibilities are assigned to the principal roles when performing  reviews"
  },
  {
    "n": 16,
    "ref": "Question 16 [FL-3.2.1]",
    "stem": "What is the primary reason to get early and frequent feedback  from stakeholders regarding a product being developed?",
    "opts": [
      {
        "k": "a",
        "t": "A) To make them feel involved"
      },
      {
        "k": "b",
        "t": "B) To ensure that their vision for the product will be realized"
      },
      {
        "k": "c",
        "t": "C) To create more meetings"
      },
      {
        "k": "d",
        "t": "D) To use the stakeholders as testers"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "B is correct per the syllabus. By getting their feedback, the team can  ensure that what they are building is what the stakeholders want. A is not correct because, although it may be beneficial to have them feel  a part of the team, it isn’t the primary reason to get their feedback. C is not correct because no one needs more meetings. D is not correct although stakeholders may be used for UAT. Their  feedback is needed much earlier than UAT.\n📌 Kiến thức: FL-3.2.1 (K1) Identify the benefits of early and frequent stakeholder  feedback"
  },
  {
    "n": 17,
    "ref": "Question 17 [FL-3.1.2]",
    "stem": "Which of the following is a benefit of static analysis?",
    "opts": [
      {
        "k": "a",
        "t": "A) Defects can be identified that might not be caught by dynamic testing"
      },
      {
        "k": "b",
        "t": "B) Early defect identification requires less documentation"
      },
      {
        "k": "c",
        "t": "C) Early execution of the code provides a gauge of code quality"
      },
      {
        "k": "d",
        "t": "D) Tools are not needed because reviews are used instead of executing code"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "A is correct, per syllabus. Static analysis with a static analyzer can  be used to find defects such as uninitialized variables that could be  difficult to catch with dynamic testing. B is incorrect because defects will still need to be documented  regardless of how early they are found. C is incorrect because this is dynamic analysis. D is incorrect because static analysis usually requires the use of tools.\n📌 Kiến thức: FL-3.1.2 (K2) Explain the value of static testing"
  },
  {
    "n": 18,
    "ref": "Question 18 [FL-3.2.2]",
    "stem": "For a formal review, at what point in the process are the exit  criteria defined?",
    "opts": [
      {
        "k": "a",
        "t": "A) Planning"
      },
      {
        "k": "b",
        "t": "B) Review initiation"
      },
      {
        "k": "c",
        "t": "C) Individual review"
      },
      {
        "k": "d",
        "t": "D) Fixing and reporting"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "A is correct. The entry and exit criteria should be defined during the  planning step in the review process. These should be evaluated at each  step to ensure the product is ready for the next step in the process. B, C and D are not correct because the criteria should already be defined  by this point.\n📌 Kiến thức: FL-3.2.2 (K2) Summarize the activities of the review process"
  },
  {
    "n": 19,
    "ref": "Question 19 [FL-4.1.1]",
    "stem": "Which of the following test techniques uses the requirements  specifications as a test basis?",
    "opts": [
      {
        "k": "a",
        "t": "A) Structure-based"
      },
      {
        "k": "b",
        "t": "B) Black-box"
      },
      {
        "k": "c",
        "t": "C) White-box"
      },
      {
        "k": "d",
        "t": "D) Exploratory"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "B is correct, per syllabus. Black-box testing is based off the  requirements documents. A and C are incorrect because these use the structure of the software as  the test basis. D is incorrect because exploratory testing is often done when there is no  specification, thus giving the tester the opportunity to learn about the  software while testing.\n📌 Kiến thức: FL-4.1.1 (K2) Distinguish black-box, white-box, and experience-based  test techniques"
  },
  {
    "n": 20,
    "ref": "Question 20 [FL-4.3.2]",
    "stem": "If you are testing a module of code, how do you determine the  level of branch coverage you have achieved?",
    "opts": [
      {
        "k": "a",
        "t": "A) By taking the number of branches you have tested and dividing that by the total number of executable statements in the module"
      },
      {
        "k": "b",
        "t": "B) By taking the number of branches you have tested and dividing that by the total number of branches in the module"
      },
      {
        "k": "c",
        "t": "C) By taking the number of branches you have tested and dividing that by the total lines of code in the module"
      },
      {
        "k": "d",
        "t": "D) By taking the number of branches you have tested and dividing that by the total number of test cases you have executed for the module"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "B is correct. Branch coverage looks at the number of branches tested  versus the number of branches in the code under test.\n📌 Kiến thức: FL-4.3.2 (K2) Explain branch testing"
  },
  {
    "n": 21,
    "ref": "Question 21 [FL-4.3.2]",
    "stem": "If you have a section of code that has one simple IF statement,  how many tests will be needed to achieve 100% branch  coverage?",
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
        "t": "C) 5"
      },
      {
        "k": "d",
        "t": "D) Unknown with this information"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "B is correct. A simple IF statement will be composed of If ... then ... else\t end if. There are two branch outcomes, one for the result of the If being  true and one for it being false. Since 100% branch coverage requires at  least one test case for each branch outcome, two tests are needed. A and C are incorrect because these are the wrong numbers of tests. D would be correct if this weren’t defined as a simple if statement  because a complex if statement could include more than two outcomes.\n📌 Kiến thức: FL-4.3.2 (K2) Explain branch testing"
  },
  {
    "n": 22,
    "ref": "Question 22 [FL-4.4.2]",
    "stem": "Which of the following is a good reason to use experience-based  testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) You can find defects that might be missed by more formal techniques"
      },
      {
        "k": "b",
        "t": "B) You can test for defects that only experienced users would encounter"
      },
      {
        "k": "c",
        "t": "C) You can target the developer’s efforts to the areas that users will be more likely to use"
      },
      {
        "k": "d",
        "t": "D) It is supported by strong tools and can be automated"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "A is correct. Experience-based testing is often used to fill in the gaps left  by the more formal testing techniques. B is not correct because it is used by experienced testers and has  nothing to do with the experience level of the users. C is not correct because it is a test technique, not a development  technique. D is not correct. There is not much tool support for these techniques and  automation is not usually a goal because the effectiveness depends on  the experience of the tester.\n📌 Kiến thức: FL-4.4.2 (K2) Explain exploratory testing"
  },
  {
    "n": 23,
    "ref": "Question 23 [FL-4.4.1]",
    "stem": "What is error guessing?",
    "opts": [
      {
        "k": "a",
        "t": "A) A testing technique used to guess where a developer is likely to have made a mistake"
      },
      {
        "k": "b",
        "t": "B) A technique used for assessing defect metrics"
      },
      {
        "k": "c",
        "t": "C) A development technique to verify that all error paths have been coded"
      },
      {
        "k": "d",
        "t": "D) A planning technique used to anticipate likely schedule variances due to faults"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "A is correct. Error guessing is a technique used to anticipate where  developers are likely to make errors and to create tests to cover those  areas. B, C and D are not correct.\n📌 Kiến thức: FL-4.4.1 (K2) Explain error guessing"
  },
  {
    "n": 24,
    "ref": "Question 24 [FL-4.5.1]",
    "stem": "When using the 3 C’s technique for user story development,  what is the work product that is created for the Confirmation  aspect?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test Approach"
      },
      {
        "k": "b",
        "t": "B) Acceptance Criteria"
      },
      {
        "k": "c",
        "t": "C) Entry Criteria"
      },
      {
        "k": "d",
        "t": "D) Exit Criteria"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "B is correct. The confirmation aspect of the 3 C’s is the acceptance  criteria.\n📌 Kiến thức: FL-4.5.1 (K2) Explain how to write user stories in collaboration  with developers and business representatives"
  },
  {
    "n": 25,
    "ref": "Question 25 [FL-4.2.1]",
    "stem": "You are testing a machine that scores exam papers and assigns  grades. Based on the score achieved the grades are as follows:  1-49 = F, 50-59 = D-, 60-69 = D, 70-79 = C, 80-89 = B, 90-100=A\n\nIf you apply equivalence partitioning, how many test cases will  you need to achieve minimum test coverage?",
    "opts": [
      {
        "k": "a",
        "t": "A) 6"
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
      "b"
    ],
    "multi": false,
    "exp": "B is correct. You need a test for the invalid too low (0 or less), one for  each valid partition, and one for invalid too high (>100). It may not  allow you to enter a value > 100, but it should be tested to make sure it  provides a proper error.\n📌 Kiến thức: FL-4.2.1 (K3) Use equivalence partitioning to  derive test cases"
  },
  {
    "n": 26,
    "ref": "Question 26 [FL-4.2.2]",
    "stem": "You are testing a thermostat for a heating/air conditioning  system. You have been given the following requirements:\n\n•\t When the temperature is below 70 degrees, turn on the \t \t \t heating system •\t When the temperature is above 75 degrees, turn on the air \t \t conditioning system •\t When the temperature is between 70 and 75 degrees, \t \t \t inclusive, turn on fan only\n\nWhich of the following is the minimum set of test temperature  values to achieve 100% two-value boundary value analysis  coverage?",
    "opts": [
      {
        "k": "a",
        "t": "A) 70, 75"
      },
      {
        "k": "b",
        "t": "B) 65, 72, 80"
      },
      {
        "k": "c",
        "t": "C) 69, 70, 75, 76"
      },
      {
        "k": "d",
        "t": "D) 70, 71, 74, 75, 76"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "C is correct. For the heating system, the values to test are 69, 70 For the air  conditioning system, the values are 75, 76 For the fan only, the values  are 69, 70, 75, 76\n\n<-- 69 | 70 – 75 | 76 --> The proper test set combines all these values, 69, 70, 75, 76\n📌 Kiến thức: FL-4.2.2 (K3) Use boundary value analysis to derive test cases"
  },
  {
    "n": 27,
    "ref": "Question 27 [FL-4.2.3]",
    "stem": "You have been given the following conditions and results from  those condition combinations. Given this information, using  the decision table technique, what is the minimum number of  test cases you would need to test these conditions? Conditions: Valid cash Valid credit card Valid debit card Valid pin Bank accepts Valid Selection Item in Stock Results: Reject Cash Reject Card Error Message Return Cash Refund Card Sell Item",
    "opts": [
      {
        "k": "a",
        "t": "A) 7"
      },
      {
        "k": "b",
        "t": "B) 13"
      },
      {
        "k": "c",
        "t": "C) 15"
      },
      {
        "k": "d",
        "t": "D) 18"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "C is correct. See table below.\n📌 Kiến thức: FL-4.2.3 (K3) Use decision table testing to  derive test cases"
  },
  {
    "n": 28,
    "ref": "Question 28 [FL-4.2.4]",
    "stem": "You have been given the following requirement:\n\nA user must log in to the system with a valid username and  password. If they fail to enter the correct combination three  times, they will receive an error and will have to wait 10  minutes before trying again. The test terminates when the user  successfully logs in.\n\nHow many test cases are needed to provide 100% valid  transitions coverage?",
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
        "t": "C) 4"
      },
      {
        "k": "d",
        "t": "D) 5"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "A is correct. Per the diagram below, only one test is needed: Login, Fail,  Fail, Fail =3, Wait, Login, Home. If you were required to exit after the  Wait, a second test would be required but the question doesn’t indicate  that an exit is required.\n📌 Kiến thức: FL-4.2.4 (K3) Use state transition testing to derive test cases"
  },
  {
    "n": 29,
    "ref": "Question 29 [FL-4.5.3]",
    "stem": "You are creating test cases for the following story, applying the  ATDD approach.\n\n\t As a hotel owner \t I want to reserve all the rooms on a floor before moving to \t \t the next floor  \t So I can maximize the efficiency of the housekeeping staff\n\nYou have decided to apply equivalence partitioning to this  requirement and have identified the following partitions for  the occupancy of a floor:\n\n\t 0 | 1 - floor full | overbooked\n\nYou also want to be sure that the software is usable by the staff  and that it performs quickly in determining which floors have  availability.\n\nGiven this information, what should be the priority order for  the tests you will design?",
    "opts": [
      {
        "k": "a",
        "t": "A) 0, 1-floor full, overbooked, usability, performance"
      },
      {
        "k": "b",
        "t": "B) Performance, 1-floor full, usability, overbooked, 0"
      },
      {
        "k": "c",
        "t": "C) Usability, performance, overbooked, 0, 1-floor full"
      },
      {
        "k": "d",
        "t": "D) Overbooked, 0, 1-floor full, performance, usability"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "A is correct. This tests the valid scenarios first, then invalid  (overbooked), then the non-functional tests.\n📌 Kiến thức: FL-4.5.3 (K3) Use  acceptance test-driven development (ATDD) to derive test cases"
  },
  {
    "n": 30,
    "ref": "Question 30 [FL-5.3.1]",
    "stem": "A metric that tracks the number of test cases passed is gathered  during which activity in the test process?",
    "opts": [
      {
        "k": "a",
        "t": "A) Planning"
      },
      {
        "k": "b",
        "t": "B) Implementation"
      },
      {
        "k": "c",
        "t": "C) Execution"
      },
      {
        "k": "d",
        "t": "D) Reporting"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "C is correct. Test execution metrics are gathered during the Test  Execution activity. These metrics are used in reporting.\n📌 Kiến thức: FL-5.3.1 (K1) Recall metrics used for testing"
  },
  {
    "n": 31,
    "ref": "Question 31 [FL-5.1.1]",
    "stem": "You are working in a team of testers who are all writing test  cases. You have noticed that there is a significant inconsistency  with the length and amount of detail in the different test cases.  Where should the criteria for test case writing be documented?",
    "opts": [
      {
        "k": "a",
        "t": "A) The test plan"
      },
      {
        "k": "b",
        "t": "B) The test approach"
      },
      {
        "k": "c",
        "t": "C) The test case template"
      },
      {
        "k": "d",
        "t": "D) The project plan"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "A is correct. The level of detail and structure for the test documentation  should be included in the test plan as part of the criteria for the  performance of testing activities.\n📌 Kiến thức: FL-5.1.1 (K2) Exemplify the purpose  and content of a test plan"
  },
  {
    "n": 32,
    "ref": "Question 32 [FL-5.1.7]",
    "stem": "Unit tests belong in which testing quadrant?",
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
      "a"
    ],
    "multi": false,
    "exp": "A is correct. Unit, or component, tests belong to quadrant 1.\n📌 Kiến thức: FL-5.1.7 (K2) Summarize the testing quadrants and their relationships with test  levels and test types"
  },
  {
    "n": 33,
    "ref": "Question 33 [FL-5.2.2]",
    "stem": "Which of the following is a project risk?",
    "opts": [
      {
        "k": "a",
        "t": "A) A module that performs incorrect calculations due to a defect in a formula"
      },
      {
        "k": "b",
        "t": "B) A failed performance test"
      },
      {
        "k": "c",
        "t": "C) An issue with the interface between the system under test and a peripheral device"
      },
      {
        "k": "d",
        "t": "D) A problem with the development manager which is resulting in his rejecting all defect reports"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "D is correct. The other three are product risks.\n📌 Kiến thức: FL-5.2.2 (K2) Distinguish between project risks and product risks"
  },
  {
    "n": 34,
    "ref": "Question 34 [FL-5.3.2]",
    "stem": "Which of the following variances should be explained in the  Test Summary Report?",
    "opts": [
      {
        "k": "a",
        "t": "A) The variances between the weekly status reports and the test exit criteria"
      },
      {
        "k": "b",
        "t": "B) The variances between the defects found and the defects fixed"
      },
      {
        "k": "c",
        "t": "C) The variances between what was planned for testing and what was actually tested"
      },
      {
        "k": "d",
        "t": "D) The variances between the test cases executed and the total number of test cases"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "C is correct. The variances or deviations between the test plan and the  testing that was actually done must be explained in the test summary  report. A is not correct because if the weekly status reports have been tracking  incorrectly to the test exit criteria, something is wrong and should have  been caught a lot earlier. B is not correct because this information should be included in the test  summary report, but a variance is expected. D is not correct because this should be tracked in the metrics section of  the report rather than as a variance.\n📌 Kiến thức: FL-5.3.2 (K2) Summarize the purposes, content, and audiences for test  reports"
  },
  {
    "n": 35,
    "ref": "Question 35 [FL-5.4.1]",
    "stem": "If the developers are releasing code for testing that is not  version controlled, what process is missing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Configuration management"
      },
      {
        "k": "b",
        "t": "B) Debugging"
      },
      {
        "k": "c",
        "t": "C) Test and defect management"
      },
      {
        "k": "d",
        "t": "D) Risk analysis"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "A is correct. Configuration management is missing if the code is not  being properly versioned and tracked.\n📌 Kiến thức: FL-5.4.1 (K2) Summarize how  configuration management supports testing"
  },
  {
    "n": 36,
    "ref": "Question 36 [FL-5.1.4]",
    "stem": "Your team is using Planning Poker to estimate the effort for a  story.\n\nDeveloper Vote Tester Vote First vote 3 8 Second vote 5 8 Third vote 5 5 \t Although three votes were taken to reach consensus, how many  story points should be allocated to the story?",
    "opts": [
      {
        "k": "a",
        "t": "A) 10 because that’s the sum of the points"
      },
      {
        "k": "b",
        "t": "B) 8 because that was the highest number"
      },
      {
        "k": "c",
        "t": "C) 3 because that was the lowest number"
      },
      {
        "k": "d",
        "t": "D) 5 because that was the consensus"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "D is correct. Voting should continue until consensus is reached and that  number should be used to assign the points to the story.\n📌 Kiến thức: FL-5.1.4 (K3) Use estimation techniques to calculate the required test effort"
  },
  {
    "n": 37,
    "ref": "Question 37 [FL-5.1.5]",
    "stem": "You have been given the following set of test cases to run.  You have been instructed to run them in order by risk and  to accomplish the testing as quickly as possible to provide  feedback to the developers as soon as possible.\n\nGiven this information, what is the best order in which to run  these tests?\n\nTest Case ID Duration Risk Priority Dependency 1 30 mins Low 6 2 10 mins Medium none 3 45 mins High 1 4 30 mins High 2 5 10 mins Medium 4 6 15 mins Low 2",
    "opts": [
      {
        "k": "a",
        "t": "A) 2, 4, 5, 6, 1, 3"
      },
      {
        "k": "b",
        "t": "B) 4, 3, 2, 5, 6, 1"
      },
      {
        "k": "c",
        "t": "C) 2, 5, 6, 4, 1, 3"
      },
      {
        "k": "d",
        "t": "D) 6, 1, 3, 2, 4, 5"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "A is correct because it addresses the highest risk and fastest tests first.  It runs a fast medium test before a slow and more dependent high-risk  test because this will give feedback to the developers more quickly.\n📌 Kiến thức: FL-5.1.5 (K3) Apply test case prioritization"
  },
  {
    "n": 38,
    "ref": "Question 38 [FL-5.5.1]",
    "stem": "You have been testing software that will be used to track credit  card purchases. You have found a defect that causes the system  to crash, but only if a person has made and voided 10 purchases  in a row. What is the proper priority and severity rating for this  defect?",
    "opts": [
      {
        "k": "a",
        "t": "A) Priority high, severity high"
      },
      {
        "k": "b",
        "t": "B) Priority high, severity low"
      },
      {
        "k": "c",
        "t": "C) Priority low, severity low"
      },
      {
        "k": "d",
        "t": "D) Priority low, severity high"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "D is correct. This is not likely to happen, so the urgency to fix it is low  but it does crash the system so the impact to the system is high so the  severity should be high.\n📌 Kiến thức: FL-5.5.1 (K3) Prepare a defect report"
  },
  {
    "n": 39,
    "ref": "Question 39 [FL-6.1.1]",
    "stem": "Which of the following is an example of a tool that supports  static testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) A tool that assists with tracking the results of reviews"
      },
      {
        "k": "b",
        "t": "B) A defect tracking tool"
      },
      {
        "k": "c",
        "t": "C) A test automation tool"
      },
      {
        "k": "d",
        "t": "D) A tool that helps design test cases for security testing"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "A is correct. Reviews are a form of static testing and a tool that supports  reviews is an example of a tool that supports static testing. B is an example of a management tool used for defect management.\n\nC is an example of a test execution tool. D is an example of a test design tool.\n📌 Kiến thức: FL-6.1.1 (K2) Explain how different types of test tools support testing"
  },
  {
    "n": 40,
    "ref": "Question 40 [FL-6.2.1]",
    "stem": "Which of the following is a benefit of test automation?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test execution is faster"
      },
      {
        "k": "b",
        "t": "B) Manual testing becomes obsolete"
      },
      {
        "k": "c",
        "t": "C) ROI is easy to determine"
      },
      {
        "k": "d",
        "t": "D) Test implementation is faster"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "A is correct. Test execution should be faster with automation than with  manual testing, once the test cases have been developed. Developing automation takes more time than writing manual test cases  (usually) so D is incorrect. B is incorrect because manual testing isn’t obsolete, it can concentrate  on new areas. C is not correct because return on investment (ROI) can be tricky to  calculate as it has to be based on equivalent manual test effort\n📌 Kiến thức: FL-6.2.1 (K1) Recall the benefits and risks of test automation"
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
