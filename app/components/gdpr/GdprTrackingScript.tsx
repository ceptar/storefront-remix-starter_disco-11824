// components/GdprTrackingScript.tsx
interface GdprTrackingScriptProps {
    track: boolean;
  }
  
  export default function GdprTrackingScript({ track }: GdprTrackingScriptProps) {
    if (!track) return null;
  
    return (
      <>
        {/* Replace the src with your actual analytics script */}
        <script src="/dummy-analytics-script.ts"></script>
      </>
    );
  }