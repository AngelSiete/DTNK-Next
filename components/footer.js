import Socials from "./socials";

export default function Footer() {
  return (
    <>
      <div className="w-full text-center text-slate-50 mb-4 flex justify-center">
        <p className="w-60 md:w-full text-center">
          Ditilenko® 2024 - Todos los derechos reservados
        </p>
      </div>
      <Socials classes="w-60 text-center flex justify-center m-auto mb-4" classWidth="w-5" />
    </>
  );
}
