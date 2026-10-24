This repository is a ReactJS project using TypeScript and Tanstack Router.
You have access to RemedaJS for utility functions.
Unless asked, do not run tests or typecheck after making code changes. The feedback loop is faster if the developer can see your changes in the browser quickly.

We use Shadcn for the React component library, unless asked otherwise you must write simple idiomatic Shadcn and tailwind.

Noteworthy files:

- `src/routes/index.tsx` - This is the root route and also where the state lives. All state that is not Shadcn UI only should live here using search params from Tanstack Router.
- `src/employees.ts` - All data lives here. It is completely static. So employee names or teams will never be updated. Use the getEmployeesByIds() function to look up employees.
