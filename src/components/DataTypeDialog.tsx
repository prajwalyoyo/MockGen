import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DataTypeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelectType: (type: string) => void;
}

interface DataTypeCategory {
  name: string;
  types: { id: string; label: string; description?: string }[];
}

const dataCategories: DataTypeCategory[] = [
  {
    name: "Basic",
    types: [
      { id: "name", label: "Name", description: "Full name" },
      { id: "email", label: "Email", description: "Email address" },
      { id: "phone", label: "Phone", description: "Phone number" },
    ]
  },
  {
    name: "Location",
    types: [
      { id: "address", label: "Address", description: "Full address" },
      { id: "city", label: "City", description: "City name" },
      { id: "country", label: "Country", description: "Country name" },
      { id: "zipCode", label: "Zip Code", description: "Postal code" },
    ]
  },
  {
    name: "Business",
    types: [
      { id: "company", label: "Company", description: "Company name" },
      { id: "jobTitle", label: "Job Title", description: "Job position" },
      { id: "department", label: "Department", description: "Company department" },
    ]
  },
  {
    name: "Numbers",
    types: [
      { id: "number", label: "Number", description: "Random number" },
      { id: "age", label: "Age", description: "Age between 0-100" },
      { id: "decimal", label: "Decimal", description: "Decimal number" },
    ]
  },
  {
    name: "DateTime",
    types: [
      { id: "date", label: "Date", description: "Random date" },
      { id: "time", label: "Time", description: "Random time" },
      { id: "timestamp", label: "Timestamp", description: "Unix timestamp" },
    ]
  },
  {
    name: "Internet",
    types: [
      { id: "url", label: "URL", description: "Website URL" },
      { id: "ipAddress", label: "IP Address", description: "IPv4 address" },
      { id: "username", label: "Username", description: "User handle" },
    ]
  },
  {
    name: "Other",
    types: [
      { id: "boolean", label: "Boolean", description: "True/False value" },
      { id: "uuid", label: "UUID", description: "Unique identifier" },
      { id: "custom", label: "Custom", description: "Custom format" },
    ]
  },
];

const DataTypeDialog: React.FC<DataTypeDialogProps> = ({ open, onOpenChange, onSelectType }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = dataCategories.map(category => ({
    ...category,
    types: category.types.filter(type =>
      type.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      type.description?.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.types.length > 0);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader className="relative">
          <DialogTitle>Choose a Type</DialogTitle>
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute right-0 top-0"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-4 w-4" />
          </Button>
          <div className="relative mt-2 max-w-sm mx-auto">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search types..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8"
            />
          </div>
        </DialogHeader>
        <ScrollArea className="flex-1 pr-4">
          <div className="space-y-6 pb-4">
            {filteredCategories.map((category) => (
              <div key={category.name}>
                <h3 className="text-sm font-semibold mb-2">{category.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {category.types.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => {
                        onSelectType(type.id);
                        onOpenChange(false);
                      }}
                      className="text-left p-2 rounded hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <div className="font-medium">{type.label}</div>
                      {type.description && (
                        <div className="text-sm text-muted-foreground">{type.description}</div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default DataTypeDialog;