import { Menu } from "@/common/components/Menu";

export function generateMetadata() {
  return { title: "Team", description: "this is team page" };
}

export default function TeamPage() {
  return (
    <div>
      <Menu />
      <h1>Team</h1>
    </div>
  );
}
