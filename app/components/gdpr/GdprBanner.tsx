// components/gdpr/GdprBanner.tsx
import { Form } from "@remix-run/react";

interface GdprBannerProps {
  showGdprBanner: boolean;
}

export default function GdprBanner({ showGdprBanner }: GdprBannerProps) {
  if (!showGdprBanner) return null;

  return (
    <div className="cookie-container" 
      style={{
        position: "fixed",
        bottom: 0,
      }}
    >
      {/* Reload the document to be able to enable the tracking script on the root */}
      <Form method="post" reloadDocument>
        We use Cookies...
        <button name="accept-gdpr" value="true" type="submit" className="cookie-consent-button">
          Accept
        </button>
      </Form>
    </div>
  );
}
