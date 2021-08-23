import Head from "next/head";
import Image from "next/image";
import "tailwindcss/tailwind.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/card";
import Footer from "./components/footer";
import Form from "./components/form";

export default function About() {
  return (
    <>
      <Header />
      <section className="flex items-center justify-center">
        <h1 className="text-5xl font-bold center">About</h1>
      </section>
      <Footer />
    </>
  );
}
