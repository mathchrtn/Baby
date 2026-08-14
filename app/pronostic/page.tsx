export default function PronosticPage() {
  return (
    <main className="min-h-screen p-6">
      <h1>Faire mon pronostic</h1>

      <form className="flex flex-col gap-4 max-w-md">
        <input placeholder="Pseudo" />

        <select>
          <option>Fille</option>
          <option>Garçon</option>
        </select>

        <input type="date" />
        <input type="time" />
        <input type="number" placeholder="Poids (kg)" />
        <input type="number" placeholder="Taille (cm)" />

        <input placeholder="Première lettre du prénom" />

        <button type="submit">
          Valider
        </button>
      </form>
    </main>
  );
}