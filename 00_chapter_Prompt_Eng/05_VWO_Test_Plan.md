# Test Plan: VWO Digital Experience Optimization Platform

> **Status: Draft for review.** This is a planning document. No tests have been designed, automated, or executed. Values labelled **Proposed** require agreement before use. Values labelled **Not provided** were absent from the source material and have not been invented.

## 1. Test Plan ID and Title

| Field | Value |
| --- | --- |
| Test Plan ID | TP-VWO-001 (locally assigned) |
| Title | Master Test Plan: VWO Digital Experience Optimization Platform |
| Version | 0.1 (Draft) |
| Date | 2026-10-04 |
| Test basis | Product Requirements Document (PRD), VWO, prepared by Pramod Dutta, dated January 7, 2026 |
| Prepared by | Not provided |
| Approvers | Not provided (see Section 12) |

## 2. Objective and References

### 2.1 Objective

Define the scope, approach, resources, and criteria for testing the VWO platform against the functional requirements FR1–FR9 and the five non-functional requirements stated in the PRD, on a dedicated QA/staging environment.

Test objectives:

1. Evaluate whether each PRD requirement is implemented as specified.
2. Find defects in the Must and High priority features before release, in order of product risk.
3. Provide stakeholders with enough information on product quality and residual risk to make a release decision.
4. Verify that the two PRD user flows (5.1 Setting Up an A/B Test, 5.2 Analyzing Behavioral Data) can be completed end to end.

### 2.2 References

| Ref | Document | Use in this plan |
| --- | --- | --- |
| R1 | Product Requirements Document (PRD), VWO Digital Experience Optimization Platform, Pramod Dutta, January 7, 2026 | Sole source of requirements (test basis) |
| R2 | `04_RICE_POT_Generic_QA_Template.md`, Profile B (Test plan) | Section structure and quality rules |
| R3 | ISTQB Certified Tester Foundation Level Syllabus v4.0 | Terminology: test levels, test types, test techniques, risk-based testing, entry and exit criteria |
| R4 | ISO/IEC/IEEE 29119-3 (Test documentation) | Reference for test plan content |

### 2.3 Requirement identifiers

- **FR1–FR9** are the IDs supplied in PRD Section 6.
- **NFR-01 to NFR-05** are **locally assigned** in this plan. The PRD lists the non-functional requirements in Section 7 without IDs.

| Local ID | PRD category | PRD requirement (verbatim) |
| --- | --- | --- |
| NFR-01 | Performance | System responds within 2 seconds for editing workflows. |
| NFR-02 | Security | 2FA, role-based access control, activity logs. |
| NFR-03 | Scalability | Support high visitor volumes without performance loss. |
| NFR-04 | Data Privacy | Compliance with GDPR, CCPA, and regional data policies. |
| NFR-05 | Reliability | 99.9% uptime SLA for enterprise customers. |

## 3. In Scope and Out of Scope

### 3.1 In scope

| Area | Requirements | PRD sections |
| --- | --- | --- |
| Experimentation and testing | FR1, FR2, FR3, FR5, FR6 | 4.1, 5.1 |
| Behavioral insights | FR4 | 4.2, 5.2 |
| Personalization | FR7 | 4.3 |
| Integrations (named platforms only) | FR8 | 4.1, 4.5 |
| Program and workflow management | FR9 | 4.4 |
| Non-functional | NFR-01 to NFR-05 | 7 |
| End-to-end user flows | FR1–FR6 | 5.1, 5.2 |

Integrations in scope are limited to the platforms the PRD names: Google Analytics, Mixpanel, Shopify, Salesforce, Segment, Snowflake, WordPress, and Drupal.

**Features described in the PRD without an FR ID.** PRD Section 4.2 lists *on-page surveys and feedback* and *funnel analytics*, but FR4 covers only heatmaps and session recordings. This plan includes both features in scope, referenced as "PRD 4.2 (no FR ID)". Confirmation is requested in open question OQ-02.

### 3.2 Out of scope

| Item | Reason |
| --- | --- |
| PRD Section 11, Future Enhancements (AI suggestion engine, mobile SDK enhancements, predictive analytics and ROI forecasting) | Not current requirements; no FR or NFR |
| PRD Section 9, Pricing and Licensing (plan tiers, billing) | No FR or NFR; no rules supplied |
| Third-party integrations not named in the PRD ("CDPs and analytics systems", "tracking and reporting tools") | Platforms not identified |
| Internal behavior of third-party platforms | Outside the system under test; only the VWO side of each connector is tested |
| Component testing and component integration testing | **Proposed** as the development team's responsibility; this plan covers system level and above |
| Usability and accessibility testing | No requirement in the PRD |
| Testing on the production environment (`https://app.vwo.com/`) | Agreed environment is dedicated QA/staging |
| Login, registration, and password rules beyond NFR-02 | Not specified in the PRD |
| Legal determination of GDPR/CCPA compliance | A legal and compliance function decision; testing supplies evidence only |

## 4. Requirements and Planned Coverage

Coverage is planned as **test conditions at feature level**. The PRD contains no acceptance criteria, so test cases and expected results cannot be derived until acceptance criteria are supplied (entry criterion EN-02).

Risk level is **Proposed**. It is derived from likelihood and impact, using the PRD priority as the impact input. The PRD does not define its priority scale (Must / High / Medium).

### 4.1 Functional requirements

| Req ID | Feature (PRD priority) | Planned test conditions (from PRD) | Product risk | Risk level (Proposed) | Test levels | Test techniques |
| --- | --- | --- | --- | --- | --- | --- |
| FR1 | A/B, Split and Multivariate Testing (Must) | Define A/B, Split URL, and Multivariate experiments; multiple variations per experiment; launch and monitor; scheduling; version preview | Experiments cannot be created or launched, or visitors receive the wrong variation | High | System, Acceptance | Use-case testing (flow 5.1), equivalence partitioning, boundary value analysis on variation counts, state transition testing on experiment status |
| FR2 | SmartStats Engine (Must) | Bayesian analysis produced for test results; results statistically validated; winner can be concluded | Incorrect statistics lead customers to wrong business decisions (PRD risk: Data Accuracy Challenges) | High | System | Comparison against an independent reference calculation on controlled datasets. **Test oracle: Not provided** (OQ-03) |
| FR3 | Visual and Code Editor (Must) | WYSIWYG configuration of variations; developer-level (code) configuration of variations | Variation changes are not saved or not applied as configured | High | System | Use-case testing, exploratory testing, error guessing |
| FR4 | Heatmaps and Session Recordings (Must) | Click, scroll, and focus heatmaps; session recordings captured and available | User interactions are not captured or are captured inaccurately | High | System | Equivalence partitioning by heatmap type, exploratory testing, use-case testing (flow 5.2) |
| PRD 4.2 (no FR ID) | On-page surveys and feedback; funnel analytics | Surveys and feedback collected; funnels set and drop-off points identified | Drop-off points misreported | Medium | System | Use-case testing (flow 5.2), exploratory testing |
| FR5 | Audience Targeting (High) | Segmentation based on behaviors and attributes; audience segment selected for an experiment | Experiment or experience delivered to the wrong audience | High | System | Decision table testing on targeting rule combinations, equivalence partitioning |
| FR6 | Real-time Reporting and Dashboards (Must) | Up-to-date experiment analytics; actionable reports generated | Reports are stale or inconsistent with collected data. **"Real-time" latency: Not provided** (OQ-04) | High | System | Data reconciliation between generated traffic and reported values, exploratory testing |
| FR7 | Personalization Engine (High) | Segment users by geography, behavior, demographics; deliver customized content in real time | Tailored experience shown to the wrong segment or not shown | Medium | System | Decision table testing, equivalence partitioning |
| FR8 | Integration Connectors (High) | Data synced with each named platform; analytics integration (Google Analytics, Mixpanel) | Data not synced, synced incompletely, or duplicated. **Sync direction, fields, and frequency: Not provided** (OQ-05) | High | System integration | Interface testing per connector, negative testing for unavailable third party, error guessing |
| FR9 | Collaboration and Workflow Management (Medium) | Central planning interface; collaboration tools; Kanban-style experiment backlog | Planning data lost or not shared across team members | Medium | System | Use-case testing, state transition testing on backlog items, exploratory testing |

### 4.2 Non-functional requirements

| Req ID | Requirement | Planned test conditions | Test type | Limits and missing inputs |
| --- | --- | --- | --- | --- |
| NFR-01 | Response within 2 seconds for editing workflows | Measure response time of editing actions against the 2-second threshold | Performance testing | List of "editing workflows", measurement point, percentile, and load conditions: **Not provided** (OQ-06) |
| NFR-02 | 2FA, role-based access control, activity logs | 2FA enforced at authentication; each role limited to its permitted actions; user actions recorded in activity logs | Security testing (functional security and vulnerability scanning) | Role list, permission matrix, 2FA method, and logged events: **Not provided** (OQ-07) |
| NFR-03 | High visitor volumes without performance loss | Load and scalability testing at agreed volumes | Performance testing (load, scalability) | Visitor volume target and definition of "performance loss": **Not provided** (OQ-08). No number is assumed |
| NFR-04 | GDPR, CCPA, and regional data policies | Verify the product capabilities that support privacy obligations, once those capabilities are specified | Compliance-related functional testing | Specific capabilities and "regional data policies": **Not provided** (OQ-09) |
| NFR-05 | 99.9% uptime SLA for enterprise customers | Recovery and failover behavior, where the architecture allows | Reliability testing | An uptime percentage cannot be demonstrated within a test cycle; it is measured through operational monitoring over the SLA period. Measurement period and architecture: **Not provided** (OQ-10) |

### 4.3 Cross-cutting coverage

| Area | Source | Planned coverage |
| --- | --- | --- |
| Cross-browser and cross-device | PRD 4.1 ("cross-device/cross-browser QA") | Compatibility testing on the Proposed matrix in Section 6.3 |
| End-to-end flow 5.1 | PRD 5.1 | One scenario covering hypothesis and metrics, audience, variations, launch, and SmartStats review |
| End-to-end flow 5.2 | PRD 5.2 | One scenario covering Insights dashboard, heatmaps, recordings, funnels, and correlation with test outcomes |

## 5. Test Approach, Levels, and Types

### 5.1 Approach

**Risk-based testing.** Test design and execution effort is prioritized by the risk levels in Section 4. High-risk requirements (FR1, FR2, FR3, FR4, FR5, FR6, FR8) are designed and executed first. Risk levels are reviewed when acceptance criteria are supplied and at each reporting cycle.

Test activities follow the ISTQB test process: test planning, monitoring and control, analysis, design, implementation, execution, and completion.

Static testing: the PRD and the future acceptance criteria are reviewed before test design. The gaps found during the review of the PRD are recorded as open questions in Section 10.4.

### 5.2 Test levels

| Test level | In this plan | Responsibility |
| --- | --- | --- |
| Component testing | No | Development team (**Proposed**) |
| Component integration testing | No | Development team (**Proposed**) |
| System testing | Yes: FR1–FR7, FR9, NFR-01 to NFR-05 | Test team |
| System integration testing | Yes: FR8 with each named third-party platform | Test team |
| Acceptance testing | Yes: user acceptance testing of flows 5.1 and 5.2 | Business stakeholders, supported by the test team (**Proposed**) |

### 5.3 Test types

| Test type | Applies to | Notes |
| --- | --- | --- |
| Functional testing | FR1–FR9, PRD 4.2 features | Black-box, based on the PRD and future acceptance criteria |
| Performance testing | NFR-01, NFR-03 | Blocked until thresholds and volumes are supplied (OQ-06, OQ-08) |
| Security testing | NFR-02 | 2FA, access control per role, activity log content; vulnerability scanning on the QA/staging environment only |
| Compatibility testing | PRD 4.1 | Browser and device matrix in Section 6.3 |
| Reliability testing | NFR-05 | Recovery and failover only; see limits in Section 4.2 |
| Confirmation testing | All | Re-execution of the failed test after each defect fix |
| Regression testing | All | Regression suite run on each new build; automation **Proposed** for stable, high-risk scenarios |

### 5.4 Test techniques

| Category | Techniques |
| --- | --- |
| Black-box | Equivalence partitioning, boundary value analysis, decision table testing, state transition testing, use-case testing |
| Experience-based | Exploratory testing (session-based, with charters), error guessing, checklist-based testing |

State transition testing requires the experiment and backlog item states, which the PRD does not define (OQ-11).

### 5.5 Automation approach (Proposed)

- Smoke suite and regression suite for stable, high-risk scenarios automated at UI level.
- Integration checks for FR8 automated at API level where an API is available. **API specifications: Not provided.**
- Tests remain manual until the feature is stable and acceptance criteria are baselined.

## 6. Environment, Tools, Access, and Test Data

### 6.1 Environment

| Item | Value |
| --- | --- |
| Environment type | Dedicated QA/staging (agreed) |
| Environment URL | Not provided |
| Build and deployment process | Not provided |
| Controlled target website on which experiments, heatmaps, and recordings can run | Not provided (dependency D-02) |
| Third-party sandbox accounts for the eight named platforms | Not provided (dependency D-03) |
| Load-test capable environment sized for NFR-03 | Not provided |

### 6.2 Tools (Proposed, pending agreement)

| Purpose | Proposed tool |
| --- | --- |
| Test management and defect tracking | Jira |
| UI test automation | Playwright with TypeScript |
| API testing | Postman |
| Performance testing | Apache JMeter |
| Security vulnerability scanning | OWASP ZAP |

Tool versions and licences: Not provided.

### 6.3 Browsers and devices (Proposed, pending agreement)

| Platform | Browser | Version |
| --- | --- | --- |
| Windows desktop | Chrome, Firefox, Edge | Latest stable |
| macOS desktop | Chrome, Firefox, Safari | Latest stable |
| Android | Chrome | Latest stable |
| iOS | Safari | Latest stable |

Mobile platforms are proposed for visitor-facing experiment rendering. Operating system versions and physical device models: Not provided.

### 6.4 Access

| Item | Value |
| --- | --- |
| Test accounts per user role | Not provided; one account per role required for NFR-02 |
| 2FA mechanism for test accounts | Not provided |
| Credentials handling | Stored in an approved secret mechanism or environment variables; never in test scripts, test cases, or defect reports |

### 6.5 Test data

- Synthetic data only. No real customer or visitor personal data is used, including in session recordings and surveys.
- Simulated visitor traffic with known, controlled conversion counts, so that reported values (FR6) and SmartStats results (FR2) can be compared with expected values.
- Datasets for audience segments by geography, behavior, and demographics (FR5, FR7).
- Data volumes for NFR-03: Not provided.

## 7. Entry and Exit Criteria

All thresholds in this section are **Proposed** and require stakeholder agreement.

### 7.1 Entry criteria

| ID | Criterion |
| --- | --- |
| EN-01 | This test plan is reviewed and approved. |
| EN-02 | Acceptance criteria for the requirements in the test cycle are baselined. |
| EN-03 | The QA/staging environment is available and its URL is supplied. |
| EN-04 | The build is deployed and the smoke test passes. |
| EN-05 | Test accounts for each role, with 2FA, are provisioned. |
| EN-06 | Test data and the controlled target website are available. |
| EN-07 | Third-party sandbox accounts are available for the connectors in the test cycle. |
| EN-08 | Test cases for the test cycle are designed and reviewed. |
| EN-09 | Tools in Section 6.2 are agreed and accessible. |

### 7.2 Exit criteria

| ID | Criterion (Proposed threshold) |
| --- | --- |
| EX-01 | All planned test cases for Must priority requirements are executed. |
| EX-02 | At least 95% of planned test cases for High and Medium priority requirements are executed. |
| EX-03 | No open defects of Critical or High severity. |
| EX-04 | Open Medium and Low severity defects are reviewed and accepted by the Product Owner. |
| EX-05 | Every FR and NFR in scope has at least one executed test case, or a documented reason why it could not be tested. |
| EX-06 | NFR-01 is measured and meets the 2-second threshold under the agreed conditions. |
| EX-07 | The regression suite is executed on the release candidate build with no unresolved failures. |
| EX-08 | The test completion report is delivered and residual risks are accepted by the approvers. |

## 8. Roles, Responsibilities, Estimates, and Schedule

### 8.1 Roles and responsibilities

Responsibilities are defined by role. Named individuals and headcount: **Not provided.**

| Role | Responsibilities |
| --- | --- |
| Test Manager | Owns this plan; test monitoring and control; risk review; progress and completion reporting; exit criteria assessment |
| Test Analyst | Test analysis and design; test data definition; manual and exploratory test execution; defect reporting |
| Test Automation Engineer | Automation of smoke and regression suites; maintenance of automated tests |
| Performance Test Engineer | Design and execution of tests for NFR-01 and NFR-03 |
| Security Tester | Design and execution of tests for NFR-02 |
| Development Team | Component and component integration testing; defect analysis and fixes; build delivery |
| Product Owner | Supplies acceptance criteria; answers open questions; defect prioritization; acceptance of residual risk |
| DevOps / Environment Owner | Provides and maintains the QA/staging environment, deployments, and third-party sandbox connectivity |
| Business Stakeholders | User acceptance testing of flows 5.1 and 5.2 |

### 8.2 Estimates

**Not provided.** Test effort cannot be estimated until acceptance criteria are baselined (EN-02) and team size is known. Proposed estimation technique once inputs are available: three-point estimation per requirement.

### 8.3 Schedule

**Not provided.** Start date, end date, milestones, and release cadence have not been supplied (OQ-01).

## 9. Defect Management and Reporting

### 9.1 Defect report content

Bug ID | Title | Environment | Preconditions | Test Data | Steps to Reproduce | Expected Result | Actual Result | Evidence | Severity | Priority | Reproduction Status

Each defect report references the requirement ID and the failed test case ID.

### 9.2 Defect workflow (Proposed)

New → Triaged → Assigned → Fixed → Ready for Retest → Closed

Alternative outcomes: Reopened (confirmation test fails), Rejected (not a defect), Deferred (accepted for a later release), Duplicate.

### 9.3 Severity and priority (Proposed definitions)

| Severity | Definition |
| --- | --- |
| Critical | A Must priority feature is unusable, data is lost or corrupted, or a security control fails, with no workaround |
| High | A major function fails or produces incorrect results; a workaround is difficult or absent |
| Medium | A function fails partially; a reasonable workaround exists |
| Low | Cosmetic issue or minor inconvenience with no functional impact |

Severity is proposed by the tester. Priority (order of fixing) is set by the Product Owner during triage.

### 9.4 Triage (Proposed)

Daily triage meeting during test execution, attended by the Test Manager, Product Owner, and a development representative.

### 9.5 Test reporting

| Report | Frequency (Proposed) | Audience | Content |
| --- | --- | --- | --- |
| Test progress report | Weekly, and daily during execution | Product Owner, Development Team | Test cases planned / executed / passed / failed / blocked; requirement coverage; defects by severity and status; risks and blockers |
| Test completion report | At the end of each test cycle | Approvers | Exit criteria assessment, unresolved defects, residual risks, deviations from this plan, lessons learned |

## 10. Risks, Dependencies, Assumptions, and Open Questions

### 10.1 Product risks

Product risks per requirement are listed in Section 4. The highest proposed risks are:

| ID | Product risk | Requirement | Mitigation through testing |
| --- | --- | --- | --- |
| PR-01 | Incorrect statistical results | FR2 | Reference calculation on controlled datasets, once a test oracle is agreed |
| PR-02 | Visitors assigned to the wrong variation or segment | FR1, FR5, FR7 | Decision table testing on targeting rules with controlled traffic |
| PR-03 | Reported data inconsistent with collected data | FR4, FR6 | Data reconciliation between generated traffic and reported values |
| PR-04 | Data loss or duplication in third-party sync | FR8 | Interface and negative testing per connector |
| PR-05 | Unauthorized access to features or data | NFR-02 | Access control testing per role |

### 10.2 Project risks

| ID | Project risk | Impact | Mitigation |
| --- | --- | --- | --- |
| PJ-01 | Acceptance criteria are not supplied | Test cases and expected results cannot be designed | EN-02 as entry criterion; escalate to Product Owner |
| PJ-02 | Non-functional thresholds remain unquantified | NFR-03 cannot be tested; NFR-01 cannot be tested reproducibly | Resolve OQ-06 and OQ-08 before the performance test cycle |
| PJ-03 | Third-party sandbox accounts are unavailable | FR8 partly or fully blocked | Request accounts early; report affected connectors as untested |
| PJ-04 | No test oracle for SmartStats | FR2 results cannot be judged correct or incorrect | Resolve OQ-03; involve a data analyst |
| PJ-05 | QA/staging environment unstable or unlike production | Invalid results, especially for performance | Smoke test on each build; document environment differences |
| PJ-06 | Team, schedule, and estimates are undefined | Scope may exceed capacity | Risk-based prioritization; agree scope reduction rules when the schedule is known |
| PJ-07 | Statistical experiments need elapsed time or traffic volume to reach a result | Long test cycles | Use simulated traffic with controlled volumes |

### 10.3 Dependencies

| ID | Dependency | Owner |
| --- | --- | --- |
| D-01 | QA/staging environment and deployments | DevOps / Environment Owner |
| D-02 | Controlled target website for experiments and behavior capture | Not provided |
| D-03 | Sandbox accounts for Google Analytics, Mixpanel, Shopify, Salesforce, Segment, Snowflake, WordPress, Drupal | Not provided |
| D-04 | Acceptance criteria and answers to open questions | Product Owner |
| D-05 | Traffic simulation capability | Not provided |

### 10.4 Assumptions

Confirmed by the requester:

- Scope is the full platform: FR1–FR9 and the five NFRs.
- Testing runs on a dedicated QA/staging environment from an internal QA perspective.
- Team, schedule, and estimates are left as Not provided.
- Tools and the browser and device matrix are proposals.

Proposed, requiring agreement:

- Component and component integration testing are performed by the development team.
- On-page surveys, feedback, and funnel analytics (PRD 4.2) are in scope although they have no FR ID.
- The local IDs NFR-01 to NFR-05 are acceptable for traceability.

### 10.5 Open questions

| ID | Question | Affects |
| --- | --- | --- |
| OQ-01 | What are the team size, start and end dates, and release cadence? | Section 8 |
| OQ-02 | Are on-page surveys, feedback, and funnel analytics in scope, and under which requirement ID? | Section 3, Section 4 |
| OQ-03 | What is the test oracle for SmartStats (formulas, priors, reference datasets, tolerance)? | FR2 |
| OQ-04 | What data latency does "real-time" mean for reporting? | FR6 |
| OQ-05 | For each connector: sync direction, data fields, frequency, and error handling? | FR8 |
| OQ-06 | Which actions are "editing workflows", and under what load and percentile does the 2-second limit apply? | NFR-01 |
| OQ-07 | What are the user roles, the permission matrix, the 2FA method, and the events written to activity logs? | NFR-02 |
| OQ-08 | What visitor volume is "high", and what counts as "performance loss"? | NFR-03 |
| OQ-09 | Which product capabilities implement GDPR and CCPA obligations, and which "regional data policies" apply? | NFR-04 |
| OQ-10 | Over what period is uptime measured, and who owns the measurement? | NFR-05 |
| OQ-11 | What are the experiment lifecycle states and the Kanban backlog states? | FR1, FR9 |
| OQ-12 | What are the limits on variations per experiment and other input fields? | FR1, boundary value analysis |
| OQ-13 | What is the QA/staging URL, and who provides the target website and third-party sandbox accounts? | Section 6 |

## 11. Suspension and Resumption Criteria

### 11.1 Suspension criteria (Proposed)

| ID | Criterion |
| --- | --- |
| SU-01 | The smoke test fails on a delivered build. |
| SU-02 | The QA/staging environment is unavailable or unstable to the extent that results are unreliable. |
| SU-03 | A Critical defect blocks execution of more than 30% of the remaining planned test cases. |
| SU-04 | Test data or test accounts are corrupted or unavailable. |
| SU-05 | A third-party sandbox is unavailable (suspends testing of the affected connector only). |

### 11.2 Resumption criteria (Proposed)

| ID | Criterion |
| --- | --- |
| RE-01 | A new build is deployed and the smoke test passes. |
| RE-02 | The environment is restored and confirmed stable by the Environment Owner. |
| RE-03 | The blocking defect is fixed and its confirmation test passes. |
| RE-04 | Test data and test accounts are restored. |
| RE-05 | The third-party sandbox is available again. |

On resumption, the regression suite is run for the areas affected by the fix before the remaining tests continue.

## 12. Test Deliverables and Approval

### 12.1 Test deliverables

| Deliverable | When |
| --- | --- |
| Test plan (this document) | Before test analysis |
| Requirement and risk coverage matrix (Section 4, extended to test case level) | Test design |
| Test conditions and test cases | Test design, after acceptance criteria are baselined |
| Test data and environment requirements | Test implementation |
| Automated smoke and regression suites | Test implementation |
| Defect reports | Test execution |
| Test execution logs | Test execution |
| Test progress reports | During execution |
| Test completion report | Test completion |

### 12.2 Approval

| Role | Name | Decision | Date |
| --- | --- | --- | --- |
| Test Manager | Not provided | Pending | |
| Product Owner | Not provided | Pending | |
| Development Lead | Not provided | Pending | |
| Business Stakeholder | Not provided | Pending | |
