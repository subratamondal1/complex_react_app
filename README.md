<h1 align="center">COMPLEX REACT APP</h1>

<p align="center">Implementation of the Core Functionalities of a Social Media App</p>

<h2 align="left">Notes</h2>

```bash
src/
├── App.tsx
├── _auth # contains public pages
│   ├── AuthLayout.tsx # wrapper
│   └── forms
│       ├── SignInForm.tsx
│       └── SignUpForm.tsx
├── _root # contains private pages
│   ├── RootLayout.tsx # wrapper
│   └── pages
│       ├── Home.tsx
│       └── index.ts
├── index.css
└── main.tsx
```

* `_auth` folder contains **public** pages.
* `_root` folder contains **private** pages.

* `AuthLayout.tsx` wraps both the `SignInForm.tsx` and `SignUpForm.tsx`.