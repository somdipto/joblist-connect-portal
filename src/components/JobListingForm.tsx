import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface JobListing {
  companyName: string;
  companyWebsite: string;
  jobTitle: string;
  location: string;
  employmentType: string;
  salaryRange: string;
  description: string;
  requirements: string;
  benefits: string;
}

const initialState: JobListing = {
  companyName: "",
  companyWebsite: "",
  jobTitle: "",
  location: "",
  employmentType: "",
  salaryRange: "",
  description: "",
  requirements: "",
  benefits: "",
};

export const JobListingForm = () => {
  const [formData, setFormData] = useState<JobListing>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically send the data to your backend
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated delay
      toast({
        title: "Success!",
        description: "Your job listing has been created.",
        duration: 5000,
      });
      setFormData(initialState);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create job listing. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in">
      <div className="space-y-6 bg-white p-8 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900">Create Job Listing</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              placeholder="Enter company name"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">Company Website</label>
            <input
              type="url"
              name="companyWebsite"
              value={formData.companyWebsite}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              placeholder="https://example.com"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              placeholder="Enter job title"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              placeholder="City, Country or Remote"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">Employment Type</label>
            <select
              name="employmentType"
              value={formData.employmentType}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            >
              <option value="">Select type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Freelance">Freelance</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">Salary Range</label>
            <input
              type="text"
              name="salaryRange"
              value={formData.salaryRange}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              placeholder="e.g. $50,000 - $70,000"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-900">Job Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            placeholder="Enter detailed job description"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-900">Requirements</label>
          <textarea
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            placeholder="Enter job requirements"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-900">Benefits</label>
          <textarea
            name="benefits"
            value={formData.benefits}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            placeholder="Enter job benefits"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto px-8 py-3 bg-primary text-white rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Creating..." : "Create Listing"}
        </button>
      </div>
    </form>
  );
};