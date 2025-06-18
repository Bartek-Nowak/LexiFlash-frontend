# LexiFlash

Aplikacja do nauki języków oparta na fiszkach i systemie powtórek.

## 🚀 Funkcjonalności

- Kategorie i własne zestawy fiszek
- Algorytm powtórek oparty na metodzie Leitnera
- Statystyki postępów w nauce

## 🛠️ Technologie

- Vue 3 + Composition API
- Pinia (zarządzanie stanem)
- Vue Router (routing)
- TailwindCSS (styling)
- Axios (komunikacja z API)
- ECharts (wykresy/statystyki)
- vue-i18n (internacjonalizacja)

## 💻 Uruchamianie lokalne

1. Zainstaluj zależności:
   ```bash
   npm install
   ```
2. Uruchom backend JSON Server (mock API):
   ```bash
   npm run json-server
   ```
3. W innym terminalu uruchom frontend:
   ```bash
   npm run dev
   ```
4. Lub oba jednocześnie:
   ```bash
   npm run dev:all
   ```

## 📦 Budowanie produkcyjne

```bash
npm run build
```
