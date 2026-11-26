# Code Review Checklist
 
## 0. Prerequisites (before the review)
 
- [ ] The code is reviewed by someone who **did not write it**
- [ ] The change is small enough to be reviewed meaningfully
- [ ] The merge/pull request description explains **what** was changed and **why**
- [ ] The change is linked to the requirement/ticket
## 1. Functionality
 
- [ ] The code fulfills the requirement and its acceptance criteria
- [ ] The logic is correct (no off-by-one errors, wrong comparisons, swapped variables)
- [ ] Edge cases are handled (empty input, `null`, boundary values, large data volumes)
- [ ] Errors and exceptions are handled sensibly and not silently swallowed
- [ ] There are no unintended side effects on existing functionality
- [ ] Resources (files, connections, memory) are released correctly
## 2. Readability and Understandability
 
- [ ] Names of variables, functions, and classes are meaningful
- [ ] Functions and classes have a clearly defined responsibility
- [ ] The code is understandable without lengthy explanation
- [ ] No commented-out code, forgotten debug output, or TODOs without a ticket
- [ ] Magic numbers and strings are replaced by constants
## 3. Structure and Design
 
- [ ] The code follows the agreed conventions and the project's architecture
- [ ] No unnecessary duplication (DRY)
- [ ] The solution is as simple as possible (no unnecessary complexity or over-abstraction)
- [ ] Dependencies are sensible and necessary
- [ ] New functionality is located in the appropriate place in the codebase
## 4. Tests
 
- [ ] Tests exist for new or changed functionality
- [ ] Tests also cover edge cases and error cases
- [ ] All tests pass (locally and in CI)
- [ ] Tests are understandable and independent of each other
- [ ] Existing tests were not removed or weakened without good reason
## 5. Documentation
 
- [ ] Public interfaces are documented
- [ ] README, changelog, or other documentation is updated where needed
- [ ] Special decisions or limitations are recorded in a traceable way
## 6. Security and Robustness
 
- [ ] Input is validated (e.g. protection against injection)
- [ ] No passwords, tokens, or other credentials in the code or version control
- [ ] Sensitive data is not logged or output unnecessarily
- [ ] New dependencies are trustworthy and up to date
## 7. Performance
 
- [ ] No obviously inefficient loops, queries, or repeated computations
- [ ] Resource consumption is appropriate for the use case
## 8. Knowledge Sharing
 
- [ ] Questions of understanding were asked and answered
- [ ] Unclear parts were clarified in the code or documentation, not just in the discussion
- [ ] The team knows what changed and why after the review
## 9. Handling Feedback
 
**Giving feedback**
 
- [ ] Constructive and objective, about the code, not the person
- [ ] Phrased as a question or suggestion ("What do you think about …?" instead of "That's wrong.")
- [ ] Explains why something should be changed
- [ ] Distinguishes important issues (bugs, risks) from matters of taste (nitpicks)
- [ ] Positive aspects are mentioned as well

**Receiving feedback**
 
- [ ] Suggestions for improvement are understood as help, not as criticism of the person
- [ ] Every comment is answered, addressed, or declined with a reason
- [ ] In case of disagreement, a solution is found through discussion or within the team
## 10. Wrap-up
 
- [ ] All comments are resolved or discussed
- [ ] The CI pipeline is green
- [ ] The reviewer has approved the change
- [ ] The change has been merged, and the branch is deleted if appropriate
