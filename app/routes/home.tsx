import type { Route } from "./+types/home"
import { Welcome } from "../welcome/welcome"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "임송하 - 포트폴리오" },
    { name: "description", content: "Frond-end Developer Portfoilo" },
  ]
}

export default function Home() {
  return <Welcome />
}
