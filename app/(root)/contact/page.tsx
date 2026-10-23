import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import ContactCard from "@/components/contact/contact-card";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
};

export default function ContactPage() {
  return (
    <PageContainer
      title={pagesConfig.contact.title}
      description={pagesConfig.contact.description}
    >
      <div className="mx-auto flex w-full max-w-xl justify-center pb-8">
        <ContactCard />
      </div>
    </PageContainer>
  );
}
