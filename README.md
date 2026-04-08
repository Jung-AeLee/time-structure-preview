# React Temporal Task System

A React-based task system focused on **temporal state flow and history tracking**.

This project explores state as a **time-based structure**, enabling undo/redo functionality through a history stack model.

---

## Key Features

- Custom hook architecture (extensible design)
- State history (undo / redo)
- Temporal UI rendering (state changes over time)
- Immutable state transitions
- Centralized state control

---

## Project Structure

```bash
src/
├── components/
│ ├── Todos.jsx # Main state container
│ ├── TodosForm.jsx # Input component
│ └── TodoItem.jsx # Individual todo item
└── hooks/ useUndoRedo.js # (optional) custom hook for history
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd react-todo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

### 4. Open in browser

http://localhost:5173

---

## Core Concept

This system treats application state as a temporal sequence, not just a static value.

State Model
past     → previous states
present  → current state
future   → redo states

State Flow
Action → past.push(present) → present updated → future cleared

### State Timeline Visualization

```bash
[ Past Stacks ]  <---  ( Present )  --->  [ Future Stacks ]
   [t-2, t-1]            [ t ]               [t+1, t+2]
      ↑                    |                    ↑
    Undo                 Current               Redo
```

### Core State Principles

- **Immutable State Transitions**  
  State updates are performed using React’s functional update pattern (`setState((prev) => ...)`) and the spread operator (`...`) to ensure immutability.  
  This guarantees that the original state is never mutated, preserving predictable state transitions and enabling reliable history tracking.

- **Functional Updates**  
  Functional updates are used to ensure data consistency in asynchronous environments.  
  By deriving the next state from the previous state, the system avoids race conditions and maintains a consistent state even when multiple updates are queued.

---

## Undo / Redo Logic

Undo
- Moves current state → future
- Restores last state from past

Redo
- Moves current state → past
- Restores next state from future

---

## Design Philosophy

This project is built on the idea that:

### “State is not static — it is a timeline.”

Instead of overwriting state, we preserve its evolution as a structured history.

---

## Future Improvements

Time-based navigation (timeline slider)
Persistent history (localStorage / backend)
Advanced state compression
Visualization of state transitions

---

## Author

Jungae Lee
Korea National University of Arts
jungae1000@karts.ac.kr

## License

This repository is released under the LOST Preview License.
See LICENSE file for details.

------------

## Related Work

https://bit.ly/Interpreted

```text
TEMPORAL_TASK Preview License
Copyright (c) 2026 Jung-Ae Lee

This repository is provided for architectural demonstration and educational purposes only.

Permission is granted to:
- View and study the source code.
- Modify the code for personal, non-commercial experimentation.
- Use the code for educational reference.

The following are NOT permitted without explicit written permission:
- Commercial redistribution of this repository or its derivatives.
- Resale of the source code in whole or in part.
- Use of this repository as a production-ready commercial product.
- Republishing the code as part of another commercial framework or engine.

This repository represents a structural preview of the TEMPORAL_TASK framework.

The production-ready distributed version,
including optimized performance modules,
audio integration layers,
and extended renderer implementations,
is released separately under a commercial license.

For commercial licensing inquiries:
Contact: postinsight@naver.com jungae1000@karts.ac.kr

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.
```

## Distribution Model

The commercial distribution contains modules and optimizations that are not included in this repository.
https://insightful3530.gumroad.com/l/TemporalTask


