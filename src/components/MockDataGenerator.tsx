import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, Copy, Maximize2, ChevronRight } from "lucide-react";
import { convertToCSV, convertToXML, convertToYAML, generateFieldValue } from "@/utils/dataFormatters";
import DataTypeDialog from "./DataTypeDialog";
import PreviewDialog from "./PreviewDialog";
import { useToast } from "@/components/ui/use-toast";

type DataType = string;
type ExportFormat = "json" | "csv" | "xml" | "yaml";

interface SchemaField {
  name: string;
  type: DataType;
  customFormat?: string;
}

const MockDataGenerator = () => {
  const [schema, setSchema] = useState<SchemaField[]>([
    { name: "id", type: "name" },
  ]);
  const [count, setCount] = useState(5);
  const [format, setFormat] = useState<ExportFormat>("json");
  const [generatedData, setGeneratedData] = useState("");
  const [typeDialogOpen, setTypeDialogOpen] = useState(false);
  const [currentFieldIndex, setCurrentFieldIndex] = useState<number | null>(null);
  const [previewDialogOpen, setPreviewDialogOpen] = useState(false);
  const { toast } = useToast();

  const exportFormats: ExportFormat[] = ["json", "csv", "xml", "yaml"];

  const addField = () => {
    setSchema([...schema, { name: `field${schema.length + 1}`, type: "name" }]);
  };

  const updateField = (index: number, field: Partial<SchemaField>) => {
    const newSchema = [...schema];
    newSchema[index] = { ...newSchema[index], ...field };
    setSchema(newSchema);
  };

  const removeField = (index: number) => {
    setSchema(schema.filter((_, i) => i !== index));
  };

  const openTypeDialog = (index: number) => {
    setCurrentFieldIndex(index);
    setTypeDialogOpen(true);
  };

  const handleTypeSelect = (type: string) => {
    if (currentFieldIndex !== null) {
      updateField(currentFieldIndex, { type });
    }
  };

  const generateMockData = () => {
    const mockData = Array.from({ length: count }, (_, index) => {
      const item: Record<string, any> = {};
      schema.forEach((field) => {
        item[field.name] = generateFieldValue(field.type, index);
      });
      return item;
    });

    let formattedData = '';
    switch (format) {
      case 'csv':
        formattedData = convertToCSV(mockData);
        break;
      case 'xml':
        formattedData = convertToXML(mockData);
        break;
      case 'yaml':
        formattedData = convertToYAML(mockData);
        break;
      default:
        formattedData = JSON.stringify(mockData, null, 2);
    }

    setGeneratedData(formattedData);
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(generatedData);
    toast({
      title: "Copied to clipboard",
      description: "The generated data has been copied to your clipboard.",
    });
  };

  const downloadData = () => {
    const mimeTypes = {
      json: 'application/json',
      csv: 'text/csv',
      xml: 'application/xml',
      yaml: 'application/yaml'
    };

    const blob = new Blob([generatedData], { type: mimeTypes[format] });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `mock-data.${format}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Download started",
      description: `Your mock data file is being downloaded as mock-data.${format}`,
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Create Mock Data</h2>
            
            <div className="space-y-4">
              {schema.map((field, index) => (
                <div key={index} className="flex gap-4">
                  <Input
                    placeholder="Field name"
                    value={field.name}
                    onChange={(e) => updateField(index, { name: e.target.value })}
                  />
                  <Button
                    variant="outline"
                    onClick={() => openTypeDialog(index)}
                    className="min-w-[120px] justify-between"
                  >
                    {field.type}
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => removeField(index)}
                  >
                    ×
                  </Button>
                </div>
              ))}
            </div>

            <Button onClick={addField} variant="outline">
              Add Field
            </Button>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Number of Records
                </label>
                <Input
                  type="number"
                  min="1"
                  max="100"
                  value={count}
                  onChange={(e) => setCount(parseInt(e.target.value) || 1)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Export Format
                </label>
                <Select value={format} onValueChange={(value: ExportFormat) => setFormat(value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {exportFormats.map((format) => (
                      <SelectItem key={format} value={format}>
                        {format.toUpperCase()}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button onClick={generateMockData} className="w-full">
              Generate Data
            </Button>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Generated Data</h3>
              <div className="space-x-2">
                <Button variant="outline" size="icon" onClick={copyToClipboard}>
                  <Copy className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={downloadData}>
                  <Download className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => setPreviewDialogOpen(true)}>
                  <Maximize2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <pre className="bg-accent p-4 rounded-lg overflow-auto max-h-[600px] text-sm">
              <code>{generatedData || "Click 'Generate Data' to see results"}</code>
            </pre>
          </div>
        </div>
      </div>

      <DataTypeDialog
        open={typeDialogOpen}
        onOpenChange={setTypeDialogOpen}
        onSelectType={handleTypeSelect}
      />

      <PreviewDialog
        open={previewDialogOpen}
        onOpenChange={setPreviewDialogOpen}
        content={generatedData || "No data generated yet"}
        onCopy={copyToClipboard}
        onDownload={downloadData}
      />
    </section>
  );
};

export default MockDataGenerator;