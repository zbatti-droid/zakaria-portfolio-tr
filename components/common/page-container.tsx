import React from "react";
import { ClientPageWrapper } from "./client-page-wrapper";
import PageHeader from "./page-header";

interface PageContainerProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function PageContainer({
  title,
  description,
  children,
}: PageContainerProps) {
  return (
    <ClientPageWrapper>
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <PageHeader title={title} description={description} />
        <div className="min-w-0 w-full">{children}</div>
      </div>
    </ClientPageWrapper>
  );
}
