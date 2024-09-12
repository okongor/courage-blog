import { getSettings } from "@/lib/sanity/client";
import Contact from "./contact";

export default async function ContactPage() {
  const settings = await getSettings();
  return <Contact settings={settings} />;
}

// export const revalidate = 60;
//take me now for i have nothing