"use client"
import { useState } from "react";
import { Award, Calendar, TrendingUp, Users, BarChart2, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import NextImage from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const performanceData = {
  turquoise: [
    { name: 'Q1 2023', occupancy: 82, revenue: 3.2, roi: 18 },
    { name: 'Q2 2023', occupancy: 88, revenue: 3.8, roi: 20 },
    { name: 'Q3 2023', occupancy: 91, revenue: 4.1, roi: 22 },
    { name: 'Q4 2023', occupancy: 95, revenue: 4.6, roi: 24 },
  ],
  crystal: [
    { name: 'Q1 2023', occupancy: 78, revenue: 2.1, roi: 16 },
    { name: 'Q2 2023', occupancy: 85, revenue: 2.5, roi: 18 },
    { name: 'Q3 2023', occupancy: 89, revenue: 2.9, roi: 19 },
    { name: 'Q4 2023', occupancy: 92, revenue: 3.3, roi: 21 },
  ]
};

const caseStudies = {
  turquoise: {
    title: "Turquoise Paradise Resort Case Study",
    sections: [
      {
        title: "Project Overview",
        content: "The Turquoise Paradise Resort set a new standard for luxury over-water accommodations in the Maldives. With 42 premium villas spanning across 5 acres of pristine lagoon, the project was completed in December 2023 after 18 months of construction."
      },
      {
        title: "Investment Performance",
        content: "Initial investors saw returns begin within 6 months of operation. The resort achieved 95% average occupancy in its first year, generating $4.6M in quarterly revenue by Q4 2023. Current ROI stands at 24%, exceeding projections by 4 percentage points."
      },
      {
        title: "Key Success Factors",
        content: "Strategic location in South Malé Atoll, innovative sustainable design, and partnerships with top-tier hospitality brands contributed to the project's outstanding performance. The marine conservation program became a major guest attraction."
      },
      {
        title: "Investor Testimonial",
        quote: "This has been our best-performing Maldivian investment to date. The consistent returns and growing asset value make it a model for future developments.",
        author: "Sarah Chen, Principal at Oceanview Capital"
      }
    ],
    stats: [
      { label: "Construction Time", value: "18 months" },
      { label: "ROI Exceeded Projections", value: "+4%" },
      { label: "Guest Satisfaction", value: "98%" },
      { label: "Environmental Impact", value: "Carbon Neutral" }
    ]
  },
  crystal: {
    title: "Crystal Waters Villas Case Study",
    sections: [
      {
        title: "Project Overview",
        content: "Crystal Waters Villas redefined boutique luxury in Lhaviyani Atoll with its intimate collection of 28 architecturally distinct villas. Completed in August 2023, the project emphasized sustainable luxury and personalized guest experiences."
      },
      {
        title: "Investment Performance",
        content: "Despite its smaller scale, the project achieved remarkable financial performance with 92% occupancy and $3.3M quarterly revenue by Q4 2023. The current 21% ROI represents a 3 percentage point improvement over initial projections."
      },
      {
        title: "Key Success Factors",
        content: "The villas' unique designs and focus on privacy attracted high-net-worth individuals. Strategic partnerships with luxury travel agencies and the implementation of AI-powered guest services maximized operational efficiency."
      },
      {
        title: "Investor Testimonial",
        quote: "The combination of strong returns and environmental responsibility makes Crystal Waters a standout in our portfolio. We've already committed to their next project.",
        author: "Michael Rodriguez, Blue Ocean Investments"
      }
    ],
    stats: [
      { label: "Construction Time", value: "14 months" },
      { label: "ROI Exceeded Projections", value: "+3%" },
      { label: "Repeat Guest Rate", value: "45%" },
      { label: "Local Employment", value: "85% staff" }
    ]
  }
};

export default function CompletedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [dialogType, setDialogType] = useState<"performance" | "caseStudy" | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      name: "Turquoise Paradise Resort",
      key: "turquoise" as const,
      location: "South Malé Atoll",
      completedDate: "December 2023",
      investment: "$35M",
      units: 42,
      currentROI: "24%",
      description:
        "Our flagship over-water resort featuring world-class amenities and breathtaking ocean views. This project has exceeded all performance expectations with consistent high occupancy rates.",
      achievements: [
        "World Travel Awards Winner 2024",
        "95% average occupancy rate",
        "Carbon neutral operations",
        "Marine conservation certification",
        "5-star luxury rating",
        "Featured in Architectural Digest",
      ],
      image: "/completed-id1.jpg?height=400&width=600",
      status: "Operational",
      investors: 156,
    },
    {
      id: 2,
      name: "Crystal Waters Villas",
      key: "crystal" as const,
      location: "Lhaviyani Atoll",
      completedDate: "August 2023",
      investment: "$18M",
      units: 28,
      currentROI: "21%",
      description:
        "Intimate collection of luxury over-water villas offering unparalleled privacy and personalized service. Each villa features unique architectural elements and premium amenities.",
      achievements: [
        "Condé Nast Traveler Gold List",
        "Sustainable Tourism Certification",
        "92% guest satisfaction rate",
        "Zero environmental incidents",
        "Local community partnership",
        "Innovation in design award",
      ],
      image: "/completed-id2.jpg?height=400&width=600",
      status: "Operational",
      investors: 89,
    },
  ];

  interface Project {
      id: number;
      name: string;
      key: 'turquoise' | 'crystal';
      location: string;
      completedDate: string;
      investment: string;
      units: number;
      currentROI: string;
      description: string;
      achievements: string[];
      image: string;
      status: string;
      investors: number;
    }

  interface DialogTypes {
    performance: "performance";
    caseStudy: "caseStudy";
  }

  const handleButtonClick = (project: Project, type: DialogTypes[keyof DialogTypes]) => {
    setSelectedProject(project);
    setDialogType(type);
    setIsDialogOpen(true);
  };

  const renderDialogContent = () => {
    if (!selectedProject) return null;

    if (dialogType === "performance") {
      return (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-teal-700">{selectedProject.name} Performance</h3>
          
          <div className="space-y-8">
            <div>
              <h4 className="font-semibold mb-4 text-slate-800">Occupancy Rate Growth</h4>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData[selectedProject.key]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis unit="%" domain={[70, 100]} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="occupancy" stroke="#0d9488" strokeWidth={2} activeDot={{ r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-slate-800">Quarterly Revenue (Millions)</h4>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={performanceData[selectedProject.key]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="revenue" fill="#0d9488" name="Revenue ($M)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-teal-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-teal-700">{selectedProject.currentROI}</div>
                <div className="text-sm text-slate-600">Current ROI</div>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-teal-700">
                  {Math.max(...performanceData[selectedProject.key].map(d => d.occupancy))}%
                </div>
                <div className="text-sm text-slate-600">Peak Occupancy</div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (dialogType === "caseStudy") {
      const study = caseStudies[selectedProject.key];
      return (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-teal-700">{study.title}</h3>
          
          <div className="space-y-6">
            {study.sections.map((section, index) => (
              <div key={index} className="space-y-2">
                <h4 className="font-semibold text-lg text-slate-800">{section.title}</h4>
                {section.content && <p className="text-slate-600">{section.content}</p>}
                {section.quote && (
                  <blockquote className="border-l-4 border-teal-500 pl-4 italic text-slate-700 py-2">
                    "{section.quote}"
                    <footer className="mt-2 text-sm not-italic text-teal-700">— {section.author}</footer>
                  </blockquote>
                )}
              </div>
            ))}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {study.stats.map((stat, index) => (
                <div key={index} className="bg-teal-50 p-4 rounded-lg">
                  <div className="text-sm text-slate-600">{stat.label}</div>
                  <div className="text-xl font-bold text-teal-700">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Completed <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore our successfully completed developments that continue to deliver exceptional returns and set new
            standards in luxury over-water living.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 bg-white"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 0 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={`relative aspect-video lg:aspect-auto ${index % 2 === 0 ? "lg:col-start-2" : ""}`}>
                  <NextImage
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-500 text-white">
                      <Award className="w-3 h-3 mr-1" />
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Badge variant="outline" className="bg-white/90 text-slate-800">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      ROI: {project.currentROI}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="font-playfair text-3xl font-bold mb-4 text-slate-800">{project.name}</h3>

                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-slate-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-green-500" />
                      Completed {project.completedDate}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-green-500" />
                      {project.investors} Investors
                    </div>
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>

                  <div className="mb-8">
                    <h4 className="font-semibold mb-4 text-slate-800">Key Achievements:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center text-sm text-slate-600">
                          <Award className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{project.units}</div>
                      <div className="text-xs text-slate-600">Units</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{project.investment}</div>
                      <div className="text-xs text-slate-600">Investment</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{project.currentROI}</div>
                      <div className="text-xs text-slate-600">Current ROI</div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      className="bg-green-600 hover:bg-green-700 text-white flex-1"
                      onClick={() => handleButtonClick(project, "performance")}
                    >
                      <BarChart2 className="w-4 h-4 mr-2" />
                      View Performance
                    </Button>
                    <Button
                      variant="outline"
                      className="border-green-600 text-green-600 hover:bg-green-50 flex-1 bg-transparent"
                      onClick={() => handleButtonClick(project, "caseStudy")}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Case Study
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="font-playfair text-2xl font-bold mb-4 text-slate-800">Proven Track Record</h3>
            <p className="text-slate-600 mb-6">
              Our completed projects demonstrate consistent performance and investor satisfaction, with an average ROI
              of 22.5% across all developments.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">$53M</div>
                <div className="text-slate-600">Total Completed Value</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">70</div>
                <div className="text-slate-600">Units Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">245</div>
                <div className="text-slate-600">Happy Investors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">22.5%</div>
                <div className="text-slate-600">Average ROI</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-3xl bg-gradient-to-b from-white to-teal-50 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl text-teal-800">
              {selectedProject?.name}
            </DialogTitle>
            <button 
              onClick={() => setIsDialogOpen(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </button>
          </DialogHeader>
          
          {renderDialogContent()}
        </DialogContent>
      </Dialog>
    </section>
  );
}