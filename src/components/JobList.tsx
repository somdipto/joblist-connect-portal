import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Timer } from "lucide-react";
import { getJobListings, type JobListing } from "@/utils/jobStorage";
import { formatDistanceToNow } from "date-fns";

interface JobListProps {
  searchQuery: string;
}

export const JobList = ({ searchQuery }: JobListProps) => {
  const jobs = getJobListings();
  
  const filteredJobs = jobs.filter(
    (job) =>
      job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {filteredJobs.map((job) => (
        <Card key={job.id} className="hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl">{job.jobTitle}</CardTitle>
                <CardDescription className="flex items-center gap-2 mt-1">
                  <Building2 className="w-4 h-4" />
                  {job.companyName}
                </CardDescription>
              </div>
              <Badge variant="secondary">{job.employmentType}</Badge>
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
                  {formatDistanceToNow(new Date(job.postedAt), { addSuffix: true })}
                </div>
                <div className="font-medium text-primary">{job.salaryRange}</div>
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