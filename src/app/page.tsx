"use client";

import { Button } from "@/components/shadcn";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Button>Button</Button>
      <Button disabled>Button</Button>
      <Button variant="outline">Button</Button>
      <Button variant="outline" disabled>
        Button
      </Button>
      <Button variant="link">Button</Button>
      <Button variant="link" disabled>
        Button
      </Button>
      <Button variant="link-boldy">Button</Button>
      <Button variant="link-boldy" disabled>
        Button
      </Button>
    </div>
  );
}
