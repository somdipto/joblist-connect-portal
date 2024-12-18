import { JobListingForm } from "@/components/JobListingForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-semibold text-primary">
            Job Portal
          </Link>
          <Button asChild variant="outline">
            <Link to="/jobs">Find Jobs</Link>
          </Button>
        </div>
      </nav>
      <div className="container py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">Post a Job</h1>
            <p className="text-lg text-gray-600">
              Create your job listing and reach thousands of qualified candidates
            </p>
          </div>
          <JobListingForm />
        </div>
      </div>
    </div>
  );
};

export default Index;