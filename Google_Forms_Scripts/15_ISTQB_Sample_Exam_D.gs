/**
 * GOOGLE APPS SCRIPT TỰ ĐỘNG TẠO GOOGLE FORM TRẮC NGHIỆM ISTQB CTFL v4.0
 * Bộ đề: ISTQB Sample Exam D (40 câu chuẩn) (40 câu)
 * Hướng dẫn:
 * 1. Mở https://script.google.com -> Dự án mới (New Project)
 * 2. Dán toàn bộ nội dung file này vào -> Bấm Ctrl+S -> Bấm Run (Chạy) hàm createISTQBQuizForm
 * 3. Xem Nhật ký thực thi (Execution Log) ở dưới để lấy Link làm bài Google Form!
 */
function createISTQBQuizForm() {
  var formTitle = "ISTQB CTFL v4.0 — ISTQB Sample Exam D (40 câu chuẩn)";
  var form = FormApp.create(formTitle);
  form.setIsQuiz(true);
  form.setDescription("Đề luyện thi cuối kỳ KTPM / ISTQB Foundation Level v4.0 (40 câu). Tự động chấm điểm và hiển thị giải thích chi tiết sau khi nộp bài.");
  form.setCollectEmail(false);
  form.setAllowResponseEdits(true);
  form.setPublishingSummary(true);

  var questions = [
  {
    "n": 1,
    "ref": "Question #1 [FL-1.1.1]",
    "stem": "Which of the following is a typical test objective?",
    "opts": [
      {
        "k": "a",
        "t": "A) Finding and fixing defects in the test object"
      },
      {
        "k": "b",
        "t": "B) Maintaining effective communications with developers"
      },
      {
        "k": "c",
        "t": "C) Validating that legal requirements have been met"
      },
      {
        "k": "d",
        "t": "D) Building confidence in the quality of the test object"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "a) Is not correct. Finding and fixing defects in the test object is not a typical  test objective as although identifying defects is an objective of testing,  fixing defects is not a test activity\nb) Is not correct. Maintaining effective communications with developers is  not a typical test objective although it is useful in achieving other  objectives of testing, such as providing stakeholders with information  that enables them to make informed decisions. It is not a primary reason  for performing testing\nc) Is not correct. Validating that legal requirements have been met is not a  typical test objective because validation is concerned with checking  whether the system meets users’ and other stakeholders’ needs in its  operational environment. Checking that legal requirements have been  met is a form of verification\nd) Is correct. Building confidence in the quality of the test object is  achieved by executing tests that passed\n📌 Kiến thức: FL-1.1.1 (K1)"
  },
  {
    "n": 2,
    "ref": "Question #2 [FL-1.2.3]",
    "stem": "A designer documents a design for a user interface that does not suitably address disabled users  because the designer is tired. The programmer implements the user interface in line with the  design but as they are working under severe time pressure, they do not include suitable exception  handling in their program code for bonus calculations. When the operational system is used,  complaints are made by some disabled users about the interface and the company is subsequently  fined by the relevant regulatory authority. No one notices that bonus calculations are sometimes  incorrect.  Which of the following statements is CORRECT?",
    "opts": [
      {
        "k": "a",
        "t": "A) The miscalculation of bonuses is a defect that occasionally occurs"
      },
      {
        "k": "b",
        "t": "B) The fine received for failing to address some disabled users is a failure"
      },
      {
        "k": "c",
        "t": "C) The programmer working under severe time pressure is a root cause"
      },
      {
        "k": "d",
        "t": "D) The design of the user interface includes a designer error"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "a) Is not correct. The miscalculation of bonuses is a failure by the system,  not a defect\nb) Is not correct. The system not suitably supporting disabled users is a  failure which eventually results in a fine, but the fine itself is not a failure  (it appears to be the correct functioning of the regulatory system)\nc) Is correct. The error is made by the programmer and this mistake is  caused by them working under severe time pressure, which is the root  cause of the subsequent defect\nd) Is not correct. The poor design of the user interface, which does not  suitably address disabled users, is a design defect caused by the  designer error. Thus the design of the user interface includes a design  defect not a designer error\n📌 Kiến thức: FL-1.2.3 (K2)"
  },
  {
    "n": 3,
    "ref": "Question #3 [FL-1.3.1]",
    "stem": "Test conditions are being used by testers to generate test cases and execute tests. Even though  the test conditions remain the same, the test cases are varied each time. Which of the following  ‘principles of testing’ is being addressed through the variation of test cases?",
    "opts": [
      {
        "k": "a",
        "t": "A) Tests wear out"
      },
      {
        "k": "b",
        "t": "B) Absence-of-defects fallacy"
      },
      {
        "k": "c",
        "t": "C) Early testing saves time and money"
      },
      {
        "k": "d",
        "t": "D) Defects cluster together"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "a) Is correct. The ‘tests wear out’ principle is concerned with the idea that  repeating identical tests on unaltered code is unlikely to uncover novel  defects and therefore, modifying tests may be essential. By using test  conditions to generate new tests each time, the tests will not be identical  and the risk of the tests wearing out is reduced\nb) Is not correct. The ‘absence-of-defects fallacy’ principle is concerned  with ensuring that users’ needs are fulfilled even if lots of testing is done  and no defects are found (i.e., validation is also necessary). The use of   test conditions to generate test cases and execute tests does not  directly address this concern\nc) Is not correct. The ‘early testing saves time and money’ principle is  concerned with fixing defects early on to prevent the occurrence of  subsequent defects in derived work products, thereby reducing costs  and the likelihood of failures. This is typically addressed by starting  testing (both static and dynamic) as early as possible, but this is not  addressed by using test conditions to generate test cases and execute  tests\nd) Is not correct. The ‘Defects cluster together’ principle is concerned with  the distribution of defects in a system, which typically follows a Pareto  distribution. The use of test conditions to generate test cases and  execute tests does not address this concern, which is typically  addressed by risk-based testing\n📌 Kiến thức: FL-1.3.1 (K2)"
  },
  {
    "n": 4,
    "ref": "Question #4 [FL-1.4.1]",
    "stem": "Given the following test tasks:  1. Derive test cases from test conditions  2. Identify reusable testware  3. Organize test cases into test procedures  4. Evaluate the test basis and the test object  And the following test activities:  A. Test analysis  B. Test design  C. Test implementation  D. Test completion  Which of the following BEST matches the tasks with the activities?",
    "opts": [
      {
        "k": "a",
        "t": "A) 1B,  2A,  3D,  4C"
      },
      {
        "k": "b",
        "t": "B) 1B,  2D,  3C,  4A"
      },
      {
        "k": "c",
        "t": "C) 1C,  2A,  3B,  4D"
      },
      {
        "k": "d",
        "t": "D) 1C,  2D,  3A,  4B"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Considering each of the listed test activities and their tasks:  A. Test analysis - To identify the features that require testing, the  test basis is analyzed and defined as test conditions, which are  then prioritized along with related risks. During this test analysis,  defects in the test basis are typically uncovered, and the test  object's testability may also be assessed. (Task 4)  B. Test design - Involves using test conditions to create test cases  and other necessary testware, such as test data requirements  and test charters for exploratory testing. (Task 1)  C. Test implementation - Test procedures, such as manual and  automated test scripts, are created from test cases and may be  assembled into test suites. Test procedures are prioritized and  arranged in a test execution schedule. (Task 3)  D. Test completion - Occurs at project milestones, such as release,  end of iteration or end of test level. Testware is identified and  archived or handed to the appropriate teams for reuse, the test  environment is shut down, and the test activities are analyzed for  lessons learned and future improvements. (Task 2)  Thus:\na) Is not correct\nb) Is correct. The CORRECT match is: 1B, 2D, 3C, 4A\nc) Is not correct\nd) Is not correct\n📌 Kiến thức: FL-1.4.1 (K2)"
  },
  {
    "n": 5,
    "ref": "Question #5 [FL-1.4.3]",
    "stem": "Given the following testware:  i.  Test completion report  ii.  Data held in a database used for test inputs and expected results  iii.  The list of elements needed to build the test environment  iv.  Documented sequences of test cases in execution order  v.  Test cases  Which of the following BEST shows the testware produced as a result of performing test  implementation?",
    "opts": [
      {
        "k": "a",
        "t": "A) ii, iv"
      },
      {
        "k": "b",
        "t": "B) iii, v"
      },
      {
        "k": "c",
        "t": "C) i, ii, v"
      },
      {
        "k": "d",
        "t": "D) i, iii, iv"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "Considering each of the listed testware, and the test activity that produces  it:  i.  The test completion report is an output of test completion  ii.  Data held in a database used for inputs and expected results is  the test data - output of test implementation  iii. The list of elements needed to build the test environment is the  test environment requirements - output of test design  iv. Documented sequences of test cases in execution order are the  test procedures - output of test implementation  v.  Test cases - output of test design  Test implementation produces the following outputs: test procedures (iv),  automated test scripts, test suites, test data (ii), test execution schedule,  and test environment elements such as stubs, drivers, simulators, and  service virtualizations.  Thus:\na) Is correct. Items ii and iv in the list are produced as a result of test  implementation\nb) Is not correct\nc) Is not correct\nd) Is not correct\n📌 Kiến thức: FL-1.4.3 (K2)"
  },
  {
    "n": 6,
    "ref": "Question #6 [FL-1.4.5]",
    "stem": "Which of the following is MOST likely to describe a task performed by someone in a test  management role?",
    "opts": [
      {
        "k": "a",
        "t": "A) Evaluate the test basis and the test object"
      },
      {
        "k": "b",
        "t": "B) Define test environment requirements"
      },
      {
        "k": "c",
        "t": "C) Assess testability of the test object"
      },
      {
        "k": "d",
        "t": "D) Create the test completion report"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "a) Is not correct. The testing role is primarily responsible for the technical  and engineering aspects of testing, such as test analysis, test design,  test implementation, and test execution. Evaluating the test basis for  defects and the test object for testability are tasks performed as part of  test analysis, so it is likely they are tasks performed by the testing role\nb) Is not correct. The testing role is primarily responsible for the technical  and engineering aspects of testing, such as test analysis, test design,  test implementation, and test execution. Defining the test environment  requirements is a task performed as part of test design, so it is likely to  be a task performed by the testing role\nc) Is not correct. The testing role is primarily responsible for the technical  and engineering aspects of testing, such as test analysis, test design,  test implementation, and test execution. Assessing the testability of a  test object is a task performed as part of test analysis, so it is likely to be  a task performed by the testing role\nd) Is correct. The test management role primarily involves activities related  to test planning, test monitoring and test control, and test completion.  Thus, creating the test completion report, which is the prime output from  the test completion, is likely to be a task performed by the test  management role\n📌 Kiến thức: FL-1.4.5 (K2)"
  },
  {
    "n": 7,
    "ref": "Question #7 [FL-1.5.2]",
    "stem": "Which of the following is an advantage of the whole team approach?",
    "opts": [
      {
        "k": "a",
        "t": "A) Improved communication between team members"
      },
      {
        "k": "b",
        "t": "B) Decreased individual accountability for quality"
      },
      {
        "k": "c",
        "t": "C) Faster deployment of deliverables to the end users"
      },
      {
        "k": "d",
        "t": "D) Reduced collaboration with external business users"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "a) Is correct. The whole team approach promotes robust communication  and collaboration between the team members\nb) Is not correct. While the whole team approach prioritizes collective  accountability for quality, each individual team member is still equally  accountable for quality\nc) Is not correct. The whole team approach is about how the team works  together, with the aim of higher quality deliverables, but it does not  necessarily result in faster deployment to end users\nd) Is not correct. When using the whole team approach, testers work with  business representatives to create acceptance tests. There is no  suggestion that the approach will reduce collaboration with external  business users\n📌 Kiến thức: FL-1.5.2 (K1)"
  },
  {
    "n": 8,
    "ref": "Question #8 [FL-1.5.3]",
    "stem": "Given the following benefits and drawbacks of the independence of testing:  i.  The testers work in a different location from the developers  ii.  Testers question the assumptions programmers make while writing code  iii.  A confrontational dynamic has been established between testers and developers  iv.  Developers have convinced themselves that testers are mostly accountable for  quality  v.  Testers have different biases than those held by the developers  Which are MOST likely to be considered benefits?",
    "opts": [
      {
        "k": "a",
        "t": "A) i, iv"
      },
      {
        "k": "b",
        "t": "B) ii, v"
      },
      {
        "k": "c",
        "t": "C) i, iii, iv"
      },
      {
        "k": "d",
        "t": "D) ii, iii, v"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Considering each of the listed benefits and drawbacks of the independence  of testing:  i.  Ideally, we want close collaboration between testers and  developers, which is not increased by isolation. Thus, this is a  disadvantage  ii.  Testers and developers have varied backgrounds, technical  viewpoints, and potential biases, allowing testers to usefully  challenge assumptions made by stakeholders during system  specification and implementation. Thus, this is an advantage  iii.  The main disadvantage of independence of testing is that testers  may become isolated from the development team, leading to  communication problems, a lack of collaboration, and potentially  an adversarial relationship, with testers being blamed for delays  and bottlenecks in the release process. Thus, this is a  disadvantage  iv.  One of the disadvantages of independence of testing is that  testers may become isolated from the development team, leading  to developers feeling less accountable for quality. Thus, this is a  disadvantage  v.  The primary benefit of independence of testing is that testers are  more likely to identify different types of failures and defects  compared to developers, due to their varied backgrounds,  technical viewpoints, and potential biases, including cognitive bias  Thus:\na) Is not correct\nb) Is correct. The list entries showing benefits are ii and v\nc) Is not correct\nd) Is not correct\n📌 Kiến thức: FL-1.5.3 (K2)"
  },
  {
    "n": 9,
    "ref": "Question #9 [FL-2.1.2]",
    "stem": "Which of the following is a good testing practice that applies to all software development lifecycles?",
    "opts": [
      {
        "k": "a",
        "t": "A) Each test level has specific and distinct test objectives"
      },
      {
        "k": "b",
        "t": "B) Test implementation and execution for a given test level should start during the corresponding development phase"
      },
      {
        "k": "c",
        "t": "C) Testers should start test design as soon as drafts of the relevant work products become available"
      },
      {
        "k": "d",
        "t": "D) Every dynamic testing activity has a corresponding static testing activity"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "a) Is correct. Each test level has specific and distinct test objectives as a  different form of test object (e.g., single component and complete  system) is tested at each test level and overlapping test objectives  would lead to unnecessary duplication\nb) Is not correct. Test analysis and test design for a given test level should  start during the corresponding development phase to facilitate early  testing (e.g., acceptance test analysis and test design should begin  during requirements analysis). Test implementation will generally start  later, and test execution will start during the test level\nc) Is not correct. Test design for a given test level should start during the  corresponding development phase to facilitate early testing, however  test design (e.g., test case generation) needs to be based on an agreed  test basis, not an early draft, otherwise significant test effort may be  wasted on creating test cases for a design that later changes\nd) Is not correct. Quality control applies to all development activities,  meaning that every software development activity has a corresponding  test activity. However, the same symmetry does not apply to dynamic  testing and static testing. There are some static testing activities (e.g.,  static analysis) for which there is no obvious corresponding dynamic  testing activity\n📌 Kiến thức: FL-2.1.2 (K1)"
  },
  {
    "n": 10,
    "ref": "Question #10 [FL-2.1.3]",
    "stem": "Which of the following is an example of a test-first approach to development?",
    "opts": [
      {
        "k": "a",
        "t": "A) Behavior-Driven Development"
      },
      {
        "k": "b",
        "t": "B) Test Level Driven Development"
      },
      {
        "k": "c",
        "t": "C) Function-Driven Development"
      },
      {
        "k": "d",
        "t": "D) Performance-Driven Development"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "a) Is correct. Behavior-Driven Development (BDD) is a well-known  example of a test-first approach to development\nb) Is not correct. Test Level Driven Development is not a correct example  of a test-first approach to development\nc) Is not correct. Function-Driven Development is not a correct example of  a test-first approach to development\nd) Is not correct. Performance-Driven Development is not a correct  example of a test-first approach to development\n📌 Kiến thức: FL-2.1.3 (K1)"
  },
  {
    "n": 11,
    "ref": "Question #11 [FL-2.1.4]",
    "stem": "Which of the following is MOST likely to be a challenge encountered when implementing DevOps?",
    "opts": [
      {
        "k": "a",
        "t": "A) Making sure that non-functional quality characteristics are not overlooked"
      },
      {
        "k": "b",
        "t": "B) Managing continuously changing test environments"
      },
      {
        "k": "c",
        "t": "C) The need for more manual testers with suitable experience"
      },
      {
        "k": "d",
        "t": "D) Setting up the test automation as part of the delivery pipeline"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "a) Is not correct. DevOps generally increases the visibility of non-functional  quality characteristics, such as performance and reliability\nb) Is not correct. Automated processes like continuous  integration/continuous delivery (CI/CD) used in DevOps facilitate stable  test environments\nc) Is not correct. Automated processes like CI/CD used in DevOps  generally reduce the need for manual testing\nd) Is correct. DevOps implementation can pose several risks and  challenges, including the need to define and set up the delivery pipeline,  introduce and maintain CI/CD tools, and establish and maintain test  automation\n📌 Kiến thức: FL-2.1.4 (K2)"
  },
  {
    "n": 12,
    "ref": "Question #12 [FL-2.1.6]",
    "stem": "Which of the following BEST describes retrospectives?",
    "opts": [
      {
        "k": "a",
        "t": "A) Retrospectives allow team members to identify other team members who did not fully contribute to achieving quality as required by the whole team approach"
      },
      {
        "k": "b",
        "t": "B) Retrospectives give testers an opportunity to identify activities that were successful so that these are retained when potential improvements are made in the future"
      },
      {
        "k": "c",
        "t": "C) Retrospectives are where agile team members are allowed to voice their concerns about management and customers in a blameless environment"
      },
      {
        "k": "d",
        "t": "D) Retrospectives give agile team members a forum where they focus on discussing the plan and technical decisions for the next iteration"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "a) Is not correct. The benefits of retrospectives include team bonding and  learning from sharing issues, and better collaboration between  developers and testers through reviewing and improving working  practices. Calling out individuals who a team member may feel did not  fully contribute to achieving quality as required by the whole team  approach will not contribute to this team bonding and collaboration\nb) Is correct. During the retrospective, the group discusses what aspects of  the project were successful and should be retained, as well as areas  that could be improved, and how to do so\nc) Is not correct. The benefits of retrospectives are based on increased  effectiveness and efficiency through process improvements; they are  not an opportunity to let off steam and criticize management and  customers. Also, the test results are recorded, usually in the test  completion report, so anything said in the meeting could be read by  other stakeholders\nd) Is not correct. Retrospectives are meetings that are typically held at the  end of an iteration where team members will focus on discussing  quality-related issues that have occurred in the current iteration. They  are not used for making plans or technical decisions for the next  iteration; this would be done in the iteration planning meeting at the start  of the next iteration\n📌 Kiến thức: FL-2.1.6 (K2)"
  },
  {
    "n": 13,
    "ref": "Question #13 [FL-2.2.2]",
    "stem": "Which of the following tests is MOST likely to be performed as part of functional testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) The test checks that the sort function puts the elements of the list or array in ascending order"
      },
      {
        "k": "b",
        "t": "B) The test checks whether the sort function completes sorting within one second of starting"
      },
      {
        "k": "c",
        "t": "C) The test checks how easily the sort function can be changed from sorting ascending to sorting descending"
      },
      {
        "k": "d",
        "t": "D) The test checks that the sort function still functions correctly when moved from a 32-bit to a 64-bit architecture"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "a) Is correct. Checking that the sort function puts the elements of the list or  array in ascending order is evaluating the functional correctness of the  sort function, which is part of functional testing\nb) Is not correct. Assessing whether the sort function meets its non- functional requirement to complete within one second is part of testing  its performance efficiency, which is part of non-functional testing\nc) Is not correct. Evaluating the ease with which the sort function can be  modified from sorting ascending to sorting descending is testing its  modifiability, a form of non-functional maintainability testing, which is  part of non-functional testing\nd) Is not correct. Assessing that the sort function still functions correctly  when moved from a 32-bit to a 64-bit architecture is testing its  adaptability, a form of portability testing, which is part of non-functional  testing\n📌 Kiến thức: FL-2.2.2 (K2)"
  },
  {
    "n": 14,
    "ref": "Question #14 [FL-2.3.1]",
    "stem": "Which of the following is MOST likely to be a trigger that leads to maintenance testing of a  currency exchange system?",
    "opts": [
      {
        "k": "a",
        "t": "A) The developers reported that changing the currency exchange system was difficult and the testers decided to check if this was true"
      },
      {
        "k": "b",
        "t": "B) The refund option of the currency exchange system was removed as it did not always repay the correct amount to customers"
      },
      {
        "k": "c",
        "t": "C) The agile team has started developing a user story that adds a new customer loyalty feature to the currency exchange system"
      },
      {
        "k": "d",
        "t": "D) The language support option of the currency exchange system was used to enable both English and local language currency transactions"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "a) Is not correct. Assuming that testers could check the ease of changing  the currency exchange system then it would be done by maintainability  testing rather than maintenance testing, so this is not a trigger for  maintenance testing\nb) Is correct. A system modification (such as a fix or enhancement) is an  example of a trigger for maintenance testing. The removal of the refund  option of the currency exchange system was a fix that would lead to  maintenance testing\nc) Is not correct. If the agile team has started developing a user story that  adds a new customer loyalty feature to the currency exchange system,  then this will result in them testing the new feature, and then they would  perform regression testing. No maintenance testing is required in this  situation\nd) Is not correct. Reconfiguration of the currency exchange system to  support both the local language and English currency transactions is not  a system modification, a change to the operational environment, or a  system retirement, which are the three triggers for maintenance testing\n📌 Kiến thức: FL-2.3.1 (K2)"
  },
  {
    "n": 15,
    "ref": "Question #15 [FL-3.1.1]",
    "stem": "Which of the following CANNOT be examined by static testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Contract"
      },
      {
        "k": "b",
        "t": "B) Test plan"
      },
      {
        "k": "c",
        "t": "C) Encrypted code"
      },
      {
        "k": "d",
        "t": "D) Test charter"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "a) Is not correct. Most work products can be examined using some form of  static testing, and a contract must be interpretable by humans and so  could be reviewed, which is a form of static testing\nb) Is not correct. Most work products can be examined using some form of  static testing, and a test plan must be interpretable by humans and so  could be reviewed, which is a form of static testing\nc) Is correct. Most work products can be examined using some form of  static testing; however it is not suitable for work products that are too  complex for human interpretation and should not be analyzed by tools,  and encrypted code is too complex for humans and if it is properly  encrypted it will not be analyzable by most tools\nd) Is not correct. Most work products can be examined using some form of  static testing, and a test charter must be interpretable by humans and  so could be reviewed, which is a form of static testing\n📌 Kiến thức: FL-3.1.1 (K1)"
  },
  {
    "n": 16,
    "ref": "Question #16 [FL-3.1.2]",
    "stem": "Which of the following statements about the value of static testing is CORRECT?",
    "opts": [
      {
        "k": "a",
        "t": "A) The defect types found by static testing are different from the defect types that can be found by dynamic testing"
      },
      {
        "k": "b",
        "t": "B) Dynamic testing can detect the defect types that can be found by static testing plus some additional defect types"
      },
      {
        "k": "c",
        "t": "C) Dynamic testing can identify some of the defects that can be found by static testing but not all of them"
      },
      {
        "k": "d",
        "t": "D) Static testing can identify the defect types that can be found by dynamic testing as well as some extra defect types"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Some defect types that can only be detected by static testing, such as  unreachable code, design patterns not implemented as desired and defects  in non-executable work products. Some defect types that can be found by  both static testing and dynamic testing, such as a programming defect that  can be observed by a reviewer in a code review and which causes an  observable failure during dynamic testing. And some defect types that can  only be detected by dynamic testing, such as performance issues or  memory issues that can only be observed when executing the code or  system.  Thus:\na) Is not correct\nb) Is not correct\nc) Is correct\nd) Is not correct\n📌 Kiến thức: FL-3.1.2 (K2)"
  },
  {
    "n": 17,
    "ref": "Question #17 [FL-3.2.2]",
    "stem": "Given the following descriptions of review activities:  1. Detected anomalies are deliberated upon, and determinations are reached  regarding their status, ownership, and any further steps needed  2. Defects are recorded, and any needed updates are addressed prior to the  acceptance of the work product  3. Reviewers employ techniques to come up with suggestions and questions about the  work product and to spot anomalies  4. The objective of the review and its schedule are established to ensure a focused  and efficient review  5. Participants are provided with access to the item being reviewed  Which of the following is the CORRECT sequence in the review process of the activities that  correspond to the descriptions?",
    "opts": [
      {
        "k": "a",
        "t": "A) 4 – 3 – 5 – 2 – 1"
      },
      {
        "k": "b",
        "t": "B) 4 – 5 – 3 – 1 – 2"
      },
      {
        "k": "c",
        "t": "C) 5 – 4 – 1 – 3 – 2"
      },
      {
        "k": "d",
        "t": "D) 5 – 4 – 3 – 2 – 1"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "The five listed descriptions and the corresponding review process activities  are:  1. This describes part of the ‘communication and analysis’ activity  2. This describes part of the ‘fixing and reporting’ activity  3. This describes part of the ‘individual review’ activity  4. This describes part of the ‘planning’ activity  5. This describes part of the ‘review initiation’ activity  The generic review process from ISO/IEC 20246, which is outlined in the  syllabus, comprises the following activities in this logical order:  •  Planning (4)  •  Review initiation (5)  •  Individual review (3)  •  Communication and analysis (1)  •  Fixing and reporting (2)  Thus:\na) Is not correct\nb) Is correct. The correct sequence of activities is: 4 – 5 – 3 – 1 – 2\nc) Is not correct\nd) Is not correct\n📌 Kiến thức: FL-3.2.2 (K2)"
  },
  {
    "n": 18,
    "ref": "Question #18 [FL-3.2.3]",
    "stem": "Which participant in the review process is responsible for ensuring that the review meetings run  effectively and that everyone at the meetings can voice their opinions freely?",
    "opts": [
      {
        "k": "a",
        "t": "A) Manager"
      },
      {
        "k": "b",
        "t": "B) Moderator"
      },
      {
        "k": "c",
        "t": "C) Chairperson"
      },
      {
        "k": "d",
        "t": "D) Review Leader"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "a) Is not correct. The manager is responsible for deciding what needs to  be reviewed and allocating resources, such as staff and time, for the  review\nb) Is correct. The moderator (or facilitator) is responsible for ensuring that  the review meetings run effectively, including managing time, mediating  discussions, and creating a safe environment where everyone can voice  their opinions freely\nc) Is not correct. The chairperson is not a recognized role in reviews\nd) Is not correct. The review leader is responsible for overseeing the  review process, such as selecting the review team members,  scheduling review meetings, and ensuring that the review is completed  successfully\n📌 Kiến thức: FL-3.2.3 (K1)"
  },
  {
    "n": 19,
    "ref": "Question #19 [FL-4.1.1]",
    "stem": "You perform system testing of an e-commerce web application and are provided with the following  requirement:  REQ 05-017. If the total cost of purchases exceeds $100, the customer gets a 5%  discount on subsequent purchases. Otherwise, the customer does not receive a  discount.  Which test techniques will be MOST helpful in designing test cases based on this requirement?",
    "opts": [
      {
        "k": "a",
        "t": "A) White-box test techniques"
      },
      {
        "k": "b",
        "t": "B) Black-box test techniques"
      },
      {
        "k": "c",
        "t": "C) Experience-based test techniques"
      },
      {
        "k": "d",
        "t": "D) Risk-based test techniques"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "a) Is not correct. The document does not refer to the test object’s internal  structure but specifies the desired behavior of the test object. Therefore,  white-box test techniques will not be helpful in designing test cases\nb) Is correct. The document is a requirement that specifies the desired  behavior of the test object. Therefore, the most suitable test techniques  in this case are the black-box test techniques (e.g., Boundary Value  Analysis or Decision Table Testing)\nc) Is not correct. Although experience-based test techniques can be used  to design test cases based on this document, black-box test techniques  will be more suitable. The document describes a precise business rule  and, in addition, wording like \"exceeds $100\" suggests the existence of  important equivalence partition boundaries that should be tested using  black-box test techniques like Boundary Value Analysis\nd) Is not correct. Risk-based test techniques are not a recognized type of  test technique\n📌 Kiến thức: FL-4.1.1 (K2)"
  },
  {
    "n": 20,
    "ref": "Question #20 [FL-4.2.1]",
    "stem": "The system for selling cinema tickets calculates the discount type based on the client’s birth year  (BY) and on the current year (CY) as follows:  Let D be the difference between CY and BY, that is, D = CY – BY  •  If D < 0   then print the error message “birth year cannot be greater than  current year”  •  If 0 ≤ D < 18   then apply the student discount  •  If 18 ≤ D < 65   then apply no discount  •  If D ≥ 65   then apply the pensioner discount  Your test suite already contains two test cases:  •  BY = 1990,   CY = 2020,   expected result: no discount  •  BY = 2030,   CY = 2029,   expected result: print the error message  Which of the following test data sets should be added to achieve full valid equivalence partitioning  coverage for the discount type?",
    "opts": [
      {
        "k": "a",
        "t": "A) BY = 2001, CY = 2065"
      },
      {
        "k": "b",
        "t": "B) BY = 1900, CY = 1965"
      },
      {
        "k": "c",
        "t": "C) BY = 1965, CY = 1900"
      },
      {
        "k": "d",
        "t": "D) BY = 2011, CY = 2029"
      },
      {
        "k": "e",
        "t": "E) BY = 2000, CY = 2000"
      }
    ],
    "ans": [
      "b",
      "e"
    ],
    "multi": true,
    "exp": "There are two equivalence partitions that are not yet covered, which  correspond to “student discount” and “pensioner discount”.\na) Is not correct. CY – BY = 64, so these inputs correspond to the already  covered “no discount” partition\nb) Is correct. CY – BY = 65, so these inputs correspond to a partition that  is not yet covered (“pensioner discount”)\nc) Is not correct. CY – BY = –65, so these inputs correspond to the already  covered “error message” partition\nd) Is not correct. CY – BY = 18, so these inputs correspond to the already  covered “no discount” partition\ne) Is correct. CY – BY = 0, so these inputs correspond to a partition that is  not yet covered (“student discount”)\n📌 Kiến thức: FL-4.2.1 (K3)"
  },
  {
    "n": 21,
    "ref": "Question #21 [FL-4.2.2]",
    "stem": "You are testing a temperature control system for a horticultural cold storage facility. The system  receives the temperature (in full degrees Celsius) as the input. If the temperature is between 0 and  2 degrees inclusive, the system displays the message “temperature OK”. For lower temperatures,  the system displays the message \"temperature too low\" and for higher temperatures it displays the  message “temperature too high”.  Using two-value boundary value analysis, which of the following sets of test inputs provides the  highest level of boundary value coverage?",
    "opts": [
      {
        "k": "a",
        "t": "A) –1, 3"
      },
      {
        "k": "b",
        "t": "B) 0, 2"
      },
      {
        "k": "c",
        "t": "C) –1, 0, 2, 3"
      },
      {
        "k": "d",
        "t": "D) –2, 0, 2, 4"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "There are three equivalence partitions: {…, –2, –1}, {0, 1, 2}, {3, 4, …}.  For 2-value BVA all the boundary values for all the equivalence partitions  must be covered.  The boundary values are –1 (for the “temperature too low” partition), 0, 2  (for the “temperature OK” partition) and 3 (for the “temperature too high”  partition).  Thus:\na) Is not correct\nb) Is not correct\nc) Is correct. The correct option is: –1, 0, 2, 3\nd) Is not correct\n📌 Kiến thức: FL-4.2.2 (K3)"
  },
  {
    "n": 22,
    "ref": "Question #22 [FL-4.2.3]",
    "stem": "You are designing test cases based on the following decision table.    R1  R2  R3  R4  R5  R6  R7  C1: Age  0-18  19-65  19-65  >65  0-18  19-65  >65  C2: Experience  -  0-4  >4  -  -  -  -  C3: Registered?  NO  NO  NO  NO  YES  YES  YES  Category  A  A  B  B  B  D  C    So far you have designed the following test cases:  •  TC1: 19-year-old, unregistered man with no experience;  expected result: category A  •  TC2: 65-year-old, unregistered woman with 5 years of experience;  expected result: category B  •  TC3: 66-year-old, registered man with no experience;  expected result: category C  •  TC4: 65-year-old, registered woman with 4 years of experience;  expected result: category D  Which of the following test cases, when added to the existing set of test cases, will increase the  decision table coverage?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) 66-year-old, unregistered man with no experience; expected result: category B"
      },
      {
        "k": "b",
        "t": "B) 55-year-old, unregistered woman with 2 years of experience; expected result: category A"
      },
      {
        "k": "c",
        "t": "C) 19-year-old, registered woman with 5 years of experience; expected result: category D"
      },
      {
        "k": "d",
        "t": "D) No additional test case can increase the already achieved decision table coverage"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "Test cases TC1, TC2, TC3 and TC4 cover, respectively, rules R2, R3, R7  and R6 in the decision table.\na) Is correct. The conditions “66-year-old”, “unregistered” and “no  experience” match rule R4, which is not covered by the existing test  cases, so after adding this test case, the decision table coverage will  increase\nb) Is not correct. The conditions “55-year-old”, “unregistered” and “2 years  of experience” match rule R2, already covered by TC1. So adding this  test case will not increase the coverage\nc) Is not correct. The conditions “19-year-old”, “registered” and “5 years of  experience” match rule R6, already covered by TC4. So adding this test  case will not increase the coverage\nd) Is not correct. The existing test cases cover only 4 out of 7 columns of  the decision table. The coverage can be increased by adding test cases  that cover yet uncovered columns, that is, R1, R4 and R5\n📌 Kiến thức: FL-4.2.3 (K3)"
  },
  {
    "n": 23,
    "ref": "Question #23 [FL-4.2.4]",
    "stem": "You are applying state transition testing to the hotel room reservation system modeled by the  following state transition table, with 4 states and 5 different events:    Events  State  Available  NotAvailable  ChangeRoom  Cancel  Pay  S1: Requesting  S2  S3        S2: Confirmed      S1  S4  S4  S3: Waiting list  S2      S4    S4: End            Assuming all test cases start in the ‘Requesting’ state, which of the following test cases,  represented as sequences of events, achieves the highest valid transitions coverage?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) NotAvailable, Available, ChangeRoom, NotAvailable, Cancel"
      },
      {
        "k": "b",
        "t": "B) Available, ChangeRoom, NotAvailable, Available, Pay"
      },
      {
        "k": "c",
        "t": "C) Available, ChangeRoom, Available, ChangeRoom, NotAvailable"
      },
      {
        "k": "d",
        "t": "D) NotAvailable, Cancel, ChangeRoom, Available, Pay"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "a) Is not correct. This sequence of five events covers 4 different valid  transitions (both “NotAvailable” events correspond to the same  transition between S1 and S3). This test case covers 4 out of 7 valid  transitions\nb) Is correct. This sequence of five events covers 5 different transitions  (the first “Available” event corresponds to a transition between S1 and  S2, and the second “Available” event corresponds to a transition  between S3 and S2, so two different transitions are covered). This test  case covers 5 out of 7 valid transitions and achieves the highest valid  transitions coverage\nc) Is not correct. This sequence of five events covers 3 different transitions  (both “Available” events correspond to the same transition from S1 to  S2; both “ChangeRoom” events correspond to the same transition from  S2 to S1). This test case covers 3 out of 7 valid transitions\nd) Is not correct. This sequence of five events does not represent a  feasible test case, because after “Cancel” the system ends up in the  End state and no further valid transitions can be executed\n📌 Kiến thức: FL-4.2.4 (K3)"
  },
  {
    "n": 24,
    "ref": "Question #24 [FL-4.3.1]",
    "stem": "Your test suite S for a program P achieves 100% statement coverage. It consists of three test  cases, each of which achieves 50% statement coverage.  Which of the following statements is CORRECT?",
    "opts": [
      {
        "k": "a",
        "t": "A) Executing S will cause all possible failures in P"
      },
      {
        "k": "b",
        "t": "B) S achieves 100% branch coverage for P"
      },
      {
        "k": "c",
        "t": "C) Every executable statement in P containing a defect has been run at least once during the execution of S"
      },
      {
        "k": "d",
        "t": "D) After removing one test case from S, the remaining two test cases will still achieve 100% statement coverage"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "a) Is not correct. A statement with a defect, when executed, does not have  to cause a failure. For example, a statement x := y / z will cause a failure  only when z equals 0\nb) Is not correct. 100% statement coverage does not guarantee 100%  branch coverage. For example, a test case with x=0 for the code  1. IF (x=0) THEN  2.   A;  3. ENDIF  achieves 100% statement coverage but does not cover the branch from  1 to 3\nc) Is correct. 100% statement coverage means that each executable  statement was executed at least once\nd) Is not correct. The removed test case may provide coverage of some  statements that are not covered by either of the other two test cases, in  which case the remaining two test cases together will not achieve 100%  statement coverage\n📌 Kiến thức: FL-4.3.1 (K2)"
  },
  {
    "n": 25,
    "ref": "Question #25 [FL-4.3.3]",
    "stem": "Why does white-box testing facilitate defect detection even when the software specification is  vague, outdated or incomplete?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test cases are designed based on the structure of the test object rather than the specification"
      },
      {
        "k": "b",
        "t": "B) For each white-box test technique the coverage can be well-defined and easily measured"
      },
      {
        "k": "c",
        "t": "C) White-box test techniques are very well designed to detect omissions in the requirements"
      },
      {
        "k": "d",
        "t": "D) White-box test techniques can be used in both static testing and dynamic testing"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "a) Is correct. A fundamental strength that all white-box test techniques  share is that the entire software implementation is taken into account  during testing, which facilitates defect detection even when the software  specification is vague, outdated or incomplete. This means white-box  testing can find defects such as an extra feature added to the code  (either accidentally or deliberately) that is not supposed to be there,  which black-box testing cannot detect\nb) Is not correct. The fact that the coverage can be precisely defined is not  the right reason. The achieved level of coverage would have much more  impact than the possibility to measure the coverage\nc) Is not correct. If the software does not implement one or more  requirements, white-box testing is unlikely to detect the resulting defects  of omission\nd) Is not correct. While this is true, this is not the right answer, because  there is no connection between the capability to be used in both static  testing and dynamic testing and the claim that white-box testing  facilitates defect detection with poor specifications\n📌 Kiến thức: FL-4.3.3 (K2)"
  },
  {
    "n": 26,
    "ref": "Question #26 [FL-4.4.1]",
    "stem": "Which of the following is NOT anticipated by the tester while applying error guessing?",
    "opts": [
      {
        "k": "a",
        "t": "A) The developer misunderstood the formula in the user story for calculating the interest"
      },
      {
        "k": "b",
        "t": "B) The developer wrote “FA = A*(1+IR^N)” instead of “FA = A*(1+IR)^N” in the source code"
      },
      {
        "k": "c",
        "t": "C) The developer missed the seminar on new compound interest rate legislation"
      },
      {
        "k": "d",
        "t": "D) The accuracy of the interest calculated by the system is not precise enough"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Error guessing is about anticipating the errors, defects and failures based  on the tester’s knowledge.\na) Is not correct. This is an example of anticipating the developer’s error\nb) Is not correct. This is an example of anticipating the defect\nc) Is correct. This is an example of a potential root cause of a defect,  which is neither an error, defect nor failure, and difficult for the tester to  anticipate\nd) Is not correct. This is an example of anticipating a failure, perhaps  based on experience of previous systems in this application domain\n📌 Kiến thức: FL-4.4.1 (K2)"
  },
  {
    "n": 27,
    "ref": "Question #27 [FL-4.4.2]",
    "stem": "Which of the following is true about exploratory testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test cases are designed before the exploratory testing session starts"
      },
      {
        "k": "b",
        "t": "B) The tester can perform test execution, but cannot perform test design"
      },
      {
        "k": "c",
        "t": "C) Exploratory testing results are good predictors of the number of remaining defects"
      },
      {
        "k": "d",
        "t": "D) During exploratory testing the tester may use black-box test techniques"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "a) Is not correct. In exploratory testing, test cases are usually created  during the exploratory testing session, alongside test analysis, test  implementation and test execution\nb) Is not correct. In exploratory testing, tests are simultaneously designed,  executed, and evaluated while the tester learns about the test object\nc) Is not correct. Exploratory test results depend heavily on the tester’s  experience. So, even if the test results of exploratory testing can be  used as a predictor of risk and used to assess whether there will be  fewer or more defects, compared to the previous exploratory testing  session, they are not a good example of reliable defect prediction  models that can predict the number of remaining defects\nd) Is correct. During exploratory testing, the testers can use any test  techniques that they find useful\n📌 Kiến thức: FL-4.4.2 (K2)"
  },
  {
    "n": 28,
    "ref": "Question #28 [FL-4.5.1]",
    "stem": "Which collaborative user story writing practice enables the team to achieve a collective  understanding of what needs to be delivered?",
    "opts": [
      {
        "k": "a",
        "t": "A) Planning poker, so that a team can achieve consensus on the effort needed to implement a user story"
      },
      {
        "k": "b",
        "t": "B) Reviews, so that a team can detect inconsistencies and contradictions in a user story"
      },
      {
        "k": "c",
        "t": "C) Iteration planning, so that user stories with the highest business value for a customer can be prioritized for implementation"
      },
      {
        "k": "d",
        "t": "D) Conversation, so that team members can understand how the software will be used"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "a) Is not correct. Planning poker can estimate effort for a user story that is  already written. It does not help in understanding what should be  delivered\nb) Is not correct. Reviews are not a collaborative user story writing practice\nc) Is not correct. Iteration planning is a project-related practice, used to  plan the work, not to understand what needs to be delivered\nd) Is correct. Conversation explains how the software will be used and  often allows the team to define meaningful acceptance criteria, thus  obtaining a shared vision of what should be delivered\n📌 Kiến thức: FL-4.5.1 (K2)"
  },
  {
    "n": 29,
    "ref": "Question #29 [FL-4.5.3]",
    "stem": "You have just started designing test cases for the following user story.  As a customer,  I want to be able to filter search results by price range, so that I can find products within my  budget more easily.  Acceptance criteria:  1. The filter should work for all versions of the application from version 3.0  upwards  2. The filter should allow the customer to set a price range with a minimum  and a maximum price  3. The search results should update dynamically as the customer adjusts the  price range filter  In all test cases the precondition is as follows: there are only two products available, products A  and B. Product A costs $100 and product B costs $110.  Which of the following is the BEST example of a test case for this user story?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) Enter webpage and set filter to show prices between $90 and $100. Expected result: results show product A only. Set maximum price to $110. Expected result: results now include both products A and B"
      },
      {
        "k": "b",
        "t": "B) Enter webpage. Expected result: the default minimum and maximum prices are $100 and $110 respectively. Add product C to stock, with price $120. Refresh the client’s webpage. Expected result: the default maximum price changes to $120"
      },
      {
        "k": "c",
        "t": "C) Enter webpage and set filter to show prices between $90 and $115. Expected result: results show both products A and B. Change currency from USD to EUR. Expected result: the filter range changes correctly to EUR values, according to the current exchange rate"
      },
      {
        "k": "d",
        "t": "D) Enter webpage with three different browsers: Edge, Chrome and Opera. In each browser set filter between $90 and $110. Expected result: results include both products A and B and the results layout is the same in all three browsers"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "a) Is correct. This test case is related to acceptance criteria 2 and 3,  because we check if we can set price range (acceptance criterion 2)  and if the results update dynamically after adjusting the price range filter  (acceptance criterion 3)\nb) Is not correct. This test case is not related to any of the acceptance  criteria. It checks if the filter dynamically sets the default minimum and  maximum price range, and not that a customer can do it\nc) Is not correct. This test case is not related to any of the acceptance  criteria. It checks the currency exchange feature, which is not discussed  in this user story\nd) Is not correct. This test case is not related to any of the acceptance  criteria. It checks the application’s compatibility with different browsers,  which is not discussed in this user story\n📌 Kiến thức: FL-4.5.3 (K3)"
  },
  {
    "n": 30,
    "ref": "Question #30 [FL-5.1.3]",
    "stem": "Which of the following BEST define EXIT criteria in a testing project?",
    "opts": [
      {
        "k": "a",
        "t": "A) Budget is approved"
      },
      {
        "k": "b",
        "t": "B) Budget runs out"
      },
      {
        "k": "c",
        "t": "C) Test basis is available"
      },
      {
        "k": "d",
        "t": "D) Test cases achieved at least 80% statement coverage"
      },
      {
        "k": "e",
        "t": "E) All test analysts are ISTQB certified at the Foundation Level"
      }
    ],
    "ans": [
      "b",
      "d"
    ],
    "multi": true,
    "exp": "a) Is not correct. The approval of the budget is an example of an entry  criterion. It would make no sense to approve the budget for some  activity that has already been done\nb) Is correct. Running out of budget can be viewed as a valid exit criterion\nc) Is not correct. Availability of resources is an example of an entry  criterion for testing  d) Correct. Coverage is a measure of thoroughness, so it is a typical exit  criterion\ne) Is not correct. This is an example of an entry criterion, checked before  the project starts\n📌 Kiến thức: FL-5.1.3 (K2)"
  },
  {
    "n": 31,
    "ref": "Question #31 [FL-5.1.4]",
    "stem": "The team wants to estimate the time needed for one tester to execute four test cases for a  software component. The team has gathered the following measures of the effort used to execute  a single test case:  •  Best-case scenario:  1 hour  •  Worst-case scenario:  8 hours  •  Most likely scenario:  3 hours  Given that the three-point estimation technique is being used, what is the final estimate of the time  needed to execute all four test cases?",
    "opts": [
      {
        "k": "a",
        "t": "A) 14 hours"
      },
      {
        "k": "b",
        "t": "B) 3.5 hours"
      },
      {
        "k": "c",
        "t": "C) 16 hours"
      },
      {
        "k": "d",
        "t": "D) 12 hours"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "Using the three-point estimation technique, the final estimate (E) is  calculated as:  E = (a + 4*m + b) / 6,  where a is the most optimistic estimate, m is the most likely estimate, and b  is the most pessimistic estimate.  Thus:\na) Is correct. In this case, the estimate for executing a single test case is:  E = (1h + 4*3h + 8h) / 6 = 3.5 hours  So, the total time needed for the tester to execute 4 test cases is:  3.5h * 4 = 14 hours\nb) Is not correct\nc) Is not correct\nd) Is not correct\n📌 Kiến thức: FL-5.1.4 (K3)"
  },
  {
    "n": 32,
    "ref": "Question #32 [FL-5.1.5]",
    "stem": "The table shows the traceability matrix from test cases to requirements. “X” means that a given test  case covers the corresponding requirement.    Req1  Req2  Req3  Req4  Req5  Req6  Req7  TC1  X    X  X      X  TC2  X        X    X  TC3          X  X    TC4    X            You want to prioritize the test cases following the additional coverage prioritization technique.  You execute all four test cases.  Which test case should be executed as the LAST one?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) TC1"
      },
      {
        "k": "b",
        "t": "B) TC2"
      },
      {
        "k": "c",
        "t": "C) TC3"
      },
      {
        "k": "d",
        "t": "D) TC4"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "TC1 achieves the highest coverage (4/7 – Req1, Req3, Req4 and Req7), so  should be executed first.  Req2, Req5 and Req6 are still not covered.  The next test case that achieves the highest additional coverage of the  remaining requirements is TC3, covering 2 out of these 3 requirements  (Req5 and Req6). So, TC3 should be executed as the second one.  Now the only requirement still not covered is Req2, which is covered by  TC4. Therefore, TC4 should be executed as the third test case.  So, the last test case executed will be TC2.  Thus:\na) Is not correct\nb) Is correct\nc) Is not correct\nd) Is not correct\n📌 Kiến thức: FL-5.1.5 (K3)"
  },
  {
    "n": 33,
    "ref": "Question #33 [FL-5.1.7]",
    "stem": "How can the testing quadrants be beneficial for testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) They help in test planning by dividing the test process into four phases, corresponding to the four basic test levels: component, integration, system, and acceptance testing"
      },
      {
        "k": "b",
        "t": "B) They help in assessing the high-level coverage (e.g., requirements coverage) based on low-level coverage (e.g., code coverage)"
      },
      {
        "k": "c",
        "t": "C) They help non-technical stakeholders to understand the different test types and that some test types are more relevant to certain test levels than others"
      },
      {
        "k": "d",
        "t": "D) They help agile teams to develop a communication strategy based on classifying people according to four basic psychological types, and on modelling the relations between them"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "a) Is not correct. Testing quadrants have nothing to do with describing the  relationships between test levels\nb) Is not correct. Testing quadrants cannot help in assessing any type of  coverage\nc) Is correct. Testing quadrants allow managers and other stakeholders to  understand the relationships between test types, the activities they  support (team support or product critique), and the viewpoint they are  focused on (business- or technology-facing)\nd) Is not correct. Testing quadrants is not a psychological model\n📌 Kiến thức: FL-5.1.7 (K2)"
  },
  {
    "n": 34,
    "ref": "Question #34 [FL-5.2.1]",
    "stem": "For a given risk, its risk level is $1,000 and its risk likelihood is estimated as 50%.  What is the risk impact?",
    "opts": [
      {
        "k": "a",
        "t": "A) $500"
      },
      {
        "k": "b",
        "t": "B) $2,000"
      },
      {
        "k": "c",
        "t": "C) $50,000"
      },
      {
        "k": "d",
        "t": "D) $200"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Risk assessment can use a quantitative or qualitative approach, or a mix of  them. In the quantitative approach the risk level is calculated as the  multiplication of risk likelihood and risk impact. So, Risk level = Risk  likelihood * Risk impact  Then, Risk impact = Risk level / Risk likelihood.  In our case, Risk impact = $1,000 / 50% = $1,000 / 0.5 = $2,000.  Thus:\na) Is not correct\nb) Is correct\nc) Is not correct\nd) Is not correct\n📌 Kiến thức: FL-5.2.1 (K1)"
  },
  {
    "n": 35,
    "ref": "Question #35 [FL-5.2.2]",
    "stem": "Which of the following are product risks?",
    "opts": [
      {
        "k": "a",
        "t": "A) Scope creep"
      },
      {
        "k": "b",
        "t": "B) Poor architecture"
      },
      {
        "k": "c",
        "t": "C) Cost-cutting"
      },
      {
        "k": "d",
        "t": "D) Poor tool support"
      },
      {
        "k": "e",
        "t": "E) Too long response time"
      }
    ],
    "ans": [
      "b",
      "e"
    ],
    "multi": true,
    "exp": "a) Is not correct. Scope creep is an example of a project risk related to  technical issues\nb) Is correct. Poor architecture is an example of a product risk since it  refers to a product characteristic\nc) Is not correct. Cost-cutting is an example of a project risk, related to  organizational issues\nd) Is not correct. Poor tool support is an example of a project risk related to  technical issues\ne) Is correct. Response time that is too long is an example of a product risk  since it refers to a product characteristic\n📌 Kiến thức: FL-5.2.2 (K2)"
  },
  {
    "n": 36,
    "ref": "Question #36 [FL-5.3.2]",
    "stem": "Which of the following is NOT a valid purpose for a test report?",
    "opts": [
      {
        "k": "a",
        "t": "A) Tracking test progress and identifying areas that require further attention"
      },
      {
        "k": "b",
        "t": "B) Providing information on the tests executed, their results, and defects found"
      },
      {
        "k": "c",
        "t": "C) Providing information about each defect, such as the steps to reproduce it"
      },
      {
        "k": "d",
        "t": "D) Providing information on testing planned for the next period"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "a) Is not correct. Tracking test progress and identifying areas that require  further attention is an example of supporting the ongoing control of  testing. This is one of the purposes of test reports\nb) Is not correct. Providing information on the tests executed, their test  results, and any defects found is an example of summarizing the test  activities performed at a given test level. This is one of the purposes of  test reports\nc) Is correct. Providing information about defects is the purpose of a defect  report, not a test report\nd) Is not correct. Providing information on testing planned for the next  period is one of the purposes of test reports\n📌 Kiến thức: FL-5.3.2 (K2)"
  },
  {
    "n": 37,
    "ref": "Question #37 [FL-5.4.1]",
    "stem": "The user reported a software failure. An engineer from the support team asked the user for the  software version number where the failure was observed. Based on the version number, the team  reassembled all the files that made up the release. This later allowed a developer to perform  analysis, find the defect, and fix it.  Which of the following enabled the above activity to be performed by the team?",
    "opts": [
      {
        "k": "a",
        "t": "A) Risk management"
      },
      {
        "k": "b",
        "t": "B) Test monitoring and control"
      },
      {
        "k": "c",
        "t": "C) Whole team approach"
      },
      {
        "k": "d",
        "t": "D) Configuration management"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "a) Is not correct. Risk management consists of risk analysis and risk  control. Neither of these activities supports the reassembly of the files  that made up the release, because these activities deal with risks, not  with configuration items\nb) Is not correct. Test monitoring is concerned with gathering information  about testing. This information is used to assess test progress and to  measure whether the exit criteria or the test tasks associated with the  exit criteria are satisfied, such as meeting the targets for coverage of  product risks, requirements, or other acceptance criteria. Test control  uses the information from test monitoring to provide, in the form of  control directives, guidance and the necessary corrective actions to  achieve the most effective and efficient testing. None of these activities  deal with the management of configuration items\nc) Is not correct. The whole team approach builds on the tester’s skill to  work effectively in a team context and to contribute positively to the  team goals. So, it focuses on team-related issues, not on configuration  items\nd) Is correct. Configuration management provides a discipline for  identifying, controlling, and tracking work products. Configuration  management keeps a record of changed configuration items when a  new baseline is created. Using configuration management, it is possible  to revert to a previous baseline in order to reproduce previous test  results\n📌 Kiến thức: FL-5.4.1 (K2)"
  },
  {
    "n": 38,
    "ref": "Question #38 [FL-5.5.1]",
    "stem": "Consider the following defect report for a Book Lending System.  Defect ID: 001  | Title: Unable to Return a Book  |  Severity: High  | Priority:  |  Environment: Windows 10, Google Chrome  Description: When attempting to return a book using the Book Return feature, the system does  not register the return and the book remains checked out to the user.  Steps to Reproduce:  Login to the Book Lending System as a user who has checked out a book.  Click on the \"Book Return\" button for the book that has been checked out.  System does not register the return and the book remains checked out.  Expected Result: The book should be returned and no longer appear as checked out to the user.  Actual Result: The book remains checked out to the user and is not registered as returned in the  system.  Attachments: [empty list]  Which of the following is MOST likely to help the developer reproduce the failure quickly?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) Adding information about which users and which books the failure affects to the “Description” section"
      },
      {
        "k": "b",
        "t": "B) Filling in the missing value for the “Priority” field"
      },
      {
        "k": "c",
        "t": "C) Adding memory dumps and database snapshots taken after each step described in the “Steps to Reproduce” section to the “Attachments” section."
      },
      {
        "k": "d",
        "t": "D) Repeating the same test case for different environments and writing defect reports for each of them separately"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "a) Is correct. Adding this information allows the developer to use the same  input data, so it is more likely they will be able to reproduce the failure  quickly and so identify the defect faster\nb) Is not correct. Adding the value of Priority will not help in reproducing  the defect itself\nc) Is not correct. Although some of this information may be of value,  adding the memory dumps and database snapshots after each step will  be too much, because most of these artefacts will contain useless  information for the developer, and make the defect report less readable.  It will also require the developer to spend a lot of time analyzing this  information, which will lengthen the repair process\nd) Is not correct. The question was about helping the developer to  reproduce the failure for a specific environment configuration\n📌 Kiến thức: FL-5.5.1 (K3)"
  },
  {
    "n": 39,
    "ref": "Question #39 [FL-6.1.1]",
    "stem": "Given the following test tool categories:  i.  Collaboration tools  ii.  DevOps tools  iii.  Management tools  iv.  Non-functional testing tools   v.  Test design and implementation tools  Tools from which of the categories are MOST likely to facilitate test execution?",
    "opts": [
      {
        "k": "a",
        "t": "A) i, v"
      },
      {
        "k": "b",
        "t": "B) ii, iv"
      },
      {
        "k": "c",
        "t": "C) i, iii, v"
      },
      {
        "k": "d",
        "t": "D) ii, iii, iv"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Considering each of the listed tool categories:  i.  Collaboration tools – facilitate communication. Communication  does not include the facilitation of test execution  ii. DevOps tools - support the DevOps delivery pipeline, workflow  tracking, automated build process(es) and CI/CD. The delivery  pipeline and CI/CD both include the facilitation of test execution,  such as component testing for CI  iii. Management tools – increase the test process efficiency by  facilitating management of the SDLC, requirements, tests, defects  and configuration. The management of these items does not  include the facilitation of test execution  iv. Non-functional testing tools – allow the tester to perform non- functional testing that is difficult or impossible to perform  manually. Non-functional testing can include both static testing  and dynamic testing, including test execution  v. Test design and implementation tools – facilitate generation of  test cases, test data and test procedures. The generation of this  testware does not include the facilitation of test execution  Thus:\na) Is not correct\nb) Is correct. Both DevOps tools (ii) and Non-functional testing tools (iv)  facilitate test execution\nc) Is not correct\nd) Is not correct\n📌 Kiến thức: FL-6.1.1 (K2)"
  },
  {
    "n": 40,
    "ref": "Question #40 [FL-6.2.1]",
    "stem": "Which of the following is MOST likely to be a risk of test automation?",
    "opts": [
      {
        "k": "a",
        "t": "A) The detection of additional high-severity defects"
      },
      {
        "k": "b",
        "t": "B) Providing measures that are too complicated for humans to derive"
      },
      {
        "k": "c",
        "t": "C) Incompatibility with the development platform"
      },
      {
        "k": "d",
        "t": "D) Substantially reduced test execution times"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "a) Is not correct. The detection of additional high-severity defects would be  a benefit of test automation, rather than a risk\nb) Is not correct. The provision of measures that are too complicated for  humans to derive themselves is normally considered to be a benefit of  test automation\nc) Is correct. If the test automation is incompatible with the development  platform, then it will not be able to integrate them, and, for instance,  pass test inputs to the test object and receive test results from the test  object\nd) Is not correct. Substantially reduced test execution times would normally  be considered a benefit that is provided by test automation\n📌 Kiến thức: FL-6.2.1 (K1)"
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
