import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { JobList } from "@/components/JobList";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const JobSeeker = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-semibold text-primary">
            Job Portal
          </Link>
          <Button asChild variant="outline">
            <Link to="/">Post a Job</Link>
          </Button>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">Find Your Next Opportunity</h1>
            <p className="text-lg text-gray-600">
              Browse through hundreds of job listings to find your perfect match
            </p>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search jobs by title, company, or keywords..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <JobList searchQuery={searchQuery} />
        </div>
      </main>
    </div>
  );
};

export default JobSeeker;