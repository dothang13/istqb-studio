/**
 * GOOGLE APPS SCRIPT TỰ ĐỘNG TẠO GOOGLE FORM TRẮC NGHIỆM ISTQB CTFL v4.0
 * Bộ đề: ISTQB Sample Exam A — Additional (26 câu) (26 câu)
 * Hướng dẫn:
 * 1. Mở https://script.google.com -> Dự án mới (New Project)
 * 2. Dán toàn bộ nội dung file này vào -> Bấm Ctrl+S -> Bấm Run (Chạy) hàm createISTQBQuizForm
 * 3. Xem Nhật ký thực thi (Execution Log) ở dưới để lấy Link làm bài Google Form!
 */
function createISTQBQuizForm() {
  var formTitle = "ISTQB CTFL v4.0 — ISTQB Sample Exam A — Additional (26 câu)";
  var form = FormApp.create(formTitle);
  form.setIsQuiz(true);
  form.setDescription("Đề luyện thi cuối kỳ KTPM / ISTQB Foundation Level v4.0 (26 câu). Tự động chấm điểm và hiển thị giải thích chi tiết sau khi nộp bài.");
  form.setCollectEmail(false);
  form.setAllowResponseEdits(true);
  form.setPublishingSummary(true);

  var questions = [
  {
    "n": 1,
    "ref": "Question #A1 [FL-1.1.2]",
    "stem": "You were given a task to analyze and fix causes of failures in a new system to be released.    Which activity are you performing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Debugging"
      },
      {
        "k": "b",
        "t": "B) Software testing"
      },
      {
        "k": "c",
        "t": "C) Requirement elicitation"
      },
      {
        "k": "d",
        "t": "D) Defect management"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "a) Is correct. Debugging is the process of finding, analyzing, and removing  the causes of failures in a component or system\nb) Is not correct. Testing is the process concerned with planning,  preparation and evaluation of a component or system and related work  products to determine that they satisfy specified requirements, to  demonstrate that they are fit for purpose and to detect defects. It is not  related to fixing causes of failures\nc) Is not correct. Requirement elicitation is the process of gathering,  capturing, and consolidating requirements from available sources. It is  not related to fixing causes of failures\nd) Is not correct. Defect management is the process of recognizing,  recording, classifying, investigating, resolving, and disposing of defects.  It is not related to fixing causes of failures\n📌 Kiến thức: FL-1.1.2 (K2)"
  },
  {
    "n": 2,
    "ref": "Question #A2 [FL-1.2.2]",
    "stem": "In many software organizations the test department is called the Quality Assurance (QA) department.  Is this sentence correct or not and why?",
    "opts": [
      {
        "k": "a",
        "t": "A) It is correct. Testing and QA mean exactly the same thing"
      },
      {
        "k": "b",
        "t": "B) It is correct. These names can be used interchangeably because both testing and QA focus their activities on the same quality issues"
      },
      {
        "k": "c",
        "t": "C) It is not correct. Testing is something more; testing includes all activities with regard to quality. QA focuses on quality-related processes"
      },
      {
        "k": "d",
        "t": "D) It is not correct. QA is focused on quality-related processes while testing concentrates on demonstrating that a component or system is fit for purpose and to detect defects"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "Considering:  Testing and quality assurance are not the same. Testing is the  process consisting of all software development lifecycle (SDLC)  activities, both static and dynamic, concerned with planning,  preparation and evaluation of a component or system and related  work products to determine that they satisfy specified requirements, to  demonstrate that they are fit for purpose and to detect defects. Quality  assurance is focused on establishing, introducing, monitoring,  improving, and adhering to the quality-related processes.    Thus:\na) Is not correct\nb) Is not correct\nc) Is not correct\nd) Is correct\n📌 Kiến thức: FL-1.2.2 (K1)"
  },
  {
    "n": 3,
    "ref": "Question #A3 [FL-1.2.3]",
    "stem": "A phone ringing in a neighboring cubicle distracts a programmer causing him to improperly program  the logic that checks the upper boundary of an input variable. Later, during system testing, a tester  notices that this input field accepts invalid input values.    Which of the following correctly describes an incorrectly coded upper bound?",
    "opts": [
      {
        "k": "a",
        "t": "A) The root cause"
      },
      {
        "k": "b",
        "t": "B) A failure"
      },
      {
        "k": "c",
        "t": "C) An error"
      },
      {
        "k": "d",
        "t": "D) A defect"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "a) Is not correct. The root cause is the distraction that the programmer  experienced while programming\nb) Is not correct. Accepting invalid inputs is a failure\nc) Is not correct. The error in thinking that put the defect in the code\nd) Is correct. The problem in the code is a defect\n📌 Kiến thức: FL-1.2.3 (K2)"
  },
  {
    "n": 4,
    "ref": "Question #A4 [FL-1.4.3]",
    "stem": "Consider the following testware.  Test Charter #04.018  Session time: 1h  Explore:  Registration page  With:  Different sets of incorrect input data  To discover:  Defects related to accepting the registration process with the  incorrect input  Which test activity produces this testware as an output?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) Test planning"
      },
      {
        "k": "b",
        "t": "B) Test monitoring and test control"
      },
      {
        "k": "c",
        "t": "C) Test analysis"
      },
      {
        "k": "d",
        "t": "D) Test design"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "The testware under consideration is a test charter   Test charters are the output from test design    Thus:\na) Is not correct\nb) Is not correct\nc) Is not correct\nd) Is correct\n📌 Kiến thức: FL-1.4.3 (K2)"
  },
  {
    "n": 5,
    "ref": "Question #A5 [FL-1.4.4]",
    "stem": "Which of the following is the BEST example of how traceability supports testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Performing the impact analysis of a change will give information about the completion of the tests"
      },
      {
        "k": "b",
        "t": "B) Analyzing the traceability between test cases and test results will give information about the estimated level of residual risk"
      },
      {
        "k": "c",
        "t": "C) Performing the impact analysis of a change will help selecting the right test cases for regression testing"
      },
      {
        "k": "d",
        "t": "D) Analyzing the traceability between the test basis, the test objects and the test cases will help in selecting test data to achieve the assumed coverage of the test object"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "a) Is not correct. Performing the impact analysis will not give information  about completeness of tests. Analyzing the impact analysis of changes  will help to select the right test cases for execution\nb) Is not correct. Traceability does not give information about the  estimated level of residual risk if the test cases are not traced back to  risks\nc) Is correct. Performing the impact analysis of the changes helps in  selecting the test cases for the regression test\nd) Is not correct. Analyzing the traceability between the test basis, test  objects and test cases does not help in selecting test data to achieve  the assumed coverage of the test object. Selecting test data is more  related to test analysis and test implementation, not traceability\n📌 Kiến thức: FL-1.4.4 (K2)"
  },
  {
    "n": 6,
    "ref": "Question #A6 [FL-1.5.3]",
    "stem": "Which of the following BEST explains a benefit of independence of testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) The use of an independent test team allows project management to assign responsibility for the quality of the final deliverable to the test team"
      },
      {
        "k": "b",
        "t": "B) If a test team external to the organization can be afforded, then there are distinct benefits in terms of this external team not being so easily swayed by the delivery concerns of project management and the need to meet strict delivery deadlines"
      },
      {
        "k": "c",
        "t": "C) An independent test team can work separately from the developers, need not be distracted with project requirement changes, and can restrict communication with the developers to defect reporting through the defect management system"
      },
      {
        "k": "d",
        "t": "D) When specifications contain ambiguities and inconsistencies, assumptions are made on their interpretation, and an independent tester can be useful in questioning those assumptions and the interpretation made by the developer"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "a) Is not correct. Quality should be the responsibility of everyone working  on the project and not the sole responsibility of the test team\nb) Is not correct. First, it is not a benefit if an external test team does not  meet delivery deadlines, and second, there is no reason to believe that  external test teams will feel they do not have to meet strict delivery  deadlines\nc) Is not correct. It is bad practice for the test team to work in complete  isolation, and we would expect an external test team to be concerned  with changing project requirements and communicating well with  developers\nd) Is correct. Specifications are never perfect, meaning that assumptions  will have to be made by the developer. An independent tester is useful  in that they can challenge and verify the assumptions and subsequent  interpretation made by the developer\n📌 Kiến thức: FL-1.5.3 (K2)"
  },
  {
    "n": 7,
    "ref": "Question #A7 [FL-2.1.1]",
    "stem": "You are working as a tester in the team that follows the V-model. Which of the following activities  CAN be performed in the initial phases of the SDLC?",
    "opts": [
      {
        "k": "a",
        "t": "A) Dynamic test execution"
      },
      {
        "k": "b",
        "t": "B) Static testing"
      },
      {
        "k": "c",
        "t": "C) Test planning"
      },
      {
        "k": "d",
        "t": "D) Acceptance test execution"
      },
      {
        "k": "e",
        "t": "E) Maintenance testing"
      }
    ],
    "ans": [
      "b",
      "c"
    ],
    "multi": true,
    "exp": "a) Is not correct.  The executable code is usually created in the later  phases, so dynamic test execution cannot be performed early in the  SDLC\nb) Is correct. In sequential development models, in the initial phases,  testers participate in requirement reviews, which is a form of static  testing.\nc) Is correct. Test planning could be performed early in the SDLC before  the test project begins together with test analysis and test design.\nd) Is not correct. Acceptance test execution can be performed when there  is a working product. In sequential SDLC models the working product is  usually delivered later in the SDLC\ne)  Is not correct. Maintenance testing when there is a working and  deployed product, which is not done in the early phases of any SDLC.\n📌 Kiến thức: FL-2.1.1 (K2)"
  },
  {
    "n": 8,
    "ref": "Question #A8 [FL-2.1.4]",
    "stem": "Which of the following are advantages of DevOps?    i.  Faster product release and faster time to market  ii.  Increases the need for repetitive manual testing  iii.  Constant availability of executable software  iv.  Reduction in the number of regression tests associated with code refactoring  v.  Setting up the test automation framework is inexpensive since everything is  automated",
    "opts": [
      {
        "k": "a",
        "t": "A) i, ii, iv are advantages"
      },
      {
        "k": "b",
        "t": "B) iii, v are advantages"
      },
      {
        "k": "c",
        "t": "C) i, iii are advantages"
      },
      {
        "k": "d",
        "t": "D) ii, iv, v are advantages"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Consider:\ni. Is true. Faster product release and faster time to market is an  advantage of DevOps\nii. Is false. Typically, we need less effort for manual tests because of  the use of test automation\niii. Is true. Constant availability of executable software is an advantage\niv. Is false. More regression tests are needed\nv. Is false. Not everything is automated and setting up a test  automation framework is expensive    Thus:\na) Is not correct\nb) Is not correct  c) It is correct\nd) Is not correct\n📌 Kiến thức: FL-2.1.4 (K2)"
  },
  {
    "n": 9,
    "ref": "Question #A9 [FL-2.2.2]",
    "stem": "You work as a tester on a project on a mobile application for food ordering for one of your clients.  The client sent you a list of requirements. One of them, with high priority, says    “The order must be processed in less than 10 seconds in 95% of the cases”.    You created a set of test cases in which a number of random orders were made, the processing time  measured, and the test results were checked against the requirements.    What test type did you perform?",
    "opts": [
      {
        "k": "a",
        "t": "A) Functional, because the test cases cover the user’s business requirement for the system"
      },
      {
        "k": "b",
        "t": "B) Non-functional, because they measure the system’s performance"
      },
      {
        "k": "c",
        "t": "C) Functional, because the test cases interact with the user interface"
      },
      {
        "k": "d",
        "t": "D) White-box, because we need to know the internal structure of the program to measure the order processing time"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "a) Is not correct. The fact that the requirement about the system’s  performance comes directly from the client and that the performance is  important from the business point of view (i.e., high priority) does not  make these tests functional, because they do not check “what” the  system does, but “how” (i.e., how fast the orders are processed)\nb) Is correct. This is an example of testing for performance efficiency, a  type of non-functional testing\nc) Is not correct. From the scenario, we do not know if interacting with the  user interface is a part of the test conditions. But even if we did, the  main test objective of these tests is to check the performance, not the  usability\nd) Is not correct. We do not need to know the internal structure of the code  to perform the performance efficiency testing. One can execute  performance efficiency tests without structural knowledge\n📌 Kiến thức: FL-2.2.2 (K2)"
  },
  {
    "n": 10,
    "ref": "Question #A10 [FL-2.3.1]",
    "stem": "Your organization’s test strategy suggests that once a system is going to be retired, data migration  shall be tested. As part of what test type is this testing MOST likely to be performed?",
    "opts": [
      {
        "k": "a",
        "t": "A) Maintenance testing"
      },
      {
        "k": "b",
        "t": "B) Regression testing"
      },
      {
        "k": "c",
        "t": "C) Reliability testing"
      },
      {
        "k": "d",
        "t": "D) Integration testing"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "a) Is correct. When a system is retired, this can require testing of data  migration, which is a form of maintenance testing\nb) Is not correct. Regression testing verifies whether a fix accidentally  affected the behavior of other parts of the code, but now we are talking  about data migration to a new system\nc) Is not correct. Portability testing focuses on transferring the system to  another environment\nd) Is not correct. Integration testing focuses on interactions between  components and/or systems, not on data migration. Also, it is not a test  type, but a test level.\n📌 Kiến thức: FL-2.3.1 (K2)"
  },
  {
    "n": 11,
    "ref": "Question #A11 [FL-3.1.1]",
    "stem": "The following is a list of the work products produced in the SDLC.    i.  Business requirements  ii.  Schedule  iii.  Test budget  iv.  Third-party executable code  v.  User stories and their acceptance criteria    Which of them can be reviewed?",
    "opts": [
      {
        "k": "a",
        "t": "A) i and iv can be reviewed"
      },
      {
        "k": "b",
        "t": "B) i, ii, iii and iv can be reviewed"
      },
      {
        "k": "c",
        "t": "C) i, ii, iii, and v can be reviewed"
      },
      {
        "k": "d",
        "t": "D) iii, iv, v can be reviewed"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Only third-party executable code cannot be reviewed.    Thus:\na) Is not correct\nb) Is not correct  c) It is correct\nd) Is not correct\n📌 Kiến thức: FL-3.1.1 (K1)"
  },
  {
    "n": 12,
    "ref": "Question #A12 [FL-3.1.3]",
    "stem": "Decide which of the following statements (i-v) are true for static testing.  i.  Abnormal external behaviors are easier to identify with this testing  ii.  Discrepancies from a coding standard are easier to find with this testing  iii.  It identifies failures caused by defects when the software is run  iv.  Its test objective is to identify defects as early as possible  v.  Missing coverage for critical security requirements is easier to find and fix",
    "opts": [
      {
        "k": "a",
        "t": "A) i, iv, v are true for static testing"
      },
      {
        "k": "b",
        "t": "B) i, iii, iv are true for static testing"
      },
      {
        "k": "c",
        "t": "C) ii, iii are true for static testing"
      },
      {
        "k": "d",
        "t": "D) ii, iv, v are true for static testing"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "Consider:  i. These behaviors are easily detectable while the software is running.  Hence, dynamic testing shall be used to identify them  ii. This is an example of deviations from standards, which is a typical  defect that is easier found with static testing  iii. If the software is executed during the test, it is dynamic testing  iv. Identifying defects as early as possible is the test objective of both  static testing and dynamic testing  v. This is an example of gaps in the test basis traceability or coverage,  which is a typical defect that is easier found with static testing    Thus:\na) Is not correct\nb) Is not correct\nc) Is not correct\nd) Is correct\n📌 Kiến thức: FL-3.1.3 (K2)"
  },
  {
    "n": 13,
    "ref": "Question #A13 [FL-3.2.2]",
    "stem": "Which of the following statements about formal reviews is TRUE?",
    "opts": [
      {
        "k": "a",
        "t": "A) Some reviews do not require more than one role"
      },
      {
        "k": "b",
        "t": "B) The review process has several activities"
      },
      {
        "k": "c",
        "t": "C) Documentation to be reviewed is not distributed before the review meeting, with the exception of the work product for specific review types"
      },
      {
        "k": "d",
        "t": "D) Defects found during the review are not reported since they are not found by dynamic testing"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "a) Is not correct. In all types of reviews there is more than one role, even  in informal ones\nb) Is correct. There are several activities during the formal review process\nc) Is not correct. Documentation to be reviewed should be distributed as  early as possible\nd) Is not correct. Defects found during the review should be reported\n📌 Kiến thức: FL-3.2.2 (K2)"
  },
  {
    "n": 14,
    "ref": "Question #A14 [FL-3.2.3]",
    "stem": "What task may management take on during a formal review?",
    "opts": [
      {
        "k": "a",
        "t": "A) Taking overall responsibility for the review"
      },
      {
        "k": "b",
        "t": "B) Deciding what is to be reviewed"
      },
      {
        "k": "c",
        "t": "C) Ensuring the effective running of review meetings, and moderating, if necessary"
      },
      {
        "k": "d",
        "t": "D) Recording review information such as review decisions"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "a) Is not correct. This is the task of the review leader\nb) Is correct. This is the task of the management in a formal review\nc) Is not correct. This is the task of the moderator\nd) Is not correct. This is the task of the scribe\n📌 Kiến thức: FL-3.2.3 (K1)"
  },
  {
    "n": 15,
    "ref": "Question #A15 [FL-4.2.2]",
    "stem": "A wine storage system uses a control device that measures the wine cell temperature T (measured  in °C, rounded to the nearest degree) and alarms the user if it deviates from the optimal value of  12, according to the following rules:  •  if T = 12, the system says, “optimal temperature”  •  if T < 12, the system says, “temperature is too low!”  •  if T > 12, the system says, “temperature is too high!”  You want to use the 3-point boundary value analysis (BVA) to verify the behavior of the control  device. A test input is a temperature in °C provided by the device.    What is the MINIMAL set of test inputs that achieves 100% of the desired coverage?",
    "opts": [
      {
        "k": "a",
        "t": "A) 11, 12, 13"
      },
      {
        "k": "b",
        "t": "B) 10, 12, 14"
      },
      {
        "k": "c",
        "t": "C) 10, 11, 12, 13, 14"
      },
      {
        "k": "d",
        "t": "D) 10, 11, 13, 14"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "There are three equivalence partitions: {..., 10, 11}, {12}, and {13, 14, ...}.  The boundary values are 11, 12 and 13. In the three-point boundary value  analysis for each boundary, we need to test the boundary and both its  neighbors, so:  •  for 11 we test 10, 11, 12  •  for 12 we test 11, 12, 13  •  for 13 we test 12, 13, 14  Altogether we need to test 10, 11, 12, 13, and 14    Thus:\na) Is not correct\nb) Is not correct\nc) Is correct\nd) Is not correct\n📌 Kiến thức: FL-4.2.2 (K3)"
  },
  {
    "n": 16,
    "ref": "Question #A16 [FL-4.3.2]",
    "stem": "Which of the following statements about branch testing is CORRECT?",
    "opts": [
      {
        "k": "a",
        "t": "A) If a program includes only unconditional branches, then 100% branch coverage can be achieved without executing any test cases"
      },
      {
        "k": "b",
        "t": "B) If the test cases exercise all unconditional branches in the code, then 100% branch coverage is achieved"
      },
      {
        "k": "c",
        "t": "C) If 100% statement coverage is achieved, then 100% branch coverage is also achieved"
      },
      {
        "k": "d",
        "t": "D) If 100% branch coverage is achieved, then all decision outcomes in each decision statement in the code are exercised"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "a) Is not correct. In this case one test case is still needed since there is at  least one (unconditional) branch to be covered\nb) Is not correct. Covering only unconditional branches does not imply  covering all conditional branches\nc) Is not correct. 100% branch coverage implies 100% statement  coverage, not otherwise. For example, for an IF decision without the  ELSE, one test is enough to achieve 100% statement coverage, but it  only achieves 50% branch coverage\nd) Is correct. Each decision outcome corresponds to a conditional branch,  so 100% branch coverage implies 100% coverage of the decision  outcomes\n📌 Kiến thức: FL-4.3.2 (K2)"
  },
  {
    "n": 17,
    "ref": "Question #A17 [FL-4.4.3]",
    "stem": "You are testing a mobile application that allows customers to access and manage their bank  accounts. You are running a test suite that involves evaluating each screen, and each field on each  screen, against a general list of user interface best practices derived from a popular book on the  topic that maximizes usability for such applications. Which of the following options BEST categorizes  the test technique you are using?",
    "opts": [
      {
        "k": "a",
        "t": "A) Black-box"
      },
      {
        "k": "b",
        "t": "B) Exploratory"
      },
      {
        "k": "c",
        "t": "C) Checklist-based"
      },
      {
        "k": "d",
        "t": "D) Error guessing"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "a) Is not correct. The book provides general guidance, and is not a formal  requirements document, a specification, or a set of use cases, user  stories, or business processes\nb) Is not correct. While you could consider the list as a set of test charters,  it more closely resembles the list of test conditions to be checked\nc) Is correct. The list of user interface best practices is the list of test  conditions to be systematically checked\nd) Is not correct. The tests are not focused on failures that could occur, but  rather on knowledge about what is important for the user, in terms of  usability\n📌 Kiến thức: FL-4.4.3 (K2)"
  },
  {
    "n": 18,
    "ref": "Question #A18 [FL-4.5.1]",
    "stem": "Which of the following BEST describe the collaborative approach to user story writing?",
    "opts": [
      {
        "k": "a",
        "t": "A) User stories are created by testers and developers and then accepted by business representatives"
      },
      {
        "k": "b",
        "t": "B) User stories are created by business representatives, developers, and testers together"
      },
      {
        "k": "c",
        "t": "C) User stories are created by business representatives and verified by developers and testers"
      },
      {
        "k": "d",
        "t": "D) User stories are created in a way that they are independent, negotiable, valuable, estimable, small, and testable"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "a) Is not correct. Collaborative user story writing means that all  stakeholders create the user stories collaboratively, to obtain the  shared vision\nb) Is correct. Collaborative user story writing means that all stakeholders  create the user stories collaboratively, to obtain the shared vision\nc) Is not correct. Collaborative user story writing means that all  stakeholders create the user stories collaboratively, to obtain the  shared vision\nd) Is not correct. This is the list of properties that each user story should  have, not the description of the collaboration-based approach\n📌 Kiến thức: FL-4.5.1 (K2)"
  },
  {
    "n": 19,
    "ref": "Question #A19 [FL-5.1.1]",
    "stem": "Consider the following part of a test plan.    Testing will be performed using component testing and component integration testing.  The regulations require to demonstrate that 100% branch coverage is achieved for  each component classified as critical.    Which part of the test plan does this part belong to?",
    "opts": [
      {
        "k": "a",
        "t": "A) Communication"
      },
      {
        "k": "b",
        "t": "B) Risk register"
      },
      {
        "k": "c",
        "t": "C) Context of testing"
      },
      {
        "k": "d",
        "t": "D) Test approach"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "a) Is not correct. The paragraph contains information on test levels and  exit criteria, which are part of the test approach\nb) Is not correct. The paragraph contains information on test levels and  exit criteria, which are part of the test approach\nc) Is not correct. The paragraph contains information on test levels and  exit criteria, which are part of the test approach\nd) Is correct. The paragraph contains information on test levels and exit  criteria, which are part of the test approach\n📌 Kiến thức: FL-5.1.1 (K2)"
  },
  {
    "n": 20,
    "ref": "Question #A20 [FL-5.1.4]",
    "stem": "Your team uses planning poker to estimate the test effort for a newly required feature. There is a  rule in your team that if there is no time to reach full agreement and the variation in the results is  small, rules like “accept the number with the most votes” can be applied.  After two rounds, the consensus was not reached, so the third round was initiated. You can see the  test estimation results in the table below.    Team members' estimations  Round 1  21  2  5  34  13  8  2  Round 2  13  8  8  34  13  8  5  Round 3  13  8  13  13  13  13  8  Which of the following is the BEST example of the next step?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) The product owner has to step in and make a final decision"
      },
      {
        "k": "b",
        "t": "B) Accept 13 as the final test estimate as this has most of the votes"
      },
      {
        "k": "c",
        "t": "C) No further action is needed. Consensus has been reached"
      },
      {
        "k": "d",
        "t": "D) Remove the new feature from the current release because consensus has not been reached"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "a) Is not correct. This should be a team activity and not overruled by one  team member\nb) Is correct. If test estimates are not the same, but the variation in the  results is small, applying rules like “accept the number with the most  votes” can be applied\nc) Is not correct. There is no consensus yet as some say 13, others say 8\nd) Is not correct. A feature should not be removed only because the team  cannot agree on the test estimates\n📌 Kiến thức: FL-5.1.4 (K3)"
  },
  {
    "n": 21,
    "ref": "Question #A21 [FL-5.1.6]",
    "stem": "Which of the following is TRUE regarding the test pyramid?",
    "opts": [
      {
        "k": "a",
        "t": "A) It emphasizes having far more tests at the lower test levels"
      },
      {
        "k": "b",
        "t": "B) It suggests that each low-level test checks a large part of the functionality"
      },
      {
        "k": "c",
        "t": "C) It describes distribution of test types across the SDLC"
      },
      {
        "k": "d",
        "t": "D) It has no impact on the construction of automated tests"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "a) Is correct. The test pyramid emphasizes having a larger number of tests  at the lower test levels\nb) Is not correct. It is not true that a test on a lower level tests a larger  piece of functionality. Tests are more atomic and oriented on a specific  logic, so it is the opposite\nc) Is not correct. Test pyramid shows how the number of tests is  distributed across test levels\nd) Is not correct. The test pyramid model supports the team in test  automation\n📌 Kiến thức: FL-5.1.6 (K1)"
  },
  {
    "n": 22,
    "ref": "Question #A22 [FL-5.2.1]",
    "stem": "During risk analysis the team considered the following risk: “The system allows too high a discount  for a customer”. The team estimated the risk impact to be very high.    What can one say about the risk likelihood?",
    "opts": [
      {
        "k": "a",
        "t": "A) It is also very high. High risk impact always implies high risk likelihood"
      },
      {
        "k": "b",
        "t": "B) It is very low. High risk impact always implies low risk likelihood"
      },
      {
        "k": "c",
        "t": "C) One cannot say anything about risk likelihood. Risk impact and risk likelihood are independent."
      },
      {
        "k": "d",
        "t": "D) Risk likelihood is not important with such a high-risk impact. One does not need to define it."
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "a) Is not correct. Risk impact and risk likelihood are independent\nb) Is not correct. Risk impact and risk likelihood are independent\nc) Is correct. Risk impact and risk likelihood are independent\nd) Is not correct. We need both factors to calculate risk level\n📌 Kiến thức: FL-5.2.1 (K1)"
  },
  {
    "n": 23,
    "ref": "Question #A23 [FL-5.2.2]",
    "stem": "The following list contains risks that have been identified for a new software product to be developed:  i.  Management moves two experienced testers to another project  ii.  The system does not comply with security standards  iii.  System response time exceeds user requirements  iv.  Stakeholders have inaccurate expectations  v.  Disabled people have problems when using the system    Which of them are project risks?",
    "opts": [
      {
        "k": "a",
        "t": "A) i, iv are project risks"
      },
      {
        "k": "b",
        "t": "B) iv, v are project risks"
      },
      {
        "k": "c",
        "t": "C) i, iii are project risks"
      },
      {
        "k": "d",
        "t": "D) ii, v are project risks"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "Consider:  i. It is a Project risk  ii. It is a Product risk  iii. It is a Product risk  iv. It is a Project risk  v. It is a Product risk    Thus:\na) Is correct\nb) Is not correct\nc) Is not correct\nd) Is not correct\n📌 Kiến thức: FL-5.2.2 (K2)"
  },
  {
    "n": 24,
    "ref": "Question #A24 [FL-5.2.3]",
    "stem": "Which of the following is an example of how product risk analysis influences thoroughness and scope  of testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) The test manager monitors and reports the level of all known risks on a daily basis so the stakeholders can make an informed decision on the release date"
      },
      {
        "k": "b",
        "t": "B) One of the identified risks was \"Lack of support of open-source databases\", so the team decided to integrate the system with an open-source database"
      },
      {
        "k": "c",
        "t": "C) During the quantitative risk analysis, the team estimated the total level of all identified risks and reported it as the total residual risk before testing"
      },
      {
        "k": "d",
        "t": "D) Risk assessment revealed a very high level of performance risks, so it was decided to perform detailed performance efficiency testing early in the SDLC"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "a) Is not correct. This is an example of a risk monitoring activity, not risk  analysis\nb) Is not correct. This is an example of an architectural decision, not  related with testing\nc) Is not correct. This is an example of performing a quantitative risk  analysis and is not related to thoroughness or scope of testing\nd) Is correct. This shows how risk analysis impacts the thoroughness of  testing (i.e., the level of detail)\n📌 Kiến thức: FL-5.2.3 (K2)"
  },
  {
    "n": 25,
    "ref": "Question #A25 [FL-5.3.1]",
    "stem": "Which TWO of the following options are common metrics used for reporting on the quality level of  the test object?",
    "opts": [
      {
        "k": "a",
        "t": "A) Number of defects found during system testing"
      },
      {
        "k": "b",
        "t": "B) Total effort on test design divided by the number of designed test cases"
      },
      {
        "k": "c",
        "t": "C) Number of executed test procedures"
      },
      {
        "k": "d",
        "t": "D) Number of defects found divided by the size of a work product"
      },
      {
        "k": "e",
        "t": "E) Time needed to repair a defect"
      }
    ],
    "ans": [
      "a",
      "d"
    ],
    "multi": true,
    "exp": "a) Is correct. The number of defects found is related to the test object  quality\nb) Is not correct. This is the measure of the test efficiency not the test  object quality\nc) Is not correct. The number of test cases executed does not tell us  anything about the quality; test results might do\nd) Is correct. defect density is related to the test object quality\ne) Is not correct. Time to repair is a process metric. It does not tell us  anything about the product quality\n📌 Kiến thức: FL-5.3.1 (K1)"
  },
  {
    "n": 26,
    "ref": "Question #A26 [FL-5.3.2]",
    "stem": "Which of the following pieces of information contained in a test progress report is the LEAST useful  for business representatives?",
    "opts": [
      {
        "k": "a",
        "t": "A) Impediments to testing"
      },
      {
        "k": "b",
        "t": "B) Branch coverage achieved"
      },
      {
        "k": "c",
        "t": "C) Test progress"
      },
      {
        "k": "d",
        "t": "D) New risks within the test cycle"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "a) Is not correct. Impediments to testing can be high-level and business- related, so this is an important piece of information for business  stakeholders\nb) Is correct. Branch testing is a technical metric used by developers and  technical test analysts. This information is of no interest to business  representatives\nc) Is not correct. Test progress is project related, so it may be useful for  business representatives\nd) Is not correct. Risks impact product quality, so it may be useful for  business representatives\n📌 Kiến thức: FL-5.3.2 (K2)"
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
