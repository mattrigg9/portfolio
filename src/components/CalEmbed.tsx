"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const NAMESPACE = "30min";

export default function CalEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: NAMESPACE });
      cal("ui", {
        hideEventTypeDetails: true,
        layout: "month_view",
        theme: "light",
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#404079",
          },
          dark: {
            "cal-brand": "#6e3b9d",
          },
        },
      });
    })();
  }, []);

  return (
    <Cal
      namespace={NAMESPACE}
      calLink="mattrigg/30min"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view", theme: "light", useSlotsViewOnSmallScreen: "true" }}
    />
  );
}
