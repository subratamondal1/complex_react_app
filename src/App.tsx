import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public Routes: Anyone can access */}
        <Route
          path="/sign-in"
          element={<SignInForm />}
        />

        {/* Private Routes: Requires Sign In  */}
        <Route
          index
          element={<Home />}
        />
      </Routes>
    </main>
  );
};

export default App;
