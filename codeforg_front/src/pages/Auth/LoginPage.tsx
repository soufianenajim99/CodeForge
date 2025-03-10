import { LoginForm } from "@/components/LoginForm";
import Navbar from "@/components/Navbar";
import React from "react";
import { Link } from "react-router";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Sign In Form */}
      <div className="w-full flex items-center justify-center py-16">
        <div className="bg-white w-96 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Connexion</h2>

          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Votre email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Mot de Passe
              </label>
              <input
                type="password"
                className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Votre mot de passe"
              />
            </div>

            <button className="w-full py-3 bg-green-900 text-white rounded-lg text-lg font-semibold">
              Se connecter
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Pas encore de compte ?{" "}
              <Link to="/register" className="text-green-800">
                Inscrivez-vous ici
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
