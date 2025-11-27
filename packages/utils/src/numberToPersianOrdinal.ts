export function numberToPersianOrdinal(num: number): string {
  if (num < 1 || num > 999) throw new Error("Number must be between 1 and 999");

  const ones: Record<number, string> = {
    0: "",
    1: "یک",
    2: "دو",
    3: "سه",
    4: "چهار",
    5: "پنج",
    6: "شش",
    7: "هفت",
    8: "هشت",
    9: "نه",
  };

  const tens: Record<number, string> = {
    10: "ده",
    11: "یازده",
    12: "دوازده",
    13: "سیزده",
    14: "چهارده",
    15: "پانزده",
    16: "شانزده",
    17: "هفده",
    18: "هجده",
    19: "نوزده",
    20: "بیست",
    30: "سی",
    40: "چهل",
    50: "پنجاه",
    60: "شصت",
    70: "هفتاد",
    80: "هشتاد",
    90: "نود",
  };

  const hundreds: Record<number, string> = {
    100: "صد",
    200: "دویست",
    300: "سیصد",
    400: "چهارصد",
    500: "پانصد",
    600: "ششصد",
    700: "هفتصد",
    800: "هشتصد",
    900: "نهصد",
  };

  const specialOrdinals: Record<number, string> = {
    1: "اول",
    2: "دوم",
    3: "سوم",
    4: "چهارم",
    5: "پنجم",
    6: "ششم",
    7: "هفتم",
    8: "هشتم",
    9: "نهم",
    10: "دهم",
    11: "یازدهم",
    12: "دوازدهم",
    13: "سیزدهم",
    14: "چهاردهم",
    15: "پانزدهم",
    16: "شانزدهم",
    17: "هفدهم",
    18: "هجدهم",
    19: "نوزدهم",
    20: "بیستم",
    30: "سی‌ام",
    40: "چهلم",
    50: "پنجاهم",
    60: "شصتم",
    70: "هفتادم",
    80: "هشتادم",
    90: "نودم",
    100: "صدم",
  };

  // Handle direct special ordinals
  if (specialOrdinals[num]) return specialOrdinals[num];

  const parts: string[] = [];

  // Hundreds part
  const h = Math.floor(num / 100) * 100;
  const remainderAfterHundreds = num % 100;

  if (h && hundreds[h]) parts.push(hundreds[h]);

  // Tens and ones part
  if (remainderAfterHundreds) {
    if (tens[remainderAfterHundreds]) {
      parts.push(tens[remainderAfterHundreds]);
    } else {
      const t = Math.floor(remainderAfterHundreds / 10) * 10;
      const o = remainderAfterHundreds % 10;
      if (t && tens[t]) parts.push(tens[t]);
      if (o && ones[o]) parts.push(ones[o]);
    }
  }

  const base = parts.join(" و ");

  // Add ordinal suffix intelligently
  const lastPartNum = num % 100;
  if (specialOrdinals[lastPartNum]) {
    // For composite numbers like 122 -> صد و بیست و دوم
    if (h)
      return `${parts.slice(0, -1).join(" و ")} و ${specialOrdinals[lastPartNum]}`;
    return specialOrdinals[lastPartNum];
  }

  // For regular ones that don't have special ordinals
  if (num % 10 === 0 || remainderAfterHundreds === 0) return `${base}م`;
  return `${base}م`;
}
