import { ImagePlus } from 'lucide-react';
export function Placeholder({ label, className='' }: { label: string; className?: string }) {
 return <div className={`flex min-h-40 items-center justify-center rounded-3xl border-2 border-dashed border-orange-300 bg-orange-50/70 p-6 text-center text-orange-900 dark:border-orange-700 dark:bg-orange-950/30 dark:text-orange-100 ${className}`}><div><ImagePlus className="mx-auto mb-3"/><strong>{label}</strong><p className="text-sm">Replace from Founder Portal → Media Library / Firebase Storage.</p></div></div>;
}
