export interface JobListing {
  id: string;
  companyName: string;
  companyWebsite: string;
  jobTitle: string;
  location: string;
  employmentType: string;
  salaryRange: string;
  description: string;
  requirements: string;
  benefits: string;
  postedAt: string;
}

export const saveJobListing = (job: Omit<JobListing, "id" | "postedAt">) => {
  const jobs = getJobListings();
  const newJob: JobListing = {
    ...job,
    id: crypto.randomUUID(),
    postedAt: new Date().toISOString(),
  };
  
  jobs.push(newJob);
  localStorage.setItem('jobListings', JSON.stringify(jobs));
  return newJob;
};

export const getJobListings = (): JobListing[] => {
  const jobs = localStorage.getItem('jobListings');
  return jobs ? JSON.parse(jobs) : [];
};