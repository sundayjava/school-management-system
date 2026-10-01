import { Container } from "@/components/ui/container";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="border-border bg-surface-muted border-b py-16 sm:py-20">
      <Container>
        {eyebrow && (
          <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold tracking-wide uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="text-foreground mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="text-text-muted mt-4 max-w-2xl text-base leading-7">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
