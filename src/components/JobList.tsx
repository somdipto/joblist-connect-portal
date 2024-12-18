import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Timer } from "lucide-react";

// Mock data - replace with real data when backend is integrated
const mockJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $150k",
    description: "We're looking for an experienced frontend developer to join our team...",
    postedAt: "2 days ago",
  },
  {
    id: 2,
    title: "Product Designer",
    company: "Design Studio",
    location: "Remote",
    type: "Contract",
    salary: "$80k - $100k",
    description: "Join our creative team as a product designer...",
    postedAt: "1 week ago",
  },
  {
    id: 3,
    title: "Backend Engineer",
    company: "StartupCo",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130k - $160k",
    description: "Looking for a backend engineer to scale our infrastructure...",
    postedAt: "3 days ago",
  },
];

interface JobListProps {
  searchQuery: string;
}

export const JobList = ({ searchQuery }: JobListProps) => {
  const filteredJobs = mockJobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {filteredJobs.map((job) => (
        <Card key={job.id} className="hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl">{job.title}</CardTitle>
                <CardDescription className="flex items-center gap-2 mt-1">
                  <Building2 className="w-4 h-4" />
                  {job.company}
                </CardDescription>
              </div>
              <Badge variant="secondary">{job.type}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-600">{job.description}</p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {job.location}
                </div>
                <div className="flex items-center gap-1">
                  <Timer className="w-4 h-4" />
                  {job.postedAt}
                </div>
                <div className="font-medium text-primary">{job.salary}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      {filteredJobs.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No jobs found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
};