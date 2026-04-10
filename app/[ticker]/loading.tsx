import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingTickerPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-6 px-6 pb-20 pt-10 lg:px-10">
      <Card>
        <CardContent className="space-y-5 p-8">
          <Skeleton className="h-6 w-36" />
          <Skeleton className="h-16 w-80" />
          <Skeleton className="h-8 w-full max-w-3xl" />
          <Skeleton className="h-8 w-64" />
        </CardContent>
      </Card>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <Card key={index}>
            <CardContent className="space-y-4">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-4 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
      <Card>
        <CardContent className="space-y-4">
          <Skeleton className="h-5 w-44" />
          <Skeleton className="h-8 w-72" />
          <Skeleton className="h-64 w-full" />
        </CardContent>
      </Card>
    </div>
  );
}
