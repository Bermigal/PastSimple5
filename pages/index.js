import React from 'react';
import Layout from "../components/Layout";
import { Button } from "../components/ui/button";

export default function MainMenu() {
  return (
    <Layout>
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">📚 Top Berman English – זה קל</h1>
      <div className="grid gap-3 sm:gap-4 max-w-md mx-auto">
        <Button onClick={() => window.location.href = '/vocabulary-practice'} className="rounded-full bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg py-2">
          תרגול אוצר מילים
        </Button>
        <Button onClick={() => window.location.href = '/vocabulary-quiz'} className="rounded-full bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg py-2">
          בחינת אוצר מילים
        </Button>
        <Button onClick={() => window.location.href = '/past-verbs-practice'} className="rounded-full bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg py-2">
          תרגול פעלים בצורת עבר
        </Button>
        <Button onClick={() => window.location.href = '/past-verbs-quiz'} className="rounded-full bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg py-2">
          בחינת פעלים בצורת עבר
        </Button>
        <Button onClick={() => window.location.href = '/past-simple-rules'} className="rounded-full bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg py-2">
          הסבר על חוקי עבר פשוט
        </Button>
        <Button onClick={() => window.location.href = '/past-simple-simulation'} className="rounded-full bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg py-2">
          תרגול משולב: פעלים בעבר
        </Button>
        <Button onClick={() => window.location.href = '/past-negative-practice'} className="rounded-full bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg py-2">
          תרגול שלילה בעבר פשוט
        </Button>
      </div>
    </Layout>
  );
}
