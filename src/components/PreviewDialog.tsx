import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy, Download, X } from "lucide-react";

interface PreviewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  content: string;
  onCopy: () => void;
  onDownload: () => void;
}

const PreviewDialog: React.FC<PreviewDialogProps> = ({ 
  open, 
  onOpenChange, 
  content,
  onCopy,
  onDownload 
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Preview Data</h2>
          <div className="space-x-2 flex items-center">
            <Button variant="outline" size="icon" onClick={onCopy}>
              <Copy className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={onDownload}>
              <Download className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => onOpenChange(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex-1 overflow-auto">
          <pre className="p-4 bg-accent rounded-lg text-sm">
            <code>{content}</code>
          </pre>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PreviewDialog;