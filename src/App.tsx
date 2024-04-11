import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";

// import Dashboard from "./pages/dashboard"
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Customers = lazy(() => import("./pages/Customers"));
const Products = lazy(() => import("./pages/Products"));
const Transactions = lazy(() => import("./pages/Transactions"));

const App = () => {
    return (
        <Router>
           <Suspense fallback={<Loader/>}>
           <Routes>
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/customer" element={<Customers />} />
                <Route path="/admin/product" element={<Products />} />
                <Route path="/admin/transaction" element={<Transactions />} />
            </Routes>
           </Suspense>
        </Router>
    );
};

export default App;
