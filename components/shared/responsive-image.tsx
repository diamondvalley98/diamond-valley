import Image from "next/image";
import { cn } from "@/lib/utils";
import type { MediaAsset } from "@/types";

type ResponsiveImageProps = {
  media: MediaAsset;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
};

export function ResponsiveImage({
  media,
  className,
  imageClassName,
  priority,
  sizes = "(max-width: 768px) 100vw, 50vw",
  fill,
}: ResponsiveImageProps) {
  if (fill) {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        <Image
          src={media.src}
          alt={media.alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn("object-cover", imageClassName)}
          placeholder={media.blurDataURL ? "blur" : "empty"}
          blurDataURL={media.blurDataURL}
        />
      </div>
    );
  }

  return (
    <div className={cn("overflow-hidden", className)}>
      <Image
        src={media.src}
        alt={media.alt}
        width={media.width ?? 1200}
        height={media.height ?? 900}
        priority={priority}
        sizes={sizes}
        className={cn("h-auto w-full object-cover", imageClassName)}
        placeholder={media.blurDataURL ? "blur" : "empty"}
        blurDataURL={media.blurDataURL}
      />
    </div>
  );
}
