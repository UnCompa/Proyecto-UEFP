import { useEffect } from "react";
export default function Link({ to, children, text, disable }) {
  useEffect(() => {
    const userDataRoles = async () => {
      const { data } = await supabase.auth.setSession({
        refresh_token: refreshToken.value,
        access_token: accessToken.value,
      });
      const { data: userData } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", data.user?.id);
      const roles = (userData && userData[0]?.roles) || [];

      if (!roles.includes("admin") && !roles.includes("dev")) {
        // Si el usuario no tiene los roles "admin" ni "dev", redirige a /es/dashboard
        return redirect("/es/dashboard");
      }
    };
    userDataRoles();
  }, []);

  return (
    <>
      {disable ? (
        <button
          className={`flex font-light items-center gap-x-2 text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 rounded w-full px-4 py-2 transition-all`}
        >
          {children}
          <p>{text}</p>
        </button>
      ) : (
        <a
          href={to}
          className={`flex font-light items-center gap-x-2 text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 rounded w-full px-4 py-2 transition-all`}
        >
          {children}
          <p>{text}</p>
        </a>
      )}
    </>
  );
}
