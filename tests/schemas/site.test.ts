import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { siteContentSchema } from "@/schemas/site";
import { siteContent } from "@/content";

describe("site content schema", () => {
  it("parses diamond valley content", () => {
    const result = siteContentSchema.safeParse(siteContent);
    assert.equal(result.success, true);
  });
});
