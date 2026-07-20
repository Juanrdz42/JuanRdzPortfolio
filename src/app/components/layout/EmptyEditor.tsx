import { Coffee } from "lucide-react";

export function EmptyEditor() {
  return (
    <div className="grid h-full min-h-[360px] place-items-center px-6 text-center">
      <div className="flex flex-col items-center">
        <span className="mb-5 text-5xl" role="img" aria-label="Waving hand">
          👀
        </span>
        <h1 className="text-xl font-medium tracking-tight text-[#AFC3D6]">Nothing to see here</h1>
        <p className="mt-2 flex items-center gap-2 text-sm text-[#68839B]">
          Open a file from the sidebar to keep exploring.
        </p>
      </div>
    </div>
  );
}
