"use client";
import Link from "next/link";
import { signUp } from "@/api/auth";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        email: e.target.email.value,
        phoneNumber: e.target.phoneNumber.value,
        password: e.target.password.value,
        confirmPassword: e.target.confirmPassword.value,
      };

      const response = await signUp(formData);
      console.log(response);
      if (response.success) {
        alert("Sikeres regisztráció!");
        router.push("/auth/login");
      }


    } catch (error) {
      console.error("Regisztrációs hiba:", error.response?.data?.message || error.message);
      alert("Sikertelen regisztráció!:" + error.response?.data?.message || error.message);
    }
  };

  return (
    <>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-[#4b778e] mb-2">
          Regisztráció
        </h2>
        <p className="text-gray-600">Hozza létre fiókját</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="lastName"
            placeholder="Vezetéknév"
            className="w-full h-[50px] px-6 rounded-lg border border-[#89BBD6]/30 focus:border-[#4b778e] outline-none text-lg transition-colors bg-white/50"
            required
          />
          <input
            type="text"
            name="firstName"
            placeholder="Keresztnév"
            className="w-full h-[50px] px-6 rounded-lg border border-[#89BBD6]/30 focus:border-[#4b778e] outline-none text-lg transition-colors bg-white/50"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email cím"
            className="w-full h-[50px] px-6 rounded-lg border border-[#89BBD6]/30 focus:border-[#4b778e] outline-none text-lg transition-colors bg-white/50"
            required
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Telefonszám"
            className="w-full h-[50px] px-6 rounded-lg border border-[#89BBD6]/30 focus:border-[#4b778e] outline-none text-lg transition-colors bg-white/50"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="password"
            placeholder="Jelszó"
            name="password"
            className="w-full h-[50px] px-6 rounded-lg border border-[#89BBD6]/30 focus:border-[#4b778e] outline-none text-lg transition-colors bg-white/50"
            required
          />
          <input
            type="password"
            placeholder="Jelszó megerősítése"
            name="confirmPassword"
            className="w-full h-[50px] px-6 rounded-lg border border-[#89BBD6]/30 focus:border-[#4b778e] outline-none text-lg transition-colors bg-white/50"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full h-[50px] rounded-lg relative overflow-hidden group"
        >
          <div className="absolute inset-0 w-full h-full transition-all duration-300 bg-gradient-to-r from-[#4b778e] via-[#89BBD6] to-[#4b778e] group-hover:opacity-90"></div>
          <span className="relative text-white text-lg font-medium">
            Regisztráció
          </span>
        </button>
      </form>

      <div className="mt-6 text-center text-sm">
        <p className="text-gray-600">
          Már van fiókja?{" "}
          <Link
            href="/auth/login"
            className="text-[#4b778e] hover:text-[#89BBD6]"
          >
            Jelentkezzen be
          </Link>
        </p>
      </div>
    </>
  );
}
