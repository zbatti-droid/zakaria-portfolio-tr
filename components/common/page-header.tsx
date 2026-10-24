interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <>
      <header className="mt-5 flex min-w-0 flex-col items-start gap-3 sm:gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="min-w-0 flex-1 space-y-3 sm:space-y-4">
          <h1 className="break-words font-heading text-3xl leading-tight tracking-tight capitalize sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        </div>
      </header>
      <hr className="my-5 sm:my-6" />
    </>
  );
}
