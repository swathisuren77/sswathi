import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const OUTPUT_SIZE = 5000;
// Use your actual image path here
const UPLOAD_URL = "swathi-profile.jpg";

const AvatarExport = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = OUTPUT_SIZE;
      canvas.height = OUTPUT_SIZE;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Fill white background
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, OUTPUT_SIZE, OUTPUT_SIZE);

      // Calculate scale to fit the image fully inside the square (no cropping)
      const scale = Math.min(
        OUTPUT_SIZE / img.naturalWidth,
        OUTPUT_SIZE / img.naturalHeight
      );

      const targetW = Math.round(img.naturalWidth * scale);
      const targetH = Math.round(img.naturalHeight * scale);

      // Center the image in the square
      const dx = Math.round((OUTPUT_SIZE - targetW) / 2);
      const dy = Math.round((OUTPUT_SIZE - targetH) / 2);

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, dx, dy, targetW, targetH);

      const url = canvas.toDataURL("image/png", 1.0);
      setPreviewUrl(url);
      setReady(true);
    };
    img.onerror = () => setReady(false);
    img.src = UPLOAD_URL;
  }, []);

  const handleDownload = () => {
    if (!canvasRef.current) return;
    const url = canvasRef.current.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = "profile-avatar-1200.png";
    a.click();
  };

  return (
    <main className="container mx-auto px-10 py-10">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold">Avatar Export (1200×1200 PNG)</h1>
        <p className="text-muted-foreground">
          Your portrait is fully fit inside a square, centered, with a white background.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 items-start">
        <article>
          <canvas
            ref={canvasRef}
            className="w-[600px] h-[800px] rounded-lg border border-border"
          />
        </article>
        <article className="space-y-4">
          {previewUrl && (
            <img
              src={previewUrl}
              alt="Processed 1200x1200 avatar"
              className="w-[600px] h-[800px] rounded-lg border border-border"
            />
          )}
          <div className="flex gap-3">
            <Button size="lg" onClick={handleDownload} disabled={!ready}>
              Download 1200×1200 PNG
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            This square PNG fits your entire portrait with no cropping.
          </p>
        </article>
      </section>
    </main>
  );
};

export default AvatarExport;
