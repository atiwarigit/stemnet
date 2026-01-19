"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar, Download } from "lucide-react";

interface CalendarModalProps {
  trigger: React.ReactNode;
}

export default function CalendarModal({ trigger }: CalendarModalProps) {
  const eventDetails = {
    title: "DC STEMNet Expo 2026",
    description:
      "Empowering students, families, and communities through STEM, workforce development, and emerging technology. Free community event featuring hands-on STEM activities, robotics demos, panels, live music, and more!",
    location: "University of the District of Columbia (UDC)",
    startDate: "2026-02-28T12:00:00",
    endDate: "2026-02-28T18:00:00",
  };

  const generateGoogleCalendarUrl = () => {
    const start = eventDetails.startDate.replace(/[-:]/g, "").replace("T", "T");
    const end = eventDetails.endDate.replace(/[-:]/g, "").replace("T", "T");
    const url = new URL("https://calendar.google.com/calendar/render");
    url.searchParams.set("action", "TEMPLATE");
    url.searchParams.set("text", eventDetails.title);
    url.searchParams.set("details", eventDetails.description);
    url.searchParams.set("location", eventDetails.location);
    url.searchParams.set("dates", `${start}/${end}`);
    return url.toString();
  };

  const generateIcsFile = () => {
    const formatDate = (dateStr: string) => {
      return dateStr.replace(/[-:]/g, "").replace("T", "T") + "00";
    };

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//DC STEMNet Expo//EN
BEGIN:VEVENT
DTSTART:${formatDate(eventDetails.startDate)}
DTEND:${formatDate(eventDetails.endDate)}
SUMMARY:${eventDetails.title}
DESCRIPTION:${eventDetails.description.replace(/\n/g, "\\n")}
LOCATION:${eventDetails.location}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "dc-stemnet-expo-2026.ics";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-navy flex items-center gap-2">
            <Calendar className="w-6 h-6 text-red" />
            Save the Date
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Add the DC STEMNet Expo to your calendar
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 p-4 bg-navy/5 rounded-lg">
          <h3 className="font-bold text-navy text-lg">{eventDetails.title}</h3>
          <div className="mt-2 space-y-1 text-sm text-navy-dark">
            <p className="flex items-center gap-2">
              <span>📅</span>
              <span>February 28, 2026</span>
            </p>
            <p className="flex items-center gap-2">
              <span>⏰</span>
              <span>12:00 PM – 6:00 PM</span>
            </p>
            <p className="flex items-center gap-2">
              <span>📍</span>
              <span>{eventDetails.location}</span>
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <a
            href={generateGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button className="w-full bg-blue hover:bg-blue-light text-white font-semibold py-6 btn-lift">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.5 4h-3V2.5a.5.5 0 0 0-1 0V4h-7V2.5a.5.5 0 0 0-1 0V4h-3A2.5 2.5 0 0 0 2 6.5v13A2.5 2.5 0 0 0 4.5 22h15a2.5 2.5 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 19.5 4zM21 19.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5V10h18v9.5zM21 9H3V6.5A1.5 1.5 0 0 1 4.5 5h3v1a.5.5 0 0 0 1 0V5h7v1a.5.5 0 0 0 1 0V5h3A1.5 1.5 0 0 1 21 6.5V9z"/>
              </svg>
              Add to Google Calendar
            </Button>
          </a>

          <Button
            onClick={generateIcsFile}
            variant="outline"
            className="w-full border-navy text-navy hover:bg-navy hover:text-white font-semibold py-6 btn-lift"
          >
            <Download className="w-5 h-5 mr-2" />
            Download .ics File
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}



