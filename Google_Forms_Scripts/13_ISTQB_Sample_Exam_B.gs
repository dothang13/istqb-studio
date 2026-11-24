/**
 * GOOGLE APPS SCRIPT TỰ ĐỘNG TẠO GOOGLE FORM TRẮC NGHIỆM ISTQB CTFL v4.0
 * Bộ đề: ISTQB Sample Exam B (40 câu chuẩn) (40 câu)
 * Hướng dẫn:
 * 1. Mở https://script.google.com -> Dự án mới (New Project)
 * 2. Dán toàn bộ nội dung file này vào -> Bấm Ctrl+S -> Bấm Run (Chạy) hàm createISTQBQuizForm
 * 3. Xem Nhật ký thực thi (Execution Log) ở dưới để lấy Link làm bài Google Form!
 */
function createISTQBQuizForm() {
  var formTitle = "ISTQB CTFL v4.0 — ISTQB Sample Exam B (40 câu chuẩn)";
  var form = FormApp.create(formTitle);
  form.setIsQuiz(true);
  form.setDescription("Đề luyện thi cuối kỳ KTPM / ISTQB Foundation Level v4.0 (40 câu). Tự động chấm điểm và hiển thị giải thích chi tiết sau khi nộp bài.");
  form.setCollectEmail(false);
  form.setAllowResponseEdits(true);
  form.setPublishingSummary(true);

  var questions = [
  {
    "n": 1,
    "ref": "Question #1 [FL-1.2.1]",
    "stem": "Which of the following is an example of why testing is necessary?",
    "opts": [
      {
        "k": "a",
        "t": "A) Dynamic testing increases quality by causing test objects to fail in ways that could never be achieved by the users"
      },
      {
        "k": "b",
        "t": "B) Static testing is used by developers to identify failures in their code earlier than can be achieved through dynamic testing"
      },
      {
        "k": "c",
        "t": "C) Static analysis provides evidence to customers that the elements of the system that provide no outputs are fit for release"
      },
      {
        "k": "d",
        "t": "D) Reviews increase the quality of requirements specifications and lead to fewer changes being needed in derived work products"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "a) Is not correct. It is often possible to use dynamic testing to cause a test  object to fail in ways that could never be achieved by the users, such as  by using fault injection. However, if the failure can never occur with real  end users, then identifying it is not especially valuable as testing is  ultimately aimed at improving the work product for the end users.  Spending time testing for failures that cannot occur with real users is not  an efficient use of a tester’s time\nb) Is not correct. Static testing in the form of static analysis is used by  developers to identify defects in their code earlier than can be achieved  through dynamic testing. Note, however, that static testing (and static  analysis) is used to detect defects, not failures, which are found by  dynamic testing. Thus it is the use of the term ‘failures’ that makes this  an incorrect option\nc) Is not correct. Static analysis directly detects defects in code, and this is  normally information for the developer, not the customer.\nd) Is correct. Reviews are a form of static testing that can be applied from  the very start of the software development lifecycle and are used to find  defects that can be removed before subsequent development activities  waste effort on faulty requirements. If the defects are not detected and  removed early on, then when the defect is found in derived work  products, such as the design and code, the requirements will need to be  changed.\n📌 Kiến thức: FL-1.2.1 (K2)"
  },
  {
    "n": 2,
    "ref": "Question #2 [FL-1.2.2]",
    "stem": "Which of the following statements about quality assurance (QA) and/or quality control (QC) is  correct?",
    "opts": [
      {
        "k": "a",
        "t": "A) QA is performed as part of testing"
      },
      {
        "k": "b",
        "t": "B) Testing is performed as part of QC"
      },
      {
        "k": "c",
        "t": "C) Testing is another term for QC"
      },
      {
        "k": "d",
        "t": "D) Testing is performed as part of QA"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "a) Is not correct. QA concentrates on process improvement and  implementation, using a preventive approach to avoid errors and  defects, while testing is a form of QC that is used to detect defects\nb) Is correct. QC aims to achieve appropriate levels of quality by focusing  on identifying and correcting product defects. Testing is a significant  part of QC and helps to uncover these defects\nc) Is not correct. Although testing is a significant part of QC and helps to  uncover defects, other (non-testing) techniques utilized in QC include  formal methods like model checking and proof of correctness, as well as  simulation and prototyping\nd) Is not correct. QA concentrates on process improvement and  implementation, using a preventive approach to avoid errors and  defects, while testing is a form of QC that is used to detect defects\n📌 Kiến thức: FL-1.2.2 (K1)"
  },
  {
    "n": 3,
    "ref": "Question #3 [FL-1.3.1]",
    "stem": "One of the ‘principles of testing’ states that exhaustive testing is impossible. Which of the following  is an example of addressing this principle in practice?",
    "opts": [
      {
        "k": "a",
        "t": "A) Creating test cases that cover every possible specified output"
      },
      {
        "k": "b",
        "t": "B) Documenting all possible test input variations and prioritizing these based on importance"
      },
      {
        "k": "c",
        "t": "C) Starting testing as early as possible with reviews and other static testing approaches"
      },
      {
        "k": "d",
        "t": "D) Using equivalence partitioning and boundary value analysis to generate test cases"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "The ‘exhaustive testing is impossible’ principle is concerned with the fact  that it is not feasible to test every possible variation of inputs in all different  circumstances, except in trivial cases. Instead, testing utilizes test  techniques, test case prioritization, and risk-based testing to sample from  the set of possibilities and focus test efforts.\na) Is not correct. The principle states that it is not feasible to test everything  except in trivial cases. Testing everything would require testing every  possible variation of inputs in all different circumstances, which is  generally infeasible as there will be a practically infinite number of  possibilities. Testing every possible expected result will not address this  problem as the relationship between inputs and expected results can be  different for each test object. Sometimes there may be a practically  infinite number of possible expected results (e.g., when there are  several variables representing real numbers), whereas at other times  there may be just two expected results, such as with a single variable  that can be either true or false\nb) Is not correct. The principle states that it is not feasible to test every  possible variation of inputs in all different circumstances. This is  because for non-trivial systems there is a practically infinite number.  Therefore, in practice, documenting all possible input variations would  be impractical as it would take an infinite length of time\nc) Is not correct. Starting testing as early as possible with reviews and  other static testing approaches will not address the problem of there  being too many possible test cases. The ‘early testing saves time and  money’ principle is concerned with fixing defects early on to prevent the  occurrence of subsequent defects"
  },
  {
    "n": 4,
    "ref": "Question #4 [FL-1.4.1]",
    "stem": "Which test activity involves working with test data requirements, test conditions, test environment  requirements and test cases?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test design"
      },
      {
        "k": "b",
        "t": "B) Test execution"
      },
      {
        "k": "c",
        "t": "C) Test analysis"
      },
      {
        "k": "d",
        "t": "D) Test implementation April 1, 2025"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "a) Is correct. Test design involves using test conditions to create test  cases and other necessary testware, such as test data requirements  and test charters for exploratory testing. Test environment requirements  are also specified, including the necessary infrastructure and tools\nb) Is not correct. Test execution involves executing test cases (as part of  test procedures), however it does not directly cover the other testware  mentioned in the question, such as test data requirements, test  environment requirements and test conditions\nc) Is not correct. Test analysis is used to identify the features that require  testing. The test basis is analyzed and defined as test conditions, which  are then prioritized along with related risks. While this activity involves  working with test conditions, it does not cover the other testware  mentioned in the question, such as test data requirements, test  environment requirements and test cases\nd) Is not correct. Test implementation includes the generation of test  procedures, such as manual and automated test scripts, which are  created from test cases and may be assembled into test suites. Test  procedures are prioritized and arranged in a test execution schedule.  Test data is created, and the test environment built, and its set up  verified. While this activity involves explicitly working with test cases,  and may use test data requirements and test environment requirements  to create test data and the test environment, it does not cover test  conditions\n📌 Kiến thức: FL-1.4.1 (K2)"
  },
  {
    "n": 5,
    "ref": "Question #5 [FL-1.4.2]",
    "stem": "Which of the following is MOST likely to impact how testing is performed for a given test object?",
    "opts": [
      {
        "k": "a",
        "t": "A) The average level of experience of the organization’s marketing team"
      },
      {
        "k": "b",
        "t": "B) The knowledge of users that a new system is being developed for them"
      },
      {
        "k": "c",
        "t": "C) The number of years’ experience of the members of the test team"
      },
      {
        "k": "d",
        "t": "D) The end user’s organizational structure for a commercial music streaming application"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "a) Is not correct. The organization’s marketing team is unlikely to perform  much testing (although in some organizations they may be involved with  acceptance testing), so their average level of experience (most of which  would be in marketing) is not likely to impact how testing is performed  for a given test object\nb) Is not correct. The level of knowledge of users that a new system is  being built for them is unlikely to affect how testing is performed. Any  user involvement that could affect how testing is performed is more  likely to be as a result of decisions made by the testers, customer and  project manager\nc) Is correct. The number of years’ experience of the members of the  performance efficiency testing team will help to determine the  capabilities and knowledge (e.g., of different tools and defect types) that  the team members will apply when they are testing\nd) Is not correct. The organizational structure of the different end users  (who may be varied) will change between users. So, it may not even be  known when the application is being tested, and the end user’s  organizational structure can thus have little effect on how the testing is  performed\n📌 Kiến thức: FL-1.4.2 (K2)"
  },
  {
    "n": 6,
    "ref": "Question #6 [FL-1.4.4]",
    "stem": "Which of the following statements is a CORRECT example of the value of traceability?",
    "opts": [
      {
        "k": "a",
        "t": "A) Traceability between the mitigated risks and test cases that passed provides a means of determining the level of residual risk"
      },
      {
        "k": "b",
        "t": "B) Traceability between user requirements and test results provides a means of measuring project progress against business goals"
      },
      {
        "k": "c",
        "t": "C) Traceability between testers and test cases that failed provides a means of determining the skill level of the testers"
      },
      {
        "k": "d",
        "t": "D) Traceability between the identified risks and written test conditions provides a means of determining which risks are worth testing"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "a) Is not correct. Traceability between the mitigated risks and test cases  that passed provides little information, because to be mitigated (by  testing) the risks would need to have a corresponding test case that  passed. To be able to assess residual risk, traceability between all risks  and test results needs to be available, so that the risks that do not have  a corresponding passing test can be identified as the residual risks\nb) Is correct. Traceability between user requirements and test results  provides an indication of which user requirements have been tested and  so provides a means of measuring project progress (in the context of  testing) against business goals\nc) Is not correct. It is not clear that test cases that failed provide an  indication of tester’s skills any more than test cases that passed. It  would partly depend on the test objective (e.g., building confidence or  causing failures). Also, such measurement of testers based on test  cases that passed and failed can be counter-productive as it could  cause the testers to optimize their testing based on that metric rather  than the test objective\nd) Is not correct. Traceability between the identified risks and written test  conditions provides a means of determining which further test conditions  need to be written. Determining which risks are worth testing is part of  risk management, and risk mitigation in particular\n📌 Kiến thức: FL-1.4.4 (K2)"
  },
  {
    "n": 7,
    "ref": "Question #7 [FL-1.5.1]",
    "stem": "Which of the following is MOST likely to be an example of a tester using a generic skill when  testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) The tester’s deep knowledge of a variety of computer games meant that they got on well with one of the developers who was also into gaming"
      },
      {
        "k": "b",
        "t": "B) The tester was a former pilot and was better able to understand the acceptance criteria for the helicopter control system"
      },
      {
        "k": "c",
        "t": "C) The tester previously worked as a programmer and used their skills in this area to better communicate with the business analysts"
      },
      {
        "k": "d",
        "t": "D) The tester was very careful not to make mistakes when they methodically generated test cases prior to starting their exploratory testing session"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "a) Is not correct. Strong communication skills, active listening, and  teamwork abilities enable a tester to interact effectively with all  stakeholders, however a deep knowledge of a variety of computer  games that allowed them to get on well with one developer is not an  example of a generic skill useful to testers\nb) Is correct. Domain knowledge that can be used to understand and  communicate with end-users and business representatives is one of the  generic skills required by testers. A tester with experience as a pilot  would make them better able to appreciate the acceptance criteria for  the helicopter control system\nc) Is not correct. Although programming skills could be considered as  technical knowledge which can increase efficiency when utilizing some  test tools, it is unlikely that these skills would improve their  communication with business analysts\nd) Is not correct. Although thoroughness, attention to detail, curiosity, and  a methodical approach to identifying hard-to-find defects are all useful  generic skills for testers, it is doubtful they would be generating test  cases prior to starting exploratory testing. This is because one of the  main tenets of exploratory testing is that the test cases are generated  during the testing, not scripted in advance\n📌 Kiến thức: FL-1.5.1 (K2)"
  },
  {
    "n": 8,
    "ref": "Question #8 [FL-1.5.2]",
    "stem": "Which of the following is an advantage of the whole-team approach?",
    "opts": [
      {
        "k": "a",
        "t": "A) It allows team members to take on any role at any time"
      },
      {
        "k": "b",
        "t": "B) It only needs a single team to support the complete development project"
      },
      {
        "k": "c",
        "t": "C) It embeds business representatives alongside developers in the same team"
      },
      {
        "k": "d",
        "t": "D) It generates a team synergy that benefits the entire project April 1, 2025"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "a) Is not correct. The whole-team approach allows any team member with  the requisite skills and knowledge to undertake any task, however that  does not mean that team members can take on any role at any time.  Typically, they only take on roles in which they are competent, and there  is no suggestion that every team member can do every role\nb) Is not correct. The whole-team approach applies to how a single team  (typically in Agile software development) works; it does not cover how  multiple teams are supposed to work on larger projects, and it does not  suggest that only one ‘whole’ team is needed for a complete project\nc) Is not correct. The whole-team approach does not expect every team  member to be involved in every important decision. For instance, there  is no need for the business representative (i.e., the Product Owner) to  be involved in every technical decision that does not affect the business  outcome and implementing such an approach would unnecessarily slow  down the team’s progress\nd) Is correct. By leveraging the diverse skill sets of each team member  most effectively, the whole-team approach fosters superior team  dynamics, promotes robust communication and collaboration, and  generates a team synergy that benefits the entire project\n📌 Kiến thức: FL-1.5.2 (K1)"
  },
  {
    "n": 9,
    "ref": "Question #9 [FL-2.1.1]",
    "stem": "Which of the following statements about the chosen software development lifecycle is CORRECT?",
    "opts": [
      {
        "k": "a",
        "t": "A) If agile software development is used, automation of system tests replaces the need for regression testing"
      },
      {
        "k": "b",
        "t": "B) If a sequential development model is used, then the dynamic testing is typically restricted to later in the lifecycle"
      },
      {
        "k": "c",
        "t": "C) If an iterative development model is used, then component testing is typically performed manually by developers"
      },
      {
        "k": "d",
        "t": "D) If an incremental development model is used, then static testing is done in early increments and dynamic testing in later increments"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "a) Is not correct. In agile software development, deliverables are produced  in each iteration, and the frequent delivery of increments necessitates  extensive regression testing. Although some (or all) of this regression  testing may be automated, the regression testing (automated or not)  cannot be replaced by automation of system tests\nb) Is correct. If a sequential development model is used, then early in the  software development lifecycle no code is available for execution, and  so during this time static testing (e.g., reviews) is performed. Later in the  lifecycle, when code is available for execution, dynamic testing is  possible. Note, however, that preparation for dynamic testing will often  occur early in any software development lifecycle\nc) Is not correct. If an iterative development model, like agile software  development, is used, then component tests may well be used for  regression testing for each iteration. In which case, there is a strong  argument for automating these component tests, which will have to be  run frequently, and there is unlikely to be a strong argument for  developers performing these component tests manually\nd) Is not correct. In most incremental development models, deliverables  are produced in each increment, requiring both static testing and  dynamic testing at all test levels for each increment delivered\n📌 Kiến thức: FL-2.1.1 (K2)"
  },
  {
    "n": 10,
    "ref": "Question #10 [FL-2.1.2]",
    "stem": "Which of the following is a good testing practice that applies to all software development lifecycles?",
    "opts": [
      {
        "k": "a",
        "t": "A) Testers should review work products as part of the next development phase"
      },
      {
        "k": "b",
        "t": "B) Testers should review work products as soon as drafts are available"
      },
      {
        "k": "c",
        "t": "C) Testers should review work products before test analysis and test design begin"
      },
      {
        "k": "d",
        "t": "D) Testers should review work products immediately after they are published"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "a) Is not correct. Testers should review work products as soon as drafts  are available to enable early testing as part of a shift-left approach. If  they waited until the next development phase, then unnecessary  development (and test) work could be started on unreviewed, flawed  work products\nb) Is correct. Testers should review work products as soon as drafts are  available to enable early testing as part of a shift-left approach\nc) Is not correct. Testers typically review work products that form the test  basis as part of test analysis, not before test analysis and test design\nd) Is not correct. Testers should review work products as soon as drafts  are available to enable early testing as part of the shift-left approach.  Waiting until they are published means that any defects that could be  found by tester’s review will be in the published document\n📌 Kiến thức: FL-2.1.2 (K1)"
  },
  {
    "n": 11,
    "ref": "Question #11 [FL-2.1.3]",
    "stem": "Which of the following is an example of a test-first approach to development?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test-Driven Development"
      },
      {
        "k": "b",
        "t": "B) Coverage-Driven Development"
      },
      {
        "k": "c",
        "t": "C) Quality-Driven Development"
      },
      {
        "k": "d",
        "t": "D) Feature-Driven Development"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "a) Is correct. Test-Driven Development (TDD) is a well-known example of  a test-first approach to development\nb) Is not correct. Coverage-Driven Development is not a correct example  of a test-first approach to development\nc) Is not correct. Quality-Driven Development is not a correct example of a  test-first approach to development\nd) Is not correct. Feature-Driven Development is not an example of a test- first approach to development, but is, instead, an agile software  development methodology based around delivering features (as  opposed to user stories in Scrum)\n📌 Kiến thức: FL-2.1.3 (K1)"
  },
  {
    "n": 12,
    "ref": "Question #12 [FL-2.1.4]",
    "stem": "Which of the following statements about DevOps is CORRECT?",
    "opts": [
      {
        "k": "a",
        "t": "A) To speed up releases, continuous integration is used to encourage developers to submit code quickly without the need to complete component testing"
      },
      {
        "k": "b",
        "t": "B) To be able to update and release systems on a more frequent basis, many automated regression tests are required to reduce the risk of regression"
      },
      {
        "k": "c",
        "t": "C) To treat both developers and operations equally, the testers will allocate more effort to release testing by operations using a shift-right approach"
      },
      {
        "k": "d",
        "t": "D) To create increased synergy between testers, developers and operations, the testing must become fully automated with no manual testing April 1, 2025"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "a) Is not correct. DevOps enhances testing in several ways, such as by  providing fast feedback on code quality, automated regression testing  that minimizes regression risk, and promoting a shift-left approach with  high-quality code submission and component tests. This is largely  provided through continuous integration, where the developers submit  component (unit) tests with their new code, which must pass for the  code to be admitted to the build. Therefore, developers do need to  complete component testing\nb) Is correct. DevOps enhances testing in several ways, such as by  providing fast feedback on code quality, automated regression testing  that minimizes regression risk, and promoting a shift-left approach with  high-quality code submission and component tests\nc) Is not correct. DevOps enhances testing in several ways, such as by  providing fast feedback on code quality, automated regression testing  that minimizes regression risk, and promoting a shift-left approach with  high-quality code submission and component tests. Testers do not  attempt to treat developers and operations equally by spending more  time on release testing, although a shift-right approach to testing  (testing in production) may well be used\nd) Is not correct. Automated processes like continuous  integration/continuous delivery (CI/CD) in DevOps facilitate stable test  environments and reduce the need for manual testing, however, there is  a risk of overlooking the importance of manual testing, especially from a  user's perspective\n📌 Kiến thức: FL-2.1.4 (K2)"
  },
  {
    "n": 13,
    "ref": "Question #13 [FL-2.2.1]",
    "stem": "Which of the following is MOST likely to be performed as part of system testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Security testing of a credit management system by an independent test team"
      },
      {
        "k": "b",
        "t": "B) Testing the interface of a currency exchange system with an external banking system"
      },
      {
        "k": "c",
        "t": "C) Beta testing of a remote learning system by courseware developers"
      },
      {
        "k": "d",
        "t": "D) Testing interactions between the user interface and database of a human resources system"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "a) Is correct. System testing examines the behavior and capabilities of the  complete system and covers non-functional testing of quality  characteristics, which includes security testing. This type of testing is  often performed by an independent test team based on system  specifications\nb) Is not correct. System integration testing examines the interfaces with  other systems and external services\nc) Is not correct. Beta testing is a type of acceptance testing performed at  an external site by roles outside the development organization\nd) Is not correct. Component integration testing involves testing the  (interfaces and) interactions between components of a system, such as  the user interface and database\n📌 Kiến thức: FL-2.2.1 (K2)"
  },
  {
    "n": 14,
    "ref": "Question #14 [FL-2.2.3]",
    "stem": "Which of the following statements is CORRECT?",
    "opts": [
      {
        "k": "a",
        "t": "A) Regression tests increase in number as the project progresses, whereas the number of confirmation tests decreases as the project progresses"
      },
      {
        "k": "b",
        "t": "B) Regression tests are created and run when the test object is fixed, whereas confirmation tests are run whenever the test object is enhanced"
      },
      {
        "k": "c",
        "t": "C) Regression testing is concerned with checking that the operational environment remains unchanged, whereas confirmation testing is concerned with testing changes to the test object"
      },
      {
        "k": "d",
        "t": "D) Regression testing is concerned with adverse effects in unchanged code, whereas confirmation testing is concerned with testing changed code"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "a) Is not correct. Regression tests increase in number as the project  progresses, as new regression tests are typically required as changes  are made to the system. Similarly, the number of confirmation tests also  typically increases as the project progresses as new confirmation tests  are needed for each fix made to a system\nb) Is not correct. It is the other way round. Confirmation tests are created  and run when the test object is fixed, and regression tests are (ideally)  run whenever the test object is enhanced (changed)\nc) Is not correct. Confirmation testing verifies that a defect has been fixed  correctly and so is concerned with testing changes to the test object.  However, regression testing ensures that changes (including changes to  the operational environment) do not have negative effects on  unchanged software and so does not check that the operational  environment remains unchanged\nd) Is correct. Regression testing ensures that changes do not have  negative effects on unchanged software. Confirmation testing verifies  that a defect has been fixed – and so is concerned with changed code\n📌 Kiến thức: FL-2.2.3 (K2)"
  },
  {
    "n": 15,
    "ref": "Question #15 [FL-3.1.3]",
    "stem": "Which of the following is an example of a defect that can be found by static testing but NOT by  dynamic testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Lack of usability provided through the user interface"
      },
      {
        "k": "b",
        "t": "B) Code with no path that reaches it"
      },
      {
        "k": "c",
        "t": "C) Poor response times for most of the expected users"
      },
      {
        "k": "d",
        "t": "D) Required features that are not implemented in the code"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "a) Is not correct. A lack of usability provided through the user interface can  be detected through a review using a suitable checklist, but the lack of  usability can also be identified by getting several typical users to  dynamically test the user interface and provide feedback on its usability\nb) Is correct. A code review can detect code that cannot be reached by  any path, however dynamic tests can only exercise reachable code and  cannot determine that code cannot be reached without running every  possible combination of inputs and input states, which is impractical for  real code\nc) Is not correct. Poor response times for most of the expected users are  difficult to determine without executing the code (i.e., by static testing),  so in this situation dynamic testing could find a defect, but static testing  is unlikely to find it\nd) Is not correct. A review of the code by someone who is aware of the  required features could detect that the required features had not been  implemented in the code, and dynamic testing could also be used to  determine that these required features had not been implemented\n📌 Kiến thức: FL-3.1.3 (K2)"
  },
  {
    "n": 16,
    "ref": "Question #16 [FL-3.2.1]",
    "stem": "Which of the following is a benefit of early and frequent stakeholder feedback?",
    "opts": [
      {
        "k": "a",
        "t": "A) Managers are aware of which developers are less productive"
      },
      {
        "k": "b",
        "t": "B) It allows project managers to prioritize their stakeholder interactions"
      },
      {
        "k": "c",
        "t": "C) It facilitates early communication of potential quality issues"
      },
      {
        "k": "d",
        "t": "D) End users better understand why the delivery of the work product is delayed April 1, 2025"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "a) Is not correct. The feedback is from stakeholders (e.g., business  representatives and end users), not from developers, so this feedback is  not likely to inform managers which developers are more or less  productive\nb) Is not correct. Early and frequent feedback from stakeholders is not  used by project managers to prioritize how they interact with the  different stakeholders\nc) Is correct. Obtaining feedback from stakeholders early and often in the  software development process can be highly beneficial as it facilitates  early communication of potential quality issues, can prevent  misunderstandings about requirements, and ensures that any changes  in stakeholder requirements are understood and implemented sooner\nd) Is not correct. Early and frequent feedback can prevent the  development of a product that does not meet stakeholder needs, and  results in costly rework and missed deadlines, so, ideally there should  be no delay. Also, the feedback is from stakeholders (not to them),  which includes the end users, so the end users providing feedback will  not aid the end users’ understanding\n📌 Kiến thức: FL-3.2.1 (K1)"
  },
  {
    "n": 17,
    "ref": "Question #17 [FL-3.2.2]",
    "stem": "Given the following task descriptions:  1. The quality characteristics to be evaluated and the exit criteria are selected  2. Everyone has access to the work product  3. Anomalies are identified in the work product  4. Anomalies are discussed    And the following review activities  A. Individual review   B. Review initiation   C. Planning  D. Communication and analysis   Which of the following BEST matches the task descriptions and activities?",
    "opts": [
      {
        "k": "a",
        "t": "A) 1B, 2C, 3D, 4A"
      },
      {
        "k": "b",
        "t": "B) 1B, 2D, 3C, 4A"
      },
      {
        "k": "c",
        "t": "C) 1C, 2A, 3B, 4D"
      },
      {
        "k": "d",
        "t": "D) 1C, 2B, 3A, 4D"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "Considering each of the listed task descriptions:  1. The quality characteristics to be evaluated and the exit criteria are  selected - (Planning (C): Defining the review scope, purpose,  work product to be reviewed, quality characteristics to be  evaluated, areas of focus, exit criteria, supporting information  such as standards, effort, and timeframes.)  2. Everyone has access to the work product - (Review initiation (B):  Ensuring all participants have access to the work product and  necessary resources, and clarifying their roles and  responsibilities.)  3. Anomalies are identified in the work product - (Individual review  (A): Evaluating the work product's quality, identifying and logging  anomalies, recommendations, and questions using review  techniques like checklist-based reviewing and scenario-based  reviewing.)  4. Anomalies are analyzed and discussed - (Communication and  analysis (D): Analyzing and discussing each anomaly,  determining its status, ownership, and required actions, and  making review decisions, normally in a meeting. This could  include determining the need for a follow-up review.)  Thus:\na) Is not correct\nb) Is not correct\nc) Is not correct\nd) Is correct. The correct match is: 1C, 2B, 3A, 4D\n📌 Kiến thức: FL-3.2.2 (K2)"
  },
  {
    "n": 18,
    "ref": "Question #18 [FL-3.2.3]",
    "stem": "Given the following roles in reviews:  1. Scribe  2. Review leader   3. Facilitator  4. Manager    And the following responsibilities in reviews:  A. Ensures the effective running of review meetings and the setting up a safe review  environment  B. Records review information, such as decisions and new anomalies found during the  review meeting  C. Decides what is to be reviewed and provides resources, such as staff and time for the  review  D. Takes overall responsibility for the review such as organizing when and where the  review will take place  Which of the following BEST matches the roles and responsibilities?",
    "opts": [
      {
        "k": "a",
        "t": "A) 1A, 2B, 3D, 4C"
      },
      {
        "k": "b",
        "t": "B) 1A, 2C, 3B, 4D"
      },
      {
        "k": "c",
        "t": "C) 1B, 2D, 3A, 4C"
      },
      {
        "k": "d",
        "t": "D) 1B, 2D, 3C, 4A April 1, 2025"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Considering each of the listed roles:  1. Scribe (or Recorder) - responsible for gathering feedback from  reviewers and documenting review information, such as decisions  made, and any new anomalies identified during the review  meeting. (Records review information, such as decisions and new  anomalies found during the review meeting - B)  2. Review Leader - responsible for overseeing the review process,  such as selecting the review team members, scheduling review  meetings, and ensuring that the review is completed successfully.   (Takes overall responsibility for the review such as organizing  when and where the review will take place - D)  3. Facilitator (or Moderator) - responsible for ensuring that the  review meetings run effectively, including managing time,  mediating discussions, and creating a safe environment where  everyone can voice their opinions freely. (Ensures the effective  running of review meetings and the setting up of a safe review  environment - A)  4. Manager - responsible for deciding what needs to be reviewed  and allocating resources, such as staff and time, for the review.  (Decides what is to be reviewed and provides resources, such as  staff and time for the review - C)  Thus:\na) Is not correct\nb) Is not correct\nc) Is correct. The correct match is: 1B, 2D, 3A, 4C\nd) Is not correct\n📌 Kiến thức: FL-3.2.3 (K1)"
  },
  {
    "n": 19,
    "ref": "Question #19 [FL-4.1.1]",
    "stem": "Which of the following statements BEST describes the difference between decision table testing  and branch testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) In decision table testing, the test cases are derived from the decision statements in the code. In branch testing, the test cases are derived from knowledge of the control flow of the test object."
      },
      {
        "k": "b",
        "t": "B) In decision table testing, the test cases are derived from the specification that describes the business logic. In branch testing the test cases are based on anticipation of potential defects in the source code."
      },
      {
        "k": "c",
        "t": "C) In decision table testing, the test cases are derived from knowledge of the control flow of the test object. In branch testing, test cases are derived from the specification that describes the business logic."
      },
      {
        "k": "d",
        "t": "D) In decision table testing, the test cases are independent of how the software is implemented. In branch testing, test cases can be created only after the design or implementation of the code."
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "a) Is not correct. Decision table testing is a black-box test technique, not a  white-box test technique – the test cases are not based on the decisions  in the source code. In branch testing, the test cases are derived from  knowledge of the control flow of the test object\nb) Is not correct. Anticipation of potential defects is used in error guessing  (an experience-based test technique), not in branch testing (a white-box  test technique). In decision table testing, the test cases are derived from  the specification that describes the business logic\nc) Is not correct. If a test case is based on the knowledge of the control  flow of the test object, it is a white-box test technique. Decision table  testing is typically based on an analysis of business logic, so it is a  black-box test technique. In branch testing, test cases are not derived  from the specification – this would make it a black-box test technique.  Branch testing is a white-box test technique, where test cases are  derived based on the source code structure\nd) Is correct. Decision table testing is a black-box test technique, so it is  based on an analysis of the specified behavior of the test object without  reference to its internal structure. Therefore, the test cases are  independent of how the software is implemented. Branch testing is a  white-box test technique, so test cases are based on an analysis of the  test object’s internal structure and processing. As the test cases are  dependent on how the software is designed and coded, they can only  be created after the design or implementation of the test object\n📌 Kiến thức: FL-4.1.1 (K2)"
  },
  {
    "n": 20,
    "ref": "Question #20 [FL-4.2.1]",
    "stem": "Customers of the TestWash car wash chain have cards with a record of the number of washes  they have bought so far. The initial value is 0. After entering the car wash, the system increases  the number on the card by one. This value represents the number of the current wash. Based on  this number the system decides what discount the customer is entitled to.  For every tenth wash the system gives a 10% discount, and for every twentieth wash, the system  gives a further 40% discount (i.e., a 50% discount in total).  Which of the following sets of input data (understood as the numbers of the current wash) achieves  the highest equivalence partition coverage?",
    "opts": [
      {
        "k": "a",
        "t": "A) 19, 20, 30"
      },
      {
        "k": "b",
        "t": "B) 11, 12, 20"
      },
      {
        "k": "c",
        "t": "C) 1, 10, 50"
      },
      {
        "k": "d",
        "t": "D) 10, 29, 30, 31 April 1, 2025"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "a) Is correct. 19 covers the “no discount” partition, 20 covers the “50%  discount” partition, and 30 covers the “10% discount” partition. These  three values cover all three of the valid equivalence partitions\nb) Is not correct. 11 and 12 cover the “no discount” partition, while 20  covers the “50% discount” partition, so covering two of the three valid  equivalence partitions\nc) Is not correct. 1 covers the “no discount” partition, while 10 and 50 cover  the “10% discount” partition. The “50% discount” partition is not  covered, so overall two of the three valid equivalence partitions are  covered\nd) Is not correct. 29 and 31 cover the “no discount” partition, while 10 and  30 cover the “10% discount” partition. The “50% discount” partition is  not covered, so overall two of the three valid equivalence partitions are  covered\n📌 Kiến thức: FL-4.2.1 (K3)"
  },
  {
    "n": 21,
    "ref": "Question #21 [FL-4.2.2]",
    "stem": "You are testing a form that verifies the correctness of the length of the password given as input.  The form accepts a password with the correct length and rejects a password that is too short or too  long. The password length is correct if it has between 6 and 12 characters inclusive. Otherwise, it  is considered incorrect.  At first, the form is empty (password length = 0). You apply boundary value analysis to the  “password length” variable.  Your set of test cases achieves 100% 2-value boundary value coverage. The team decided that  due to the high risk of this component, test cases should be added to ensure 100% 3-value  boundary value coverage.  Which additional password lengths should be tested to achieve this?",
    "opts": [
      {
        "k": "a",
        "t": "A) 4, 5, 13, 14"
      },
      {
        "k": "b",
        "t": "B) 7, 11"
      },
      {
        "k": "c",
        "t": "C) 1, 5, 13"
      },
      {
        "k": "d",
        "t": "D) 1, 4, 7, 11, 14 April 1, 2025"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "The domain for the password length has three equivalence partitions:   •  passwords too short {0, 1, …, 4, 5}  •  passwords OK {6, 7, …, 11, 12}  •  passwords too long {13, 14, …}  To achieve full coverage for 3-value BVA we need to test the following  values:  0, 1, 4, 5, 6, 7, 11, 12, 13, 14.  Since 2-value BVA is already covered, this means that we have already  tested the passwords of length:  0, 5, 6, 12 and 13.   This means that the additional lengths that need to be covered to move  from 2-value to 3-value are:  1, 4, 7, 11 and 14.   Thus:\na) Is not correct\nb) Is not correct\nc) Is not correct\nd) Is correct\n📌 Kiến thức: FL-4.2.2 (K3)"
  },
  {
    "n": 22,
    "ref": "Question #22 [FL-4.2.3]",
    "stem": "The following decision table contains the rules for determining the risk of atherosclerosis.     Rule 1  Rule 2  Rule 3  Rule 4  Rule 5  Conditions  Cholesterol (mg/dl)  ≤124  ≤ 124  125 –  200  125 –  200  ≥ 201  Blood pressure (mm  Hg)  ≤ 140  > 140  ≤ 140  > 140  –  Action  Risk level  very low  low  medium  high  very high    You designed the test cases with the following input data:  TC1:   Cholesterol = 125 mg/dl   Blood pressure = 141 mm Hg  TC2:   Cholesterol = 200 mg/dl   Blood pressure = 201 mm Hg  TC3:   Cholesterol = 124 mg/dl   Blood pressure = 201 mm Hg  TC4:   Cholesterol = 109 mg/dl   Blood pressure = 200 mm Hg  TC5:  Cholesterol = 201 mg/dl   Blood pressure = 140 mm Hg  What is the decision table coverage achieved by these test cases?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) 40%"
      },
      {
        "k": "b",
        "t": "B) 60%"
      },
      {
        "k": "c",
        "t": "C) 80%"
      },
      {
        "k": "d",
        "t": "D) 100% April 1, 2025"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "There are five columns in the decision table. Each test case covers one of  them.  TC1 and TC2 both cover Rule 4  TC3 and TC4 both cover Rule 2  TC5 covers Rule 5  So, these five test cases cover three out of five columns, achieving a  coverage of (3/5)*100% = 60%. Therefore, option b) is the CORRECT  option.  Thus:\na) Is not correct\nb) Is correct\nc) Is not correct\nd) Is not correct\n📌 Kiến thức: FL-4.2.3 (K3)"
  },
  {
    "n": 23,
    "ref": "Question #23 [FL-4.2.4]",
    "stem": "A storage system can store up to three elements and is modeled by the following state transition  diagram. The variable N represents the number of currently stored elements.    Which of the following test cases, represented as sequences of events, achieves the highest level  of valid transitions coverage?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) Add, Remove, Add, Add, Add"
      },
      {
        "k": "b",
        "t": "B) Add, Add, Add, Add, Remove, Remove"
      },
      {
        "k": "c",
        "t": "C) Add, Add, Add, Remove, Remove"
      },
      {
        "k": "d",
        "t": "D) Add, Add, Add, Remove, Add"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Let us refer to the transitions with E1, …, E5 as in the picture. The variable  N denotes the number of elements currently stored. Each “Add” event  increases it by 1, and each “Remove” event decreases it by 1. Notice, that  when the “Add” event occurs while being in the NOT FULL state, the state  changes to FULL only if N=2. If N<2, the system stays in the NOT FULL  state. If N=0, no “Remove” action is possible. Similarly, if N=3, no “Add”  action is possible.   Test a) can be written as E1, E3, E3, E2, E4 (so covers 4 out of 5  valid transitions, achieving 80% valid transitions coverage).   Test b) is infeasible, because after the first three “Add” actions the  system is in the FULL state and there is no valid transition going  from FULL triggered by the “Add” event. After the first three  transitions only 60% of valid transitions coverage is achieved.  Test c) can be written as E1, E2, E4, E5, E3 (so covers 5 out of 5  valid transitions, achieving 100% valid transitions coverage).   Test d) can be written as E1, E2, E4, E5, E4 (so covers 4 out of 5  valid transitions, achieving 80% valid transitions coverage).   Thus:\na) Is not correct\nb) Is not correct\nc) Is correct\nd) Is not correct\n📌 Kiến thức: FL-4.2.4 (K3)"
  },
  {
    "n": 24,
    "ref": "Question #24 [FL-4.3.1]",
    "stem": "You run two test cases, T1 and T2, on the same code. Test T1 achieved 40% statement coverage  and test T2 achieved 65% statement coverage.  Which of the following sentences must be necessarily true?",
    "opts": [
      {
        "k": "a",
        "t": "A) The test suite composed of tests T1 and T2 achieves 105% statement coverage"
      },
      {
        "k": "b",
        "t": "B) There exists at least one statement that must have been executed by both T1 and T2"
      },
      {
        "k": "c",
        "t": "C) At least 5% of the statements in the code that was tested are non-executable"
      },
      {
        "k": "d",
        "t": "D) The test suite composed of tests T1 and T2 achieves full branch coverage April 1, 2025"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "a) Is not correct. Coverage is always defined as the percentage of the  covered elements. Therefore, it cannot exceed 100%\nb) Is correct. If the statements executed by T1 and T2 were disjoint, the  coverage of the test suite {T1, T2} would be 105%, which is impossible  (see answer a). Therefore, at least 5% of executable statements must  have been executed by both T1 and T2\nc) Is not correct. Statement coverage does not tell us anything about the  number of non-executable statements in the code\nd) Is not correct. Even if a test suite achieves full statement coverage, this  does not imply achieving full branch coverage\n📌 Kiến thức: FL-4.3.1 (K2)"
  },
  {
    "n": 25,
    "ref": "Question #25 [FL-4.3.2]",
    "stem": "Let the branch coverage metric be defined as BCov = (X / Y) * 100%.  What do X and Y represent in this formula?",
    "opts": [
      {
        "k": "a",
        "t": "A) X = number of decision outcomes exercised by the test cases Y = total number of decision outcomes in the code"
      },
      {
        "k": "b",
        "t": "B) X = number of conditional branches exercised by the test cases Y = total number of branches in the code"
      },
      {
        "k": "c",
        "t": "C) X = number of branches exercised by the test cases Y = total number of branches in the code"
      },
      {
        "k": "d",
        "t": "D) X = number of conditional branches exercised by the test cases Y = total number of decision outcomes in the code"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Branch testing is a white-box test technique in which the coverage items are  branches. A branch is a transfer of control between two nodes in the control  flow graph, which shows the possible sequences in which source code  statements are executed in the test object. Each transfer of control can be  either unconditional (i.e., straight-line code) or conditional (i.e., a decision  outcome). Coverage is measured as the number of branches exercised by  the test cases divided by the total number of branches, and is expressed as  a percentage.  Thus:\na) Is not correct. A decision outcome is a conditional branch. For branch  testing, X counts not only conditional, but also unconditional branches\nb) Is not correct. Branch coverage counts not only conditional, but also  unconditional branches\nc) Is correct. Branch coverage is measured as the number of branches  exercised by the test cases divided by the total number of branches,  and is expressed as a percentage\nd) Is not correct. Both X and Y count only conditional branches and do not  take into account the unconditional branches\n📌 Kiến thức: FL-4.3.2 (K2)"
  },
  {
    "n": 26,
    "ref": "Question #26 [FL-4.4.2]",
    "stem": "Which TWO of the following statements provide the BEST rationale for using exploratory testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Testers have not been allocated enough time for test design and test execution"
      },
      {
        "k": "b",
        "t": "B) The existing test strategy requires that testers use formal, black-box test techniques"
      },
      {
        "k": "c",
        "t": "C) The specification is written in a formal language that can be processed by a tool"
      },
      {
        "k": "d",
        "t": "D) Testers are the members of an agile team and have good programming skills"
      },
      {
        "k": "e",
        "t": "E) Testers are experienced in the business domain and have good analytical skills"
      }
    ],
    "ans": [
      "a",
      "e"
    ],
    "multi": true,
    "exp": "Exploratory testing is useful when there are few or inadequate  specifications or there is significant time pressure on the testing.  Exploratory testing is also useful to complement other more formal test  techniques. Exploratory testing will be more effective if the tester is  experienced, has domain knowledge and has a high degree of essential  skills, like analytical skills, curiosity and creativeness.  Thus:\na) Is correct. Exploratory testing is useful when there are few or  inadequate specifications or there is significant time pressure on the  testing\nb) Is not correct. Exploratory testing is not a black-box test technique\nc) Is not correct. Exploratory testing is useful when the specifications are  poorly written\nd) Is not correct. Programming skills have nothing to do with exploratory  testing in principle\ne) Is correct. Exploratory testing will be more effective if the tester is  experienced, has domain knowledge and has a high degree of essential  skills, like analytical skills, curiosity and creativeness\n📌 Kiến thức: FL-4.4.2 (K2)"
  },
  {
    "n": 27,
    "ref": "Question #27 [FL-4.4.3]",
    "stem": "Which of the following BEST fits as an element of the checklist used in checklist-based testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) “The developer made an error when implementing the code”"
      },
      {
        "k": "b",
        "t": "B) “The achieved statement coverage exceeds 85%”"
      },
      {
        "k": "c",
        "t": "C) “The program works correctly regarding functional and non-functional requirements”"
      },
      {
        "k": "d",
        "t": "D) “The error messages are written in language that the user can understand” April 1, 2025"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "a) Is not correct. Checklists should contain test conditions to be verified.  This is an example of an error, not a test condition; even if the tester  was able to deduce some potential test conditions from the examples of  errors, this error description is too general\nb) Is not correct. Checklists should not contain items that are better suited  as exit criteria. This is an example of an exit criterion\nc) Is not correct. Checklists should not contain items that are too general.  This is a very general item, which practically describes a test objective\nd) Is correct. This is an example of a test condition that can be checked by  a human\n📌 Kiến thức: FL-4.4.3 (K2)"
  },
  {
    "n": 28,
    "ref": "Question #28 [FL-4.5.2]",
    "stem": "Consider the following acceptance criteria for a user story written from the perspective of an online  store owner.  Given that the user is logged in and on the homepage,  When the user clicks on the \"Add Item\" button,  Then the \"Create Item\" form should appear,  And the user should be able to input a name and price for the new item.  In what format is this acceptance criteria written?",
    "opts": [
      {
        "k": "a",
        "t": "A) Rule-oriented"
      },
      {
        "k": "b",
        "t": "B) Scenario-oriented"
      },
      {
        "k": "c",
        "t": "C) Product-oriented"
      },
      {
        "k": "d",
        "t": "D) Process-oriented"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "a) Is not correct. The rule-oriented format includes formats like bullet point  verification lists or tabulated forms of input-output mappings, explicitly  showing the rules to be followed. Given/When/Then is a scenario- oriented format because it describes a scenario to be verified\nb) Is correct. This is a Given/When/Then format, which is scenario-oriented\nc) Is not correct. There is no \"product-oriented\" format of acceptance  criteria\nd) Is not correct. There is no \"process-oriented\" format of acceptance  criteria\n📌 Kiến thức: FL-4.5.2 (K2)"
  },
  {
    "n": 29,
    "ref": "Question #29 [FL-4.5.3]",
    "stem": "Your team analyzes the following user story in order to define the acceptance criteria:   As a registered customer, I want to be able to view my previous orders on the  company's website, so that I can keep track of my purchases.  Which of the following test cases will NOT be relevant for this user story?",
    "opts": [
      {
        "k": "a",
        "t": "A) Input: the customer logs into their account on the website and clicks the “see order history” button Expected result: the system shows a list of all the customer’s previous orders, including the date, order number, and total cost"
      },
      {
        "k": "b",
        "t": "B) Input: the customer clicks on an order from the order list Expected result: the system displays the individual items purchased, along with their prices and quantities"
      },
      {
        "k": "c",
        "t": "C) Input: the customer clicks “Sort ascending” button on the order history screen Expected result: the system shows the order history sorted by order number in ascending order"
      },
      {
        "k": "d",
        "t": "D) Input: an unregistered customer registers as a new customer with a valid e-mail address that does not already exist in the customer database Expected result: the system accepts the registration and creates the account April 1, 2025"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "a) Is not correct. The test case is related to viewing previous orders in the  order history\nb) Is not correct. The test case is related to viewing previous orders\nc) Is not correct. The test case is related to viewing previous orders in the  order history\nd) Is correct. The test case is related to the registration process, which is  not discussed in the user story. The user story is about viewing previous  orders\n📌 Kiến thức: FL-4.5.3 (K3)"
  },
  {
    "n": 30,
    "ref": "Question #30 [FL-5.1.3]",
    "stem": "Your team follows the process that uses the DevOps delivery pipeline. The first three steps of this  process are:  (1) Code development  (2) Submit code into a version control system and merge it into the “test” branch  (3) Perform component testing for the submitted code  Which of the following is BEST suited to be the entry criterion for step (2) of this pipeline?",
    "opts": [
      {
        "k": "a",
        "t": "A) Static analysis returns no high severity warnings for the submitted code"
      },
      {
        "k": "b",
        "t": "B) System version control reports no conflicts when merging code into the “test” branch"
      },
      {
        "k": "c",
        "t": "C) Component tests are compiled and ready to be executed"
      },
      {
        "k": "d",
        "t": "D) Statement coverage is at least 80%"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "a) Is correct. This is something that can (and should) be checked before  the code is submitted to version control\nb) Is not correct. This is something that can be checked after step (2) is  performed, because merge conflict reporting can be done after the code  is submitted and merged\nc) Is not correct. This fits better as the entry criterion for step (3)\nd) Is not correct. This fits better as the exit criterion for step (3)\n📌 Kiến thức: FL-5.1.3 (K2)"
  },
  {
    "n": 31,
    "ref": "Question #31 [FL-5.1.4]",
    "stem": "You want to estimate the test effort for the new project using estimation based on ratios. You  calculate the test-to-development effort ratio using averaged data for both development effort and  test effort from four historical projects similar to the new one. The table shows this historical data.  Project  Development effort   ($)  Test effort   ($)  P1  800,000  40,000  P2  1,200,000  130,000  P3  600,000  70,000  P4  1,000,000  120,000  The estimated development effort for the new project is $800,000. What is your estimate of the test  effort in this project?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) $40,000"
      },
      {
        "k": "b",
        "t": "B) $80,000"
      },
      {
        "k": "c",
        "t": "C) $81,250"
      },
      {
        "k": "d",
        "t": "D) $82,500 April 1, 2025"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "The average development effort is $900,000 and the average test effort is  $90,000 (calculated from the four projects).  The average test-to-development effort ratio is 1:10 ($90,000 : $900,000),  which means that historically, on average, the test effort is 10% of the  development effort.   So if the development effort is estimated to be $800,000, the estimated test  effort is estimated as:  10% * $800,000 = 0.1 * $800,000 = $80,000.   Thus:\na) Is not correct\nb) Is correct\nc) Is not correct\nd) Is not correct\n📌 Kiến thức: FL-5.1.4 (K3)"
  },
  {
    "n": 32,
    "ref": "Question #32 [FL-5.1.5]",
    "stem": "You are testing a web application that allows users to SEARCH for products, VIEW product details,  ADD products to a shopping cart, and place an ORDER.   You have prepared the following seven test cases, all of which you want to execute. The tests  should be executed in the best order, based on test priority.    Test   Priority (1  = higher priority)  TC1  SEARCH for product A  4  TC2  SEARCH for product B  4  TC3  VIEW product A details  3  TC4  VIEW product B details  2  TC5  ADD product A to a shopping cart  3  TC6  ADD product B to a shopping cart  1  TC7  place an ORDER  5    You also identified the following logical dependencies between test cases:  •  SEARCH functionality must be tested before VIEW functionality can be tested.  •  VIEW functionality must be tested before ADD functionality.  •  ADD functionality must be tested before ORDER functionality.  Which test case should be executed as the fourth one?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) TC3"
      },
      {
        "k": "b",
        "t": "B) TC1"
      },
      {
        "k": "c",
        "t": "C) TC7"
      },
      {
        "k": "d",
        "t": "D) TC2"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "The logical dependencies mean that for each product you have to run  SEARCH → VIEW → ADD before running ORDER. You can add more  products (using the same flow), before you run ORDER.   Based on this, TC1 or TC2 must be executed first, otherwise no progress  can be made.   The first priority should be given to VIEW and ADD product B, as its test  cases (TC6, TC4) are assigned with higher priority.  So, the first 3 tests to execute are TC2 -> TC4 -> TC6    Now we need to consider whether to run TC7 and then the entire flow for  product A or run the TCs for product A first. If TC7 has lower priority than  the other tests, they should be tested first.  Therefore, the entire flow should be:  TC2 -> TC4 -> TC6 -> TC1 -> TC3 -> TC5 -> TC7\na) Is not correct. TC1 must be executed before TC3\nb) Is correct\nc) Is not correct. As shown above, TC7 is the last to be executed.\nd) Is not correct. Product B must be executed before product A\n📌 Kiến thức: FL-5.1.5 (K3)"
  },
  {
    "n": 33,
    "ref": "Question #33 [FL-5.1.7]",
    "stem": "According to the testing quadrants model, which of the following falls into quadrant Q1 (“technology  facing” and “support the team”)?",
    "opts": [
      {
        "k": "a",
        "t": "A) Usability testing"
      },
      {
        "k": "b",
        "t": "B) Functional testing"
      },
      {
        "k": "c",
        "t": "C) User acceptance testing"
      },
      {
        "k": "d",
        "t": "D) Component integration testing April 1, 2025"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "a) Is not correct. Usability testing is business facing testing that critiques  the product (Q3)\nb) Is not correct. Functional testing is business facing testing (Q2)\nc) Is not correct. User acceptance testing is business facing testing that  critiques the product (Q3)\nd) Is correct. Component integration testing is technology facing testing  that supports the team (guides the development) (Q1)\n📌 Kiến thức: FL-5.1.7 (K2)"
  },
  {
    "n": 34,
    "ref": "Question #34 [FL-5.2.4]",
    "stem": "Given the following risks:  1. Ineffective loop implementation causes long system responses  2. Consumers change their preferences  3. Flooding of the server room  4. Patients above a certain age receive inaccurate reports    And the following mitigation activities:  A. Risk acceptance  B. Testing for performance efficiency  C. Using boundary value analysis as the test technique  D. Risk transfer    Which of the following BEST matches the risks with the mitigation activities?",
    "opts": [
      {
        "k": "a",
        "t": "A) 1C,  2D,  3A,  4B"
      },
      {
        "k": "b",
        "t": "B) 1B,  2D,  3A,  4C"
      },
      {
        "k": "c",
        "t": "C) 1B,  2A,  3D,  4C"
      },
      {
        "k": "d",
        "t": "D) 1C,  2A,  3D,  4B"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Considering each of the listed risks and their mitigations:  1. Long system responses (1) can be tested in performance testing  (B)  2. Changes in consumers’ preferences (2) are usually out of our  control, so usually we accept this risk (A)  3. Flooding of the server room (3) can cause significant loss, so we  should transfer the risk, e.g., by buying an insurance policy (D)  4. That patients above a certain age receive inaccurate reports (4)  suggests a potential boundary problem, which can be effectively  detected with test techniques like BVA (C)  Thus:\na) Is not correct\nb) Is not correct\nc) Is correct. The correct combinations of risk and mitigation are: 1B, 2A,  3D and 4C\nd) Is not correct\n📌 Kiến thức: FL-5.2.4 (K2)"
  },
  {
    "n": 35,
    "ref": "Question #35 [FL-5.3.1]",
    "stem": "Which of the following is a product quality metric?",
    "opts": [
      {
        "k": "a",
        "t": "A) Mean time to failure"
      },
      {
        "k": "b",
        "t": "B) Number of defects found"
      },
      {
        "k": "c",
        "t": "C) Requirements coverage"
      },
      {
        "k": "d",
        "t": "D) Defect detection percentage"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "a) Is correct. Product quality metrics measure quality characteristics. Mean  time to failure measures maturity, so it is a product quality metric\nb) Is not correct. This is an example of a defect metric, not a product  quality metric\nc) Is not correct. This is an example of a coverage metric, not a product  quality metric\nd) Is not correct. This is an example of a defect metric, not a product  quality metric\n📌 Kiến thức: FL-5.3.1 (K1)"
  },
  {
    "n": 36,
    "ref": "Question #36 [FL-5.3.3]",
    "stem": "You are a member of a test team located in North America, developing a product for a client  located in Europe. The team is agile and follows the DevOps approach and uses a continuous  integration/continuous delivery pipeline.  Which of the following is the LEAST effective way to communicate test progress to the customer?",
    "opts": [
      {
        "k": "a",
        "t": "A) Face-to-face"
      },
      {
        "k": "b",
        "t": "B) Dashboards"
      },
      {
        "k": "c",
        "t": "C) Email"
      },
      {
        "k": "d",
        "t": "D) Video conferencing April 1, 2025"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "a) Is correct. The client is in a different location and time zone, so it may  be difficult to communicate face-to-face\nb) Is not correct. Dashboards are usually available to any user at any time,  so the difference in time zones will not be as much of a hindrance to  communication as verbal, face-to-face communication\nc) Is not correct. Although the time difference between Europe and  America is several hours, and this may cause some inconvenience, it's  certainly not as great as with communicating face-to-face\nd) Is not correct. Video conferencing tools are a convenient means of  communication. Although communication between Europe and America  during working hours usually requires one party to connect in the very  early or very late hours, this is not as much of an inconvenience as  verbal, face-to-face communication\n📌 Kiến thức: FL-5.3.3 (K2)"
  },
  {
    "n": 37,
    "ref": "Question #37 [FL-5.4.1]",
    "stem": "Which of the following BEST describes an example of how configuration management (CM)  supports testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Having the version number of the environment, the CM tool can retrieve the version numbers of libraries, stubs and drivers used in that environment"
      },
      {
        "k": "b",
        "t": "B) Having a record of the values of the inputs, the CM tool can execute the test cases for these configurations and calculate the coverage"
      },
      {
        "k": "c",
        "t": "C) Having data about the date of purchase of a software license, the CM tool automatically generates information about the fact that the product license is coming to an end"
      },
      {
        "k": "d",
        "t": "D) Having the version number of the test case, the CM tool can automatically generate test data for this test case"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "a) Is correct. For a complex configuration item (e.g., a test environment),  configuration management (CM) records the items it consists of, their  relationships, and versions\nb) Is not correct. CM tools do not execute test cases and do not calculate  coverage\nc) Is not correct. A CM tool is not a licensed management tool\nd) Is not correct. CM tools do not generate test data\n📌 Kiến thức: FL-5.4.1 (K2)"
  },
  {
    "n": 38,
    "ref": "Question #38 [FL-5.5.1]",
    "stem": "You are testing a sort function that gets a set of numbers as input and returns the same set of  numbers sorted in ascending order. The log from the test execution looks as follows.  Environment configuration: sort function build 2.002.2182, test case set: TCS-3, # of TCs: 5  Test run ID: 736  Start 12:43:21.003  12:43:21.003  Execution of TC1.  Input: 3.   Output: 3.   Result: passed  12:43:21.003  Execution of TC2.  Input: 3 11 6 5.   Output: 3 5 6 11.   Result: passed  12:43:21.004  Execution of TC3.  Input: 8 7 3 7 1.   Output: 1 3 7 8.   Result: failed  12:43:21.005  Execution of TC4.  Input: -2 -2 -2 -3 -3.  Output: -3 -2.   Result: failed  12:43:21.005  Execution of TC5.  Input: 0 -2 0 3 4 4.  Output: -2 0 3 4.   Result: failed  End 12:43:21.005  Total time of test cycle: 0:00:00.002  Which of the following provides the BEST description of the failure that can be used in a defect  report?",
    "opts": [
      {
        "k": "a",
        "t": "A) The system fails to sort several sets of numbers. Reference: TC3, TC4, TC5."
      },
      {
        "k": "b",
        "t": "B) The system seems to disregard duplicates while sorting. Reference: TC3, TC4, TC5."
      },
      {
        "k": "c",
        "t": "C) The system fails to sort negative numbers. Reference: TC4, TC5."
      },
      {
        "k": "d",
        "t": "D) TC3, TC4 and TC5 have defects (duplicate input data) and should be corrected. April 1, 2025"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "a) Is not correct. While the sentence is true, it does not provide much value  for the developer\nb) Is correct. From the test results it seems that the system ignores  duplicates and sorts the list disregarding the repetitions. This is probably  the cause of failures in TC3, TC4, TC5. Such information may help the  developer to find the defect and fix it more efficiently\nc) Is not correct. The system does not fail in sorting negative numbers.  The problem is rather in disregarding duplicates\nd) Is not correct. The test cases TC3, TC4 and TC5 fail, but we aren’t  aware that the test cases have any defects\n📌 Kiến thức: FL-5.5.1 (K3)"
  },
  {
    "n": 39,
    "ref": "Question #39 [FL-6.1.1]",
    "stem": "Given the following descriptions:  1. Support workflow tracking   2. Facilitate communication  3. Virtual machines  4. Support reviews    And the following test tool categories:  A. Static testing tools   B. Tools supporting scalability and deployment standardization  C. DevOps tools  D. Collaboration tools   Which of the following BEST matches the descriptions and categories?",
    "opts": [
      {
        "k": "a",
        "t": "A) 1A, 2B, 3C, 4D"
      },
      {
        "k": "b",
        "t": "B) 1B, 2D, 3C, 4A"
      },
      {
        "k": "c",
        "t": "C) 1C, 2D, 3B, 4A"
      },
      {
        "k": "d",
        "t": "D) 1D, 2C, 3A, 4B"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Considering each of the listed tool categories and their descriptions:  A. Static testing tools – support the tester in performing reviews and  static analysis (4)  B. Tools supporting scalability and deployment standardization – For  example, virtual machines, containerization tools (3)  C. DevOps tools – support the DevOps delivery pipeline, workflow  tracking, automated build process(es), continuous  integration/continuous delivery (CI/CD) (1)  D. Collaboration tools – facilitate communication (2)  Thus:\na) Is not correct\nb) Is not correct\nc) Is correct. The correct match is: 1C, 2D, 3B, 4A\nd) Is not correct\n📌 Kiến thức: FL-6.1.1 (K2)"
  },
  {
    "n": 40,
    "ref": "Question #40 [FL-6.2.1]",
    "stem": "Which of the following is MOST likely to be a benefit of test automation?",
    "opts": [
      {
        "k": "a",
        "t": "A) It provides coverage measures that are too complicated for humans to derive"
      },
      {
        "k": "b",
        "t": "B) It shares responsibility for the testing with the tool vendor"
      },
      {
        "k": "c",
        "t": "C) It removes the need for critical thinking when analyzing test results"
      },
      {
        "k": "d",
        "t": "D) It generates test cases from an analysis of the program code"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "a) Is correct. Test automation can provide measures that are too  complicated for humans to derive, such as white-box testing coverage  measures for all but the most trivial code\nb) Is not correct. By using test tools, the responsibility for the testing is  NOT shared with the tool vendor as the vendor is not involved in the  testing, and it is the tester’s responsibility. The only possible  responsibility that could be assigned to the tool vendor is if the tool fails  to work as expected and provides incorrect test results\nc) Is not correct. Testers still need to apply critical thinking when analyzing  anomalies in the test results to determine their likely cause\nd) Is not correct. Neither testers nor tools can generate test cases simply  from an analysis of the program code as the code is the implementation  and provides no information on the expected results, which will need to  come from another part of the test basis, such as the design  specification\n📌 Kiến thức: FL-6.2.1 (K1)"
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
