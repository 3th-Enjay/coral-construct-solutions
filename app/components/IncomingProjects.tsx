"use client"
import { useState } from "react";
import { Calendar, MapPin, Users, Waves } from "lucide-react";
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

interface ProjectFeatures {
  id: number;
  name: string;
  location: string;
  launchDate: string;
  investment: string;
  actualPrice: string;
  units: number;
  description: string;
  features: string[];
  image: string;
  additionalImages: string[];
  status: string;
  contact: {
    primary: string;
    secondary: string;
  };
}

export default function IncomingProjects() {
  const [selectedProject, setSelectedProject] = useState<ProjectFeatures | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState<"info" | "tour">("info");

  const projects: ProjectFeatures[] = [
    {
      id: 1,
      name: "Azure Lagoon Residences",
      location: "North Malé Atoll",
      launchDate: "Q2 2024",
      investment: "$15M",
      actualPrice: "$220M",
      units: 24,
      description:
        "Luxury over-water villas featuring panoramic ocean views, private infinity pools, and direct lagoon access. Each residence spans 2,500 sq ft with premium finishes and smart home technology.",
      features: [
        "Private infinity pools",
        "Glass floor panels",
        "Butler service",
        "Helicopter landing pad",
        "Underwater wine cellar",
        "Marine life observatory",
      ],
      image: "/Pullman-Maldives-312.jpg?height=400&width=600",
      additionalImages: [
        "/id1-img2.jpg",
        "/id1-img3.jpg",
        "/id1-img4.jpg",
      ],
      status: "On-going",
      contact: {
        primary: "malcolmlenox8@gmail.com",
        secondary: "brynichole10@gmail.com"
      }
    },
    {
      id: 2,
      name: "Coral Crown Estates",
      location: "Baa Atoll UNESCO Site",
      launchDate: "Q3 2024",
      investment: "$25M",
      actualPrice: "$250M",
      units: 18,
      description:
        "Ultra-exclusive over-water mansions in a UNESCO Biosphere Reserve. Features include private beaches, yacht berths, and world-class spa facilities with unparalleled privacy.",
      features: [
        "Private yacht berths",
        "Overwater spa pavilions",
        "Chef's kitchen with ocean views",
        "Private beach access",
        "Meditation decks",
        "Coral restoration program",
      ],
      image: "/overwater-villa.jpg?height=400&width=600",
      additionalImages: [
        "/id2-img2.jpg",
        "/id2-img3.jpg",
        "/id2-img4.jpg",
      ],
      status: "Planning",
      contact: {
        primary: "malcolmlenox8@gmail.com",
        secondary: "brynichole10@gmail.com"
      }
    },
    {
      id: 3,
      name: "The Maldives Blue Horizon",
      location: "Ari Atoll",
      launchDate: "Q4 2024",
      investment: "$12M",
      actualPrice: "$220M",
      units: 30,
      description:
        "Eco-luxury over-water bungalows designed with sustainable materials and renewable energy systems. Perfect blend of luxury and environmental consciousness.",
      features: [
        "Solar power systems",
        "Rainwater harvesting",
        "Sustainable materials",
        "Marine conservation center",
        "Organic gardens",
        "Zero-waste operations",
      ],
      image: "/paradise1.jpg?height=400&width=600",
      additionalImages: [
        "/id3-img3.jpeg",
        "/id3-img4.jpg",
        "/id3-img2.jpeg",
      ],
      status: "Design Phase",
      contact: {
        primary: "malcolmlenox8@gmail.com",
        secondary: "brynichole10@gmail.com"
      }
    },
  ];

  const handleButtonClick = (project: ProjectFeatures, type: "info" | "tour") => {
    setSelectedProject(project);
    setDialogType(type);
    setIsDialogOpen(true);
  };

  const getDialogContent = () => {
    if (!selectedProject) return null;

    if (dialogType === "tour") {
      return (
        <>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-teal-600 mb-2">Schedule a Tour</h3>
            <p className="text-slate-600 mb-6">Contact our agents to book your private viewing of {selectedProject.name}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {selectedProject.additionalImages.slice(0, 3).map((img, idx) => (
              <div key={idx} className="relative aspect-square rounded-lg overflow-hidden">
                <NextImage
                  src={img}
                  alt={`${selectedProject.name} - Preview ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="bg-teal-50 p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-2 text-teal-800">Tour Information</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Available Monday-Friday, 9am-5pm</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Private helicopter transfers available</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Tour duration: approximately 2 hours</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <div>
                <h4 className="font-semibold mb-1">Tour Coordinator:</h4>
                <a 
                  href={`mailto:${selectedProject.contact.primary}?subject=Tour Booking Request for ${selectedProject.name}`}
                  className="text-teal-600 hover:underline"
                >
                  {selectedProject.contact.primary}
                </a>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Alternate Contact:</h4>
                <a 
                  href={`mailto:${selectedProject.contact.secondary}?subject=Tour Booking Request for ${selectedProject.name}`}
                  className="text-teal-600 hover:underline"
                >
                  {selectedProject.contact.secondary}
                </a>
              </div>
            </div>
          </div>

          <Button className="w-full ocean-gradient mt-4">
            <a href={`mailto:${selectedProject.contact.primary}?subject=Tour Booking Request for ${selectedProject.name}&body=Please include your preferred date and time for the tour.`}>
              Book Your Tour Now
            </a>
          </Button>
        </>
      );
    }

    return (
      <>
        <div className="text-center">
          <h3 className="text-3xl font-bold text-teal-600 mb-2">Project Price: {selectedProject.actualPrice}</h3>
          <p className="text-slate-600">Contact our agents for detailed investment information</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {selectedProject.additionalImages.map((img, idx) => (
            <div key={idx} className="relative aspect-square rounded-lg overflow-hidden">
              <NextImage
                src={img}
                alt={`${selectedProject.name} - Image ${idx + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Primary Contact:</h4>
            <a 
              href={`mailto:${selectedProject.contact.primary}`}
              className="text-teal-600 hover:underline"
            >
              {selectedProject.contact.primary}
            </a>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Secondary Contact:</h4>
            <a 
              href={`mailto:${selectedProject.contact.secondary}`}
              className="text-teal-600 hover:underline"
            >
              {selectedProject.contact.secondary}
            </a>
          </div>
        </div>

        <Button className="w-full ocean-gradient mt-4">
          <a href={`mailto:${selectedProject.contact.primary}?subject=Inquiry about ${selectedProject.name}`}>
            Send Email Inquiry
          </a>
        </Button>
      </>
    );
  };

  return (
    <section id="projects" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Incoming <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-2">
            Discover our upcoming over-water developments, each offering unique investment opportunities in the world's
            most pristine marine environments.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {projects.map((project, index) => (
            <Card key={project.id} className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={`relative aspect-video lg:aspect-auto ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <NextImage
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <Badge className="bg-teal-500 text-white text-xs sm:text-sm">{project.status}</Badge>
                  </div>
                </div>

                <CardContent className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="font-playfair text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-slate-800">{project.name}</h3>

                  <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm text-slate-600">
                    <div className="flex items-center">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-teal-500" />
                      {project.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-teal-500" />
                      {project.launchDate}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-teal-500" />
                      {project.units} Units
                    </div>
                    <div className="flex items-center">
                      <Waves className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-teal-500" />
                      {project.investment}
                    </div>
                  </div>

                  <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{project.description}</p>

                  <div className="mb-6 sm:mb-8">
                    <h4 className="font-semibold mb-3 sm:mb-4 text-slate-800 text-sm sm:text-base">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-xs sm:text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-teal-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button 
                      className="ocean-gradient text-white flex-1 text-sm sm:text-base"
                      onClick={() => handleButtonClick(project, "info")}
                    >
                      Request Information
                    </Button>
                    <Button
                      variant="outline"
                      className="border-teal-500 text-teal-600 hover:bg-teal-50 flex-1 bg-transparent text-sm sm:text-base"
                      onClick={() => handleButtonClick(project, "tour")}
                    >
                      Schedule Tour
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-2xl bg-gradient-to-b from-white to-teal-50">
          <DialogHeader>
            <DialogTitle className="text-2xl text-teal-800">{selectedProject?.name}</DialogTitle>
            <DialogDescription className="text-slate-600">
              {dialogType === "info" ? "Investment Information" : "Tour Booking"}
            </DialogDescription>
            <button 
              onClick={() => setIsDialogOpen(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:pointer-events-none"
            >
              <X className="h-6 w-6 text-teal-700" />
              <span className="sr-only">Close</span>
            </button>
          </DialogHeader>
          
          <div className="max-h-[70vh] overflow-y-auto px-1">
            {selectedProject && getDialogContent()}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}