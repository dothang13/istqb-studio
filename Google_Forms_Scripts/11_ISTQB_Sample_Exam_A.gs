/**
 * GOOGLE APPS SCRIPT TỰ ĐỘNG TẠO GOOGLE FORM TRẮC NGHIỆM ISTQB CTFL v4.0
 * Bộ đề: ISTQB Sample Exam A (40 câu chuẩn) (40 câu)
 * Hướng dẫn:
 * 1. Mở https://script.google.com -> Dự án mới (New Project)
 * 2. Dán toàn bộ nội dung file này vào -> Bấm Ctrl+S -> Bấm Run (Chạy) hàm createISTQBQuizForm
 * 3. Xem Nhật ký thực thi (Execution Log) ở dưới để lấy Link làm bài Google Form!
 */
function createISTQBQuizForm() {
  var formTitle = "ISTQB CTFL v4.0 — ISTQB Sample Exam A (40 câu chuẩn)";
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
    "stem": "Which of the following statements describe a valid test objective?",
    "opts": [
      {
        "k": "a",
        "t": "A) To prove that there are no unfixed defects in the system under test"
      },
      {
        "k": "b",
        "t": "B) To prove that there will be no failures after the implementation of the system into production"
      },
      {
        "k": "c",
        "t": "C) To reduce the risk level of the test object and to build confidence in the quality level"
      },
      {
        "k": "d",
        "t": "D) To verify that there are no untested combinations of inputs"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "a) Is not correct. It is impossible to prove that there are no defects  anymore in the system under test. See testing principle 1\nb) Is not correct. See testing principle 7\nc) Is correct. Testing finds defects and failures which reduces the level of  risk and at the same time gives more confidence in the quality level of  the test object\nd) Is not correct. It is impossible to test all combinations of inputs (see  testing principle 2)\n📌 Kiến thức: FL-1.1.1 (K1)"
  },
  {
    "n": 2,
    "ref": "Question #2 [FL-1.2.1]",
    "stem": "Which of the following options shows an example of test activities that contribute to success?",
    "opts": [
      {
        "k": "a",
        "t": "A) Having testers involved during various software development lifecycle (SDLC) activities will help to detect defects in work products"
      },
      {
        "k": "b",
        "t": "B) Testers try not to disturb the developers while coding, so that the developers write better code"
      },
      {
        "k": "c",
        "t": "C) Testers collaborating with end users help to improve the quality of defect reports during component integration and system testing"
      },
      {
        "k": "d",
        "t": "D) Certified testers will design much better test cases than non-certified testers"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "a) Is correct. It is important that testers are involved from the beginning of  the software development lifecycle (SDLC). It will increase  understanding of design decisions and will detect defects early.\nb) Is not correct. Both developers and testers will have more  understanding of each other's work products and how to test the code\nc) Is not correct. End users will not help the testers in increasing the quality  of defect reports; also, users usually do not participate in low-level  testing levels like integration testing\nd) Is not correct. Being certified does not automatically mean that the  tester will be better in test design\n📌 Kiến thức: FL-1.2.1 (K2)"
  },
  {
    "n": 3,
    "ref": "Question #3 [FL-1.3.1]",
    "stem": "You have been assigned as a tester to a team producing a new system incrementally. You have  noticed that no changes have been made to the existing regression test cases for several iterations  and no new regression defects were identified. Your manager is happy, but you are not. Which  testing principle explains your skepticism?",
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
        "t": "C) Defects cluster together"
      },
      {
        "k": "d",
        "t": "D) Exhaustive testing is impossible"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "a) Is correct. This principle means that if the same tests are repeated over  and over again, eventually these tests no longer find any new defects.  This is probably why the tests all passed in this release as well\nb) Is not correct. This principle says about the mistaken belief that just  finding and fixing a large number of defects will ensure the success of a  system\nc) Is not correct. This principle says that a small number of components  usually contain most of the defects\nd) Is not correct. This principle states that testing all combinations of  inputs and preconditions is not feasible\n📌 Kiến thức: FL-1.3.1 (K2)"
  },
  {
    "n": 4,
    "ref": "Question #4 [FL-1.4.1]",
    "stem": "You work in a team that develops a mobile application for food ordering. In the current iteration the  team decided to implement the payment functionality.  Which of the following activities is a part of test analysis?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) Estimating that testing the integration with the payment service will take 8 person-days"
      },
      {
        "k": "b",
        "t": "B) Deciding that the team should test if it is possible to properly share payment between many users"
      },
      {
        "k": "c",
        "t": "C) Using boundary value analysis (BVA) to derive the test data for the test cases that check the correct payment processing for the minimum allowed amount to be paid"
      },
      {
        "k": "d",
        "t": "D) Analyzing the discrepancy between the actual result and expected result after executing a test case that checks the process of payment with a credit card, and reporting a defect"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "a) Is not correct. Estimating the test effort is part of test planning\nb) Is correct. This is an example of defining test conditions which is a part  of test analysis\nc) Is not correct. Using test techniques to derive coverage items is a part  of test design\nd) Is not correct. Reporting defects found during dynamic testing is a part  of test execution\n📌 Kiến thức: FL-1.4.1 (K2)"
  },
  {
    "n": 5,
    "ref": "Question #5 [FL-1.4.2]",
    "stem": "Which of the following factors have a SIGNIFICANT influence on the test approach?    i.  The SDLC  ii.  The number of defects detected in previous projects  iii.  The identified product risks  iv.  New regulatory requirements forcing formal white-box testing  v.  The test environment setup",
    "opts": [
      {
        "k": "a",
        "t": "A) i, ii have significant influence"
      },
      {
        "k": "b",
        "t": "B) i, iii, iv have significant influence"
      },
      {
        "k": "c",
        "t": "C) ii, iv, v have significant influence"
      },
      {
        "k": "d",
        "t": "D) iii, v have significant influence"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "i. Is true. The SDLC has an influence on the test approach\nii. Is false. The number of defects detected in previous projects may  have some influence, but this is not as significant as i, iii and iv\niii. Is true. The identified product risks are one of the most important  factors influencing the test approach\niv. Is true. Regulatory requirements are important factors influencing the  test approach\nv. Is false. The test environment has no significant influence on the test  approach    Thus:\na) Is not correct\nb) Is correct\nc) Is not correct\nd) Is not correct\n📌 Kiến thức: FL-1.4.2 (K2)"
  },
  {
    "n": 6,
    "ref": "Question #6 [FL-1.4.5]",
    "stem": "Which TWO of the following tasks belong MAINLY to a testing role?",
    "opts": [
      {
        "k": "a",
        "t": "A) Configure test environments"
      },
      {
        "k": "b",
        "t": "B) Maintain the product backlog"
      },
      {
        "k": "c",
        "t": "C) Design solutions to new requirements"
      },
      {
        "k": "d",
        "t": "D) Create the test plan"
      },
      {
        "k": "e",
        "t": "E) Analyze the test basis"
      }
    ],
    "ans": [
      "a",
      "e"
    ],
    "multi": true,
    "exp": "a) Is correct. This is done by the testers\nb) Is not correct. The product backlog is built and maintained by the  product owner\nc) Is not correct. This is done by the development team\nd) Is not correct. This is a managerial role\ne) Is correct. This is done by the testers since its technical task done as  part of a test analysis.\n📌 Kiến thức: FL-1.4.5 (K2)"
  },
  {
    "n": 7,
    "ref": "Question #7 [FL-1.5.1]",
    "stem": "Which of the following skills (i-v) are the MOST important skills of a tester?    i.  Having domain knowledge  ii.  Creating a product vision  iii.  Being a good team player  iv.  Planning and organizing the work of the team  v.  Critical thinking",
    "opts": [
      {
        "k": "a",
        "t": "A) ii and iv are important"
      },
      {
        "k": "b",
        "t": "B) i, iii and v are important"
      },
      {
        "k": "c",
        "t": "C) i, ii and v are important"
      },
      {
        "k": "d",
        "t": "D) iii and iv are important"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "i. Is true. Having domain knowledge is an important tester skill\nii. Is false. This is a task of the business analyst together with the  business representative\niii. Is true. Being a good team player is an important skill\niv. Is false. Planning and organizing the work of the team is a task of the  test manager or, mostly in an Agile software development project,  the whole team and not just the tester\nv. Is true. Critical thinking is one of the most important skills of testers    Thus:\na) Is not correct\nb) Is correct\nc) Is not correct\nd) Is not correct\n📌 Kiến thức: FL-1.5.1 (K2)"
  },
  {
    "n": 8,
    "ref": "Question #8 [FL-1.5.2]",
    "stem": "How is the whole team approach present in the interactions between testers and business  representatives?",
    "opts": [
      {
        "k": "a",
        "t": "A) Business representatives decide on test automation approaches"
      },
      {
        "k": "b",
        "t": "B) Testers help business representatives to define a test strategy"
      },
      {
        "k": "c",
        "t": "C) Business representatives are not part of the whole team approach"
      },
      {
        "k": "d",
        "t": "D) Testers help business representatives to create suitable acceptance tests"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "a) Is not correct. The test automation approach is defined by testers with  the help of developers and business representatives\nb) Is not correct. The test strategy is decided in collaboration with the  developers\nc) Is not correct. Testers, developers, and business representatives are  part of the whole team approach\nd) Is correct. Testers will work closely with business representatives to  ensure that the desired quality levels are achieved. This includes  supporting and collaborating with them to help them create suitable  acceptance tests\n📌 Kiến thức: FL-1.5.2 (K1)"
  },
  {
    "n": 9,
    "ref": "Question #9 [FL-2.1.2]",
    "stem": "Consider the following rule: “for every SDLC activity there is a corresponding test activity”. In which  SDLC models does this rule hold?",
    "opts": [
      {
        "k": "a",
        "t": "A) Only in sequential development models"
      },
      {
        "k": "b",
        "t": "B) Only in iterative development models"
      },
      {
        "k": "c",
        "t": "C) Only in iterative and incremental development models"
      },
      {
        "k": "d",
        "t": "D) In sequential, incremental, and iterative development models"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "a) Is not correct\nb) Is not correct\nc) Is not correct\nd) Is correct. This rule holds for all SDLC models\n📌 Kiến thức: FL-2.1.2 (K1)"
  },
  {
    "n": 10,
    "ref": "Question #10 [FL-2.1.3]",
    "stem": "Which of the following statements BEST describes the acceptance test-driven development (ATDD)  approach?",
    "opts": [
      {
        "k": "a",
        "t": "A) In ATDD, acceptance criteria are typically created based on the given/when/then format"
      },
      {
        "k": "b",
        "t": "B) In ATDD, test cases are mainly created at component testing and are code-oriented"
      },
      {
        "k": "c",
        "t": "C) In ATDD, tests are created, based on acceptance criteria to drive the development of the related software"
      },
      {
        "k": "d",
        "t": "D) in ATDD, tests are based on the desired behavior of the software, which makes it easier for team members to understand them"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "a) Is not correct. It is more often used in behavior-driven development  (BDD)\nb) Is not correct. It is the description of test-driven development (TDD)\nc) Is correct. In acceptance test-driven development (ATDD) tests are  written from acceptance criteria as part of the design process\nd) Is not correct. It is used in BDD\n📌 Kiến thức: FL-2.1.3 (K1)"
  },
  {
    "n": 11,
    "ref": "Question #11 [FL-2.1.5]",
    "stem": "Which of the following is NOT an example of the shift-left approach?",
    "opts": [
      {
        "k": "a",
        "t": "A) Reviewing the user requirements before they are formally accepted by the stakeholders"
      },
      {
        "k": "b",
        "t": "B) Writing a component test before the corresponding code is written"
      },
      {
        "k": "c",
        "t": "C) Executing a performance efficiency test for a component during component testing"
      },
      {
        "k": "d",
        "t": "D) Writing a test script before setting up the configuration management process"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "a) Is not correct. Early review is an example of the shift-left approach\nb) Is not correct. TDD is an example of the shift-left approach\nc) Is not correct. Early non-functional testing is an example of the shift-left  approach\nd) Is correct. Test scripts should be subject to configuration management,  so it makes no sense to create the test scripts before this process is set  up\n📌 Kiến thức: FL-2.1.5 (K2)"
  },
  {
    "n": 12,
    "ref": "Question #12 [FL-2.1.6]",
    "stem": "Which of the arguments below would you use to convince your manager to organize retrospectives  at the end of each release cycle?",
    "opts": [
      {
        "k": "a",
        "t": "A) Retrospectives are very popular these days and clients would appreciate it if we added them to our processes"
      },
      {
        "k": "b",
        "t": "B) Organizing retrospectives will save the organization money because without them end user representatives do not provide immediate feedback about the product"
      },
      {
        "k": "c",
        "t": "C) Process weaknesses identified during the retrospective can be analyzed and serve as a to do list for the organization’s continuous process improvement program"
      },
      {
        "k": "d",
        "t": "D) Retrospectives embrace five values including courage and respect, which are crucial to maintain continuous improvement in the organization"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "a) Is not correct. Retrospectives are more useful for identifying  improvement opportunities and have little importance for clients\nb) Is not correct. Retrospectives are not aimed to collect feedback about  the product, but about the process. Additionally, retrospectives are  internal activity for the team and should not include end user  representatives\nc) Is correct. Regularly conducted retrospectives, when appropriate follow  up activities occur, are critical to continual improvement of development  and testing\nd) Is not correct. Courage and respect are values of Extreme  Programming and are not closely related to retrospectives\n📌 Kiến thức: FL-2.1.6 (K2)"
  },
  {
    "n": 13,
    "ref": "Question #13 [FL-2.2.1]",
    "stem": "Which types of failures (1-4) fit which test levels (A-D) BEST?    1. Failures in system behavior as it deviates from the user’s business needs  2. Failures in communication between components  3. Failures in logic in the code  4. Failures in not correctly implemented business rules    A. Component testing  B. Component integration testing  C. System testing  D. Acceptance testing",
    "opts": [
      {
        "k": "a",
        "t": "A) 1D, 2B, 3A, 4C"
      },
      {
        "k": "b",
        "t": "B) 1D, 2B, 3C, 4A"
      },
      {
        "k": "c",
        "t": "C) 1B, 2A, 3D, 4C"
      },
      {
        "k": "d",
        "t": "D) 1C, 2B, 3A, 4D"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "Considering:  •  The test basis for acceptance testing is the user’s business needs  (1D)  •  Communication between components is tested during component  integration testing (2B)  •  Failures in logic can be found during component testing (3A)  •  Business rules are the test basis for system testing (4C)    Thus:\na) Is correct\nb) Is not correct\nc) Is not correct\nd) Is not correct\n📌 Kiến thức: FL-2.2.1 (K2)"
  },
  {
    "n": 14,
    "ref": "Question #14 [FL-2.2.3]",
    "stem": "You are testing a user story with three acceptance criteria: AC1, AC2 and AC3. AC1 is covered by  test case TC1, AC2 by TC2, and AC3 by TC3. The test execution history had three test runs on three  consecutive versions of the software as follows:     Execution 1  Execution 2  Execution 3  TC1  (1) Failed  (4) Passed  (7) Passed  TC2  (2) Passed  (5) Failed  (8) Passed  TC3  (3) Failed  (6) Failed  (9) Passed     Tests are repeated once you are informed that all defects found in the test run are corrected and  a new version of the software is available.  Which of the above tests are executed as regression tests?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) Only 4, 7, 8, 9"
      },
      {
        "k": "b",
        "t": "B) Only 5, 7"
      },
      {
        "k": "c",
        "t": "C) Only 4, 6, 8, 9"
      },
      {
        "k": "d",
        "t": "D) Only 5, 6"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Because TC1 and TC3 failed in Execution 1 (i.e., test (1) and test (3)), test  (4) and test (6) are confirmation tests.  Because TC2 and TC3 failed in Execution 2 (i.e., tests (5) and (6)), test (8)  and test (9) are also confirmation tests.  TC2 passed in Execution 1 (i.e., test (2)), so test (5) is a regression test.  TC1 passed in the Execution 2 (i.e., test (4)), so test (7) is also a regression  test.    Thus:\na) Is not correct\nb) Is correct\nc) Is not correct\nd) Is not correct\n📌 Kiến thức: FL-2.2.3 (K2)"
  },
  {
    "n": 15,
    "ref": "Question #15 [FL-3.1.2]",
    "stem": "Which of the following is NOT a benefit of static testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Having less expensive defect management due to the ease of detecting defects later in the SDLC"
      },
      {
        "k": "b",
        "t": "B) Fixing defects found during static testing is generally much less expensive than fixing defects found during dynamic testing"
      },
      {
        "k": "c",
        "t": "C) Finding coding defects that might not have been found by only performing dynamic testing"
      },
      {
        "k": "d",
        "t": "D) Detecting gaps and inconsistencies in requirements"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "a) Is correct. Defect management is no less expensive. Finding and fixing  defects later in the SDLC is more costly\nb) Is not correct. This is a benefit of static testing\nc) Is not correct. This is a benefit of static testing\nd) Is not correct. This is a benefit of static testing\n📌 Kiến thức: FL-3.1.2 (K2)"
  },
  {
    "n": 16,
    "ref": "Question #16 [FL-3.2.1]",
    "stem": "Which of the following is a benefit of early and frequent feedback?",
    "opts": [
      {
        "k": "a",
        "t": "A) It improves the test process for future projects"
      },
      {
        "k": "b",
        "t": "B) It forces customers to prioritize their requirements based on agreed risks"
      },
      {
        "k": "c",
        "t": "C) It  provides a measure for the quality of changes"
      },
      {
        "k": "d",
        "t": "D) It helps avoid requirements misunderstandings"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "a) Is not correct. Feedback can improve the test process, but if one only  wants to improve future projects, the feedback does not need to come  early or frequently\nb) Is not correct. Feedback is not used to prioritize requirements\nc) Is not correct. There is no one, recommended way to measure quality  of changes. Also, this is not one of the benefits of early feedback that  are mentioned in section 3.2.1\nd) Is correct. Early and frequent feedback can prevent misunderstandings  about requirements\n📌 Kiến thức: FL-3.2.1 (K1)"
  },
  {
    "n": 17,
    "ref": "Question #17 [FL-3.2.4]",
    "stem": "The reviews being used in your organization have the following attributes:   •  There is the role of a scribe  •  The main purpose is to evaluate quality  •  The meeting is led by the author of the work product  •  There is individual preparation  •  A review report is produced  Which of the following review types is MOST likely being used?",
    "opts": [
      {
        "k": "a",
        "t": "A) Informal review"
      },
      {
        "k": "b",
        "t": "B) Walkthrough"
      },
      {
        "k": "c",
        "t": "C) Technical review"
      },
      {
        "k": "d",
        "t": "D) Inspection"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Considering the attributes:   •  Specified for walkthroughs, technical reviews, and inspections; thus,  the reviews being performed cannot be informal reviews  •  The purpose of evaluating quality is one of the most important  objectives of a walkthrough  •  This is not allowed for inspections and is typically not done in  technical reviews. A moderator is needed in walkthroughs and is  allowed for informal reviews  •  All types of reviews can include individual preparation (even informal  reviews)  •  All types of reviews can produce a review report, although informal  reviews do not require documentation    Thus:\na) Is not correct\nb) Is correct\nc) Is not correct\nd) Is not correct\n📌 Kiến thức: FL-3.2.4 (K2)"
  },
  {
    "n": 18,
    "ref": "Question #18 [FL-3.2.5]",
    "stem": "Which of these statements is NOT a factor that contributes to successful reviews?",
    "opts": [
      {
        "k": "a",
        "t": "A) Participants should dedicate adequate time for the review"
      },
      {
        "k": "b",
        "t": "B) Splitting large work products into small parts to make the required effort less intense"
      },
      {
        "k": "c",
        "t": "C) Participants should avoid behaviors that might indicate boredom, exasperation, or hostility to other participants"
      },
      {
        "k": "d",
        "t": "D) Failures found should be acknowledged, appreciated, and handled objectively"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "a) Is not correct. Adequate time for individuals is a success factor\nb) Is not correct. Splitting work products into small adequate parts is a  success factor\nc) Is not correct. Avoiding behaviors that might indicate boredom,  exasperation, etc. is a success factor\nd) Is correct. During reviews one can find defects, not failures\n📌 Kiến thức: FL-3.2.5 (K1)"
  },
  {
    "n": 19,
    "ref": "Question #19 [FL-4.1.1]",
    "stem": "Which of the following is a characteristic of experience-based test techniques?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test cases are created based on detailed design information"
      },
      {
        "k": "b",
        "t": "B) Items tested within the interface code section are used to measure coverage"
      },
      {
        "k": "c",
        "t": "C) The test techniques heavily rely on the tester’s knowledge of the software and the business domain"
      },
      {
        "k": "d",
        "t": "D) The test cases are used to identify deviations from the requirements"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "a) Is not correct. This is a common characteristic of white-box test  techniques. Test conditions, test cases, and test data are derived from  a test basis that may include code, software architecture, detailed  design, or any other source of information regarding the structure of the  software.\nb) Is not correct. This is a common characteristic of white-box test  techniques. Coverage is measured based on the items tested within a  selected structure and the test technique applied to the test basis\nc) Is correct. This is a common characteristic of experience-based test  techniques. This knowledge and experience include expected use of  the software, its environment, likely defects, and the distribution of  those defects is used to define tests\nd) Is not correct. This is a common characteristic of black-box test  techniques. Test cases may be used to detect gaps within requirements  and the implementation of the requirements, as well as deviations from  the requirements\n📌 Kiến thức: FL-4.1.1 (K2)"
  },
  {
    "n": 20,
    "ref": "Question #20 [FL-4.2.1]",
    "stem": "You are testing a simplified apartment search form which has only two search criteria:  •  floor (with three possible options: ground floor; first floor; second or higher floor)  •  garden type (with three possible options: no garden; small garden; large garden)  Each of the apartment on the ground floor has a garden, apartments on higher floors don’t. The form  has a built-in validation mechanism that will not allow you to use the search criteria which violate this  rule.    Each test has two input values: floor and garden type. You want to apply equivalence partitioning  (EP) to cover each floor and each garden type in your tests.    What is the minimal number of test cases to achieve 100% EP coverage for valid partitions?",
    "opts": [
      {
        "k": "a",
        "t": "A) 3"
      },
      {
        "k": "b",
        "t": "B) 4"
      },
      {
        "k": "c",
        "t": "C) 5"
      },
      {
        "k": "d",
        "t": "D) 6"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "The situation presented in the question is described in the syllabus as “each  choice” coverage.    “Small garden” and “large garden” can go only with “ground floor”, so we  need two test cases with “ground floor” which cover these two “garden type”  partitions.   We need two more test cases to cover the two other “floor” partitions. The  remaining ”garden type” partition of “no garden” is covered by these tests.  We need a total of four test cases:  TC1 (ground floor, small garden)  TC2 (ground floor, large garden)  TC3 (first floor, no garden)  TC4 (second or higher floor, no garden)    Thus:\na) Is not correct\nb) Is correct\nc) Is not correct\nd) Is not correct\n📌 Kiến thức: FL-4.2.1 (K3)"
  },
  {
    "n": 21,
    "ref": "Question #21 [FL-4.2.2]",
    "stem": "You are testing a system that calculates the final course grade for a given student.   The final grade is assigned based on the final result, according to the following rules:  •  0 – 50 points: failed  •  51 – 60 points: fair  •  61 – 70 points: satisfactory  •  71 – 80 points: good  •  81 – 90 points: very good  •  91 – 100 points: excellent  You have prepared the following set of test cases:      Final  result  Final  grade  TC1  91  excellent  TC2  50  failed  TC3  81  very good  TC4  60  fair  TC5  70  satisfactory  TC6  80  good  What is the 2-value boundary value analysis (BVA) coverage for the final result that is achieved with  the existing test cases?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) 50%"
      },
      {
        "k": "b",
        "t": "B) 60%"
      },
      {
        "k": "c",
        "t": "C) 33.3%"
      },
      {
        "k": "d",
        "t": "D) 100%"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "There are 12 boundary values for the final result values: 0, 50, 51, 60, 61,  70, 71, 80, 81, 90, 91, and 100.   The test cases cover six of them (TC1 – 91, TC2 – 50, TC3 – 81, TC4 – 60,  TC5 – 70 and TC7 – 51).   Therefore, the test cases cover 6/12 = 50%.    Thus:\na) Is correct\nb) Is not correct\nc) Is not correct\nd) Is not correct\n📌 Kiến thức: FL-4.2.2 (K3)"
  },
  {
    "n": 22,
    "ref": "Question #22 [FL-4.2.3]",
    "stem": "Your favorite bicycle daily rental store has just introduced a new Customer Relationship  Management system and asked you, one of their most loyal members, to test it.  The implemented features are as follows:  •  Anyone can rent a bicycle, but members receive a 20% discount  •  However, if the return deadline is missed, the discount is no longer available  •  After 15 rentals, members get a gift: a T-Shirt  Decision table describing the implemented features looks as follows:  Conditions  R1  R2  R3  R4  R5  R6  R7  R8  Being a member  T  T  T  T  F  F  F  F  Missed deadline  T  F  T  F  T  F  F  T  15th rental  F  F  T  T  F  F  T  T  Actions                  20% discount    X    X          Gift T-Shirt      X  X        X    Based ONLY on the feature description of the Customer Relationship Management system, which  of the above rules describes an impossible situation?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) R4"
      },
      {
        "k": "b",
        "t": "B) R2"
      },
      {
        "k": "c",
        "t": "C) R6"
      },
      {
        "k": "d",
        "t": "D) R8"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "a) Is not correct. A member without a missed deadline can get a discount  and a gift T-Shirt after 15 bicycle rentals\nb) Is not correct. A member without a missed deadline can get a discount  but no gift T-Shirt until they rented a bicycle 15 times\nc) Is not correct. Non-members cannot get a discount, even if they did not  miss a deadline yet\nd) Is correct. No discount as a non-member that has also missed a  deadline, but only members can receive a gift T-Shirt. Hence, the action  is not correct\n📌 Kiến thức: FL-4.2.3 (K3)"
  },
  {
    "n": 23,
    "ref": "Question #23 [FL-4.2.4]",
    "stem": "You test a system whose lifecycle is modeled by the state transition diagram shown below. The  system starts in the INIT state and ends its operation in the OFF state.      What is the MINIMAL number of test cases to achieve valid transitions coverage?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) 4"
      },
      {
        "k": "b",
        "t": "B) 2"
      },
      {
        "k": "c",
        "t": "C) 7"
      },
      {
        "k": "d",
        "t": "D) 3"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "“test” and “error” transitions cannot occur in one test case.  Neither can both “done” transitions.   This means we need at least three test cases to achieve transition  coverage. For example:  TC1: test, done  TC2: run, error, done  TC3: run, pause, resume, pause, done    Thus:\na) Is not correct\nb) Is not correct\nc) Is not correct\nd) Is correct\n📌 Kiến thức: FL-4.2.4 (K3)"
  },
  {
    "n": 24,
    "ref": "Question #24 [FL-4.3.1]",
    "stem": "Your test suite achieved 100% statement coverage. What is the consequence of this fact?",
    "opts": [
      {
        "k": "a",
        "t": "A) Each instruction in the code that contains a defect has been executed at least once"
      },
      {
        "k": "b",
        "t": "B) Any test suite containing more test cases than your test suite will also achieve 100% statement coverage"
      },
      {
        "k": "c",
        "t": "C) Each path in the code has been executed at least once"
      },
      {
        "k": "d",
        "t": "D) Every combination of input values has been tested at least once"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "a) Is correct. Since 100% statement coverage is achieved, every  statement, including the ones with defects, must have been executed  and evaluated at least once\nb) Is not correct. Coverage depends on what is tested, not on the number  of test cases. For example, for code “if (x==0) y=1”, one test case (x=0)  achieves 100% statement coverage, but two test cases (x=1) and (x=2)  together achieve only 50% statement coverage\nc) Is not correct. If there is a loop in the code there may be an infinite  number of possible paths, so it is not possible to execute all the  possible paths in the code\nd) Is not correct. Exhaustive testing is not possible (see the seven testing  principles section in the syllabus). For example, for code “input x; print  x” any single test with arbitrary x achieves 100% statement coverage,  but covers one input value\n📌 Kiến thức: FL-4.3.1 (K2)"
  },
  {
    "n": 25,
    "ref": "Question #25 [FL-4.3.3]",
    "stem": "Which of the following is NOT true for white-box testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) During white-box testing the entire software implementation is considered"
      },
      {
        "k": "b",
        "t": "B) White-box coverage metrics can help identify additional tests to increase code coverage"
      },
      {
        "k": "c",
        "t": "C) White-box test techniques can be used in static testing"
      },
      {
        "k": "d",
        "t": "D) White-box testing can help identify gaps in requirements implementation"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "a) Is not correct. The fundamental strength of white-box test techniques is  that the entire software implementation is taken into account during  testing\nb) Is not correct. White-box coverage measures provide an objective  measure of coverage and provide the necessary information to allow  additional tests to be generated to increase this coverage\nc) Is not correct. White-box test techniques can be used to perform  reviews (static testing)\nd) Is correct. This is the weakness of the white-box test techniques. They  are not able to identify the missing implementation, because they are  based solely on the test object structure, not on the requirements  specification\n📌 Kiến thức: FL-4.3.3 (K2)"
  },
  {
    "n": 26,
    "ref": "Question #26 [FL-4.4.1]",
    "stem": "Which of the following BEST describes the concept behind error guessing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Error guessing involves using your knowledge and experience of defects found in the past and typical errors made by developers"
      },
      {
        "k": "b",
        "t": "B) Error guessing involves using your personal experience of development and the errors you made as a developer"
      },
      {
        "k": "c",
        "t": "C) Error guessing requires you to imagine that you are the user of the test object and to guess errors the user could make interacting with it"
      },
      {
        "k": "d",
        "t": "D) Error guessing requires you to rapidly duplicate the development task to identify the sort of errors a developer might make"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "a) Is correct. The basic concept behind error guessing is that the tester  tries to guess what errors may have been made by the developer and  what defects may be in the test object based on past experience (and  sometimes checklists)\nb) Is not correct. Although a tester who used to be a developer may use  their personal experience to help them when performing error guessing,  the test technique is not based on prior knowledge of development\nc) Is not correct. Error guessing is not a usability technique for guessing  how users may fail to interact with the test object\nd) Is not correct. Duplicating the development task has several flaws that  make it impractical, such as the tester having equivalent skills to the  developer and the time involved to perform the development. It is not  error guessing\n📌 Kiến thức: FL-4.4.1 (K2)"
  },
  {
    "n": 27,
    "ref": "Question #27 [FL-4.4.2]",
    "stem": "In your project there has been a delay in the release of a brand-new application and test execution  started late, but you have very detailed domain knowledge and good analytical skills. The full list of  requirements has not yet been shared with the team, but management is asking for some test results  to be presented.    Which test technique fits BEST in this situation?",
    "opts": [
      {
        "k": "a",
        "t": "A) Checklist-based testing"
      },
      {
        "k": "b",
        "t": "B) Error guessing"
      },
      {
        "k": "c",
        "t": "C) Exploratory testing"
      },
      {
        "k": "d",
        "t": "D) Branch testing"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "a) Is not correct. This is a new product. You probably do not have a  checklist yet and test conditions might not be known due to missing  requirements\nb) Is not correct. This is a new product. You probably do not have enough  information to make correct error guesses\nc) Is correct. Exploratory testing is most useful when there are few known  specifications and/or there is a pressing timeline for testing\nd) Is not correct. Branch testing is time-consuming, and your management  is asking about some test results now. Also, branch testing does not  involve domain knowledge\n📌 Kiến thức: FL-4.4.2 (K2)"
  },
  {
    "n": 28,
    "ref": "Question #28 [FL-4.5.2]",
    "stem": "Which of the following BEST describes the way acceptance criteria can be documented?",
    "opts": [
      {
        "k": "a",
        "t": "A) Performing retrospectives to determine the actual needs of the stakeholders regarding a given user story"
      },
      {
        "k": "b",
        "t": "B) Using the given/when/then format to describe an example test condition related to a given user story"
      },
      {
        "k": "c",
        "t": "C) Using verbal communication to reduce the risk of misunderstanding the acceptance criteria by others"
      },
      {
        "k": "d",
        "t": "D) Documenting risks related to a given user story in a test plan to facilitate the risk-based testing of a given user story"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "a) Is not correct. Retrospectives are used to capture lessons learned and  to improve the development and testing process, not to document the  acceptance criteria\nb) Is correct. This is the standard way to document acceptance criteria\nc) Is not correct. Verbal communication does not allow to physically  document the acceptance criteria as part of a user story (”card” aspect  in the 3C’s model)\nd) Is not correct. Acceptance criteria are related to a user story, not a test  plan. Also, acceptance criteria are the conditions that have to be fulfilled  to decide if the user story is complete. Risks are not such conditions\n📌 Kiến thức: FL-4.5.2 (K2)"
  },
  {
    "n": 29,
    "ref": "Question #29 [FL-4.5.3]",
    "stem": "Consider the following user story:  As an Editor  I want to review content before it is published  so that I can ensure the grammar is correct    and its acceptance criteria:  •  The user can log in to the content management system with \"Editor\" role  •  The editor can view existing content pages  •  The editor can edit the page content  •  The editor can add markup comments  •  The editor can save changes  •  The editor can reassign to the \"content owner\" role to make updates  Which of the following is the BEST example of an ATDD test for this user story?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test if the editor can save the document after edit the page content"
      },
      {
        "k": "b",
        "t": "B) Test if the content owner can log in and make updates to the content"
      },
      {
        "k": "c",
        "t": "C) Test if the editor can schedule the edited content for publication"
      },
      {
        "k": "d",
        "t": "D) Test if the editor can reassign to another editor to make updates"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "a) Is correct. This test covers two acceptance criteria: one about editing  the document and one about saving changes\nb) Is not correct. Acceptance criteria cover the editor activities, not the  content owner activities\nc) Is not correct. Scheduling the edited content for publication may be a  nice feature, but it is not covered by the acceptance criteria\nd) Is not correct. Acceptance criteria state about reassigning from an  editor to the content owner, not to another editor\n📌 Kiến thức: FL-4.5.3 (K3)"
  },
  {
    "n": 30,
    "ref": "Question #30 [FL-5.1.2]",
    "stem": "How do testers add value to iteration and release planning?",
    "opts": [
      {
        "k": "a",
        "t": "A) Testers determine the priority of the user stories to be developed"
      },
      {
        "k": "b",
        "t": "B) Testers focus only on the functional aspects of the system to be tested"
      },
      {
        "k": "c",
        "t": "C) Testers participate in the detailed risk identification and risk assessment of user stories"
      },
      {
        "k": "d",
        "t": "D) Testers guarantee the release of high-quality software through early test design during the release planning"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "a) Is not correct. Priorities for user stories are determined by the business  representative together with the development team\nb) Is not correct. Testers focus on both functional and non-functional  aspects of the system to be tested\nc) Is correct. According to the syllabus, this is one of the ways testers add  value to iteration and release planning\nd) Is not correct. Early test design is not part of release planning. Early  test design does not automatically guarantee the release of quality  software\n📌 Kiến thức: FL-5.1.2 (K1)"
  },
  {
    "n": 31,
    "ref": "Question #31 [FL-5.1.3]",
    "stem": "Which TWO of the following options are the exit criteria for testing a system?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test environment readiness"
      },
      {
        "k": "b",
        "t": "B) The ability to log in to the test object by the tester"
      },
      {
        "k": "c",
        "t": "C) Estimated defect density is reached"
      },
      {
        "k": "d",
        "t": "D) Requirements are translated into given/when/then format"
      },
      {
        "k": "e",
        "t": "E) Regression tests are automated"
      }
    ],
    "ans": [
      "c",
      "e"
    ],
    "multi": true,
    "exp": "a) Is not correct. Test environment readiness is a resource availability  criterion; hence it belongs to the entry criteria\nb) Is not correct. This is a resource availability criterion; hence it belongs  to the entry criteria\nc) Is correct. Estimated defect density is a measure of diligence; hence it  belongs to the exit criteria.\nd) Is not correct. Requirements translated into a given format result in  testable requirements; hence it belongs to the entry criteria\ne) Is correct. Automation of regression tests is a completion criterion;  hence it belongs to the exit criteria\n📌 Kiến thức: FL-5.1.3 (K2)"
  },
  {
    "n": 32,
    "ref": "Question #32 [FL-5.1.4]",
    "stem": "Your team uses the three-point estimation technique to estimate the test effort for a new high-risk  feature. The following estimates were made:  •  Most optimistic estimation: 2 person-hours  •  Most likely estimation: 11 person-hours  •  Most pessimistic estimation: 14 person-hours  What is the final estimate?",
    "opts": [
      {
        "k": "a",
        "t": "A) 9 person-hours"
      },
      {
        "k": "b",
        "t": "B) 14 person-hours"
      },
      {
        "k": "c",
        "t": "C) 11 person-hours"
      },
      {
        "k": "d",
        "t": "D) 10 person-hours"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "In the three-point estimation technique:  E = (optimistic + 4*most likely + pessimistic)/6  E = (2+(4*11)+14)/6 = 10    Thus:\na) Is not correct\nb) Is not correct\nc) Is not correct\nd) Is correct\n📌 Kiến thức: FL-5.1.4 (K3)"
  },
  {
    "n": 33,
    "ref": "Question #33 [FL-5.1.5]",
    "stem": "You are testing a mobile application that allows users to find a nearby restaurant based on the type  of food they want to eat. Consider the following list of test cases, priorities (i.e., a smaller number  means a higher priority), and dependencies:    Test case  number  Test condition covered  Priority  Logical  dependency  TC 001  Select type of food  3  none  TC 002  Select restaurant  2  TC 001  TC 003  Get direction  1  TC 002  TC 004  Call restaurant  2  TC 002  TC 005  Make reservation  3  TC 002  Which of the following test cases should be executed as the third one?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) TC 003"
      },
      {
        "k": "b",
        "t": "B) TC 005"
      },
      {
        "k": "c",
        "t": "C) TC 002"
      },
      {
        "k": "d",
        "t": "D) TC 001"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "Test TC 001 must come first, followed by TC 002, to satisfy dependencies.  Afterwards, TC 003 to satisfy priority and then TC 004, followed by TC 005.     Thus:\na) Is correct\nb) Is not correct\nc) Is not correct\nd) Is not correct\n📌 Kiến thức: FL-5.1.5 (K3)"
  },
  {
    "n": 34,
    "ref": "Question #34 [FL-5.1.7]",
    "stem": "Consider the following test categories (1-4) and agile testing quadrants (A-D):  1. Usability testing  2. Component testing  3. Functional testing  4. Reliability testing    A. Agile testing quadrant Q1: technology facing, supporting the development team  B. Agile testing quadrant Q2: business facing, supporting the development team  C. Agile testing quadrant Q3: business facing, critique the product  D. Agile testing quadrant Q4: technology facing, critique the product  How do the following test categories map onto the agile testing quadrants?",
    "opts": [
      {
        "k": "a",
        "t": "A) 1C, 2A, 3B, 4D"
      },
      {
        "k": "b",
        "t": "B) 1D, 2A, 3C, 4B"
      },
      {
        "k": "c",
        "t": "C) 1C, 2B, 3D, 4A"
      },
      {
        "k": "d",
        "t": "D) 1D, 2B, 3C, 4A"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "Considering:  •  Usability testing is in Q3 (1 – C)  •  Component testing is in Q1 (2 – A)  •  Functional testing is in Q2 (3 – B)  •  Reliability testing is in Q4 (4 – D)    Thus:\na) Is correct\nb) Is not correct\nc) Is not correct\nd) Is not correct\n📌 Kiến thức: FL-5.1.7 (K2)"
  },
  {
    "n": 35,
    "ref": "Question #35 [FL-5.2.4]",
    "stem": "During a risk analysis the following risk was identified and assessed:  •  Risk: Response time is too long to generate a report  •  Risk likelihood: medium; risk impact: high  •  Response to risk:  o An independent test team performs performance efficiency testing during system  testing  o A selected sample of end users performs alpha testing and beta testing before the  release  What measure is proposed to be taken in response to this analyzed risk?",
    "opts": [
      {
        "k": "a",
        "t": "A) Risk acceptance"
      },
      {
        "k": "b",
        "t": "B) Contingency plan"
      },
      {
        "k": "c",
        "t": "C) Risk mitigation"
      },
      {
        "k": "d",
        "t": "D) Risk transfer"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "a) Is not correct. We do not accept the risk; concrete actions are proposed\nb) Is not correct. No contingency plans are proposed\nc) Is correct. The proposed actions are related to testing, which is a form  of risk mitigation\nd) Is not correct. Risk is not transferred but mitigated\n📌 Kiến thức: FL-5.2.4 (K2)"
  },
  {
    "n": 36,
    "ref": "Question #36 [FL-5.3.3]",
    "stem": "Which work product can be used by an agile team to show the amount of work that has been  completed and the amount of total work remaining for a given iteration?",
    "opts": [
      {
        "k": "a",
        "t": "A) Acceptance criteria"
      },
      {
        "k": "b",
        "t": "B) Defect report"
      },
      {
        "k": "c",
        "t": "C) Test completion report"
      },
      {
        "k": "d",
        "t": "D) Burndown chart"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "a) Is not correct. Acceptance criteria are the conditions used to decide  whether the user story is ready. They cannot show work progress\nb) Is not correct. Defect reports inform about the defects. They do not  show work progress\nc) Is not correct. Test completion report can be created after the iteration  is finished, so it will not show the progress continuously within an  iteration\nd) Is correct. Burndown charts are a graphical representation of work left  to do versus time remaining. They are updated daily, so they can  continuously show the work progress\n📌 Kiến thức: FL-5.3.3 (K2)"
  },
  {
    "n": 37,
    "ref": "Question #37 [FL-5.4.1]",
    "stem": "You need to update one of the automated test scripts to be in line with a new requirement. Which  process indicates that you create a new version of the test script in the test repository?",
    "opts": [
      {
        "k": "a",
        "t": "A) Traceability management"
      },
      {
        "k": "b",
        "t": "B) Maintenance testing"
      },
      {
        "k": "c",
        "t": "C) Configuration management"
      },
      {
        "k": "d",
        "t": "D) Requirements engineering"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "a) Is not correct. Traceability is the relationship between two or more work  products, not between different versions of the same work product\nb) Is not correct. Maintenance testing is about testing changes; it is not  related closely to versioning\nc) Is correct. To support testing, configuration management may involve  the version control of all test items\nd) Is not correct. Requirements engineering is the elicitation,  documentation, and management of requirements; it is not closely  related to test script versioning\n📌 Kiến thức: FL-5.4.1 (K2)"
  },
  {
    "n": 38,
    "ref": "Question #38 [FL-5.5.1]",
    "stem": "You received the following defect report from the developers stating that the anomaly described in  this test report is not reproducible.  Application hangs up   2022-May-03 – John Doe – Rejected  The application hangs up after entering “Test input: $ä” in the Name field on the new  user creation screen. Tried to log off, log in with test_admin01 account, same issue. Tried  with other test admin accounts, same issue. No error message received; log (see  attached) contains fatal error notification. Based on the test case TC-1305, the  application should accept the provided input and create the user. Please fix with high  priority, this feature is related to REQ-0012, which is a critical new business requirement.  What critical information is MISSING from this test report that would have been useful for the  developers?",
    "opts": [
      {
        "k": "a",
        "t": "A) Expected result and actual result"
      },
      {
        "k": "b",
        "t": "B) References and defect status"
      },
      {
        "k": "c",
        "t": "C) Test environment and test item"
      },
      {
        "k": "d",
        "t": "D) Priority and severity"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "a) Is not correct. The expected result is “the application should accept the  provided input and create the user”. The actual result is “The  application hangs up after entering “Test input. $ä””.\nb) Is not correct. There is a reference to the test case and to the related  requirement and it states that the defect is rejected. Also, the defect  status would not be very helpful for the developers\nc) Is correct. We do not know in which test environment the anomaly was  detected, and we also do not know which application (and its version) is  affected\nd) Is not correct. The defect report states that the anomaly is urgent, that it  is a global issue (i.e., many, if not all, test administration accounts are  affected) and states the impact is high for business stakeholders\n📌 Kiến thức: FL-5.5.1 (K3)"
  },
  {
    "n": 39,
    "ref": "Question #39 [FL-6.1.1]",
    "stem": "Which test activity does a data preparation tool support?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test monitoring and test control"
      },
      {
        "k": "b",
        "t": "B) Test analysis"
      },
      {
        "k": "c",
        "t": "C) Test design and test implementation"
      },
      {
        "k": "d",
        "t": "D) Test completion"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "a) Is not correct. Test monitoring involves the ongoing checking of all  activities and comparison of actual progress against the test plan. Test  control involves taking the actions necessary to meet the test objectives  of the test plan. No test data are prepared during these activities.\nb) Is not correct. Test analysis includes analysis of the test basis to  identify test conditions and prioritize them. Test data are not prepared  during this activity.\nc) Is correct. Test design and implementation can both include the  identification, creation or acquisition of the testware necessary for test  execution (e.g., test data).\nd) Is not correct. Test completion activities occur at project milestones  (e.g., release, end of iteration, test level completion), so it is too late for  preparing test data.\n📌 Kiến thức: FL-6.1.1 (K2)"
  },
  {
    "n": 40,
    "ref": "Question #40 [FL-6.2.1]",
    "stem": "Which item correctly identifies a potential risk of performing test automation?",
    "opts": [
      {
        "k": "a",
        "t": "A) It may introduce unknown regressions in production"
      },
      {
        "k": "b",
        "t": "B) Sufficient efforts to maintain testware may not be properly allocated"
      },
      {
        "k": "c",
        "t": "C) Testing tools and associated testware may not be sufficiently relied upon"
      },
      {
        "k": "d",
        "t": "D) It may reduce the time allocated for manual testing Appendix: Additional Questions"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "a) Is not correct. Test automation does not introduce unknown regressions  in production\nb) Is correct. Wrong allocation of effort to maintain testware is a risk\nc) Is not correct. Test tools must be selected so that they and their  testware can be relied upon\nd) Is not correct. The primary goal of test automation is to reduce manual  testing. So, this is a benefit, not a risk\n📌 Kiến thức: FL-6.2.1 (K1)"
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
