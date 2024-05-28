import { ToolboxNavigation } from "@/components/ToolboxNavigation";
import { MoviePickerPage } from "@/components/component/movie-picker-page";

export default function MoviePicker() {
  return (
    <>
      <ToolboxNavigation />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <MoviePickerPage />
      </main>
    </>
  );
}
