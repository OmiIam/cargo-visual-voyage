
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Package, 
  Search, 
  MapPin, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  AlertTriangle,
  TruckIcon
} from "lucide-react";

// Form schema for tracking number
const trackingSchema = z.object({
  trackingNumber: z.string().min(1, "Tracking number is required"),
});

type TrackingFormValues = z.infer<typeof trackingSchema>;

// Mock package data for demonstration
const mockPackages = [
  {
    id: "PKG-12345",
    trackingNumber: "TRK-67890",
    origin: "New York, USA",
    destination: "London, UK",
    status: "In Transit",
    currentLocation: "Paris, France",
    estimatedDelivery: "2025-04-25",
    history: [
      { date: "2025-04-15", status: "Package Received", location: "New York, USA" },
      { date: "2025-04-16", status: "In Transit", location: "New York, USA" },
      { date: "2025-04-17", status: "Departed Facility", location: "New York, USA" },
      { date: "2025-04-18", status: "Arrived at Facility", location: "Paris, France" },
      { date: "2025-04-18", status: "In Transit", location: "Paris, France" },
    ],
  },
  {
    id: "PKG-54321",
    trackingNumber: "TRK-09876",
    origin: "Tokyo, Japan",
    destination: "Sydney, Australia",
    status: "Delivered",
    currentLocation: "Sydney, Australia",
    estimatedDelivery: "2025-04-15",
    history: [
      { date: "2025-04-10", status: "Package Received", location: "Tokyo, Japan" },
      { date: "2025-04-11", status: "In Transit", location: "Tokyo, Japan" },
      { date: "2025-04-12", status: "Departed Facility", location: "Tokyo, Japan" },
      { date: "2025-04-14", status: "Arrived at Facility", location: "Sydney, Australia" },
      { date: "2025-04-15", status: "Out for Delivery", location: "Sydney, Australia" },
      { date: "2025-04-15", status: "Delivered", location: "Sydney, Australia" },
    ],
  },
];

const Dashboard = () => {
  const [activePackage, setActivePackage] = useState<typeof mockPackages[0] | null>(null);
  const [recentPackages, setRecentPackages] = useState<typeof mockPackages>(mockPackages);
  const navigate = useNavigate();

  const form = useForm<TrackingFormValues>({
    resolver: zodResolver(trackingSchema),
    defaultValues: {
      trackingNumber: "",
    },
  });

  const onSubmit = (values: TrackingFormValues) => {
    // Simulate finding a package
    const foundPackage = mockPackages.find(
      pkg => pkg.trackingNumber.toLowerCase() === values.trackingNumber.toLowerCase()
    );

    if (foundPackage) {
      setActivePackage(foundPackage);
      // Add to recent packages if not already there
      if (!recentPackages.some(pkg => pkg.id === foundPackage.id)) {
        setRecentPackages([foundPackage, ...recentPackages]);
      }
      toast.success(`Package ${foundPackage.trackingNumber} found`);
    } else {
      toast.error("No package found with that tracking number");
    }
  };

  const handlePackageClick = (pkg: typeof mockPackages[0]) => {
    setActivePackage(pkg);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 px-4 container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Package Tracking Dashboard</h1>
          <p className="text-muted-foreground">
            Track your shipments and view their status in real-time
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Tracking form and recent packages */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Track a Package</CardTitle>
                <CardDescription>Enter a tracking number to get started</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="trackingNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="flex items-center space-x-2">
                              <Input placeholder="e.g. TRK-67890" {...field} />
                              <Button type="submit">
                                <Search className="h-4 w-4" />
                                <span className="sr-only">Search</span>
                              </Button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </form>
                </Form>
              </CardContent>
              <CardFooter>
                <p className="text-xs text-muted-foreground">
                  Try using "TRK-67890" or "TRK-09876" for demo
                </p>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Packages</CardTitle>
                <CardDescription>Your previously tracked packages</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {recentPackages.length > 0 ? (
                    recentPackages.map((pkg) => (
                      <button
                        key={pkg.id}
                        onClick={() => handlePackageClick(pkg)}
                        className={`w-full text-left p-3 rounded-md flex items-center gap-3 transition-colors border ${
                          activePackage?.id === pkg.id
                            ? "bg-primary/10 border-primary"
                            : "bg-card hover:bg-muted border-border"
                        }`}
                      >
                        <div className="bg-muted p-2 rounded-full">
                          {pkg.status === "Delivered" ? (
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                          ) : (
                            <TruckIcon className="h-5 w-5 text-logistics-highlight" />
                          )}
                        </div>
                        <div>
                          <div className="font-medium">{pkg.trackingNumber}</div>
                          <div className="text-xs text-muted-foreground">
                            {pkg.origin} → {pkg.destination}
                          </div>
                        </div>
                        <div className="ml-auto text-xs">
                          <span
                            className={`${
                              pkg.status === "Delivered"
                                ? "bg-green-500/20 text-green-500"
                                : "bg-amber-500/20 text-amber-500"
                            } px-2 py-1 rounded-full`}
                          >
                            {pkg.status}
                          </span>
                        </div>
                      </button>
                    ))
                  ) : (
                    <div className="text-center py-4 text-muted-foreground">
                      <Package className="mx-auto h-10 w-10 opacity-20 mb-2" />
                      <p>No recently tracked packages</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Package details */}
          <div className="lg:col-span-2">
            {activePackage ? (
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{activePackage.trackingNumber}</CardTitle>
                      <CardDescription>
                        From {activePackage.origin} to {activePackage.destination}
                      </CardDescription>
                    </div>
                    <div
                      className={`${
                        activePackage.status === "Delivered"
                          ? "bg-green-500/20 text-green-500"
                          : "bg-amber-500/20 text-amber-500"
                      } px-3 py-1 rounded-full text-sm font-medium`}
                    >
                      {activePackage.status}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Package info */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-muted rounded-lg p-4 flex flex-col">
                      <span className="text-xs text-muted-foreground mb-1">
                        Current Location
                      </span>
                      <span className="font-medium flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-logistics-highlight" />
                        {activePackage.currentLocation}
                      </span>
                    </div>
                    <div className="bg-muted rounded-lg p-4 flex flex-col">
                      <span className="text-xs text-muted-foreground mb-1">
                        Estimated Delivery
                      </span>
                      <span className="font-medium flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-logistics-highlight" />
                        {new Date(activePackage.estimatedDelivery).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="bg-muted rounded-lg p-4 flex flex-col">
                      <span className="text-xs text-muted-foreground mb-1">Status</span>
                      <span className="font-medium flex items-center gap-2">
                        {activePackage.status === "Delivered" ? (
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                        ) : (
                          <Clock className="h-4 w-4 text-amber-500" />
                        )}
                        {activePackage.status}
                      </span>
                    </div>
                  </div>

                  {/* Package history */}
                  <div>
                    <h3 className="font-semibold mb-3">Shipment History</h3>
                    <div className="relative">
                      <div className="absolute left-3.5 top-0 h-full w-0.5 bg-muted"></div>
                      <div className="space-y-6">
                        {activePackage.history.map((event, i) => (
                          <div key={i} className="relative flex gap-4">
                            <div
                              className={`h-7 w-7 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                                i === 0
                                  ? "bg-primary border-primary text-primary-foreground"
                                  : "bg-background border-muted"
                              }`}
                            >
                              {i === 0 ? (
                                <CheckCircle2 className="h-4 w-4" />
                              ) : (
                                <span className="h-2 w-2 bg-muted rounded-full"></span>
                              )}
                            </div>
                            <div className="pb-2">
                              <p className="font-medium">{event.status}</p>
                              <div className="text-sm text-muted-foreground flex flex-wrap gap-x-6">
                                <span className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  {new Date(event.date).toLocaleDateString()}
                                </span>
                                <span className="flex items-center gap-1">
                                  <MapPin className="h-3 w-3" />
                                  {event.location}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="h-full flex items-center justify-center text-center bg-card rounded-lg border border-border p-12">
                <div>
                  <div className="bg-muted inline-flex p-6 rounded-full mb-4">
                    <Package className="h-14 w-14 text-muted-foreground opacity-40" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">No Package Selected</h2>
                  <p className="text-muted-foreground max-w-xs mx-auto mb-6">
                    Enter a tracking number or select a recent package to view its details
                  </p>
                  <Button onClick={() => form.setFocus("trackingNumber")}>
                    <Search className="mr-2 h-4 w-4" /> Track a Package
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
