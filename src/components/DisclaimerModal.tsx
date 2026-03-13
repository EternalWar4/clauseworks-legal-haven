import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const DISCLAIMER_KEY = "clauseworks_disclaimer_accepted";

const DisclaimerModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const accepted = sessionStorage.getItem(DISCLAIMER_KEY);
    if (!accepted) setOpen(true);
  }, []);

  const handleAgree = () => {
    sessionStorage.setItem(DISCLAIMER_KEY, "true");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent
        className="sm:max-w-lg max-h-[90vh] overflow-y-auto [&>button]:hidden !bg-secondary border-border"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle
            className="text-xl text-primary"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Disclaimer
          </DialogTitle>
          <DialogDescription className="sr-only">
            Bar Council of India compliance disclaimer
          </DialogDescription>
        </DialogHeader>

        <div
          className="text-sm text-foreground leading-relaxed text-justify space-y-3"
          style={{ fontFamily: "'Source Sans 3', 'Segoe UI', sans-serif" }}
        >
          <p>
            In accordance with the rules of the Bar Council of India, Clauseworks
            is not permitted to solicit work or advertise in any manner. By
            clicking "I Agree" below, the user acknowledges the following:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              There has been no advertisement, personal communication,
              solicitation, invitation, or inducement of any sort whatsoever from
              Clauseworks or any of its members to solicit any work through this
              website.
            </li>
            <li>
              The user wishes to gain more information about Clauseworks for
              their own information and use.
            </li>
            <li>
              The information about Clauseworks is provided to the user only on
              their specific request and any information obtained or material
              downloaded from this website is completely at the user's volition
              and any transmission, receipt, or use of this website does not
              create any lawyer-client relationship.
            </li>
            <li>
              Clauseworks is not liable for any consequence of any action taken
              by the user relying on material or information provided under this
              website. In cases where the user has any legal issues, the user
              must in all cases seek independent legal advice.
            </li>
          </ul>
        </div>

        <DialogFooter className="flex-row gap-3 sm:gap-3">
          <Button
            variant="outline"
            onClick={() => {
              window.location.href = "https://www.google.com";
            }}
          >
            I Disagree
          </Button>
          <Button onClick={handleAgree}>I Agree</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DisclaimerModal;
