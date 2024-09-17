"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

// Fonction sleep pour simuler une pause
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Définir le composant TransitionLink
export const TransitionLink = ({ children, href, ...props }) => {
  const router = useRouter();

  const handleTransition = async (e) => {
    e.preventDefault(); // Empêcher le comportement par défaut du lien

    const body = document.querySelector("body");
    body?.classList.add("page-transition"); // Ajouter une classe pour la transition

    await sleep(500); // Pause de 500ms avant de naviguer
    router.push(href); // Utiliser router pour naviguer
    await sleep(500); // Pause de 500ms après la navigation

    body?.classList.remove("page-transition"); // Supprimer la classe après la transition
  };

  return (
    <Link {...props} href={href} onClick={handleTransition}>
      {children}
    </Link>
  );
};
