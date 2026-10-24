import { siteContent } from "@/content";
import { siteContentSchema } from "@/schemas/site";

function main() {
  const result = siteContentSchema.safeParse(siteContent);
  if (!result.success) {
    console.error(result.error.flatten());
    process.exit(1);
  }
  console.log("Content validation passed.");
}

main();
