import { Menu } from "@/common/components/Menu";
import { commonMetadata } from "@/common/components/shared-metadata";

export const metadata = {
  title: `Contact ${commonMetadata.title}`,
  description: "this is contact page",
};

export default function ContactPage() {
  return (
    <div>
      <Menu />
      <h1>Contact</h1>
    </div>
  );
}
