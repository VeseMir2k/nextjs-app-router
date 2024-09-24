import { Menu } from "@/common/components/Menu";
import { commonMetadata } from "@/common/components/shared-metadata";

export const metadata = {
  title: `Main page ${commonMetadata.title}`,
  description: "this is main page",
};

export default function MainPage() {
  return (
    <div>
      <Menu />
      <h1>Main Page</h1>
    </div>
  );
}
