## Setup

### Prerequisites

Before running the project, ensure these are installed:

* [Node.js](https://nodejs.org/) version 20.19+ or 22.12+
* npm, which is included with Node.js
* Git

You can confirm installion by running:

```bash
node -v
npm -v
```

### Installation

1. Clone repository:

```bash
git clone https://github.com/sleepingtuna/cyberfocus.git
```

2. Move into proper directory:

```bash
cd cyberfocus
```

3. Install dependencies:

```bash
npm install
```

4. Start development server:

```bash
npm run dev
```

5. Open the local URL in your browser. This is:

```text
http://localhost:5173
```

### Build for Production

To create a production build:

```bash
npm run build
```

Vite will generate the production files inside:

```text
dist/
```

You can locally preview the production build with:

```bash
npm run preview
```
