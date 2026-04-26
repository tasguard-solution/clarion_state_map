# How to Write a PR Summary for Data Lorry

We use structured PR summaries to keep reviews clear and focused. Use this format when submitting pull requests.

---

## PR Summary Template

Copy and paste this into your PR description:

```markdown
# PR Summary: [Feature/Fix Name]

## Overview
[1-2 sentences explaining what this PR does and why. What problem does it solve or what capability does it add?]

## Changes

### [Section Name 1] (e.g., "API Endpoints", "State Management", "UI Components")
- **File(s)**: Brief description of what changed
- **Key detail**: Specific change and its purpose
- **Related change**: How it connects to other parts of the PR

### [Section Name 2]
- [Repeat format above]

## Affected Files
List all files modified in bullet points:
- `path/to/file1.ts`
- `path/to/file2.tsx`
- `path/to/file3.css`

## Design Decisions / Notes
[Optional: Explain *why* you made certain architectural choices, tradeoffs, or important context for reviewers. Skip if the changes are straightforward.]

## Testing Suggestions
- [How a reviewer should test this feature]
- [Edge cases or specific user flows to verify]
- [Any manual testing steps needed]

## Related Issues
Closes #[issue number] (if applicable)
```

---

## Writing Tips

### Be Specific, Not Generic
❌ **Bad**: "Fixed bugs and improved code"  
✅ **Good**: "Fixed race condition in DM room initialization by debouncing state updates"

### Explain the *Why*, Not Just the *What*
The diff already shows *what* changed. Your summary should explain:
- **Why** this change was needed
- **What problem** it solves
- **How** it fits into the bigger picture

### Organize by Feature, Not by File
Don't just list "modified StateDataPage.tsx, LGAInfoPanel.tsx, …"  
Instead: group changes by functionality:
- "Year Navigation UI" (touches 2 files)
- "Archive Data Integration" (touches 3 files)

### Keep Sections Short
Use bullet points and short sentences. Reviewers are busy.

### Testing Section is Key
Be explicit about what needs to be tested:
- ✅ "Click any LGA on the 2023 map → panel updates"
- ✅ "Use left/right arrows to jump between years → correct data loads"
- ✅ "Test on mobile: map should not overflow"

### For Small Changes
Still use the template, but sections can be brief:
```markdown
# PR Summary: LGAMap CSS Refinements

## Overview
Minor CSS improvements to increase map visibility and normalize spacing.

## Changes
- **LGAMap.css**: Increased SVG max-height from 280px to 550px for better interaction
- Normalized `drop-shadow()` spacing: `rgba(0,0,0,0.4)` → `rgba(0, 0, 0, 0.4)`
- Removed trailing newline

## Impact
- No functional changes; purely visual
- UX improvement: larger, easier-to-interact-with map
```

---

## Examples from Data Lorry

### Example 1: Feature PR
```markdown
# PR Summary: Add Historical Election Data & Year Navigation

## Overview
Extends the explorer with historical election browsing (pre-2023) + temporal navigation, 
allowing users to compare elections across multiple years.

## Changes

### Routing & Year State
- **App.tsx**: Added `/explore/:stateId/:category/:year` route
- **StateDataPage**: Introduced `selectedYear` state, left/right navigation arrows

### Conditional Rendering
- **StateDataPage sidebar**: Shows LGA list (2023) or state aggregate stats (archive years)
- **LGAInfoPanel**: Conditionally renders granular vs. aggregate data based on year

### Data Layer
- New `HISTORICAL_DATA` import for archive records (structure: `{ year: { stateId: {...} } }`)

## Affected Files
- `frontend/src/App.tsx`
- `frontend/src/pages/StateDataPage.tsx`
- `frontend/src/components/explore/LGAInfoPanel.tsx`

## Design Decisions
- 2023 is the default year for backward compatibility
- Archive data only provides state-wide aggregates (granular LGA data unavailable pre-2023)
- Year selection is centralized in StateDataPage and passed to child components

## Testing Suggestions
- Navigate between years using arrows and dropdown
- Verify LGA-specific data loads for 2023
- Confirm archive view handles missing LGA data gracefully
- Test URL: `/explore/lagos/presidential/2019` should load Lagos, 2019 data
```

### Example 2: Bug Fix PR
```markdown
# PR Summary: Fix Mixed Content Error in FastAPI Redirects

## Overview
Resolved production bug where FastAPI redirects force HTTP in HTTPS environments, 
breaking mixed-content policies and breaking LGA room link sharing.

## Changes
- **FastAPI middleware**: Updated redirect handler to detect and preserve request scheme
- **LGAInfoPanel**: Added error boundary for failed room navigation
- **Config**: Clarified ALLOWED_ORIGINS for development vs. production

## Affected Files
- `backend/app/middleware.py`
- `backend/app/routes/lga_rooms.py`
- `frontend/src/components/explore/LGAInfoPanel.tsx`

## Impact
- 🐛 Fixes: Users can now share LGA room links without browser security errors
- ✅ Backward compatible: No API changes

## Testing
- Share an LGA room link from HTTPS domain → should work in recipient's browser
- Check browser console: no "mixed content" warnings
- Dev environment still works normally on localhost:3000
```

### Example 3: Refactor PR
```markdown
# PR Summary: Modularize Election Data Processing

## Overview
Extracted election data logic into reusable utilities to reduce component bloat 
and make the codebase easier to test and maintain.

## Changes
- **New**: `src/utils/electionDataProcessing.ts` with exported functions:
  - `formatElectionResult()`: Normalize INEC JSON into consistent shape
  - `calculateVotePercentage()`: Compute party vote shares
  - `getRankingsByState()`: Sort states by winning party
- **Refactored**: LGAInfoPanel, StateDataPage to use these utilities
- **Removed**: Inline calculations scattered across components

## Affected Files
- `frontend/src/utils/electionDataProcessing.ts` (new)
- `frontend/src/components/explore/LGAInfoPanel.tsx`
- `frontend/src/pages/StateDataPage.tsx`

## Design Decisions
- Utilities are pure functions (no side effects) for testability
- Kept data transformations in utils, UI logic in components

## Testing
- Existing component behavior unchanged (no visual/interaction changes)
- New utils have 100% test coverage in `__tests__/electionDataProcessing.test.ts`
```

---

## Checklist Before Submitting

- [ ] PR title is clear and concise (e.g., "Add year navigation to election explorer")
- [ ] Summary explains *why* the change matters, not just what changed
- [ ] Changes are organized by feature, not by file
- [ ] Affected files are listed
- [ ] Testing suggestions are specific and actionable
- [ ] If UI changed, mention visual/UX impact
- [ ] If there's a tradeoff or design decision, explain it
- [ ] Linked to related issue if applicable

---

## Questions?

If your PR doesn't fit this template (e.g., it's a one-line typo fix), use your best judgment—shorter PRs need shorter summaries. But the structure should still be recognizable.
