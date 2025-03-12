import Navbar from "@/components/Navbar";
import { Link } from "react-router";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="w-full flex items-center justify-center py-16">
        <div className="bg-white w-full max-w-lg p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8">
            Créez votre Compte
          </h2>

          <form className="space-y-5">
            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nom d'utilisateur
              </label>
              <input
                type="text"
                className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Votre nom d'utilisateur"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Votre adresse email"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <input
                type="password"
                className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Votre mot de passe"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirmez le mot de passe
              </label>
              <input
                type="password"
                className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Confirmez votre mot de passe"
              />
            </div>

            {/* Nationality */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nationalité
              </label>
              <input
                type="text"
                className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Votre nationalité"
              />
            </div>

            {/* Organization Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Type d'organisation
              </label>
              <select className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="">Sélectionnez un type</option>
                <option value="École">École</option>
                <option value="Université">Université</option>
                <option value="Entreprise">Entreprise</option>
                <option value="Individuel">Individuel</option>
              </select>
            </div>

            {/* Organization Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nom de l'organisation
              </label>
              <input
                type="text"
                className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Nom de votre organisation"
              />
            </div>

            {/* Optional Score field as hidden or default (optional for register) */}
            {/* <input type="hidden" value="0" /> */}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-green-900 text-white rounded-lg text-lg font-semibold"
            >
              S'inscrire
            </button>
          </form>

          {/* Link to Login */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Vous avez déjà un compte ?{" "}
              <Link to="/login" className="text-green-800 font-semibold">
                Connectez-vous ici
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
