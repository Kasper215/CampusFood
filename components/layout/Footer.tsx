import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border mt-80">
      <Container>
        <div className="py-12">
          <p className="text-small text-text-secondary">
            © 2024 CampusFood. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
