export default function Footer() {
  return (
    <footer className="py-6 px-4 sm:px-6 lg:px-8 bg-card border-t mt-12">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} SummaryFlash. All rights reserved.</p>
      </div>
    </footer>
  );
}
