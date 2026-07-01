// "use client";

// import { ThemeProvider } from "next-themes";
// import { useEffect, useState } from "react";

// export default function Providers({ children }: { children: React.ReactNode }) {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     // eslint-disable-next-line react-hooks/set-state-in-effect
//     setMounted(true);
//   }, []);
//   if (!mounted) {
//     return <>{children}</>;
//   }

//   return (
//     <ThemeProvider 
//       attribute="class" 
//       defaultTheme="system" 
//       enableSystem
//       disableTransitionOnChange
//     >
//       {children}
//     </ThemeProvider>
//   );
// }
"use client";

import { ThemeProvider } from "next-themes";
import * as React from "react";

// 💡 React 19 / Next 16 ရဲ့ next-themes အပေါ်ပြနေသော False-positive Warning ကြီးကို ဖျောက်ရန် Interceptor ခံခြင်း
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  const orig = console.error;
  console.error = (...args: unknown[]) => {
    if (typeof args[0] === "string" && args[0].includes("Encountered a script tag")) return;
    orig.apply(console, args);
  };
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="system" 
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}