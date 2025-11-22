// packages/ui/components/Avatar.tsx
import * as React from "react";
import Image from "next/image";

interface AvatarProps {
  src?: string | null;
  name?: string;
  size?: number; // optional override
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  name = "",
  size = 40,
  className = "",
}) => {
  const initials = getInitials(name);

  return (
    <div
      className={`rounded-full bg-amber-300 flex items-center justify-center overflow-hidden text-white select-none ${className}`}
      style={{
        width: size,
        height: size,
        fontSize: size * 0.35,
      }}
    >
      {src ? (
        <Image
          src={src}
          alt={name}
          width={size}
          height={size}
          className="object-cover"
        />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
};

function getInitials(fullName: string = "") {
  if (!fullName.trim()) return "";

  const parts = fullName.trim().split(" ");
  const first = parts[0]?.[0] || "";
  const second = parts[1]?.[0] || "";

  return (first + second).toUpperCase();
}

export default Avatar;
