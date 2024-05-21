import dynamic from "next/dynamic";

const App = dynamic(() => import("../src/App"), { ssr: false });

export function generateStaticParams() {
  return [{ slug: [""] }];
}

export default function Page() {
  return <App />; // We'll update this
}
