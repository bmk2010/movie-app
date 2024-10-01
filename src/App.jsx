import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Auth";
import Home from "./pages/Home";
import SmsPage from "./pages/Sms";
import ProfilePage from "./pages/Profile";
import SeansPage from "./pages/seans";
import DetailPage from "./pages/Detail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="max-w-[1360px] w-full mx-auto">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/login/sms" element={<SmsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/seans" element={<SeansPage />} />
            <Route path="/:id" element={<DetailPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
