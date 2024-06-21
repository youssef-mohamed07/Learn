import BarGraphSection from "../components/BarGraphSection";
import LessonSection from "../components/LessonSection";
import MeetingSection from "../components/MeetingSection";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <SessionProvider session={session}>
      <BarGraphSection />
      <LessonSection />
      <MeetingSection />
    </SessionProvider>
  );
}
